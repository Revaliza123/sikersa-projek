import { Button, LazyImage } from "@app/components";
import {
  DocumentUploadIcon,
  DocumentUploadPaperIcon,
  DocumentUploadSuccessIllustration,
} from "@app/components/Icons/BukuIndukPenduduk";
import ChevronRightIcon from "@app/components/Icons/ChevronRightIcon";
import TrashIcon from "@app/components/Icons/TrashIcon";
import FormInputControl from "@app/components/Input/FormInputControl";
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic";
import TextHelper from "@app/components/Tooltip/TextHelper";
import {
  MASTER_DATA_AGAMA_REGEX,
  MASTER_DATA_GOLONGAN_DARAH_LIST,
  MASTER_DATA_JENIS_KELAMIN_REGEX,
  MASTER_DATA_KEDUDUKAN_DALAM_KELUARGA_REGEX,
  MASTER_DATA_KEWARGANEGARAAN_REGEX,
  MASTER_DATA_PENDIDIKAN_LIST,
  MASTER_DATA_PENDIDIKAN_REGEX,
  MASTER_DATA_STATUS_PERKAWINAN_REGEX,
  TANGGAL_REGEX,
} from "@app/config/data-validation.config";
import { useNotification } from "@app/hooks/notification.hooks";
import { API_PATH } from "@app/services/_path.service";
import requestApi from "@app/services/api.service";
import {
  Card,
  CardBody,
  CardHeader,
  CardSeparator,
  CardStepIndicator,
  CardTitle,
} from "@app/styled/card.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import moment from "moment";
import React, { useMemo, useRef, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend, NativeTypes } from "react-dnd-html5-backend";
import { useFieldArray, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";

const insertValidationSchema = Yup.object().shape({
  kkDetails: Yup.object().shape({
    "Nomor Kartu Keluarga": Yup.string().required(),
    "Nama Kepala Keluarga": Yup.string().required(),
    Alamat: Yup.string().required(),
    "RT/RW": Yup.string().required(),
    "Desa/Keluarahan": Yup.string().required(),
    Kecamatan: Yup.string().required(),
    "Kabupaten/Kota": Yup.string().required(),
    Provinsi: Yup.string().required(),
    "Kode Pos": Yup.string().required(),
  }),
  anggota: Yup.array().of(
    Yup.object().shape({
      umum: Yup.object().shape({
        nik: Yup.string().required(),
        nama_lengkap: Yup.string().required(),
        nama_panggilan: Yup.string(),
        jenis_kelamin: Yup.string()
          .matches(MASTER_DATA_JENIS_KELAMIN_REGEX)
          .required(),
        agama: Yup.string().matches(MASTER_DATA_AGAMA_REGEX).required(),
        golongan_darah: Yup.string()
          .oneOf(MASTER_DATA_GOLONGAN_DARAH_LIST)
          .required(),
        pendidikan_terakhir: Yup.string()
          .matches(MASTER_DATA_PENDIDIKAN_REGEX)
          .required(),
        pekerjaan: Yup.string().required().oneOf(MASTER_DATA_PENDIDIKAN_LIST),
        no_telepon_hp: Yup.string(),
        alamat_rumah: Yup.string(),
        rt: Yup.string(),
        rw: Yup.string(),
        kampung: Yup.string(),
        dusun: Yup.string(),
        dapat_membaca_huruf: Yup.string(),
        kewarganegaraan: Yup.string()
          .matches(MASTER_DATA_KEWARGANEGARAAN_REGEX)
          .required(),
        kebangsaan: Yup.string(),
        suku: Yup.string(),
        jenis_perubahan: Yup.string(),
        no_paspor: Yup.string(),
        no_kitap: Yup.string(),
      }),
      kelahiran: Yup.object().shape({
        tempat_dilahirkan: Yup.string(),
        tempat_lahir: Yup.string(),
        tanggal_lahir: Yup.string().matches(TANGGAL_REGEX),
        jam_lahir: Yup.string(),
        waktu_lahir: Yup.string(),
        anak_ke: Yup.string(),
        jenis_kelahiran: Yup.string(),
        penolong_kelahiran: Yup.string(),
        berat_bayi: Yup.number(),
        panjang_bayi: Yup.number(),
        akta_kelahiran: Yup.string(),
        nomor_akta_kelahiran: Yup.string(),
        tanggal_akta_kelahiran: Yup.string(),
        tempat_diterbitkan_ktp: Yup.string(),
        tanggal_diterbitkan_ktp: Yup.string(),
        nomor_kk: Yup.string(),
        kedudukan_dalam_keluarga: Yup.string().matches(
          MASTER_DATA_KEDUDUKAN_DALAM_KELUARGA_REGEX
        ),
        nik_ibu_kandung: Yup.string(),
        nama_ibu_kandung: Yup.string(),
        nik_ayah_kandung: Yup.string(),
        nama_ayah_kandung: Yup.string(),
      }),
      kematian: Yup.object().shape({
        tempat_kematian: Yup.string(),
        desa_kelurahan: Yup.string(),
        kecamatan: Yup.string(),
        kabupaten_kota: Yup.string(),
        provinsi: Yup.string(),
        tanggal_kematian: Yup.string(),
        jam_kematian: Yup.string(),
        waktu_kematian: Yup.string(),
        umur_saat_meninggal: Yup.number(),
        sebab_kematian: Yup.string(),
        yang_mengabarkan_kematian: Yup.string(),
        akta_kematian: Yup.string(),
        nomor_akta_kematian: Yup.string(),
        tanggal_akta_kematian: Yup.string(),
      }),
      nikah_cerai: Yup.object().shape({
        status_perkawinan: Yup.string()
          .matches(MASTER_DATA_STATUS_PERKAWINAN_REGEX)
          .required(),
        akta_perkawinan: Yup.string(),
        nomor_akta_perkawinan: Yup.string(),
        tanggal_perkawinan: Yup.string().matches(TANGGAL_REGEX).nullable(),
        lokasi_perkawinan: Yup.string(),
        akta_perceraian: Yup.string(),
        nomor_akta_perceraian: Yup.string(),
        tanggal_perceraian: Yup.string(),
        lokasi_perceraian: Yup.string(),
      }),
      lain_lain: Yup.object().shape({
        kelainan: Yup.string(),
        jenis_penyandang_cacat: Yup.string(),
        cacat_fisik: Yup.string(),
        cacat_mental: Yup.string(),
        pendapatan_per_bulan: Yup.number(),
        keterangan: Yup.string(),
      }),
      upload_lampiran_surat: Yup.string(),
    })
  ),
});

const initialValue = {
  kkDetails: {
    "Nomor Kartu Keluarga": "",
    "Nama Kepala Keluarga": "",
    Alamat: "",
    "RT/RW": "",
    "Desa/Keluarahan": "",
    Kecamatan: "",
    "Kabupaten/Kota": "",
    Provinsi: "",
    "Kode Pos": "",
  },
  anggota: [
    {
      umum: {
        nik: "",
        nama_lengkap: "",
        nama_panggilan: "",
        jenis_kelamin: "",
        agama: "",
        golongan_darah: "",
        pendidikan_terakhir: "",
        pekerjaan: "",
        no_telepon_hp: "",
        alamat_rumah: "",
        rt: "",
        rw: "",
        kampung: "",
        dusun: "",
        dapat_membaca_huruf: "",
        kewarganegaraan: "",
        kebangsaan: "",
        suku: "",
        jenis_perubahan: "",
        no_paspor: "",
        no_kitap: "",
      },
      kelahiran: {
        tempat_dilahirkan: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jam_lahir: "",
        waktu_lahir: "",
        anak_ke: "",
        jenis_kelahiran: "",
        penolong_kelahiran: "",
        berat_bayi: 0,
        panjang_bayi: 0,
        akta_kelahiran: "",
        nomor_akta_kelahiran: "",
        tanggal_akta_kelahiran: "",
        tempat_diterbitkan_ktp: "",
        tanggal_diterbitkan_ktp: "",
        nomor_kk: "",
        kedudukan_dalam_keluarga: "",
        nik_ibu_kandung: "",
        nama_ibu_kandung: "",
        nik_ayah_kandung: "",
        nama_ayah_kandung: "",
      },
      kematian: {
        tempat_kematian: "",
        desa_kelurahan: "",
        kecamatan: "",
        kabupaten_kota: "",
        provinsi: "",
        tanggal_kematian: "",
        jam_kematian: "",
        waktu_kematian: "",
        umur_saat_meninggal: 0,
        sebab_kematian: "",
        yang_mengabarkan_kematian: "",
        akta_kematian: "",
        nomor_akta_kematian: "",
        tanggal_akta_kematian: "",
      },
      nikah_cerai: {
        status_perkawinan: "",
        akta_perkawinan: "",
        nomor_akta_perkawinan: "",
        tanggal_perkawinan: "",
        lokasi_perkawinan: "",
        akta_perceraian: "",
        nomor_akta_perceraian: "",
        tanggal_perceraian: "",
        lokasi_perceraian: "",
      },
      lain_lain: {
        kelainan: "",
        jenis_penyandang_cacat: "",
        cacat_fisik: "",
        cacat_mental: "",
        pendapatan_per_bulan: 0,
        keterangan: "",
      },
      upload_lampiran_surat: "",
    },
  ],
};

export default function BkIndukPendudukImportKK() {
  const { workspace } = useSelector((state: any) => state.app);
  const { loggedInUser } = useSelector((state: any) => state.auth);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const { dispatchNotification } = useNotification();
  const source = axios.CancelToken.source();
  const [previewImage, setPreviewImage] = useState({
    file: undefined,
    base64: "",
  });
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(insertValidationSchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "anggota",
  });

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleBackToBukuInduk = () => {
    navigate("..");
  };

  const formatDate = (obj: any) => {
    const formattedObj: any = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          formattedObj[key] = formatDate(obj[key]);
        } else if (typeof obj[key] === "string" && key.startsWith("tanggal")) {
          const date = moment(obj[key], "DD/MM/YYYY");
          if (date.isValid()) {
            formattedObj[key] = date.format("YYYY-MM-DD");
          } else {
            formattedObj[key] = obj[key];
          }
        } else {
          formattedObj[key] = obj[key];
        }
      }
    }

    return formattedObj;
  };

  const handleExtractedImage = (data: any) => {
    console.log("extracted data", data);
    data["anggota"] = data?.anggota?.map((x: any) => formatDate(x));
    Object.entries(data || {}).forEach(([k, v]) => {
      setValue(k as any, v);
    });
    setPreviewImage({ ...data?.preview_image_uploaded });
    handleNextPage();
  };

  const handleAddChild = () => {
    append({
      umum: {
        nik: "",
        nama_lengkap: "",
        nama_panggilan: "",
        jenis_kelamin: "",
        agama: "",
        golongan_darah: "",
        pendidikan_terakhir: "",
        pekerjaan: "",
        no_telepon_hp: "",
        alamat_rumah: "",
        rt: "",
        rw: "",
        kampung: "",
        dusun: "",
        dapat_membaca_huruf: "",
        kewarganegaraan: "",
        kebangsaan: "",
        suku: "",
        jenis_perubahan: "",
        no_paspor: "",
        no_kitap: "",
      },
      kelahiran: {
        tempat_dilahirkan: "",
        tempat_lahir: "",
        tanggal_lahir: "",
        jam_lahir: "",
        waktu_lahir: "",
        anak_ke: "",
        jenis_kelahiran: "",
        penolong_kelahiran: "",
        berat_bayi: 0,
        panjang_bayi: 0,
        akta_kelahiran: "",
        nomor_akta_kelahiran: "",
        tanggal_akta_kelahiran: "",
        tempat_diterbitkan_ktp: "",
        tanggal_diterbitkan_ktp: "",
        nomor_kk: "",
        kedudukan_dalam_keluarga: "",
        nik_ibu_kandung: "",
        nama_ibu_kandung: "",
        nik_ayah_kandung: "",
        nama_ayah_kandung: "",
      },
      kematian: {
        tempat_kematian: "",
        desa_kelurahan: "",
        kecamatan: "",
        kabupaten_kota: "",
        provinsi: "",
        tanggal_kematian: "",
        jam_kematian: "",
        waktu_kematian: "",
        umur_saat_meninggal: 0,
        sebab_kematian: "",
        yang_mengabarkan_kematian: "",
        akta_kematian: "",
        nomor_akta_kematian: "",
        tanggal_akta_kematian: "",
      },
      nikah_cerai: {
        status_perkawinan: "",
        akta_perkawinan: "",
        nomor_akta_perkawinan: "",
        tanggal_perkawinan: "",
        lokasi_perkawinan: "",
        akta_perceraian: "",
        nomor_akta_perceraian: "",
        tanggal_perceraian: "",
        lokasi_perceraian: "",
      },
      lain_lain: {
        kelainan: "",
        jenis_penyandang_cacat: "",
        cacat_fisik: "",
        cacat_mental: "",
        pendapatan_per_bulan: 0,
        keterangan: "",
      },
      upload_lampiran_surat: "",
    });
  };

  const handleSubmitForm = async (data: any) => {
    const url =
      API_PATH().import.administrasi.bukuKKImage +
      "/insert_penduduk/?workspaceId=" +
      workspace?._id;

    const params = {
      ...data,
      edited_by: loggedInUser?.username,
      updated_at: moment().valueOf(),
    };

    try {
      await requestApi().request({
        url: url,
        method: "POST",
        data: params,
        cancelToken: source.token,
      });

      handleNextPage();
      dispatchNotification("Data berhasil ditambahkan", "success");
    } catch (err) {
      console.error("Error add data", err);
      dispatchNotification("Data gagal ditambahkan", "danger");
    }
  };

  const handleSubmitError = (data: any) => {
    console.error("error submit", data);
    dispatchNotification(
      "Format data tidak sesuai atau data belum diisi",
      "danger"
    );
  };

  return (
    <Card>
      <CardHeader>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center">
            <DocumentUploadIcon />
            <CardTitle className="mb-0">Import Kartu Keluarga</CardTitle>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <CardStepIndicator active={page >= 0}>
              <div>1</div>
              <span>Upload</span>
              <ChevronRightIcon />
            </CardStepIndicator>
            <CardStepIndicator active={page >= 1}>
              <div>2</div>
              <span>Preview</span>
              <ChevronRightIcon />
            </CardStepIndicator>
            <CardStepIndicator active={page >= 2}>
              <div>3</div>
              <span>Selesai</span>
            </CardStepIndicator>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className={`${page === 0 ? "d-block" : "d-none"}`}>
          <div className="mb-3">
            <p className="fw-bold mb-0">Upload Foto Kartu Keluarga</p>
            <span>
              Silakan upload foto kartu keluarga dengan kualitas gambar yang
              baik
            </span>
          </div>
          <div className="mb-4">
            <DndProvider backend={HTML5Backend}>
              <UploadArea onSubmit={handleExtractedImage} />
            </DndProvider>
          </div>
          <div className="d-flex justify-content-end align-items-center gap-1">
            <Button
              onClick={handleBackToBukuInduk}
              type="button"
              variant="outline-primary"
            >
              Kembali
            </Button>
            <Button onClick={handleNextPage} type="button" variant="primary">
              Lanjut
            </Button>
          </div>
        </div>

        <div className={`${page === 1 ? "d-block" : "d-none"}`}>
          <Form onSubmit={handleSubmit(handleSubmitForm, handleSubmitError)}>
            <div className="mb-3">
              <h6 className="fw-bold mb-1">Preview Data Kartu Keluarga</h6>
              <span>
                Mohon cek kembali data Anda, apabila terdapat kesalahan anda
                dapat memperbaikinya disini
              </span>
            </div>
            <div className="mb-3">
              <LazyImage
                src={previewImage?.base64}
                defaultImage={"/static/logo-icon.svg"}
                className="w-100 cursor-pointer"
              />
            </div>
            <div className="mb-4">
              <Row>
                <Col>
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Nomor Kartu Keluarga`)}
                    isInvalid={
                      !!(errors?.kkDetails as any)?.["Nomor Kartu Keluarga"]
                    }
                    message={
                      (errors?.kkDetails as any)?.["Nomor Kartu Keluarga"]
                        ?.message
                    }
                    placeholder="Masukkan Nomor Kartu Keluarga"
                    labelName="Nomor Kartu Keluarga"
                  />
                </Col>
                <Col>
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Nama Kepala Keluarga`)}
                    isInvalid={
                      !!(errors?.kkDetails as any)?.["Nama Kepala Keluarga"]
                    }
                    message={
                      (errors?.kkDetails as any)?.["Nama Kepala Keluarga"]
                        ?.message
                    }
                    placeholder="Masukkan Nama Kepala Keluarga"
                    labelName="Nama Kepala Keluarga"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Alamat`)}
                    isInvalid={!!(errors?.kkDetails as any)?.["Alamat"]}
                    message={(errors?.kkDetails as any)?.["Alamat"]?.message}
                    placeholder="Masukkan Alamat"
                    labelName="Alamat"
                  />
                </Col>
                <Col md="3">
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.RT/RW`)}
                    isInvalid={!!(errors?.kkDetails as any)?.["RT/RW"]}
                    message={(errors?.kkDetails as any)?.["RT/RW"]?.message}
                    placeholder="Masukkan RT/RW"
                    labelName="RT / RW"
                  />
                </Col>
                <Col md="3">
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Desa/Keluarahan`)}
                    isInvalid={
                      !!(errors?.kkDetails as any)?.["Desa/Keluarahan"]
                    }
                    message={
                      (errors?.kkDetails as any)?.["Desa/Keluarahan"]?.message
                    }
                    placeholder="Masukkan Alamat"
                    labelName="Desa / Kelurahan"
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Kecamatan`)}
                    isInvalid={!!(errors?.kkDetails as any)?.["Kecamatan"]}
                    message={(errors?.kkDetails as any)?.["Kecamatan"]?.message}
                    placeholder="Masukkan Kecamatan"
                    labelName="Kecamatan"
                  />
                </Col>
                <Col md="3">
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Kabupaten/Kota`)}
                    isInvalid={!!(errors?.kkDetails as any)?.["Kabupaten/Kota"]}
                    message={
                      (errors?.kkDetails as any)?.["Kabupaten/Kota"]?.message
                    }
                    placeholder="Masukkan Kabupaten/Kota"
                    labelName="Kabupaten / Kota"
                  />
                </Col>
                <Col md="3">
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Provinsi`)}
                    isInvalid={!!(errors?.kkDetails as any)?.["Provinsi"]}
                    message={(errors?.kkDetails as any)?.["Provinsi"]?.message}
                    placeholder="Masukkan Provinsi"
                    labelName="Provinsi"
                  />
                </Col>
                <Col md="3">
                  <FormInputControl
                    required={true}
                    register={register(`kkDetails.Kode Pos`)}
                    isInvalid={!!(errors?.kkDetails as any)?.["Kode Pos"]}
                    message={(errors?.kkDetails as any)?.["Kode Pos"]?.message}
                    placeholder="Masukkan Kode Pos"
                    labelName="Kode Pos"
                  />
                </Col>
              </Row>

              <CardSeparator />

              <div className="table-responsive my-3" id="extract-kk-table">
                <table className="table table-bordered table-sm align-middle">
                  <thead>
                    <tr>
                      <th rowSpan={2} className="p-1 align-middle text-center">
                        No
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        NIK
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Nama Lengkap
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Jenis Kelamin
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Agama
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Pendidikan
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Pekerjaan
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Golongan Darah
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Kewarganegaraan
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Tempat Lahir
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Tanggal Lahir{" "}
                        <TextHelper message="Format: Bulan/Tanggal/Tahun" />
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Status Hubungan dalam Keluarga
                      </th>
                      <th
                        colSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Keluarga
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Status Perkawinan
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Tanggal Perkawinan{" "}
                        <TextHelper message="Format: Bulan/Tanggal/Tahun" />
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Nomor Paspor
                      </th>
                      <th
                        rowSpan={2}
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "15rem" }}
                      >
                        Nomor KITAS/KITAP
                      </th>
                    </tr>
                    <tr>
                      <th
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "10rem" }}
                      >
                        Ayah
                      </th>
                      <th
                        className="p-1 align-middle text-center"
                        style={{ minWidth: "10rem" }}
                      >
                        Ibu
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fields.map((field: any, idx: number) => (
                      <tr
                        key={field?.id}
                        className={fields.length - 1 == idx ? "dropup" : ""}
                      >
                        <td>{idx + 1}</td>
                        <td>
                          <FormInputControl
                            className=""
                            formGroup={false}
                            required={true}
                            register={register(`anggota.${idx}.umum.nik`)}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.umum?.nik
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.umum?.nik
                                ?.message
                            }
                            placeholder="Masukkan NIK"
                            labelName="NIK"
                            errorDiv={false}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            formGroup={false}
                            required={true}
                            register={register(
                              `anggota.${idx}.umum.nama_lengkap`
                            )}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.umum
                                ?.nama_lengkap
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.umum
                                ?.nama_lengkap?.message
                            }
                            placeholder="Masukkan nama lengkap"
                            labelName="Nama Lengkap"
                            errorDiv={false}
                          />
                        </td>

                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={false}
                              register={register(
                                `anggota.${idx}.umum.jenis_kelamin`
                              )}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.umum
                                  ?.jenis_kelamin
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.umum
                                  ?.jenis_kelamin?.message
                              }
                              placeholder="Masukkan jenis kelamin"
                              labelName="Jenis Kelamin"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.umum.jenis_kelamin`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "jenis_kelamin",
                                    field: "category",
                                  },
                                ],
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={false}
                              register={register(`anggota.${idx}.umum.agama`)}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.umum?.agama
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.umum?.agama
                                  ?.message
                              }
                              placeholder="Masukkan agama"
                              labelName="Agama"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              required={true}
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.umum.agama`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "agama",
                                    field: "category",
                                  },
                                ],
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={false}
                              register={register(
                                `anggota.${idx}.umum.pendidikan_terakhir`
                              )}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.umum
                                  ?.pendidikan_terakhir
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.umum
                                  ?.pendidikan_terakhir?.message
                              }
                              placeholder="Masukkan pendidikan terakhir"
                              labelName="Pendidikan Terakhir"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              required={true}
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.umum.pendidikan_terakhir`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "pendidikan_terakhir",
                                    field: "category",
                                  },
                                ],
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={false}
                              register={register(
                                `anggota.${idx}.umum.pekerjaan`
                              )}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.umum
                                  ?.pekerjaan
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.umum?.pekerjaan
                                  ?.message
                              }
                              placeholder="Masukkan pekerjaan"
                              labelName="Pekerjaan"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              required={true}
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.umum.pekerjaan`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "pekerjaan",
                                    field: "category",
                                  },
                                ],
                                size: 120,
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={false}
                              register={register(
                                `anggota.${idx}.umum.golongan_darah`
                              )}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.umum
                                  ?.golongan_darah
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.umum
                                  ?.golongan_darah?.message
                              }
                              placeholder="Masukkan golongan darah"
                              labelName="Golongan Darah"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              required={true}
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.umum.golongan_darah`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "golongan_darah",
                                    field: "category",
                                  },
                                ],
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={true}
                              register={register(
                                `anggota.${idx}.umum.kewarganegaraan`
                              )}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.umum
                                  ?.kewarganegaraan
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.umum
                                  ?.kewarganegaraan?.message
                              }
                              placeholder="Masukkan kewarganegaraan"
                              labelName="Kewarganegaraan"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              required={true}
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.umum.kewarganegaraan`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "kewarganegaraan",
                                    field: "category",
                                  },
                                ],
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            formGroup={false}
                            required={true}
                            register={register(
                              `anggota.${idx}.kelahiran.tempat_lahir`
                            )}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.kelahiran
                                ?.tempat_lahir
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.kelahiran
                                ?.tempat_lahir?.message
                            }
                            placeholder="Masukkan tempat lahir"
                            labelName="Tempat Lahir"
                            errorDiv={false}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            type="date"
                            formGroup={false}
                            required={true}
                            register={register(
                              `anggota.${idx}.kelahiran.tanggal_lahir`
                            )}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.kelahiran
                                ?.tanggal_lahir
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.kelahiran
                                ?.tanggal_lahir?.message
                            }
                            placeholder="Masukkan tanggal lahir"
                            labelName="Tanggal Lahir"
                            errorDiv={false}
                          />
                        </td>
                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={false}
                              register={register(
                                `anggota.${idx}.kelahiran.kedudukan_dalam_keluarga`
                              )}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.kelahiran
                                  ?.kedudukan_dalam_keluarga
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.kelahiran
                                  ?.kedudukan_dalam_keluarga?.message
                              }
                              placeholder="Masukkan kedudukan dalam keluarga"
                              labelName="Kedudukan Dalam Keluarga"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              required={false}
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.kelahiran.kedudukan_dalam_keluarga`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "kedudukan_dalam_keluarga",
                                    field: "category",
                                  },
                                ],
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            formGroup={false}
                            required={false}
                            register={register(
                              `anggota.${idx}.kelahiran.nama_ayah_kandung`
                            )}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.kelahiran
                                ?.nama_ayah_kandung
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.kelahiran
                                ?.nama_ayah_kandung?.message
                            }
                            placeholder="Masukkan nama ayah kandung"
                            labelName="Nama Ayah Kandung"
                            errorDiv={false}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            formGroup={false}
                            required={false}
                            register={register(
                              `anggota.${idx}.kelahiran.nama_ibu_kandung`
                            )}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.kelahiran
                                ?.nama_ibu_kandung
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.kelahiran
                                ?.nama_ibu_kandung?.message
                            }
                            placeholder="Masukkan nama ibu kandung"
                            labelName="Nama Ibu Kandung"
                            errorDiv={false}
                          />
                        </td>
                        <td>
                          <div>
                            <FormInputControl
                              className=""
                              formGroup={false}
                              required={false}
                              register={register(
                                `anggota.${idx}.nikah_cerai.status_perkawinan`
                              )}
                              isInvalid={
                                !!(errors?.anggota as any)?.[idx]?.nikah_cerai
                                  ?.status_perkawinan
                              }
                              message={
                                (errors?.anggota as any)?.[idx]?.nikah_cerai
                                  ?.status_perkawinan?.message
                              }
                              placeholder="Masukkan status perkawinan"
                              labelName="Status Perkawinan"
                              errorDiv={false}
                              additionalOptions={{
                                disabled: true,
                              }}
                            />
                            <SelectAsyncDynamic
                              isClearable={false}
                              errors={errors}
                              control={control}
                              labelField={"name"}
                              valueField={"name"}
                              fieldName={`anggota.${idx}.nikah_cerai.status_perkawinan`}
                              pathServiceName={`${API_PATH().master}/get-all`}
                              queryParams={{
                                filter: [
                                  {
                                    value: "status_perkawinan",
                                    field: "category",
                                  },
                                ],
                              }}
                              errorDiv={false}
                            />
                          </div>
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            type="date"
                            formGroup={false}
                            required={false}
                            register={register(
                              `anggota.${idx}.nikah_cerai.tanggal_perkawinan`
                            )}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.nikah_cerai
                                ?.tanggal_perkawinan
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.nikah_cerai
                                ?.tanggal_perkawinan?.message
                            }
                            placeholder="Masukkan tanggal perkawinan"
                            labelName="Tanggal perkawinan"
                            errorDiv={false}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            formGroup={false}
                            required={true}
                            register={register(`anggota.${idx}.umum.no_paspor`)}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.umum?.no_paspor
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.umum?.no_paspor
                                ?.message
                            }
                            placeholder="Masukkan nomor paspor"
                            labelName="Nomor Paspor"
                            errorDiv={false}
                          />
                        </td>
                        <td>
                          <FormInputControl
                            className=""
                            formGroup={false}
                            required={true}
                            register={register(`anggota.${idx}.umum.no_kitap`)}
                            isInvalid={
                              !!(errors?.anggota as any)?.[idx]?.umum?.no_kitap
                            }
                            message={
                              (errors?.anggota as any)?.[idx]?.umum?.no_kitap
                                ?.message
                            }
                            placeholder="Masukkan nomor kitap"
                            labelName="Nomor Kitap"
                            errorDiv={false}
                          />
                        </td>

                        <td>
                          <Button
                            onClick={() => remove(idx)}
                            variant="danger"
                            className="text-white"
                          >
                            <TrashIcon />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button
                onClick={handleAddChild}
                type="button"
                variant="outline-primary"
                className="w-100"
              >
                Tambah Data
              </Button>
            </div>
            <div className="d-flex justify-content-end align-items-center gap-1">
              <Button
                onClick={handlePrevPage}
                type="button"
                variant="outline-primary"
              >
                Kembali
              </Button>
              <Button type="submit" variant="primary">
                Simpan
              </Button>
            </div>
          </Form>
        </div>

        <div className={`${page === 2 ? "d-block" : "d-none"}`}>
          <div className="mb-4">
            <div
              className="d-flex justify-content-center align-items-center flex-column mx-auto text-center"
              style={{ maxWidth: "35rem" }}
            >
              <DocumentUploadSuccessIllustration />
              <h5 className="fw-bold mb-2">Import Berhasil</h5>
              <span className="mb-3">
                Import data berhasil dilakukan silakan klik tombol dibawah ini
                untuk kembali ke halaman Buku Induk Penduduk
              </span>
              <Button
                onClick={handleBackToBukuInduk}
                type="button"
                variant="primary"
                className="mb-2"
              >
                Buku Induk Penduduk
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

const extractorValidationSchema = Yup.object().shape({
  image_file: Yup.mixed(),
});

function UploadArea({ onSubmit }: { onSubmit: (v: any) => void }) {
  const accept = "image/png, image/gif, image/jpeg";
  const defaultImage = "/static/logo-icon.svg";
  const [file, setFile] = useState<{ files: any[] } | null>(null);
  const [previewImage, setPreviewImage] = useState({
    file: undefined,
    base64: "",
  });
  const [loading, setLoading] = useState(false);
  const { dispatchNotification } = useNotification();
  const { handleSubmit, setValue } = useForm<{
    image_file: any;
  }>({
    // resolver: yupResolver(extractorValidationSchema),
  });
  const source = axios.CancelToken.source();
  const selectFileRef = useRef<HTMLInputElement>(null);
  const [, drop] = useDrop(() => ({
    accept: [NativeTypes.FILE],
    drop(item: { files: any[] }) {
      setFile(item);
    },
  }));

  const [isUploaded, setIsUploaded] = useState(false);

  const handleUpload = async ({ image_file }: { image_file: any }) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    try {
      const fd = new FormData();
      fd.append("image_file", image_file);

      const res = await requestApi().request({
        url: `${API_PATH().import.administrasi.bukuKKImage}/extractor/`,
        method: "POST",
        data: fd,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
        cancelToken: source.token,
      });

      console.log("resp", res);

      setLoading(false);
      setIsUploaded(true);
      dispatchNotification("Gambar berhasil diekstrak", "success");

      if (onSubmit && typeof onSubmit === "function") {
        onSubmit({
          ...res,
          image_uploaded: image_file,
          preview_image_uploaded: previewImage,
        });
      }
    } catch (err) {
      setLoading(false);
      dispatchNotification("Gambar gagal diekstrak", "danger");
    }
  };

  const handleSelectFile = (e: any) => {
    if (e.target.files) {
      setFile({ files: e.target.files });
      setValue("image_file", e.target.files[0]);
      setIsUploaded(false);
      const file = e.target.files[0];
      const reader = new FileReader();
      try {
        reader.onload = () => {
          setPreviewImage((prevState: any) => ({
            ...prevState,
            base64: reader.result,
            file: file,
          }));

          // handleUpload({ image_file: file });
        };
        reader.readAsDataURL(file);
      } catch (err) {
        dispatchNotification("Gagal pilih file", "danger");
      }
    }
  };

  const fileList = useMemo(() => {
    return file && file.files && file.files.length > 0
      ? Array.from(file.files as unknown as FileList).map((f) => (
          <span key={f.name}>{f.name}</span>
        ))
      : "[no file]";
  }, [file]);

  console.log("filee", file);

  return (
    <div
      style={{
        border: "1px dashed var(--primary)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "3rem 0",
      }}
      ref={drop as any}
    >
      <Form className="w-100" onSubmit={handleSubmit(handleUpload)}>
        {/* before select file */}
        <div className={`${file ? "d-none" : "d-block"}`}>
          <DocumentUploadPaperIcon />
          <p className="mb-0">
            Drop your file here or
            <span className="text-primary position-relative ps-1">
              Browse
              <SelectFileInput
                ref={selectFileRef}
                onChange={handleSelectFile}
                className="custom-file-input"
                accept={accept}
                type="file"
                title=""
              />
            </span>
          </p>
          <span>Maximum file size: 2 mb</span>
        </div>

        {/* after select file */}
        <div className={`${file ? "d-block" : "d-none"}`}>
          <LazyImage
            onClick={() => selectFileRef?.current?.click()}
            src={previewImage?.base64}
            defaultImage={defaultImage}
            className="w-100 cursor-pointer"
          />
          <p className="mb-3">{fileList}</p>
          <span className="text-primary position-relative ps-1">
            Change image
            <SelectFileInput
              ref={selectFileRef}
              onChange={handleSelectFile}
              className="custom-file-input"
              accept={accept}
              type="file"
              title=""
            />
          </span>
          {!isUploaded ? (
            <div className="my-3">
              <Button variant="primary" type="submit" isLoading={loading}>
                Upload
              </Button>
            </div>
          ) : null}
        </div>
      </Form>
    </div>
  );
}

const SelectFileInput = styled.input`
  position: absolute;
  inset: 0;
  color: transparent;
  cursor: pointer;

  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    display: none;
    content: "";
    color: black;
    display: inline-block;
    background: -webkit-linear-gradient(top, #f9f9f9, #e3e3e3);
    border: 1px solid #999;
    border-radius: 3px;
    // padding: 5px 8px;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    cursor: pointer;
    text-shadow: 1px 1px #fff;
    font-weight: 700;
    font-size: 10pt;
  }
  &:hover::before {
    border-color: black;
  }
  &:active {
    outline: 0;
  }
  &::before {
    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
  }
`;
