export interface IIconSizing {
  width?: any
  height?: any
}

// ICON
interface IIcon {
  _id: number
  name: string
  image: string // object string
  createdAt: string
  updatedAt: string
}

export const IconField = {
  _id: "pk",
  name: "",
  image: "",
}

export type { IIcon }
