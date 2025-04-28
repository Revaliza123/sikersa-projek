import moment from "moment"

interface IStyleWorksapce {
  applicationName?: string
  colorTheme?: "sidesa" | string
  backgroundStyle?: string
  loginStyle?: string
  appLandingStyle?: string
  favicon?: string
  logo?: string
  fontSize?: "mini" | "tiny" | "small" | "medium" | "large" | "big" | "huge"
  shapeStyle?: "square" | "rounded" | "circle"
  loginBackground?: string
  loginSlider?: boolean
}

interface IWorkspace {
  _id: string
  createdAt?: number
  createdBy?: string
  description?: string
  expired?: string
  isCustom: boolean
  maxCase?: number
  maxUser: number
  name: string
  alias: string
  domain: string
  application: IStyleWorksapce
  type?: string
  updatedAt?: number
  alamat?: string
  provinsi: string
  kabkota: string
  kecamatan: string
  desa_kelurahan: string
  kodePos?: string
  email?: string
  fax?: string
  logo?: string
  website?: string
  telp?: string
}

export const WorkspaceField: IWorkspace = {
  _id: "pk",
  createdAt: 0,
  createdBy: "",
  description: "",
  expired: moment().add(1, "d").format("YYYY-MM-DD[T]HH:mm"),
  isCustom: false,
  maxCase: 1,
  maxUser: 1,
  name: "",
  alias: "",
  domain: "",
  application: {
    loginSlider: true,
    applicationName: "siDesa",
    colorTheme: "sidesa",
    backgroundStyle: "bg-1",
    loginStyle: "login-1",
    favicon: "",
    logo: "",
    fontSize: "large",
    shapeStyle: "rounded",
    appLandingStyle: "landing-1",
    loginBackground: "",
  },
  alamat: "",
  provinsi: "",
  kabkota: "",
  kecamatan: "",
  desa_kelurahan: "",
  website: "",
  email: "",
  fax: "",
  logo: "",
  kodePos: "",
  telp: "",
  type: "lifetime",
}

export type { IWorkspace }
