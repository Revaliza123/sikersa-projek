interface IModalData {
  show?: boolean
  approved?: boolean
  size?: "sm" | "md" | "lg" | "xl" | any
  icon?: string
  title?: string
  prefixTitle?: boolean
  description?: string
  textApproved?: string
  classApproved?: string
  textDecline?: string
  scrollable?: boolean
  formulir?: string
  type?: string
}

export type { IModalData }
