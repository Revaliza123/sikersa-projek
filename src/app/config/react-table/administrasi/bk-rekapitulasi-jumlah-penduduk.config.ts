import { ACTION_COLUMN } from "../action-column.config"

export const BK_REKAPITULASI_JML_PENDUDUK_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  {
    Header: "Nama Dusun/Lingkungan",
    accessor: "namaDusunLingkungan",
    disableFilters: true,
  },
  {
    Header: "Jumlah Total Penduduk",
    columns: [
      {
        Header: "WNA",
        columns: [
          {
            Header: "Laki-Laki",
            accessor: "wnaLaki",
            disableFilters: true,
          },
          {
            Header: "Perempuan",
            accessor: "wnaPerempuan",
            disableFilters: true,
          },
        ],
      },
      {
        Header: "WNI",
        columns: [
          {
            Header: "Laki-Laki",
            accessor: "wniLaki",
            disableFilters: true,
          },
          {
            Header: "Perempuan",
            accessor: "wniPerempuan",
            disableFilters: true,
          },
        ],
      },
    ],
  },
  ...ACTION_COLUMN,
]
