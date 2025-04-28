import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { Card, Modal, Row, Spinner, ProgressBar, Alert } from "react-bootstrap";
import CloudUpload from "../Icons/CloudUpload";
import styled from "styled-components";
import ButtonCancel from "../Button/ButtonCancel";
import { DFlex } from "@app/styled/flex.styled";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { notificationTemplate } from "@app/helper/notificationTemplate";
import { addNotification } from "@app/store/notification/notification.action";
import { importFile } from "@app/services/import.service";
import axios from "axios";
import FileExcelIcon from "../Icons/FileExcelIcon";
import ExcelIcon from "../Icons/ExcelIcon";
import { reloadingData } from "@app/store/reducers/app";
import { useNavigate } from "react-router-dom";
import { DocumentUploadImageIcon } from "../Icons/BukuIndukPenduduk";
import * as XLSX from "xlsx";
import { API_PATH } from "@app/services/_path.service";

const ModalImportFile = styled(Modal)`
  .modal-container {
    maxwidth: 34.375rem;
  }
`;

const ModalTitle = styled(Modal.Title)`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
`;

const DragArea = styled.div`
  background: rgba(1, 204, 143, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px dashed var(--primary);
  border-radius: 7px;
  cursor: pointer;
  height: 200px;
  position: relative;

  h6 {
    font-weight: 600;
  }

  &.loading {
    opacity: 0.7;
    pointer-events: none;
  }
`;

const ResultContainer = styled.div`
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
`;

const ProgressContainer = styled.div`
  margin: 1rem 0;
`;

type Props = {
  modalProps: any;
  path?: string;
  accept?: string;
  templatePath?: string;
};

interface UploadResult {
  success: number;
  failed: number;
  total: number;
  currentProgress: number;
}

const ModalImportBukuIndukPenduduk: FC<Props> = ({
  modalProps,
  path,
  accept = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  templatePath,
}) => {
  const [loading, setLoading] = useState(false);
  const [converting, setConverting] = useState(false);
  const [modal, setModal] = useState<any>({
    approved: false,
    size: "md",
  });
  const [fileImport, setFileImport] = useState<any | null>(null);
  const [jsonData, setJsonData] = useState<any[] | null>(null);
  const [uploadResult, setUploadResult] = useState<UploadResult>({
    success: 0,
    failed: 0,
    total: 0,
    currentProgress: 0,
  });
  const [eventSource, setEventSource] = useState<EventSource | null>(null);
  const refUploadButton = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const source = axios.CancelToken.source();
  const { workspace } = useSelector((state: any) => state.app);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [eventSource]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleGoToImportOcr = () => {
    setPage(0);
    navigate("import-kartu-keluarga");
  };

  useEffect(() => {
    setModal({ ...modalProps });
  }, [modalProps]);

  const modalClose = () => {
    setPage(0);
    setModal({ ...modal, show: false });
    setJsonData(null);
    setFileImport(null);
    setUploadResult({
      success: 0,
      failed: 0,
      total: 0,
      currentProgress: 0,
    });
    if (eventSource) {
      eventSource.close();
      setEventSource(null);
    }
  };

  const convertExcelToJson = (file: File): Promise<any[]> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          const workbook = XLSX.read(data, { type: "array" });
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];

          const allData = XLSX.utils.sheet_to_json(worksheet, {
            header: [
              "no",
              "nik",
              "nama_lengkap",
              "nama_panggilan",
              "jenis_kelamin",
              "agama",
              "golongan_darah",
              "pendidikan_terakhir",
              "pekerjaan",
              "no_telepon_hp",
              "alamat_rumah",
              "rt",
              "rw",
              "dusun",
              "dapat_membaca_huruf",
              "kewarganegaraan",
              "tempat_dilahirkan",
              "tempat_lahir",
              "tanggal_lahir",
              "anak_ke",
              "nomor_akta_kelahiran",
              "tanggal_akta_kelahiran",
              "nomor_kk",
              "kedudukan_dalam_keluarga",
              "nik_ibu_kandung",
              "nama_ibu_kandung",
              "nik_ayah_kandung",
              "nama_ayah_kandung",
              "status_perkawinan",
            ],
            range: 2,
            raw: true,
            dateNF: "yyyy-mm-dd",
            defval: "",
          });

          const filteredData = allData.filter((row: any) => {
            return (
              row.nama_lengkap &&
              !row.nama_lengkap.includes("Wajib Diisi") &&
              !row.nama_lengkap.includes("Tidak Wajib Diisi")
            );
          });

          const transformedData = filteredData.map((row: any) => {
            const formatDate = (dateValue: any) => {
              if (!dateValue) return "";
              if (typeof dateValue === "string") {
                if (dateValue.includes(" 00:00:00")) {
                  return dateValue.split(" ")[0];
                }
                return dateValue;
              }
              if (typeof dateValue === "number") {
                const date = XLSX.SSF.parse_date_code(dateValue);
                return `${date.y}-${String(date.m).padStart(2, "0")}-${String(
                  date.d
                ).padStart(2, "0")}`;
              }
              return dateValue.toString();
            };

            return {
              kelahiran: {
                nomor_kk: row.nomor_kk || "",
                akta_kelahiran: "",
                anak_ke: row.anak_ke?.toString() || "",
                berat_bayi: 0,
                jam_lahir: "",
                jenis_kelahiran: "",
                kedudukan_dalam_keluarga: row.kedudukan_dalam_keluarga || "",
                nama_ayah_kandung: row.nama_ayah_kandung || "",
                nama_ibu_kandung: row.nama_ibu_kandung || "",
                nik_ayah_kandung: row.nik_ayah_kandung || "",
                nik_ibu_kandung: row.nik_ibu_kandung || "",
                nomor_akta_kelahiran: row.nomor_akta_kelahiran || "",
                panjang_bayi: 0,
                penolong_kelahiran: "",
                tanggal_akta_kelahiran: formatDate(row.tanggal_akta_kelahiran),
                tanggal_diterbitkan_ktp: "",
                tanggal_lahir: formatDate(row.tanggal_lahir),
                tempat_dilahirkan: row.tempat_dilahirkan || "",
                tempat_diterbitkan_ktp: "",
                tempat_lahir: row.tempat_lahir || "",
                waktu_lahir: "",
              },
              kematian: {
                akta_kematian: "",
                desa_kelurahan: "",
                jam_kematian: "",
                kabupaten_kota: "",
                kecamatan: "",
                nomor_akta_kematian: "",
                provinsi: "",
                sebab_kematian: "",
                tanggal_akta_kematian: "",
                tanggal_kematian: "",
                tempat_kematian: "",
                umur_saat_meninggal: 0,
                waktu_kematian: "",
                yang_mengabarkan_kematian: "",
              },
              lain_lain: {
                cacat_fisik: "",
                cacat_mental: "",
                jenis_penyandang_cacat: "",
                kelainan: "",
                keterangan: "",
                pendapatan_per_bulan: 0,
              },
              nikah_cerai: {
                akta_perceraian: "",
                akta_perkawinan: "",
                lokasi_perceraian: "",
                lokasi_perkawinan: "",
                nomor_akta_perceraian: "",
                nomor_akta_perkawinan: "",
                status_perkawinan: row.status_perkawinan || "",
                tanggal_perceraian: "",
                tanggal_perkawinan: "",
              },
              umum: {
                nik: row.nik || "",
                agama: row.agama || "",
                alamat_rumah: row.alamat_rumah || "",
                dapat_membaca_huruf: row.dapat_membaca_huruf || "",
                datang_ke: "",
                datang_tanggal: "",
                desa_kelurahan: row.dusun || "",
                dusun: "",
                golongan_darah: row.golongan_darah || "",
                jenis_kelamin: row.jenis_kelamin || "",
                jenis_perubahan: "",
                kampung: "",
                kategori_umur: "",
                kebangsaan: "",
                kewarganegaraan: row.kewarganegaraan || "",
                nama_lengkap: row.nama_lengkap || "",
                nama_panggilan: row.nama_panggilan || "",
                no_telepon_hp: row.no_telepon_hp || "",
                pekerjaan: row.pekerjaan || "",
                penambahan: "",
                pendidikan_terakhir: row.pendidikan_terakhir || "",
                pengurangan: "",
                pergi_ke: "",
                pergi_tanggal: "",
                rt: row.rt || "",
                rw: row.rw || "",
                suku: "",
                umur: "",
                no_kitap: "",
                no_paspor: "",
              },
            };
          });

          console.log("Transformed Data:", transformedData);
          resolve(transformedData);
        } catch (error) {
          console.error("Conversion Error:", error);
          reject(
            new Error(
              "Gagal memproses file Excel. Pastikan format file sesuai template."
            )
          );
        }
      };

      reader.onerror = (error) => {
        console.error("File Reading Error:", error);
        reject(new Error("Gagal membaca file. Pastikan file tidak corrupt."));
      };

      reader.readAsArrayBuffer(file);
    });
  };

  const handleUpload = async () => {
    if (!jsonData) {
      dispatchNotification(
        `Harap konversi file Excel ke JSON terlebih dahulu`,
        "danger"
      );
      return;
    }

    setLoading(true);
    setUploadResult({
      success: 0,
      failed: 0,
      total: jsonData.length,
      currentProgress: 0,
    });

    try {
      const response = await axios.post(
        `${API_PATH().form.administrasi.bukuIndukPenduduk}/add-multiple`,
        jsonData,
        {
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              );
              setUploadResult((prev) => ({
                ...prev,
                currentProgress: progress,
              }));
            }
          },
        }
      );

      if (response.data) {
        setUploadResult((prev) => ({
          ...prev,
          success: response.data.success || prev.total,
          failed: response.data.failed || 0,
          currentProgress: 100,
        }));
      }

      dispatchNotification(`Proses upload selesai`, "success");
      dispatchReloadData();
    } catch (err: any) {
      dispatchNotification(
        `Gagal mengupload data: ${err.response?.data?.message || err.message}`,
        "danger"
      );
      setUploadResult((prev) => ({
        ...prev,
        failed: prev.total,
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleSelectFile = async (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setConverting(true);

      try {
        const jsonResult = await convertExcelToJson(file);
        setJsonData(jsonResult);

        const reader: any = new FileReader();
        reader.onload = () => {
          setFileImport({
            base64: reader.result,
            file: file,
          });
        };
        reader.readAsDataURL(file);
      } catch (error) {
        dispatchNotification(
          `Gagal mengkonversi file Excel: ${error}`,
          "danger"
        );
      } finally {
        setConverting(false);
      }
    }
  };

  const getFilename = useMemo(() => {
    return fileImport ? fileImport?.file?.name : "";
  }, [fileImport]);

  const dispatchNotification = (msg: string = "", type: string = "") => {
    const notification = notificationTemplate(msg, type);
    dispatch(addNotification({ ...notification, message: msg, type: type }));
  };

  const dispatchReloadData = () => {
    dispatch(reloadingData(true));
  };

  const progressPercentage = useMemo(() => {
    if (uploadResult.total === 0) return 0;
    const calculated = Math.round(
      (uploadResult.currentProgress / uploadResult.total) * 100
    );
    return Math.min(calculated, 100);
  }, [uploadResult]);

  const safeProgressPercentage = useMemo(() => {
    if (uploadResult.total === 0) return 0;
    const progress = Math.min(uploadResult.currentProgress, uploadResult.total);
    return Math.round((progress / uploadResult.total) * 100);
  }, [uploadResult]);

  return (
    <ModalImportFile
      centered
      backdrop="static"
      keyboard={false}
      size={modal.size || "md"}
      show={modal.show}
      onHide={modalClose}
      dialogClassName="modal-container"
    >
      <Modal.Body className="p-4 pt-3">
        <Modal.Header closeButton className="p-0" />
        <ModalTitle className="mb-3">Import File</ModalTitle>

        <div className={`${page === 0 ? "d-block" : "d-none"}`}>
          <h5 className="fw-bold mb-1">Import Data Anda</h5>
          <p className="mb-4">
            Silakan import data anda melalui button dibawah ini
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3 mx-auto">
            <DocumentUploadTypeSelectItem onClick={handleNextPage}>
              <DocumentUploadImageIcon />
              <DocumentUploadTypeSelectItemTitle>
                Import Data Excel
              </DocumentUploadTypeSelectItemTitle>
              <DocumentUploadTypeSelectItemSubtitle>
                Import data secara masal dengan format file .xls
              </DocumentUploadTypeSelectItemSubtitle>
            </DocumentUploadTypeSelectItem>
          </div>
        </div>

        <div className={`${page === 1 ? "d-block" : "d-none"}`}>
          <Row className="mb-3">
            <DragArea
              className={`py-3 ${converting ? "loading" : ""}`}
              onClick={() => refUploadButton.current?.click()}
            >
              {converting ? (
                <div className="d-flex flex-column align-items-center">
                  <Spinner
                    animation="border"
                    variant="primary"
                    className="mb-2"
                  />
                  <span>Mengkonversi file...</span>
                </div>
              ) : fileImport ? (
                <>
                  <FileExcelIcon />
                  <h6>{getFilename}</h6>
                  <small className="text-muted">
                    {jsonData?.length} data siap diimport
                  </small>
                </>
              ) : (
                <>
                  <CloudUpload />
                  <h6>Import Document Anda Disini</h6>
                </>
              )}
              <input
                ref={refUploadButton}
                onChange={handleSelectFile}
                type="file"
                accept={accept}
                hidden
              />
            </DragArea>
          </Row>

          {templatePath && (
            <Row className="mb-3">
              <Card className="col-12 p-2 mb-2">
                <DFlex className="justify-content-between align-items-center">
                  <DFlex className="align-items-center">
                    <ExcelIcon />
                    <h6 className="m-0 ms-2">Contoh Format import.xls</h6>
                  </DFlex>
                  <a
                    className="text-primary fw-bolder"
                    href={templatePath}
                    download
                  >
                    Download
                  </a>
                </DFlex>
              </Card>
            </Row>
          )}

          {/* Progress Bar dan Hasil Upload */}
          {(loading || uploadResult.total > 0) && (
            <ResultContainer>
              <ProgressContainer>
                <div className="d-flex justify-content-between mb-1">
                  <span>Progress</span>
                  <span>{progressPercentage}%</span>
                </div>
                <ProgressBar
                  now={progressPercentage > 100 ? 100 : progressPercentage}
                  label={`${
                    progressPercentage > 100 ? 100 : progressPercentage
                  }%`}
                  animated
                />
              </ProgressContainer>

              <div className="d-flex justify-content-between">
                <Alert variant="success" className="p-2 flex-grow-1 me-2">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold me-2">✓</span>
                    <span>Berhasil: {uploadResult.success}</span>
                  </div>
                </Alert>
                <Alert variant="danger" className="p-2 flex-grow-1">
                  <div className="d-flex align-items-center">
                    <span className="fw-bold me-2">✗</span>
                    <span>Gagal: {uploadResult.failed}</span>
                  </div>
                </Alert>
              </div>

              <div className="text-center mt-2">
                <small className="text-muted">
                  Diproses: {uploadResult.currentProgress} dari{" "}
                  {uploadResult.total}
                </small>
              </div>
            </ResultContainer>
          )}

          <Row>
            <div className="d-flex justify-content-center align-items-center">
              <ButtonCancel onClick={modalClose} disabled={loading} />
              <Button
                type="submit"
                variant="primary btn-submit"
                isLoading={loading}
                disabled={!jsonData || converting || loading}
                onClick={handleUpload}
              >
                {loading ? "Mengupload..." : "Upload"}
              </Button>
            </div>
          </Row>
        </div>
      </Modal.Body>
    </ModalImportFile>
  );
};

const DocumentUploadTypeSelectItem = styled.div<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid;
  border-color: ${(props) =>
    props.active ? "var(--primary)" : "var(--black-100)"};
  border-radius: 0.5rem;
  padding: 2rem 1rem;
  width: 20rem;
  cursor: pointer;

  &:hover {
    border-color: var(--primary);
  }
`;

const DocumentUploadTypeSelectItemTitle = styled.h6`
  font-weight: 600;
  margin-bottom: 0.85rem;
`;

const DocumentUploadTypeSelectItemSubtitle = styled.span`
  color: var(--black-600);
`;

export default ModalImportBukuIndukPenduduk;
