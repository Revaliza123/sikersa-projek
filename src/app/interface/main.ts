// USERS
export interface IUser {
  id: string
  role: string
  username: string
  password: string
  fullname: string
  gender: TGender
  email: string
  phone: string
  telegram: string
  about: string
  avatar: string
  status: string
  color: string
  createdAt: string
  updatedAt: string
  rt: number
  rw: number
  nik: string
  address: string
}

// USER ROLE
export interface IRole {
  id: string
  name: string
  description: string
  level: number
  privileges: string
  createdAt: string
  updatedAt: string
}

// WORKSPACE / GROUP PROJECT
export interface IWorkspace {
  id: string
  name: string // Asset Management System, Information Admiralty System
  description: string
  image: string
  pic: string
  color: string
  alias: string
  createdAt: string
  updatedAt: string
  totalProject: number
}

export interface IFormDataContent {
  onCancel?: any
}
// TYPES
export type TGender = "male" | "female"
