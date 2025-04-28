import { Button } from "@app/components";
import ArrowLeftIcon2 from "@app/components/Icons/ArrowLeftIcon2";
import ArrowRightIcon2 from "@app/components/Icons/ArrowRightIcon2";
import TrashIcon from "@app/components/Icons/TrashIcon";
import FormInputControlNative from "@app/components/Input/FormInputControl";
import FormInputGroupNative from "@app/components/Input/FormInputGroup";
// import FormInputMaskNative from "@app/components/Input/FormInputMask"
import { useErrorForm } from "@app/helper/form-error.helper";
import { IFormDataContent } from "@app/interface/main";
import FormData from "@app/modules/Form/FormData";
import { API_PATH } from "@app/services/_path.service";
import React, { useEffect, useRef, useState } from "react";
import { Col, Form, Modal, Nav, Row } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { DataPotensiDesaField } from "./DataPotensiDesaField";
import {
  SelectAdaAtauTidak as SelectAdaAtauTidakNative,
  SelectAktifAtauPasif as SelectAktifAtauPasifNative,
  SelectAktifAtauTidakAktif as SelectAktifAtauTidakAktifNative,
  SelectBaikAtauRusak as SelectBaikAtauRusakNative,
  SelectBaikAtauTidak as SelectBaikAtauTidakNative,
  SelectBulan as SelectBulanNative,
  SelectKesuburanTanah as SelectKesuburanTanahNative,
  SelectKualitasAirMinum as SelectKualitasAirMinumNative,
  SelectPemerintahSwastaSwadaya as SelectPemerintahSwastaSwadayaNative,
  SelectPendidikan as SelectPendidikanNative,
  SelectPotensi as SelectPotensiNative,
  SelectTerdaftarAtauTerakreditasi as SelectTerdaftarAtauTerakreditasiNative,
  SelectYaAtauTidak as SelectYaAtauTidakNative,
} from "./DataPotensiDesaSelects";
import {
  DataPotensiDesaAccordion,
  DataPotensiDesaAccordionBody,
  DataPotensiDesaAccordionHeader,
  DataPotensiDesaAccordionItem,
} from "./DataPotensiDesaStyled";
import { DataPotensiKelembagaan } from "./forms/DataPotensiKelembagaan";
import { DataPotensiSarana } from "./forms/DataPotensiSarana";
import { DataPotensiSumberDayaAlam } from "./forms/DataPotensiSumberDayaAlam";
import { DataPotensiSumberDayaManusia } from "./forms/DataPotensiSumberDayaManusia";
import { useDisableWhenDetailPath } from "./hooks/useDisableDetail";

const DataPotensiDesaDetailV2 = ({ onCancel }: IFormDataContent) => {
  const [dataParams, setDataParams] = useState<any>();
  const [setDataSelected] = useState<any>();

  const [activeForm, setActiveForm] = useState("informasi-umum");
  const { workspace } = useSelector((state: any) => state.app);

  const [activeTabSda, setActiveTabSda] = useState<string>("potensiUmum");
  const [activeTabSdm, setActiveTabSdm] = useState<string>("jumlah");
  const [activeTabKelembagaan, setActiveTabKelembagaan] = useState<string>(
    "lembagaPemerintahan"
  );
  const [activeTabSaranaTransportasi, setActiveTabSaranaTransportasi] =
    useState<string>("transportasi");

  const [path] = useState<string>(API_PATH().form.administrasi.dataPotensiDesa);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    // resolver: yupResolver(validationSchema),
    defaultValues: DataPotensiDesaField,
  });

  const sumberDataArray = useFieldArray({
    name: "sumber_data",
    control,
  });

  const { onErrorForm } = useErrorForm();

  const { loggedInUser } = useSelector((state: any) => state.auth);
  let { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [additionalParams, setAdditionalParams] = useState<
    Record<string, unknown>
  >({});
  const navigate = useNavigate();
  const { isDisabled: disabledWhenDetail, hideElement } =
    useDisableWhenDetailPath();
  const elementRef = useRef<any | null>(null);
  const [arrowDisable, setArrowDisable] = useState(true);

  const handleHorizontalScroll = (
    element: HTMLElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= distance) {
        clearInterval(slideTimer);
      }
      if (element.scrollLeft === 0) {
        setArrowDisable(true);
      } else {
        setArrowDisable(false);
      }
    }, speed);
  };

  const onSubmitForm = (data: any) => {
    if (disabledWhenDetail) return;

    const params = {
      ...data,
    };

    console.log("params", params);

    setDataParams(params);
  };

  const handleAfterSubmit = () => {
    if (onCancel && typeof onCancel === "function") {
      onCancel();
    } else {
      navigate("..", { relative: "route" });
    }
  };

  // send current login username when update buku induk
  useEffect(() => {
    if (id || searchParams.get("id")) {
      setAdditionalParams({ edited_by: loggedInUser.username });
    }
  }, [id, searchParams.get("id")]);

  useEffect(() => {
    if (workspace) {
      [
        ["desa", workspace?.desakelurahan_details?.nama_kelurahan],
        ["kecamatan", workspace?.desakelurahan_details?.nama_kecamatan],
        ["kab_kota", workspace?.desakelurahan_details?.nama_kota],
        ["provinsi", workspace?.desakelurahan_details?.nama_provinsi],
      ].forEach(([key, value]) => setValue(key, value));
    }
  }, [workspace]);

  useEffect(() => {
    if (searchParams.get("id")) {
      searchParams.delete("id");
      setSearchParams(searchParams);
    }
  }, []);

  return (
    <>
      <FormData
        setError={setError}
        setValue={setValue}
        dataParams={dataParams}
        fields={DataPotensiDesaField}
        path={path}
        customLabel="state"
        onGetDataResult={setDataSelected}
        additionalParams={additionalParams}
        onAfterSubmitted={handleAfterSubmit}
      >
        <Form noValidate onSubmit={handleSubmit(onSubmitForm, onErrorForm)}>
          <Modal.Body>
            <Row>
              <Col>
                <div className="d-flex gap-1">
                  <ScrollButton
                    variant="link"
                    onClick={() => {
                      handleHorizontalScroll(elementRef.current, 10, 200, -10);
                    }}
                    disabled={arrowDisable}
                  >
                    <ArrowLeftIcon2 />
                  </ScrollButton>
                  <Nav
                    variant="pills"
                    className="flex-nowrap overflow-hidden gap-1"
                    ref={elementRef}
                  >
                    <Nav.Item style={{ whiteSpace: "nowrap" }}>
                      <ScrollItemButton
                        active={activeForm === "informasi-umum"}
                        onClick={() => setActiveForm("informasi-umum")}
                      >
                        Umum
                      </ScrollItemButton>
                    </Nav.Item>
                    <Nav.Item style={{ whiteSpace: "nowrap" }}>
                      <ScrollItemButton
                        active={activeForm === "sumber-daya-alam"}
                        onClick={() => setActiveForm("sumber-daya-alam")}
                      >
                        Sumber Daya Alam
                      </ScrollItemButton>
                    </Nav.Item>
                    <Nav.Item style={{ whiteSpace: "nowrap" }}>
                      <ScrollItemButton
                        active={activeForm === "sumber-daya-manusia"}
                        onClick={() => setActiveForm("sumber-daya-manusia")}
                      >
                        Sumber Daya Manusia
                      </ScrollItemButton>
                    </Nav.Item>
                    <Nav.Item style={{ whiteSpace: "nowrap" }}>
                      <ScrollItemButton
                        active={activeForm === "kelembagaan"}
                        onClick={() => setActiveForm("kelembagaan")}
                      >
                        Kelembagaan
                      </ScrollItemButton>
                    </Nav.Item>
                    <Nav.Item style={{ whiteSpace: "nowrap" }}>
                      <ScrollItemButton
                        active={activeForm === "sarana-dan-prasarana"}
                        onClick={() => setActiveForm("sarana-dan-prasarana")}
                      >
                        Sarana dan Prasarana
                      </ScrollItemButton>
                    </Nav.Item>
                  </Nav>
                  <ScrollButton
                    variant="link"
                    onClick={() => {
                      handleHorizontalScroll(elementRef.current, 10, 200, 10);
                    }}
                  >
                    <ArrowRightIcon2 />
                  </ScrollButton>
                </div>
              </Col>
            </Row>

            {activeForm === "informasi-umum" ? (
              <div className="my-3">
                <DataPotensiDesaAccordion
                  alwaysOpen
                  defaultActiveKey={["dataUmum", "dataPengisi", "sumberData"]}
                >
                  {/* DATA UMUM */}
                  <DataPotensiDesaAccordionItem eventKey={"dataUmum"}>
                    <DataPotensiDesaAccordionHeader>
                      <h5 className="fw-bolder mb-0">Data Umum</h5>
                    </DataPotensiDesaAccordionHeader>
                    <DataPotensiDesaAccordionBody>
                      <table className="table table-bordered table-sm align-middle">
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Desa</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.desa}
                                message={errors?.desa?.message}
                                formGroup={false}
                                register={register("desa")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Kecamatan</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.kecamatan}
                                message={errors?.kecamatan?.message}
                                formGroup={false}
                                register={register("kecamatan")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Kabupaten/kota</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.kab_kota}
                                message={errors?.kab_kota?.message}
                                formGroup={false}
                                register={register("kab_kota")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Provinsi</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.provinsi}
                                message={errors?.provinsi?.message}
                                formGroup={false}
                                register={register("provinsi")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Bulan</td>
                            <td>
                              <SelectBulan
                                control={control}
                                errors={errors}
                                fieldName={`bulan`}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>Tahun</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.tahun}
                                message={errors?.tahun?.message}
                                formGroup={false}
                                register={register("tahun")}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </DataPotensiDesaAccordionBody>
                  </DataPotensiDesaAccordionItem>

                  {/* DATA PENGISI */}
                  <DataPotensiDesaAccordionItem eventKey={"dataPengisi"}>
                    <DataPotensiDesaAccordionHeader>
                      <h5 className="fw-bolder mb-0">Data Pengisi</h5>
                    </DataPotensiDesaAccordionHeader>
                    <DataPotensiDesaAccordionBody>
                      <table className="table table-bordered table-sm align-middle">
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Nama Pengisi</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.nama_pengisi}
                                message={errors?.nama_pengisi?.message}
                                formGroup={false}
                                register={register("nama_pengisi")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Pekerjaan</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.pekerjaan}
                                message={errors?.pekerjaan?.message}
                                formGroup={false}
                                register={register("pekerjaan")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Jabatan</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.jabatan}
                                message={errors?.jabatan?.message}
                                formGroup={false}
                                register={register("jabatan")}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Kepala Daerah</td>
                            <td>
                              <FormInputControl
                                className="mb-0"
                                isInvalid={!!errors?.kepala_desa}
                                message={errors?.kepala_desa?.message}
                                formGroup={false}
                                register={register("kepala_desa")}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </DataPotensiDesaAccordionBody>
                  </DataPotensiDesaAccordionItem>

                  {/* SUMBER DATA */}
                  <DataPotensiDesaAccordionItem eventKey={"sumberData"}>
                    <DataPotensiDesaAccordionHeader>
                      <h5 className="fw-bolder mb-0">
                        Sumber Data yang digunakan
                      </h5>
                    </DataPotensiDesaAccordionHeader>
                    <DataPotensiDesaAccordionBody>
                      <table className="table table-bordered table-sm align-middle">
                        <thead>
                          <tr>
                            <td>#</td>
                            <td>Sumber Referensi</td>
                            <td></td>
                          </tr>
                        </thead>
                        <tbody>
                          {sumberDataArray.fields.map((field, idx) => (
                            <tr key={field.id}>
                              <td>{idx + 1}</td>
                              <td>
                                <FormInputControl
                                  className="mb-0"
                                  isInvalid={
                                    !!(errors?.sumber_data as any)?.[idx]?.value
                                  }
                                  message={
                                    (errors?.sumber_data as any)?.[idx]?.value
                                      ?.message
                                  }
                                  formGroup={false}
                                  register={register(
                                    `sumber_data.${idx}.value`
                                  )}
                                />
                              </td>
                              <td style={{ width: 0 }} {...hideElement}>
                                <Button
                                  type="button"
                                  onClick={() => sumberDataArray.remove(idx)}
                                  variant="danger"
                                  className="text-white"
                                >
                                  <TrashIcon />
                                </Button>
                              </td>
                            </tr>
                          ))}
                          <tr {...hideElement}>
                            <td colSpan={4}>
                              <Button
                                onClick={() =>
                                  sumberDataArray.append({
                                    nama: "",
                                    value: "",
                                  })
                                }
                                type="button"
                                variant="link"
                                className="text-primary w-100"
                              >
                                Tambah Referensi
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </DataPotensiDesaAccordionBody>
                  </DataPotensiDesaAccordionItem>
                </DataPotensiDesaAccordion>
              </div>
            ) : null}

            <DataPotensiSumberDayaAlam
              activeForm={activeForm}
              activeTabSda={activeTabSda}
              control={control}
              errors={errors}
              register={register}
              setActiveTabSda={setActiveTabSda}
              watch={watch}
            />

            <DataPotensiSumberDayaManusia
              activeForm={activeForm}
              activeTabSdm={activeTabSdm}
              control={control}
              errors={errors}
              register={register}
              setActiveTabSdm={setActiveTabSdm}
            />

            <DataPotensiKelembagaan
              activeForm={activeForm}
              activeTabKelembagaan={activeTabKelembagaan}
              control={control}
              errors={errors}
              register={register}
              setActiveTabKelembagaan={setActiveTabKelembagaan}
            />

            <DataPotensiSarana
              activeForm={activeForm}
              activeTabSaranaTransportasi={activeTabSaranaTransportasi}
              control={control}
              errors={errors}
              register={register}
              setActiveTabSaranaTransportasi={setActiveTabSaranaTransportasi}
              watch={watch}
            />
          </Modal.Body>
        </Form>
      </FormData>
    </>
  );
};

export function FormInputControl(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();

  return (
    <FormInputControlNative
      {...props}
      additionalOptions={{
        ...(props?.additionalOptions || {}),
        disabled: isDisabled,
      }}
    />
  );
}

export function FormInputGroup(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();

  return (
    <FormInputGroupNative
      {...props}
      additionalOptions={{
        ...(props?.additionalOptions || {}),
        disabled: isDisabled,
      }}
    />
  );
}

export function FormInputMask(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();

  return (
    <></>
    // <FormInputMaskNative
    //   {...props}
    //   additionalOptions={{
    //     ...(props?.additionalOptions || {}),
    //     disabled: isDisabled,
    //   }}
    // />
  );
}

export function SelectBulan(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();

  return (
    <SelectBulanNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectAdaAtauTidak(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectAdaAtauTidakNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectAktifAtauPasif(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectAktifAtauPasifNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectAktifAtauTidakAktif(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectAktifAtauTidakAktifNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectBaikAtauRusak(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectBaikAtauRusakNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectBaikAtauTidak(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectBaikAtauTidakNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectKesuburanTanah(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectKesuburanTanahNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectKualitasAirMinum(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectKualitasAirMinumNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectPemerintahSwastaSwadaya(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectPemerintahSwastaSwadayaNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectPendidikan(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectPendidikanNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectPotensi(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectPotensiNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectTerdaftarAtauTerakreditasi(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectTerdaftarAtauTerakreditasiNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

export function SelectYaAtauTidak(props: any) {
  const { isDisabled } = useDisableWhenDetailPath();
  return (
    <SelectYaAtauTidakNative
      {...props}
      additionalOptions={{ ...(props?.additionalOptions || {}), isDisabled }}
    />
  );
}

const ScrollButton = styled(Button)`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ScrollItemButton = styled(Nav.Link)`
  border-radius: 5rem !important;
  background-color: var(--white) !important;
  border: 1px solid var(--white) !important;
  user-select: none;

  &.active,
  &:hover {
    background-color: #0ab39c0f !important;
    border: 1px solid var(--primary) !important;
    color: var(--primary) !important;
  }
`;

export default DataPotensiDesaDetailV2;
