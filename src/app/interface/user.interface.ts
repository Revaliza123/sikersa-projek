import moment from "moment"

interface IUser {
  _id: string
  about: string
  avatar: string
  color: string
  createdAt: number
  createdBy: string
  dateOfBirth: string
  displayName: string
  email: string
  fullname: string
  gender: string
  packagePlan: string
  password: string
  phone: string
  roleId: string
  workspaceId: string
  status: string
  updatedAt: number
  username: string
  whatsapp: string
  expiredDate: number
  multipleLogin: boolean
  lifetime: boolean
}

export const UserField = {
  _id: "pk",
  about: "",
  avatar: "",
  color: "#5E5CE6",
  createdBy: "",
  displayName: "",
  email: "",
  fullname: "",
  gender: "male",
  password: "",
  phone: "",
  roleId: "",
  workspaceId: "",
  status: "active",
  username: "",
  whatsapp: "",
  expiredDate: moment().add(1, "d").format("YYYY-MM-DD[T]HH:mm"),
  multipleLogin: false,
  lifetime: false,
}

export type { IUser }
