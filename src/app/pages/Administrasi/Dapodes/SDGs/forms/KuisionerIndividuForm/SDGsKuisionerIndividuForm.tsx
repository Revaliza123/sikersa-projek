/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ISDGSKuesioner,
  ISDGSKuesionerIndividuDetail,
  ISDGSKuisionerKeluargaDetail,
  SDGsKuesionerIndividuField,
} from "@app/interface/sdgs-kuesioner.interface"
import { postByController, putByController } from "@app/services/main.service"
import { API_PATH } from "@app/services/_path.service"
import axios from "axios"
import { get, isBoolean, lowerCase } from "lodash"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { useNotification } from "../../../../../../hooks/notification.hooks"
import { WizardForm } from "../WizardForm/WizardForm"
import { Step1Form } from "./Step1Form"
import { Step2Form } from "./Step2Form"
import { Step3Form } from "./Step3Form"
import { Step4Form } from "./Step4Form"
import { Step5Form } from "./Step5Form"
import { Step6Form } from "./Step6Form"
import { Step7Form } from "./Step7Form"
import { Step8Form } from "./Step8Form"
import { Step9Form } from "./Step9Form"
import { Step10Form } from "./Step10Form"
import { Step0Form } from "./Step0Form"

const FIELDS_MUST_BE_DISABLED = [
  "rt",
  "rw",
  "desa",
  "nomor_kartu_keluarga",
  "nik",
  "nama",
  "jenis_kelamin",
  "tempat_lahir",
  "tanggal_lahir",
  "status_pernikahan",
  "agama",
  "suku_bangsa",
  "warganegara",
  "usia",
  "nomor_hp",
]

const initialData = SDGsKuesionerIndividuField

export function SDGKuesionerIndividu({ afterSubmit = null }: any) {
  const source = axios.CancelToken.source()
  const methods = useForm<ISDGSKuesionerIndividuDetail>({
    // defaultValues: SDGsKuesionerIndividuField.sdgs,
    // resolver: yupResolver(validationSchema),
  })
  const { workspace } = useSelector((state: any) => state.app)
  const { loggedInUser } = useSelector((state: any) => state.auth)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)
  // const [path] = useState(`${API_PATH().sdgs}`);

  const [disables, setDisables] = useState<any[]>([])

  const [dataParams, setDataParams] = useState<any>()
  const [dataSelected, setDataSelected] = useState<any>()

  const [searchParams, setSearchParams] = useSearchParams()
  const { dispatchNotification } = useNotification()
  const { sdgsRespondent, sdgsAccount } = useSelector((state: any) => state.app)

  const errorValidationHandling = (formInvalid: any) => {
    if (
      typeof formInvalid == "object" &&
      formInvalid instanceof Array == false
    ) {
      Object.entries(formInvalid).forEach(
        ([key, value]: [key: any, value: any]) => {
          const valueArr: any = value
          methods.setError(key, {
            type: "manual",
            message: valueArr.join(" "),
          })
        }
      )
    }
  }

  const handleSubmitForm = async (e: any) => {
    const id = searchParams.get("id") ? searchParams.get("id") : null
    const path = id
      ? `${API_PATH().sdgs}/update`
      : `${API_PATH().sdgs}/add-individu`
    let params: ISDGSKuesioner<ISDGSKuisionerKeluargaDetail>
    const { username, password } = sdgsAccount

    if (id) {
      params = {
        ...dataSelected,
        sdgs: {
          ...dataSelected.sdgs,
          ...(e || {}),
        },
      }
    } else {
      params = {
        createdBy: loggedInUser.username,
        nikId: loggedInUser._id, // from current login user
        workspaceId: workspace._id,
        username: username,
        password: password,
        sdgs: {
          ...e,
        },
      }
    }

    console.log("submittoserver", params, e)

    try {
      const res = id
        ? await putByController(path, params, source.token)
        : await postByController(path, params, source.token)

      setLoading(false)
      dispatchNotification(`Sukses ${id ? "ubah" : "menambah"} data`, "success")

      if (afterSubmit && typeof afterSubmit === "function") {
        afterSubmit()
      }
    } catch (err: any) {
      const errValidation = err?.response?.data?.data
      console.log(err?.response?.data, err?.response)
      if (errValidation && err?.response?.status == 400) {
        errorValidationHandling(errValidation)
      } else {
        dispatchNotification(
          `Gagal  ${id ? "ubah" : "menambah"} data`,
          "danger"
        )
      }
      setLoading(false)
    }
  }

  const initDataForm = (valueObject: any) => {
    ;[
      ["rt", get(valueObject, "umum.rt")],
      ["rw", get(valueObject, "umum.rw")],
      ["desa", get(valueObject, "umum.dusun")],
      ["nomor_kartu_keluarga", get(valueObject, "kelahiran.nomor_kk")],
      ["nik", get(valueObject, "umum.nik")],
      ["nama", get(valueObject, "umum.nama_lengkap")],
      ["jenis_kelamin", get(valueObject, "umum.jenis_kelamin")],
      ["tempat_lahir", get(valueObject, "kelahiran.tempat_lahir")],
      ["tanggal_lahir", get(valueObject, "kelahiran.tanggal_lahir")],
      ["status_pernikahan", get(valueObject, "nikah_cerai.status_pernikahan")],
      ["agama", lowerCase(get(valueObject, "umum.agama"))],
      ["suku_bangsa", get(valueObject, "umum.suku")],
      ["warganegara", get(valueObject, "umum.kewarganegaraan")],
      ["usia", get(valueObject, "umum.umur")],
      ["nomor_hp", get(valueObject, "umum.no_telepon_hp")],
    ]
      .filter(([f, v]) => Boolean(v))
      .forEach(([field, value]) => {
        methods.setValue(field, value)
        ;(initialData as any)[field] = value
        // setDisables((prev: any[]) => [...prev, field]);
      })
  }

  const initDataEditForm = (data: any) => {
    setDataSelected(data)
    const sdgs = data.sdgs
    Object.keys(sdgs).forEach((field: any) => {
      const overrideCheck = get({}, field)
      const valueOrigin = sdgs[field]
      let v = valueOrigin
      const boolValue = {
        true: 1,
        false: 0,
      }
      if (
        valueOrigin !== "" &&
        valueOrigin !== null &&
        valueOrigin !== undefined
      ) {
        const dateFormat = moment(valueOrigin)
        v =
          overrideCheck == "string"
            ? `${isBoolean(valueOrigin) ? get(boolValue, `${valueOrigin}`) : valueOrigin}`
            : valueOrigin
        v = overrideCheck == "int" ? parseInt(valueOrigin) : v
        v = overrideCheck == "float" ? parseFloat(valueOrigin) : v
        v = overrideCheck == "date" ? dateFormat.format("YYYY-MM-DD") : v
        v =
          overrideCheck == "datetime"
            ? dateFormat.format("YYYY-MM-DD[T]HH:mm")
            : v
        v =
          overrideCheck == "datetimefull"
            ? dateFormat.format("YYYY-MM-DD[T]HH:mm:ss")
            : v
      }
      methods.setValue(field, v)
      if (FIELDS_MUST_BE_DISABLED.indexOf(field) > -1) {
        setDisables((prev: any[]) => [...prev, field])
      }
    })
  }

  // fill the form from check-nik endpoint data
  useEffect(() => {
    const id = searchParams.get("id")
    if (id && sdgsRespondent) {
      initDataEditForm(sdgsRespondent)
    } else if (sdgsRespondent) {
      initDataForm(sdgsRespondent)
    }
  }, [sdgsRespondent])

  // set location form from current workspace
  useEffect(() => {
    const {
      desakelurahan_details: {
        nama_kelurahan,
        nama_kecamatan,
        nama_kota,
        nama_provinsi,
      },
    } = workspace
    methods.setValue("provinsi", nama_provinsi)
    methods.setValue("kabupaten_kota", nama_kota)
    methods.setValue("kecamatan", nama_kecamatan)
    methods.setValue("desa", nama_kelurahan)
  }, [])

  return (
    <WizardForm initialFormData={initialData} onSubmit={handleSubmitForm}>
      <WizardForm.Pages>
        <WizardForm.Page>
          <Step0Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step1Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step2Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step3Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step4Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step5Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step6Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step7Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step8Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step9Form />
        </WizardForm.Page>
        <WizardForm.Page>
          <Step10Form />
        </WizardForm.Page>
      </WizardForm.Pages>
    </WizardForm>
  )
}
