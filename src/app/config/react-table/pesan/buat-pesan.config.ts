import React from "react";
import styled from "styled-components";
import { ACTION_COLUMN } from "../action-column.config";

export const BUAT_PESAN_COLUMNS = () => [
  { Header: "", accessor: "checkbox", disableFilters: false },
  {
    Header: "Pengirim",
    accessor: "nama_barang_jenis_barang",
    disableFilters: false,
  },
  { Header: "Judul Surat", accessor: "jumlah", disableFilters: false },
  { Header: "Tanggal ", accessor: "sumber_dana", disableFilters: false },
  {
    Header: "Urgensi",
    accessor: "harga_perolehan",
    disableFilters: false,
    Cell: ({ value }: { value: string }) => {
      return React.createElement(UrgencyBadge, { urgencyLevel: value }, value);
    },
  },
  ...ACTION_COLUMN,
]

export const PESAN_TERKIRIM_COLUMNS = () => [
  { Header: "", accessor: "checkbox", disableFilters: false },
  {
    Header: "Penerima",
    accessor: "nama_barang_jenis_barang",
    disableFilters: false,
  },
  { Header: "Judul Surat", accessor: "jumlah", disableFilters: false },
  { Header: "Tanggal ", accessor: "sumber_dana", disableFilters: false },
  {
    Header: "Urgensi",
    accessor: "harga_perolehan",
    disableFilters: false,
    Cell: ({ value }: { value: string }) => {
      return React.createElement(UrgencyBadge, { urgencyLevel: value }, value);
    },
  },
  ...ACTION_COLUMN,
]


const UrgencyBadge = styled.span<{ urgencyLevel: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: center;
  background-color: ${({ urgencyLevel }) =>
    urgencyLevel === 'Mendesak' ? '#D71920' :
      urgencyLevel === 'Segera' ? '#FF6B00' :
        '#cccccc'};
`;