import { Button, ButtonCancel } from "@app/components";
import FormInputControlNative from "@app/components/Input/FormInputControl";
import { DFlex } from "@app/styled/flex.styled";
import React, { Fragment, useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useFieldArray, useForm } from "react-hook-form";
import FormData from "@app/modules/Form/FormData";
import { API_PATH } from "@app/services/_path.service";
import { useErrorForm } from "@app/helper/form-error.helper";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  DataPotensiDesaAccordion,
  DataPotensiDesaAccordionBody,
  DataPotensiDesaAccordionHeader,
  DataPotensiDesaAccordionItem,
} from "./DataPotensiDesaStyled";
import { DataPotensiDesaField } from "./DataPotensiDesaField";
import { IFormDataContent } from "@app/interface/main";
import TrashIcon from "@app/components/Icons/TrashIcon";
import {
  SelectAdaAtauTidak as SelectAdaAtauTidakNative,
  SelectBulan as SelectBulanNative,
  SelectAktifAtauPasif as SelectAktifAtauPasifNative,
  SelectAktifAtauTidakAktif as SelectAktifAtauTidakAktifNative,
  SelectBaikAtauRusak as SelectBaikAtauRusakNative,
  SelectBaikAtauTidak as SelectBaikAtauTidakNative,
  SelectKesuburanTanah as SelectKesuburanTanahNative,
  SelectKualitasAirMinum as SelectKualitasAirMinumNative,
  SelectPemerintahSwastaSwadaya as SelectPemerintahSwastaSwadayaNative,
  SelectPendidikan as SelectPendidikanNative,
  SelectPotensi as SelectPotensiNative,
  SelectTerdaftarAtauTerakreditasi as SelectTerdaftarAtauTerakreditasiNative,
  SelectYaAtauTidak as SelectYaAtauTidakNative,
} from "./DataPotensiDesaSelects";
import { DataPotensiSumberDayaAlam } from "./forms/DataPotensiSumberDayaAlam";
import { DataPotensiSumberDayaManusia } from "./forms/DataPotensiSumberDayaManusia";
import { DataPotensiKelembagaan } from "./forms/DataPotensiKelembagaan";
import { DataPotensiSarana } from "./forms/DataPotensiSarana";
// import FormInputMaskNative from "@app/components/Input/FormInputMask"
import FormInputGroupNative from "@app/components/Input/FormInputGroup";
import { useDisableWhenDetailPath } from "./hooks/useDisableDetail";

// const validationSchema = Yup.object().shape({

// });

const DataPotensiDesaForm = ({ onCancel }: IFormDataContent) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataParams, setDataParams] = useState<any>();
  const [dataSelected, setDataSelected] = useState<any>();

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

  const handleCancel = () => {
    if (onCancel && typeof onCancel === "function") {
      onCancel();
    } else if (activeForm === "informasi-umum") {
      navigate("..", { relative: "route" });
    } else {
      setActiveForm("informasi-umum");
    }
  };

  // send current login username when update buku induk
  useEffect(() => {
    if (id || searchParams.get("id")) {
      setAdditionalParams({ edited_by: loggedInUser.username });
    }
  }, [id, searchParams.get("id")]);

  const handleSelectForm = (formKey: string) => {
    console.log("select form", formKey);
    setActiveForm(formKey);
  };

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

  // clean query param id
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
        onLoading={setLoading}
        onGetDataResult={setDataSelected}
        additionalParams={additionalParams}
        onAfterSubmitted={handleAfterSubmit}
      >
        <Form noValidate onSubmit={handleSubmit(onSubmitForm, onErrorForm)}>
          <Modal.Body>
            {/* INFORMASI UMUM DESA */}

            <div
              className={activeForm === "informasi-umum" ? "d-block" : "d-none"}
            >
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
                                register={register(`sumber_data.${idx}.value`)}
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
                                sumberDataArray.append({ nama: "", value: "" })
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

              <PotensiSectionList
                onClick={(e: string) => handleSelectForm(e)}
              />
            </div>

            {/* SUMBER DAYA ALAM */}
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

            {/* KELEMBAGAAN */}
            <DataPotensiKelembagaan
              activeForm={activeForm}
              activeTabKelembagaan={activeTabKelembagaan}
              control={control}
              errors={errors}
              register={register}
              setActiveTabKelembagaan={setActiveTabKelembagaan}
            />

            {/* SARANA DAN PRASARANA */}
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

          <Modal.Footer className="px-0">
            <DFlex className="w-100 justify-content-between align-items-center">
              <div>
                <Button variant="outline-primary" onClick={handleCancel}>
                  Kembali ke awal
                </Button>
              </div>
              {!disabledWhenDetail ? (
                <div>
                  <ButtonCancel onClick={handleCancel} />
                  <Button
                    type="submit"
                    variant="primary btn-submit"
                    isLoading={loading}
                  >
                    {dataSelected?._id ? "Simpan Perubahan" : "Simpan"}
                  </Button>
                </div>
              ) : null}
            </DFlex>
          </Modal.Footer>
        </Form>
      </FormData>
    </>
  );
};

const POTENSI_DESA_FORMS = [
  {
    title: "Sumber Daya Alam",
    description:
      "Meliputi pertanian, perkebunan, kehutanan, peternakan, perikanan, sumber daya air hingga wisata.",
    slug: "sumber-daya-alam",
    isEnabled: true,
  },
  {
    title: "Sumber Daya Manusia",
    description:
      "Meliputi tenaga kerja, mata pencaharian pokok, kewarganegaraan dan demografi penduduk lainnya.",
    slug: "sumber-daya-manusia",
    isEnabled: true,
  },
  {
    title: "Kelembagaan",
    description:
      "Meliputi lembaga perekonomian, pendidikan, sosial, keamanaan, pemerintahan hingga partai politik.",
    slug: "kelembagaan",
    isEnabled: true,
  },
  {
    title: "Sarana dan Prasarana",
    description: "Meliputi kesehatan, pendidikan, energi, hiburan.",
    slug: "sarana-dan-prasarana",
    isEnabled: true,
  },
];

function PotensiSectionList({ onClick }: { onClick: any }) {
  const handleNavigate = (item: any) => {
    if (onClick && typeof onClick === "function") {
      onClick(item.slug);
    }
  };
  const { isDisabled: disabledWhenDetail } = useDisableWhenDetailPath();

  return (
    <div>
      <h5 className="fw-bolder my-2">Potensi Desa</h5>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        {POTENSI_DESA_FORMS.map((form) => (
          <div
            key={form.slug}
            style={{
              background: form.isEnabled ? "var(--white)" : "var(--black-100)",
              padding: "1.5rem",
              borderRadius: "0.5rem",
            }}
          >
            <h6 className="fw-bolder mb-3" style={{ fontSize: "1.125rem" }}>
              {form.title}
            </h6>
            <p className="mb-1" style={{ minHeight: "10rem" }}>
              {form.description}
            </p>
            {/* <Badge color='primary' className='mb-2 text-white'>Sudah terisi</Badge> */}
            {form.isEnabled ? (
              <a
                className="d-block text-primary cursor-pointer"
                onClick={() => handleNavigate(form)}
              >
                {disabledWhenDetail ? "Lihat Form" : "Isi Form"}
              </a>
            ) : (
              <p className="mb-0">Isi Form</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

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

export default DataPotensiDesaForm;
