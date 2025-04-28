import { notificationTemplate } from "@app/helper/notificationTemplate"
import { addNotification } from "@app/store/notification/notification.action"
import { useDispatch } from "react-redux"

export function useNotification() {
  const dispatch = useDispatch()

  const dispatchNotification = (
    msg: string | string[] = "",
    type: string = "",
    other = {}
  ) => {
    const notification = notificationTemplate(msg, type, other)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }

  return { dispatchNotification }
}
