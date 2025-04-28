import React, { useEffect, useState } from "react"
import { Row } from "react-bootstrap"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import {
  getByIdController,
  postByController,
  putByController,
} from "@app/services/main.service"
import { getObjectKeys } from "@app/helper/object.helper"
import { notificationTemplate } from "@app/helper/notificationTemplate"
import { addNotification } from "@app/store/notification/notification.action"
import {
  get,
  isArray,
  isBoolean,
  isObject,
  isPlainObject,
  pick,
  pickBy,
  size,
} from "lodash"
import { setCallbackForm, setLoading } from "@app/store/reducers/ui"
import moment from "moment"
import { JSONtoString, stringToJSON } from "@app/helper/data.helper"

/**
 * 
 * @param param0 CATATAN
 * @returns 
 * 1. Untuk data array di pemanggilan <FormData> tambahkan config berikut (DI FIELDS DEFAULT WAJIB DI TAMBAHAN ARRAY OBJECT DEFAULT VALUE NYA)
 * - satu control array
 * <FormData
    ...
    append={append}
   - multi array
   <FormData
    ...
    append={{ahli_waris:append}}
 */
function FormData({
  classContainer = "ms-md-0",
  children,
  setError,
  setValue,
  append,
  dataParams,
  fields = {},
  path,
  onLoading,
  customLabel = "",
  overrideType,
  isModal = true,
  batch = false,
  ids = "id",
  onGetDataResult,
  fieldParent = "data",
  idParams = true,
  redirectSubmitted = true,
  hideTitle = true,
  endpoint = {
    getAll: "/get-one",
  },
  additionalParams = null,
  onAfterSubmitted = () => void 0,
}: IFormData) {
  const source = axios.CancelToken.source()
  const navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const { activePage } = useSelector((state: any) => state.ui)
  const { workspace } = useSelector((state: any) => state.app)

  const { id } = useParams()

  const dispatch = useDispatch()
  const label = customLabel == "state" ? activePage?.display : ""

  const [loadingForm, setLoadingForm] = useState<boolean>(false)

  const getIdParams = id || searchParams.get(ids)

  /** INIT */
  useEffect(() => {
    if (getIdParams) getDataById()
    else initDataForm()

    return () => {
      source.cancel("Request Canceled")
    }
  }, [getIdParams])

  useEffect(() => {
    if (dataParams) {
      const paramsStr: string = JSON.stringify(dataParams)
      const paramsParsed: any = JSON.parse(paramsStr)
      const f: any = JSON.parse(JSON.stringify(fields))
      const paramsMapped: any = mappingParams({
        fields: f,
        dataParams: paramsParsed,
      })
      const paramsResult = {
        ...paramsMapped,
        workspaceId: paramsMapped?.workspaceId
          ? paramsMapped?.workspaceId
          : workspace?._id,
      }
      const apiParams = batch ? [paramsResult] : paramsResult

      upsertData(apiParams)
    }
  }, [dataParams])

  useEffect(() => {
    if (onLoading) {
      onLoading(loadingForm)
    }
    dispatch(setLoading(loadingForm)) // GLOBAL LOADING
  }, [loadingForm])

  /** PUT / UPDATE DATA REQUEST */
  const upsertData = async (params: any) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    setLoadingForm(true)

    params = pickBy(params, (value) => value != "null")

    if (additionalParams) {
      params = {
        ...params,
        ...additionalParams,
      }
    }

    const ID = id || searchParams.get(ids)

    try {
      const resp = ID
        ? await putByController(path + "/update", params, source.token)
        : await postByController(path + "/add", params, source.token)

      setLoadingForm(false)
      dispatchNotification(
        `Sukses ${ID ? "mengubah data" : "menambah data"} ${label}`,
        "success"
      )

      /** IF REDIRECT / DISMISSED TRUE */
      if (redirectSubmitted) {
        if (!isModal) {
          navigate(-1)
        } else if (searchParams.has(ids)) {
          searchParams.delete(ids)
          setSearchParams(searchParams)
        } else {
          if (onAfterSubmitted && typeof onAfterSubmitted === "function") {
            onAfterSubmitted()
          }
        }
      }
      dispatch(setCallbackForm(resp))
      if (!ID) initDataForm()
    } catch (err: any) {
      const errValidation = err?.response?.data?.data
      if (errValidation && err?.response?.status == 400) {
        errorValidationHandling(errValidation)
      } else {
        dispatchNotification(
          `Gagal ${
            id || searchParams.get(ids) ? "mengubah data" : "menambah data"
          } ${label}`,
          "danger"
        )
      }
      setLoadingForm(false)
    }
  }

  /** GET EDIT DATA */
  const getDataById = async () => {
    setLoadingForm(true)

    try {
      const req: any = await getByIdController(
        path + (endpoint?.getAll ? endpoint?.getAll : ""),
        id || searchParams.get(ids),
        source.token,
        idParams
      )
      initDataForm(fieldParent ? get(req, fieldParent) : req)
      setLoadingForm(false)
      if (onGetDataResult) {
        onGetDataResult(fieldParent ? get(req, fieldParent) : req)
      }
    } catch {
      setLoadingForm(false)
    }
  }

  /** INIT DATA FORM EDIT OR NEW DATA */
  const initDataForm = (data: any = undefined) => {
    const valueData =
      (id || searchParams.get(ids)) && data
        ? pick(data, getObjectKeys(fields))
        : fields
    Object.keys(valueData).map((field: any) => {
      const overrideCheck = get(overrideType, field)
      const valueOrigin = valueData[field]
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
      if (isArray(v) && append) {
        console.log(append)
        if (isObject(append) && append.hasOwnProperty(field)) {
          const ap: any = append
          const appendByField: any = ap[field]
          v?.forEach((arrValue: any) => {
            appendByField(arrValue)
          })
        } else {
          v?.forEach((arrValue: any) => {
            append(arrValue)
          })
        }
      } else {
        setValue(field, v)
      }
    })
  }

  /** NOTIFICATION HANDLER */
  const dispatchNotification = (msg: any = "", type: string = "") => {
    const notification = notificationTemplate(msg, type)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }

  const errorValidationHandling = (formInvalid: any) => {
    if (
      typeof formInvalid == "object" &&
      formInvalid instanceof Array == false
    ) {
      let errorsMessage: any = []
      Object.entries(formInvalid).forEach(([key, value]) => {
        const valueArr: any = value
        errorsMessage.push(valueArr?.join(", "))
        setError(key, {
          type: "manual",
          message: valueArr.join(" "),
        })
      })

      dispatchNotification(errorsMessage, "danger")
    }
  }

  return (
    <>
      {isModal ? (
        children
      ) : (
        <Row className="animate__animated animate__fadeIn">
          <div className="col-md-12">
            <div className={`${classContainer}`}>
              {!hideTitle && (
                <>
                  <h5 className="py-1">
                    <i className="fal fa-info-circle"></i>{" "}
                    {id ? "Ubah" : "Tambah"} {label}
                  </h5>
                  <hr />
                </>
              )}
              <div className="row">{children}</div>
            </div>
          </div>
        </Row>
      )}
    </>
  )
}

interface IFormData {
  children?: any
  setError: any
  setValue: any
  append?: any
  dataParams: any
  fields: any
  path: any
  onLoading?: any
  customLabel?: any
  overrideType?: any
  selected?: any
  isModal?: boolean
  batch?: boolean
  ids?: any
  idParams?: boolean
  fieldParent?: string
  onGetDataResult?: any
  classContainer?: any
  hideTitle?: boolean
  redirectSubmitted?: boolean
  endpoint?:
    | {
        getAll: "get-one" | string
      }
    | any
  additionalParams?: Record<string, unknown> | null
  onAfterSubmitted?: () => void
}

const checkingValueParams = ({
  fields,
  dataParams,
  field,
  fieldType,
  valueType,
  fieldTypeValue,
  v,
}: any) => {
  let t =
    fieldType == "number"
      ? valueType == "boolean"
        ? v
          ? 1
          : 0
        : parseFloat(v ? v : 0)
      : v
  t =
    field?.includes("tanggal") && v != "" && v != null
      ? moment(v).format("YYYY-MM-DD")
      : t
  t = fieldType == "boolean" ? (t ? true : false) : t
  t = fieldType == "string" ? `${t}` : t
  t = isPlainObject(field) && fieldTypeValue == null && v == "" ? null : t
  t = isPlainObject(v) ? mappingParams({ fields, dataParams }) : t

  // kalau data nya array object. kalau default value tolong di isi array object default nya juga
  if (isArray(v) && size(v) > 0) {
    const fieldsArr = get(fields, "0")
    t = isPlainObject(fieldsArr)
      ? v?.map((va: any) => {
          return mappingParams({ fields: fieldsArr, dataParams: va })
        })
      : t
  }
  t = t == "pk" ? undefined : t
  return t
}

export const mappingParams = ({ fields, dataParams }: any) => {
  let params: any = stringToJSON(JSONtoString(fields))
  Object.keys(fields).map((field: any) => {
    const v: any = get(dataParams, field)
    const fieldTypeValue = get(fields, field)
    const fieldType = typeof fieldTypeValue
    const valueType = typeof v
    const vf = checkingValueParams({
      fields: fieldTypeValue,
      dataParams: v,
      field,
      fieldType,
      valueType,
      fieldTypeValue,
      v,
    })
    params[field] = vf
  })
  return params
}

export default FormData
