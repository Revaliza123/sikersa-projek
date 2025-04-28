export interface IMenu {
    id: any
    idParent: string
    display: string
    name: string
    path: string
    show: boolean
    search: boolean
    type: string
    group: string
    icon: string
    enabled: boolean
    seo?: {
      title: string
      description?: string
      link?: string
      image?: string
      ogType?: string
    }
    privileges: any[]
    children?: any
  }
  