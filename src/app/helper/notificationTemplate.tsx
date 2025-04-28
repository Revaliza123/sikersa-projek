import { v4 as uuid } from "uuid"
import moment from "moment"

export function notificationTemplate(
  message: string | string[] = "",
  state: string = "success",
  other: any = {}
): NotificationTempalate {
  const notification: any = {
    id: uuid(),
    title: "Notification",
    message: "",
    time: moment().valueOf(),
    read: false,
    state: "",
  }

  return { ...notification, message: message, state: state, ...other }
}

interface NotificationTempalate {
  id: any
  title: string
  message: string
  time: any
  read: boolean
  state: string
  type: string
}
