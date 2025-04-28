import requestApi from "./api.service"

const deleteImage = (url: any, sourceToken: any) => {
  return requestApi().post(
    `/cdn-upload/delete-image?url=${url}`,
    {},
    { cancelToken: sourceToken } // <-- IMPORTANT!
  )
}

const uploadImage = (params: any, sourceToken: any) => {
  return requestApi().post(
    `/cdn-upload/upload-image`,
    params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  )
}

const uploadFile = (params: any, sourceToken: any) => {
  return requestApi().post(
    `/cdn-upload/upload-file`,
    params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  )
}

export { deleteImage, uploadImage, uploadFile }
