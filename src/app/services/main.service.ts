import requestApi from "./api.service"

const getAll = (path: any = null, params: any = {}, sourceToken: any) => {
  return requestApi().request({
    url: path,
    method: "GET",
    params: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const getByIdController = (
  controller: any,
  id: any,
  sourceToken: any,
  idParams = true
) => {
  return requestApi().request({
    url: `${controller}${idParams ? "?id=" : "/"}${id}`,
    method: "GET",
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const getByFieldController = (
  controller: any,
  field: any,
  id: any,
  sourceToken: any,
  idParams = true
) => {
  return requestApi().request({
    url: `${controller}${idParams ? `?${field}=` : "/"}${id}`,
    method: "GET",
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const getAllByController = (
  controller = "",
  params: any = { page: 1, limit: 1000 },
  sourceToken: any
) => {
  return requestApi().request({
    url: `${controller}`,
    method: "POST",
    params: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const postByController = (controller = "", params: any, sourceToken: any) => {
  return requestApi().post(
    `${controller}`,
    params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  )
}

const downloadBlob = ({ path, params, sourceToken }: IServiceParams) => {
  return requestApi(["headers", "data"]).request({
    url: path,
    method: "POST",
    responseType: "blob",
    data: params,
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

const putByController = (controller = "", params: any, sourceToken: any) => {
  return requestApi().put(
    `${controller}`,
    params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  )
}

const deleteByController = (controller = "", id: any, sourceToken: any) => {
  return requestApi().request({
    url: `${controller}?id=${id}`,
    method: "DELETE",
    params: {},
    cancelToken: sourceToken, // <-- IMPORTANT!
  })
}

interface IServiceParams {
  path: string
  params?: any
  sourceToken: any
  id?: any
}

export {
  getAll,
  getAllByController,
  getByIdController,
  getByFieldController,
  postByController,
  putByController,
  deleteByController,
  downloadBlob,
}
