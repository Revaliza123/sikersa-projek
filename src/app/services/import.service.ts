import requestApi from "./api.service"

export const importFile = (
  path: string | undefined,
  params: any,
  sourceToken: any
) => {
  if (!path) return

  return requestApi().post(
    path,
    params,
    { cancelToken: sourceToken } // <-- IMPORTANT!
  )
}
