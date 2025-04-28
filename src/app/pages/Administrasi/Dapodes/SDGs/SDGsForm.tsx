/* eslint-disable @typescript-eslint/no-unused-vars */
import FormInputControl from "@app/components/Input/FormInputControl"
import { FormInputNIK } from "@app/components/Input/FormInputNIK"
import SelectStatic from "@app/components/Select/SelectStatic"
import { getByFieldController } from "@app/services/main.service"
import { API_PATH } from "@app/services/_path.service"
import axios from "axios"
import React, { JSX, useEffect, useMemo, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useForm, useWatch } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import { SDGKuesionerIndividu } from "./forms/KuisionerIndividuForm/SDGsKuisionerIndividuForm"
import { SDGKuesionerKeluarga } from "./forms/KuisionerKeluargaForm/SDGsKuisionerKeluargaForm"
import { SDGKuesionerRukunTetangga } from "./forms/KuisionerRukunTetanggaForm/SDGsKuisionerRukunTetanggaForm"
import { SDGKuesionerDesa } from "./forms/KuisionerDesaForm/KuisionerDesaForm"
import { useNotification } from "@app/hooks/notification.hooks"
import { useGetById } from "@app/hooks/use-get-by-id.hooks"
import { KuesionerStatus } from "./SDGsSubmitStatus"
import { deleteItem, getItem, setItem } from "@app/helper/localstorage.helper"
import { useDispatch } from "react-redux"
import { setSdgsRespondent } from "@app/store/reducers/app"

export const KUESIONER = {
  individu: "individu",
  keluarga: "keluarga",
  rukun_tetangga: "rukun_tetangga",
  desa: "desa",
}

export function SDGsForm({ afterSubmit }: any) {
  const source = axios.CancelToken.source()

  const {
    register,
    handleSubmit,
    // setValue,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm<{
    jenis_kuesioner: string
    nik?: string
    kk?: string
  }>({
    // resolver: yupResolver(validationSchema),
  })
  const [dataByNik, setDataByNik] = useState<any | null>(null)
  const [status, setStatus] = useState<any | null>(null)
  // const [jenisKuisioner, setJenisKuisioner] = useState<string>('kuesioner_individu');
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const { data: kuisionerById } = useGetById(
    `${API_PATH().sdgs}/get-one`,
    searchParams.get("id") || ""
  )
  const [page, setPage] = useState(1)

  let watchJenisKueioner = useWatch({
    control,
    name: "jenis_kuesioner",
  })

  const { dispatchNotification } = useNotification()

  const handleKuesionerStatusAction = () => {
    if (!status.isExist) {
      setPage(3)
      return
    }

    afterSubmit(status)
  }

  const handleCheckNik = (e: any) => {
    console.log("check nik", e)
    setDataByNik(e)
    dispatch(setSdgsRespondent(e))
  }

  const checkIsNikHasSubmit = async (nik: string) => {
    const path = `${API_PATH().sdgs}/check-nik-local`
    try {
      const response = await getByFieldController(
        path,
        "nik",
        nik,
        source.token
      )

      if (response.data) {
        setStatus({
          isExist: true,
          type: watchJenisKueioner,
          id: response?.data[0]?.Value,
        })
        dispatchNotification("Data sudah ada dan sedang dalam pendataan SDGs")
        setPage(2)
      } else {
        setStatus({ isExist: false, type: watchJenisKueioner })
        setPage(2)
      }
    } catch (err) {
      console.error("Error", err)
    }
  }

  const checkIsNomorKKHasSubmit = (nomorKK: string) => {
    setStatus({ isExist: false, type: watchJenisKueioner })
    setPage(3)
  }

  const handleSubmitForm = (e: any) => {
    console.log("submit", e)
    const nik = e?.nik
    const kk = e?.kk

    if (watchJenisKueioner === KUESIONER.individu) {
      checkIsNikHasSubmit(nik)
    }

    if (watchJenisKueioner === KUESIONER.keluarga) {
      // checkIsNomorKKHasSubmit(kk);
      checkIsNikHasSubmit(nik)
    }

    if (watchJenisKueioner === KUESIONER.rukun_tetangga) {
      setPage(3)
    }

    if (watchJenisKueioner === KUESIONER.desa) {
      setPage(3)
    }
  }

  // useEffect(() => {
  //   if (kuisionerById) {
  //     setDataByNik(kuisionerById);
  //     setPage(3);
  //     // setStatus({ isExist: true, type: 'kuesioner_individu'});
  //     // setJenisKuisioner('kuesioner_individu');
  //   }
  // }, [kuisionerById, searchParams]);

  useEffect(() => {
    if (getItem("sdgs")) {
      deleteItem("sdgs")
    }
  }, [])

  if (page === 1) {
    return (
      <Form noValidate onSubmit={handleSubmit(handleSubmitForm)}>
        <Form.Group className="mb-3">
          <Form.Label>Jenis Kuesioner</Form.Label>
          <SelectStatic
            control={control}
            errors={errors}
            fieldName={"jenis_kuesioner"}
            options={[
              { label: "Kuesioner Individu", value: KUESIONER.individu },
              { label: "Kuesioner Keluarga", value: KUESIONER.keluarga },
              {
                label: "Kuesioner Rukun Tetangga",
                value: KUESIONER.rukun_tetangga,
              },
              { label: "Kuesioner Desa", value: KUESIONER.desa },
            ]}
            placeholder={"Pilih jenis kuesioner"}
          />
        </Form.Group>
        <FormInputNIK
          className={`${watchJenisKueioner === KUESIONER.individu || watchJenisKueioner === KUESIONER.keluarga ? "d-block" : "d-none"}`}
          labelName={"NIK Responden"}
          required={true}
          register={register("nik")}
          isInvalid={!!errors["nik"]}
          message={errors["nik"]?.message}
          placeholder={"Masukkan NIK"}
          fieldName={"nik"}
          control={control}
          setError={setError}
          clearErrors={clearErrors}
          onCheckNik={handleCheckNik}
          path={`${API_PATH().sdgs}/check-nik`}
        />
        {/* <FormInputControl
          className={`${watchJenisKueioner === KUESIONER.keluarga ? 'd-block' : 'd-none'} mb-3`}
          labelName={'Nomor KK Responden'}
          required={true}
          register={register('kk')}
          isInvalid={!!errors['kk']}
          message={errors['kk']?.message}
          placeholder={'Masukkan nomor KK'}
        /> */}

        <Button
          className={`${watchJenisKueioner === KUESIONER.individu && !dataByNik ? "disabled" : ""}`}
          type="submit"
          variant="primary">
          Cek Kuisioner
        </Button>
      </Form>
    )
  } else if (page === 2) {
    return (
      <KuesionerStatus status={status} onAction={handleKuesionerStatusAction} />
    )
  } else {
    let form: JSX.Element
    const kuesionerType = kuisionerById
      ? kuisionerById.type
      : watchJenisKueioner

    switch (kuesionerType) {
      case KUESIONER.individu:
        form = <SDGKuesionerIndividu afterSubmit={afterSubmit} />
        break
      case KUESIONER.keluarga:
        form = <SDGKuesionerKeluarga afterSubmit={afterSubmit} />
        break
      case KUESIONER.rukun_tetangga:
        form = <SDGKuesionerRukunTetangga afterSubmit={afterSubmit} />
        break
      case KUESIONER.desa:
        form = <SDGKuesionerDesa afterSubmit={afterSubmit} />
        console.log("desa", watchJenisKueioner, form)
        break
      default:
        throw new Error("Unknown kuesioner")
    }

    return form
  }
}
