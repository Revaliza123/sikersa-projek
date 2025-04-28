import React, { useMemo, useState } from "react"
import { Badge } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { BK_KTP_KK_COLUMNS } from "@app/config/react-table/administrasi/bk-ktp-kk.config"
import { IBkKartuTandaPendudukKK } from "@app/interface/administrasi/buku-kartu-tanda-penduduk-dan-kartu-keluarga"
import { capitalize, get, lowerCase, size } from "lodash"
import BkKTPdanKKFilter from "./BkKTPdanKKFilter"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import { useSelector } from "react-redux"
import { SelectSearchField } from "@app/modules/Table/SelectSearchField"
import { useDownloadableWithPayload } from "@app/helper/download.helper"

const SEARCH_BY_FIELDS = [
  { value: "nik", label: "NIK" },
  { value: "nomor_kk", label: "Nomor KK" },
  { value: "nama_lengkap", label: "Nama Lengkap" },
]

export default function BkKTPdanKKPage() {
  const navigate = useNavigate()
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_KTP_KK_COLUMNS())
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKartuTandaPendudukKK
  )

  const { workspace } = useSelector((state: any) => state.app)
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Induk Penduduk`,
  })

  const [searchFields, setSearchFields] = useState<
    { value: string; label: string }[]
  >([SEARCH_BY_FIELDS[2]])

  const { downloadFile } = useDownloadableWithPayload({
    searchBy: SEARCH_BY_FIELDS.map((x) => x.value),
  })

  const remappedTreeJaringanData = (tree: any, level = 0) => {
    return tree
      ? tree?.map((data: IBkKartuTandaPendudukKK, i: number) => {
          const item: any = level == 0 ? get(data, "kepala.0") : data
          const no = (data as any)?.number
          const status_hub = item?.kelahiran?.kedudukan_dalam_keluarga
          const jumlahAnggotaKeluarga = data?.jumlah || ""

          return {
            no:
              level == 0 ? (
                <Badge bg="primary text-white">{no ? no : i + 1}</Badge>
              ) : (
                <Badge bg="secondary text-white">{no ? no : i + 1}</Badge>
              ),
            "kepala/no_kk": data?.nomor_kk || "-",
            jumlahAnggotaKeluarga: jumlahAnggotaKeluarga || "-",
            "kepala/umum/nama_lengkap":
              toTitleCase(item?.umum?.nama_lengkap) || "-",
            "kepala/umum/nik": item?.umum?.nik || "-",
            "kepala/umum/jenis_kelamin": item?.umum?.jenis_kelamin || "-",
            "kepala/kelahiran/tanggal_lahir": `${item?.kelahiran?.tempat_lahir ? toTitleCase(item?.kelahiran?.tempat_lahir) + ", " : ""}${item?.kelahiran?.tanggal_lahir}`,
            subRows:
              size(data?.anggota) > 0
                ? remappedTreeJaringanData(data?.anggota, level + 1)
                : undefined,
            "kepala/kelahiran/kedudukan_dalam_keluarga": (
              <Badge
                bg={`${lowerCase(status_hub) == "kepala keluarga" ? "primary" : "secondary"} text-white`}>
                {capitalize(
                  lowerCase(item?.kelahiran?.kedudukan_dalam_keluarga)
                )}
              </Badge>
            ),
            "kepala/umum/rt": item?.umum?.rt || "-",
            "kepala/umum/rw": item?.umum?.rw || "-",
          }
        })
      : undefined
  }

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    const dataRows = remappedTreeJaringanData(data, 0)
    setDataRows(dataRows)
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSetPrivileges = (item: any) => {
    navigate(`settings/${item?.id}`)
  }

  /** DELETE HANDLING */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = (item: any) => {
    setDataSelected(item)
    setAction("delete")
  }

  /** HANDLE ADD */

  /** EDIT HANDLING */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleEdit = (item: any) => {
    setDataSelected(item)
    setAction("edit.modal")
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDetail = (item: any) => {
    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      url: `${API_PATH().form.mainForm}/v_buku_ktp_dan_buku_kk/detail-ktp?id=${item.no_kk}`,
    }))
  }

  // const handlePrintItem = (item: any) => {
  //   const url = `${API_PATH().downloadBuku.administrasi.bukuKartuTandaPendudukKK}/${item?.kelahiran?.nomor_kk}`;
  //   createDownloadable(url);
  // }

  const handlePrint = () => {
    const url = API_PATH().downloadBuku.administrasi.bukuKartuTandaPendudukKK
    downloadFile(url)
  }

  const searchFieldsBy = useMemo(() => {
    if (Array.isArray(searchFields)) {
      return searchFields.map((field: any) => field.value)
    }
  }, [searchFields])

  const handleChangeSearchField = (event: any) => {
    setSearchFields([event])
  }

  return (
    <>
      <TableDataListAction
        add={false}
        filter={true}
        showSearch={true}
        print={true}
        onClickPrint={handlePrint}
        renderSearchField={() => (
          <SelectSearchField
            type="styled"
            defaultValue={searchFields[0]}
            options={SEARCH_BY_FIELDS}
            onChange={handleChangeSearchField}
          />
        )}>
        <BkKTPdanKKFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"id"}
        action={action}
        selected={dataSelected}
        endpoint={{
          getAll: "/get-all-ktp",
          delete: "/delete",
        }}
        searchByField={searchFieldsBy}
        sorting={{
          orderBy: "nama_lengkap",
          order: "ASC",
        }}
        filterParams={{
          workspaceId: workspace?._id,
        }}></TableData>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>
    </>
  )
}
