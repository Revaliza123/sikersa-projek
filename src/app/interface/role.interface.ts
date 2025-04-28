// ICON
interface IRole {
  _id: string
  createdAt: number
  createdBy: string
  description: string
  level: number
  name: string
  privileges: string
  updatedAt: number
}

export const RoleField = {
  _id: "pk",
  createdBy: "",
  description: "",
  level: null,
  name: "",
  privileges: "",
}

export type { IRole }
