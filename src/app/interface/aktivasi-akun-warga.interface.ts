interface IUserWarga {
  about: string
  address: string
  avatar: string
  createdAt: number
  email: string
  emailVerifiedAt: number
  fullname: string
  id: string
  nik: string
  password: string
  roleId: string
  phone: string
  rt: string
  rw: string
  status: string
  updatedAt: number
  username: string
  warga: boolean
  foto_1: string
}

export const AktivasiAkunWargaField = {
  _id: "pk",
  about: "",
  address: "",
  avatar: "",
  email: "",
  emailVerifiedAt: 0,
  fullname: "",
  phone: "",
  nik: "",
  password: "",
  roleId: "",
  rt: "",
  rw: "",
  status: "pending",
  username: "",
  warga: true,
  foto_1: "",
}

export type { IUserWarga }
