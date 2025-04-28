import * as Yup from "yup"

export interface IUploadLampiranFileExtend {
  nama_file?: string
  path_file?: string
}

export interface IUploadLampiranExtend {
  lampiran_lainnya: IUploadLampiranFileExtend[]
}

export const initialLampiranExtend = {
  lampiran_lainnya: [
    // {
    //   nama_file: '',
    //   path_file: '',
    // }
  ],
} as IUploadLampiranExtend

export const lampiranExtendYupSchema = {
  lampiran_lainnya: Yup.array().of(
    Yup.object().shape({
      nama_file: Yup.string(),
      path_file: Yup.string(),
    })
  ),
}
