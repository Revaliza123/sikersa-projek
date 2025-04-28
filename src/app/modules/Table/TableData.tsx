import TopBarLoader from "@app/components/Loader/TopBarLoader"
import ModalConfirm from "@app/components/Modals/ModalConfirm"
import Pagination from "@app/components/Pagination/Pagination"
import ReactTable from "@app/components/Table"
import { JSONtoString } from "@app/helper/data.helper"
import { notificationTemplate } from "@app/helper/notificationTemplate"
import { formatThousand } from "@app/helper/number.helper"
import { arrayToObject } from "@app/helper/object.helper"
import { replaceAll } from "@app/helper/string.helper" //camelToSnakeCase,
import { deleteImage } from "@app/services/cdn-upload.service"
import {
  deleteByController,
  postByController,
} from "@app/services/main.service"
import { addNotification } from "@app/store/notification/notification.action"
import {
  reloadingData,
  setActiveFilters,
  setActivePaging,
} from "@app/store/reducers/ui"
import axios from "axios"
import { get, isArray } from "lodash"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

const initFilters = {
  search: "",
  orderBy: "updated_at",
  order: "DESC",
}

function TableData({
  columnsConfig = [],
  filterParams = {},
  filterParamsOnly = false,
  respDataApi,
  rowData,
  path,
  primaryKey,
  selected,
  action,
  paging = {},
  pagingPresistance = true,
  deleteConfirmation = {},
  rowSelect = false,
  rowSelectType = "checkbox",
  selectedRows,
  searchByField = [],
  trigger,
  module = null,
  ids = "id",
  onEmpty,
  containerClass = "my-1 table table-responsive",
  styles = "default",
  pathFieldImage = undefined,
  sorting = {},
  endpoint = {
    getAll: "/get-all",
    delete: "/delete",
  },
  hiddenColumns = [],
  disableFilterWorkspaceId = false,
}: ITableData) {
  const source = axios.CancelToken.source()
  const { activePage, activeFilters, callbackForm, searchValue, pagingLimit } =
    useSelector((state: any) => state.ui)
  const { reloadData, workspace } = useSelector((state: any) => state.app)
  let [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();
  const currentPage = pagingPresistance ? searchParams.get("page") : 0
  const label = module ? module : activePage?.display

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>()
  const [noData, setNoData] = useState<boolean>(false)

  const [pagination, setPagination] = useState<any>({
    perPage: pagingLimit,
    offset: 0,
    currentPage: currentPage ? parseInt(currentPage) - 1 : 0,
    pageCount: 10,
    totalData: 0,
    marginPagesDisplayed: 2,
    pageRangeDisplayed: 1,
    ...paging,
  })

  const [modalConfirm, setModalConfirm] = useState<any>({
    show: false,
    approved: false,
    size: "sm",
    icon: "far fa-trash",
    description: `Hapus data ${label ? label : ""} ini?`,
    subDescriotion: `*Data yang telah dihapus tidak dapat dikembalikan.`,
    textApproved: "Hapus",
    classApproved: "danger",
    textDecline: "Batal",
    ...deleteConfirmation,
  })

  const [defaultSort] = useState<any>({ ...initFilters, ...sorting })
  const [filters, setFilters] = useState<any>({ ...initFilters, ...sorting })
  const [customFilters, setCustomFilters] = useState<any>({})

  /** DATA RESP */
  const [data, setData] = useState<any>([])
  const [respData, setRespData] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>(selected)
  const hiddenColumnsMemoized = useMemo(() => hiddenColumns, [hiddenColumns])

  useEffect(() => {
    if (respDataApi) respDataApi(respData)
  }, [respData])

  useEffect(() => {
    if (rowData) {
      setData(rowData)
    }
  }, [rowData])

  useEffect(() => {
    if (pagingPresistance) {
      setPagination((prevState: any) => ({
        ...prevState,
        currentPage: currentPage ? parseInt(currentPage) - 1 : 0,
      }))
    }
  }, [currentPage])

  /** GET DATA PAGINATION */
  const getAllData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    setLoading(true)
    setNoData(false)

    try {
      const searchFilter = {
        search: searchValue,
        search_by: searchByField,
      }
      const aF: any = activeFilters?.filters?.filter
      const cfF = customFilters?.filter
      const filtering = {
        filter: {
          ...(disableFilterWorkspaceId ? {} : {}),
          ...(isArray(aF) ? arrayToObject(aF) : {}),
          ...(isArray(cfF) ? arrayToObject(cfF) : {}),
        }
      }
      const range = activeFilters?.filters?.range // filtering by age_group
      const params = {
        ...filters,
        page: pagination.currentPage + 1,
        size: pagination.perPage,
        ...customFilters,
        ...filtering,
        ...searchFilter,
        range: range,
      }

      const req: any = await postByController(
        path + endpoint?.getAll,
        !filterParamsOnly ? params : customFilters,
        source.token
      )
      const results = req?.data
      const total = req?.metaData?.pagination?.totalElements
      const dataLength = results ? results.length : 0

      if (dataLength > 0) {
        let data = results.map((d: any, i: number) => {
          d.id = get(d, primaryKey)
          d.number = pagination.currentPage * pagination.perPage + (i + 1)
          return d
        })
        setRespData(data)

        setPagination((prevState: any) => ({
          ...prevState,
          pageCount:
            req?.metaData?.pagination?.totalPages ??
            Math.ceil(total / pagination?.perPage),
          totalData: total,
        }))
        setNoData(false)
      } else {
        setRespData([])
        setPagination((prevState: any) => ({
          ...prevState,
          pageCount: 1,
          totalData: 0,
        }))
        if (onEmpty) {
          onEmpty(true)
        }
        setNoData(true)
      }
      setLoading(false)

      if (reloadData) {
        dispatch(reloadingData(null))
      }
    } catch (err: any) {
      setRespData([])
      setLoading(false)
      setNoData(true)
    }
  }

  useEffect(() => {
    if (JSONtoString(filterParams) != JSONtoString(customFilters)) {
      setCustomFilters(filterParams)
    }
  }, [filterParams])

  useEffect(() => {
    if (pagingLimit !== pagination.perPage) {
      setPagination((prevState: any) => ({
        ...prevState,
        perPage: pagingLimit,
      }))
      searchParams.delete("page")
      setSearchParams(searchParams)
      dispatch(setActivePaging(1))
    }
  }, [pagingLimit])

  /** READ PAGINATION AND FILTER CHANGE */
  useEffect(() => {
    if (trigger !== null && callbackForm?.getData !== false) {
      //  && activeFilters != null
      getAllData()
    } else {
      setLoading(false)
    }

    return () => {
      source.cancel()
    }
  }, [
    pagination?.currentPage,
    searchValue,
    trigger,
    path,
    activeFilters,
    callbackForm,
    location.pathname,
    customFilters,
    filters,
    pagination?.perPage,
  ])

  /** HANDLE RELOAD DATA CLICK */
  useEffect(() => {
    if (reloadData) {
      getAllData()
    }
  }, [reloadData])

  useEffect(() => {
    searchParams.delete("page")
    setSearchParams(searchParams)

    return () => {
      source.cancel()
    }
  }, [])
  const tableData = useMemo(() => data, [data])

  /** DELETE HANDLING */
  const deleteData = async () => {
    setLoading(true)

    try {
      await deleteByController(
        path + endpoint?.delete,
        dataSelected.id,
        source.token
      )
      if (pathFieldImage) deleteFiles()
      dispatchNotification(`Successfully deleted ${label}`, "success")
      getAllData()
    } catch (err: any) {
      setLoading(false)
      dispatchNotification(`Failed deleted ${label}`, "danger")
    }
  }

  const deleteFiles = async () => {
    try {
      let reqDeleteImage: any = pathFieldImage.map((f: any) => {
        if (get(dataSelected, f)) {
          return deleteImage(get(dataSelected, f), source.token)
        }
      })
      axios.all(reqDeleteImage)
    } catch (err: any) {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (selected) {
      switch (action) {
        case "delete":
          setDataSelected(selected)
          setModalConfirm((prevState: any) => ({
            ...prevState,
            show: true,
          }))
          break
        case "update-status-gardu":
          setDataSelected(selected)
          setModalConfirm((prevState: any) => ({
            ...prevState,
            icon: "fal fa-question-circle",
            description: `Apakah laporan akan di close ?`,
            subDescriotion: `Data tidak dapat dikembalikan`,
            textApproved: "Ok",
            classApproved: "primary",
            textDecline: "Cancel",
            show: true,
          }))
          break
        case "edit.modal":
          searchParams.delete(ids)
          searchParams.append(ids, get(selected, primaryKey))
          setSearchParams(searchParams)
          break
        case "edit":
          navigate(`edit/${get(selected, primaryKey)}`)
          break
        case "detail":
          navigate(`detail/${get(selected, primaryKey)}`)
          break
        default:
          break
      }
    }
  }, [action, selected])

  const callbackModalConfirm = (approved = false) => approved && deleteData()

  /**
   * ! Pagination
   * @param e
   */
  const handlePaginationClick = (e: any) => {
    const selectedPage = e.selected
    const offset = selectedPage * pagination.perPage

    setPagination((prevState: any) => ({
      ...prevState,
      offset: offset,
      currentPage: selectedPage,
    }))
  }

  const handleSort = useCallback(
    ({ sortBy }: any) => {
      const sort: any = get(sortBy, "0")
      if (sort) {
        setFilters((prevState: any) => ({
          ...prevState,
          orderBy: replaceAll(sort?.id, { "/": "." }), //camelToSnakeCase
          order: sort?.desc ? "DESC" : "ASC",
        }))
      }
      // RESET TO DEFAULT SORT
      else {
        setFilters((prevState: any) => ({
          ...prevState,
          orderBy: defaultSort?.orderBy, //camelToSnakeCase
          order: defaultSort?.order,
        }))
      }
    },
    [filters]
  )

  /** NOTIFICATION HANDLER */
  const dispatchNotification = (msg: string = "", type: string = "") => {
    const notification = notificationTemplate(msg, type)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }

  useEffect(() => {
    return () => {
      dispatch(setActiveFilters(null))
      setData([])
      setRespData([])
    }
  }, [])

  const columns = useMemo(() => columnsConfig, [columnsConfig])

  return (
    <>
      <TopBarLoader isLoading={loading} />
      <p>
        Total{" "}
        <span className="text-primary font-weight-600">
          {formatThousand(pagination?.totalData || respData?.length)}
        </span>{" "}
        data
      </p>
      <ReactTable
        rowSelect={rowSelect}
        rowSelectType={rowSelectType}
        selectedRows={selectedRows}
        columns={columns}
        data={tableData}
        onSort={handleSort}
        containerClass={containerClass}
        loading={loading}
        styles={styles}
        noData={noData}
        perPage={pagination.perPage}
        hiddenCols={hiddenColumnsMemoized}
      />

      {paging?.show != false && (
        <Pagination
          pagination={pagination}
          handlePaginationClick={handlePaginationClick}
          forced={pagingPresistance}
        />
      )}

      <ModalConfirm
        modalConfirmProps={modalConfirm}
        callbackModalConfirm={callbackModalConfirm}
      />
    </>
  )
}

export default TableData

interface ITableData {
  columnsConfig: any
  filterParams?: any
  filterParamsOnly?: any
  respDataApi: any
  rowData: any
  rowSelect?: boolean
  rowSelectType?: string
  selectedRows?: any
  selected?: any
  path: any
  exportConfig?: IExportConfig
  primaryKey: any
  action?: string | undefined
  onColumnsChanged?: any
  paging?: any
  searchByField?: any
  pagingPresistance?: boolean
  deleteConfirmation?: any
  trigger?: any
  module?: any
  ids?: any
  onEmpty?: any
  containerClass?: string
  styles?: any
  sorting?: any
  pathFieldImage?: any
  endpoint?: {
    getAll: "/get-all" | string
    delete: "/delete" | string
  }
  hiddenColumns?: string[]
  disableFilterWorkspaceId?: boolean
}

interface IExportConfig {
  path?: string
  addParams?: any
  filterParamsOnly?: any
}
