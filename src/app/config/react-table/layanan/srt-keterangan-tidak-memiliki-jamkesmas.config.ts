import { ACTION_COLUMN } from "../action-column.config"

export const SRT_TIDAK_MEMILIKI_JAMKESMAS_COLUMNS = () => [
  { Header: "No", accessor: "no", disableFilters: true },
  { Header: "Nama Lengkap", accessor: "namaLengkap", disableFilters: true },
  { Header: "Tempat Lahir", accessor: "tempatLahir", disableFilters: true },
  { Header: "Tanggal Lahir ", accessor: "tanggalLahir", disableFilters: true },
  { Header: "Jenis Kelamin ", accessor: "jenisKelamin", disableFilters: true },
  { Header: "Agama ", accessor: "agama", disableFilters: true },
  {
    Header: "Kewarganegaraan",
    accessor: "kewarganegaraan",
    disableFilters: true,
  },
  { Header: "Alamat", accessor: "alamat", disableFilters: true },
  ...ACTION_COLUMN,
]
