/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from "react"
import {
  useExpanded,
  useFilters,
  useGlobalFilter,
  useRowSelect,
  useSortBy,
  useTable,
} from "react-table"
// import styled from 'styled-components';
import { ReactTableStyle1 } from "@app/styled/react-table/ReactTableStyle1"
import Skeleton from "react-loading-skeleton"
import { DefaultColumnFilter } from "../../styled/react-table/ReactTableFilter"
import { SortDownIcon, SortIcon, SortUpIcon } from "../Icons/SortIcon"
import IndeterminateCheckbox from "./IndeterminateCheckbox"

type Props = {
  columns: any
  data: any
  onSort?: any
  onFilters?: any
  columnFilters?: boolean
  containerClass?: string
  rowSelectType?: string
  rowSelect?: boolean
  selectedRows?: any
  loading?: boolean
  noData?: boolean
  styles?: any
  perPage?: any
  hiddenCols?: any
}

// const NoData = styled.div`
//   width: 5rem;
//   padding: 1.1rem;
//   background: var(--black-25);
//   border-radius: 1rem;
//   margin:0 auto;
// `;

const TableStyle: any = {
  default: ReactTableStyle1,
}

const ReactTable: FC<Props> = ({
  columns,
  data,
  onSort,
  onFilters,
  columnFilters = false,
  containerClass = "table my-3",
  rowSelectType = "checkbox",
  rowSelect = false,
  selectedRows,
  loading,
  noData,
  perPage = 10,
  styles = "default",
  hiddenCols = [],
}) => {
  const [Styles]: any = useState<any>(TableStyle[styles])
  const defaultColumn: any = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
    state: { sortBy, filters }, // expanded , selectedRowIds
    setHiddenColumns,
  }: any = useTable<any>(
    {
      columns,
      data,
      defaultColumn,
      manualSortBy: true,
      defaultCanSort: true,
      stateReducer: (newState: any, action: any) => {
        if (action.type === "toggleRowSelected" && rowSelectType == "radio") {
          newState.selectedRowIds = {
            [action.id]: true,
          }
        }

        return newState
      },
    } as any,
    useFilters,
    useGlobalFilter,
    useSortBy,
    useExpanded,
    useRowSelect,
    (hooks) => {
      rowSelect &&
        hooks.visibleColumns.push((columns: any) => {
          return [
            {
              Header:
                rowSelectType == "checkbox"
                  ? ({ getToggleAllRowsSelectedProps }: any) => (
                      <IndeterminateCheckbox
                        {...getToggleAllRowsSelectedProps()}
                      />
                    )
                  : "",
              accessor: "selection",
              minWidth: "20px",
              canFilter: false,
              disableSortBy: true,
              show: true,
              disableFilters: true,
              Cell: ({ row }: any) => (
                <IndeterminateCheckbox
                  type={rowSelectType}
                  {...row.getToggleRowSelectedProps()}
                />
              ),
            },
            ...columns,
          ]
        })
    }
  )

  useEffect(() => {
    if (onSort) {
      onSort({ sortBy })
    }
  }, [sortBy])

  useEffect(() => {
    onFilters && onFilters({ filters })
  }, [onFilters, filters])

  useEffect(() => {
    selectedRows && selectedRows(selectedFlatRows.map((d: any) => d.original))
  }, [selectedFlatRows])
  // Render the UI for your table

  useEffect(() => {
    setHiddenColumns([...hiddenCols])
  }, [hiddenCols])

  return (
    <>
      <Styles className={containerClass} style={{ minHeight: "20rem" }}>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any, iHeader: number) => (
              <tr key={iHeader} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column: any, iColumn: number) => (
                  <th
                    key={`${iHeader}-${iColumn}`}
                    id={column.id}
                    style={{
                      minWidth: column?.minWidth ? column?.minWidth : undefined,
                      width:
                        column?.width && column?.width != 150
                          ? column?.width
                          : undefined,
                    }}
                    {...column.getHeaderProps()}
                    className={column?.customClass + ``}>
                    <div
                      className="d-inline-flex align-items-center"
                      {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      <div className="ms-2">
                        {column?.id !== "action" &&
                        column?.id !== "no" &&
                        column?.disableFilters ? (
                          column?.isSorted ? (
                            column.isSortedDesc ? (
                              <SortUpIcon />
                            ) : (
                              <SortDownIcon />
                            )
                          ) : (
                            <SortIcon />
                          )
                        ) : null}
                      </div>
                    </div>
                    {columnFilters && !column.disableFilters && (
                      <div
                        className="mt-2"
                        style={{ minWidth: column.minWidth }}>
                        {column.id !== "action"
                          ? column.render("Filter")
                          : null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {loading ? (
              noData == false &&
              [...Array(perPage)].map((_, i) => (
                <tr
                  key={i}
                  style={{ borderBottom: "1px solid var(--body-bg)" }}>
                  {columns.map((_: any, index: any) => (
                    <td key={index}>
                      <Skeleton style={{ height: "1.435rem" }} />
                    </td>
                  ))}
                </tr>
              ))
            ) : noData == true ? (
              <tr style={{ borderBottom: "1px solid var(--body-bg)" }}>
                <td
                  colSpan={1000}
                  className="text-center fw-bold"
                  style={{
                    padding: "5rem 0",
                    fontSize: "1.25rem",
                  }}>
                  <img src="/static/illustration/table-empty.svg" alt="" />
                  <p className="mt-3">Ups! Data tidak ditemukan</p>
                  <span
                    style={{
                      fontSize: ".9rem",
                      color: "var(--black-400)",
                    }}>
                    Tidak ada hasil, sumber data kosong
                  </span>
                </td>
              </tr>
            ) : (
              rows.map((row: any, i: number) => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} key={`tbody.tr${i}`}>
                    {row.cells.map((cell: any, indexTd: number) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          key={`tbody.tr${i}.td${indexTd}`}
                          id={cell?.column?.id}>
                          {cell.render("Cell")}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </Styles>
    </>
  )
}

export default ReactTable
