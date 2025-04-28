import { useNotification } from "@app/hooks/notification.hooks"
import { downloadBlob } from "@app/services/main.service"
import axios from "axios"
import fileDownload from "js-file-download"
import { get } from "lodash"
import moment from "moment"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function createDownloadable(url: string, useDefaultBaseUrl = true) {
  const endpoint = useDefaultBaseUrl ? `${process.env.API_BASE_URL}${url}` : url
  const link = document.createElement("a")
  link.href = endpoint
  link.target = "_blank"
  link.click()
}

export async function createDownloadableBlob({
  url,
  payload,
  source = axios.CancelToken.source(),
  setIsLoading = () => void 0,
  notify = () => void 0,
}: {
  url: string
  payload: any
  source?: any
  setIsLoading?: (v: boolean) => void
  notify?: (v: string, t: string) => void
}) {
  await new Promise((resolve) => setTimeout(resolve, 300))

  setIsLoading(true)
  try {
    let req: any = await downloadBlob({
      path: url,
      params: payload ? payload : {},
      sourceToken: source.token,
    })
    const dataBlob = req?.data
    const headers = req?.headers
    let content: string = headers["content-disposition"]
    const filename = content
      .replace("attachment; filename=", "")
      .replaceAll('"', "")
      .split(".")

    fileDownload(
      dataBlob,
      `${get(filename, "0")}_${moment().unix()}.${get(filename, "1")}`
    )
    setIsLoading(false)
  } catch (err: any) {
    // catch here
    console.error(err)
    setIsLoading(false)
    notify(`${err?.message}: ${err?.response?.statusText}`, "danger")
  }
}

type DownloadPayloadOptions = {
  filter?: Record<string, any>[]
  searchBy?: string[]
  search?: string
  field?: string[]
  app?: string
}

const initialDownloadPayloadOptions = {
  filter: [],
  searchBy: [],
  search: "",
  field: [],
} as DownloadPayloadOptions

export function useDownloadableWithPayload(
  options: DownloadPayloadOptions = initialDownloadPayloadOptions
) {
  const { activeFilters, searchValue } = useSelector((state: any) => state.ui)
  const { workspace } = useSelector((state: any) => state.app)
  const source = axios.CancelToken.source()
  const [isLoading, setIsLoading] = useState(false)
  const { dispatchNotification } = useNotification()

  const createUrlAndPayload = (
    baseUrl: string,
    opts: DownloadPayloadOptions
  ) => {
    const defaultFilter = [
      {
        field: "workspaceId",
        value: workspace._id,
      },
      ...(opts.filter || []),
    ]
    const result = {
      url: `${baseUrl}?app=${opts.app || process.env.SCOPE}`,
      payload: {
        orderBy: "updated_at",
        order: "DESC",
        search: opts.search || searchValue || "",
        searchBy: opts.searchBy || [],
        filter: defaultFilter,
      } as Record<string, any>,
      source,
      setIsLoading,
      notify: dispatchNotification,
    }

    if (activeFilters) {
      result["payload"]["filter"] = [
        ...defaultFilter,
        ...activeFilters?.filters?.filter,
        activeFilters?.filters?.range,
      ].filter((f) => f != null || f != undefined)
    }

    if ("field" in opts) {
      result["payload"]["field"] = opts.field
    }

    return result
  }

  const downloadFile = (baseUrl: string, otherOptions = {}) => {
    const urlAndPayload = createUrlAndPayload(
      baseUrl,
      Object.assign({}, options, otherOptions)
    )
    createDownloadableBlob(urlAndPayload)
  }

  useEffect(() => {
    return () => {
      source.cancel()
    }
  }, [])

  return {
    downloadFile,
    isDownloadFileLoading: isLoading,
  }
}
