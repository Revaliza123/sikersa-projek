import CaretDownIcon from "@app/components/Icons/CaretDownIcon"
import CaretRightIcon from "@app/components/Icons/CaretRightIcon"
import React from "react"
import { ACTION_COLUMN } from "../action-column.config"

export const BK_KTP_KK_COLUMNS = () => [
  {
    id: "no",
    accessor: "no",
    show: true,
    disableFilters: true,
    hideColumn: true,
    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }: any) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? <CaretDownIcon /> : <CaretRightIcon />} No
      </span>
    ),
    Cell: ({ row }: any) =>
      row.canExpand ? (
        <div
          {...row.getToggleRowExpandedProps({
            style: {
              paddingLeft: `${row.depth * 1.25}rem`,
            },
          })}
          className="d-flex gap-2">
          {row.isExpanded ? <CaretDownIcon /> : <CaretRightIcon />}
          <span>{row.original?.no}</span>
        </div>
      ) : (
        <div
          style={{ paddingLeft: `${row.depth ? row.depth * 2.35 : 2.35}rem` }}>
          {row.original?.no}
        </div>
      ),
  },
  { Header: "Nomor KK", accessor: "kepala/no_kk", disableFilters: true },
  {
    Header: "Jumlah Anggota Keluarga",
    accessor: "jumlahAnggotaKeluarga",
    disableFilters: true,
  },
  {
    Header: "Nama Lengkap",
    accessor: "kepala/umum/nama_lengkap",
    disableFilters: true,
    width: 250,
  },
  { Header: "NIK", accessor: "kepala/umum/nik", disableFilters: true },
  {
    Header: "Jenis Kelamin",
    accessor: "kepala/umum/jenis_kelamin",
    disableFilters: true,
  },
  {
    Header: "Tempat & Tanggal Lahir",
    accessor: "kepala/kelahiran/tanggal_lahir",
    disableFilters: true,
  },
  {
    Header: "Status Dalam Keluarga",
    accessor: "kepala/kelahiran/kedudukan_dalam_keluarga",
    disableFilters: true,
    width: 160,
  },
  { Header: "RT", accessor: "kepala/umum/rt", disableFilters: true },
  { Header: "RW", accessor: "kepala/umum/rw", disableFilters: true },
  ...ACTION_COLUMN,
]
