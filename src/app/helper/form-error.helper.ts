import { addNotification } from "@app/store/notification/notification.action"
import { get, isArray, isPlainObject } from "lodash"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { notificationTemplate } from "./notificationTemplate"
import { replaceAll } from "./string.helper"

export function useErrorForm() {
  const dispatch = useDispatch()
  const [error, setError] = useState<any | null>(null)

  const dispatchNotification = (msg: any = "", type: string = "") => {
    const notification = notificationTemplate(msg, type)
    dispatch(
      addNotification({
        ...notification,
        title: "Form Tidak Valid",
        message: msg,
        type: type,
      })
    )
  }

  useEffect(() => {
    if (error) {
      let errors = []
      console.log(error)

      for (let field in error) {
        const field2 = error[field]
        if (isPlainObject(field2) && get(field2, "ref") == undefined) {
          Object.keys(field2)?.map((v) => {
            errors.push(`${replaceAll(v, { _: " " })} ${field2?.v?.message}`)
          })
        } else if (isArray(field2)) {
          const field2Arr = error[field]
          field2Arr?.map((fv: any) => {
            const field2ArrObjectValue = fv
            Object.keys(field2ArrObjectValue)?.map((v) => {
              errors.push(
                `${replaceAll(v, { _: " " })} ${
                  field2ArrObjectValue[v]["message"]
                }`
              )
            })
          })
        } else {
          errors.push(
            `${replaceAll(field, { _: " " })} ${error[field]["message"]}`
          )
        }
      }
      dispatchNotification(errors, "danger")
    }

    return () => {
      setError(null)
    }
  }, [error])

  return { onErrorForm: setError }
}
