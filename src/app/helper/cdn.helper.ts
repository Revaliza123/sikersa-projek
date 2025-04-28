import { getItem } from "./localstorage.helper"

export function cdnUrl(str: any) {
  return str ? process.env.CDN + str : "#"
}

export function cdnUploadDirectory({ kecamatan, kelurahan }: any) {
  const wsp = getItem("wsp")
  let folder: any =
    kecamatan && kelurahan ? { folder: `${kecamatan}/${kelurahan}` } : {}
  folder = wsp ? { folder: `${wsp?.kecamatan}/${wsp?.desa_kelurahan}` } : folder

  return {
    root: process.env.CDN_UPLOAD_MAIN_DIR,
    ...folder,
  }
}
