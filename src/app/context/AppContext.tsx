import { setItem } from "@app/helper/localstorage.helper"
import moment from "moment"
import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react"

type AppContextValue = {
  isVisible: boolean
  onChangeVisible: (v: boolean) => void
  searchValue: any
  onChangeSearchValue: (v: any) => void
  viewDataType: string
  onChangeViewType: (v: string) => void
  viewDataReportType: string
  onChangeViewReportType: (v: string) => void
  filterMonitoringType: any
  onChangeFilterMonitoringType: (v: string) => void
  orderByTask: string
  onChangeOrderByTask: (v: string) => void
  taskDetailSelected: any
  onChangeTaskDetailSelected: (v: any) => void
  timestamp: any
  onChangeTimestamp: (v: any) => void
  showFormTask: any
  onChangeShowFormTask: (v: any) => void
  totalTask: any
  onChangeTotalTask: (value: any) => void
}

export const AppContext = createContext<AppContextValue | null>({
  isVisible: false,
  onChangeVisible: () => false,
  searchValue: "",
  onChangeSearchValue: () => "",
  viewDataType: "canban",
  onChangeViewType: () => "canban",
  viewDataReportType: "list",
  onChangeViewReportType: () => "list",
  filterMonitoringType: undefined,
  onChangeFilterMonitoringType: () => undefined,
  orderByTask: "updatedAt",
  onChangeOrderByTask: () => "updatedAt",
  taskDetailSelected: undefined,
  onChangeTaskDetailSelected: () => undefined,
  timestamp: moment().format("x"),
  onChangeTimestamp: () => moment().format("x"),
  showFormTask: { show: false, status: "toDo" },
  onChangeShowFormTask: () => ({ show: false, status: "toDo" }),
  totalTask: {},
  onChangeTotalTask: () => 0,
})
AppContext.displayName = "AppContext"

export const useApp = () => useContext(AppContext) as AppContextValue

type Props = { children?: ReactNode }

export const AppProvider = ({ children }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<any>("")
  const [viewDataType, setViewDataType] = useState<string>("canban")
  const [filterMonitoringType, setFilterMonitoringType] =
    useState<any>(undefined)
  const [viewDataReportType, setViewDataReportType] = useState<string>("list")
  const [orderByTask, setOrderByTask] = useState<string>("updatedAt")
  const [taskDetailSelected, setTaskDetailSelected] = useState<any>()
  const [timestamp, setTimestamp] = useState<any>(moment().format("x"))
  const [showFormTask, setShowFormTask] = useState<any>({
    show: false,
    status: "toDo",
  })
  const [totalTask, setTotalTask] = useState<any>({
    backlog: 0,
    toDo: 0,
    inprogress: 0,
    review: 0,
    close: 0,
  })

  const onChangeVisible = useCallback(
    (newVisible: boolean) => {
      setIsVisible(!newVisible)
    },
    [isVisible]
  )

  const onChangeSearchValue = useCallback(
    (newSearchValue: any) => {
      setSearchValue(newSearchValue)
    },
    [isVisible]
  )

  const onChangeViewType = useCallback(
    (newViewType: any) => {
      setViewDataType(newViewType)
      setItem("view_type", newViewType)
    },
    [viewDataType]
  )

  const onChangeFilterMonitoringType = useCallback(
    (newFilterType: any) => {
      setFilterMonitoringType(newFilterType)
      setItem("filter_monitoring_type", newFilterType)
    },
    [filterMonitoringType]
  )

  const onChangeViewReportType = useCallback(
    (newViewReportType: any) => {
      setViewDataReportType(newViewReportType)
      setItem("view_report_type", newViewReportType)
    },
    [viewDataReportType]
  )

  const onChangeOrderByTask = useCallback(
    (orderByNew: any) => {
      setOrderByTask(orderByNew)
      setItem("order_by_task", orderByNew)
    },
    [viewDataType]
  )

  const onChangeTaskDetailSelected = useCallback(
    (newViewType: any) => {
      setTaskDetailSelected(newViewType)
    },
    [viewDataType]
  )

  const onChangeTimestamp = useCallback(
    (newTime = moment().format("x")) => {
      setTimestamp(newTime)
    },
    [timestamp]
  )

  const onChangeShowFormTask = useCallback(
    (newForm: any) => {
      setShowFormTask(newForm)
    },
    [showFormTask]
  )

  const onChangeTotalTask = useCallback(
    (newTotal: any) => {
      setTotalTask((prevState: any) => ({
        ...prevState,
        ...newTotal,
      }))
    },
    [showFormTask]
  )

  return (
    <AppContext.Provider
      value={{
        isVisible,
        onChangeVisible,
        searchValue,
        onChangeSearchValue,
        viewDataType,
        onChangeViewType,
        filterMonitoringType,
        onChangeFilterMonitoringType,
        viewDataReportType,
        onChangeViewReportType,
        orderByTask,
        onChangeOrderByTask,
        taskDetailSelected,
        onChangeTaskDetailSelected,
        timestamp,
        onChangeTimestamp,
        showFormTask,
        onChangeShowFormTask,
        totalTask,
        onChangeTotalTask,
      }}>
      {children}
    </AppContext.Provider>
  )
}
