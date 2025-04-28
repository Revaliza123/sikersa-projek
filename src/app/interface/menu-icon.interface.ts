// ICON
interface IMenuIcon {
  id: number
  name: string
  level: 0
  privilages: string // object string
  description: string
  createdAt: string
  updatedAt: string
}

export const MenuIconField = {
  id: "",
  iconName: "",
  icon: "",
  description: "",
  type: "",
  font: "fontawesome",
  category: "regular",
}

export type { IMenuIcon }
