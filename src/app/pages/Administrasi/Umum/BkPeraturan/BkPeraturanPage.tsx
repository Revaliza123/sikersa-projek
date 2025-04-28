import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import ModalForm from "@app/components/Modals/ModalForm"
import { IModalData } from "@app/interface/modal.interface"
import { BK_PERATURAN_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-peraturan-desa.config"
import { IBukuPeraturanDesa } from "@app/interface/administrasi/buku-peraturan-desa.interface"
import BkPeraturanForm from "./BkPeraturanForm"
import ModalImport from "@app/components/Modals/ModalImport"
import BkPeraturanFilter from "./BkPeraturanFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { useDownloadableWithPayload } from "@app/helper/download.helper"
import { dateFormat } from "@app/helper/time.helper"
import { cdnUrl } from "@app/helper/cdn.helper"
import { DescriptionInfo } from "@app/styled/typography.styled"

const SEARCH_BY_FIELDS = [
  "jenis_peraturan",
  "tentang",
  "nomor_peraturan",
  "tanggal_peraturan",
]

export default function BkPeraturanPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuPeraturanDiDesa
  )

  const [columns] = useState<any>(BK_PERATURAN_DESA_COLUMNS())
  const { downloadFile } = useDownloadableWithPayload({
    searchBy: SEARCH_BY_FIELDS,
  })

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "md",
    title: `Buku Peraturan Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Peraturan Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBukuPeraturanDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        jenis_peraturan: toTitleCase(item?.jenis_peraturan) || "-",
        nomor_peraturan:
          `${item?.nomor_peraturan} - ${item?.tanggal_peraturan}` || "-",
        nomor_dilaporkan:
          `${item?.nomor_dilaporkan} - ${item?.tanggal_dilaporkan}` || "-",
        tentang: toTitleCase(item?.tentang) || "-",
        tanggal_kesepakatan: dateFormat(item?.tanggal_kesepakatan) || "-",
        uraian_singkat: toTitleCase(item?.uraian_singkat) || "-",
        keterangan: toTitleCase(item?.keterangan) || "-",
        lampiran:
          item?.upload_lampiran_surat &&
          item?.upload_lampiran_surat !== "" &&
          item?.upload_lampiran_surat !== "#" ? (
            <a
              className="primary"
              href={cdnUrl(item?.upload_lampiran_surat || "")}
              target="blank">
              Lihat File
            </a>
          ) : (
            <DescriptionInfo className="mb-0">Tidak Tersedia</DescriptionInfo>
          ),
        action: (
          <DropdownActionData
            actions={["detail", "update", "delete"]}
            item={item}
            handleDetail={handleDetail}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ),
      })
    })
    setDataRows(dataTableValue)
  }

  /** DELETE HANDLING */
  const handleDelete = (item: any) => {
    setDataSelected(item)
    setAction("delete")
  }

  /** HANDLE ADD */
  const handleAddClick = () => {
    setDataSelected(undefined)
    setModal((prevState: any) => ({
      ...prevState,
      show: true,
    }))
  }

  /** EDIT HANDLING */
  const handleEdit = (item: any) => {
    setDataSelected(item)
    setAction("edit.modal")
  }

  /** HANDLE CLOSE MODAL */
  const handleCloseModal = () => {
    setAction(undefined)
    setDataSelected(undefined)
    setModal((prevState: any) => ({
      ...prevState,
      show: false,
    }))
  }

  /** HANDLE IMPORT FILE */
  const handleImportFile = () => {
    setModalImport((prevState: any) => ({
      ...prevState,
      show: true,
    }))
  }

  const handleDetail = (item: any) => {
    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      collection: path.split("/").reverse()[0],
      id: item._id,
    }))
  }

  const handlePrint = () => {
    let url = API_PATH().downloadBuku.administrasi.bukuPeraturanDiDesa
    downloadFile(url)
  }

  return (
    <>
      <TableDataListAction
        add={true}
        filter={true}
        importFile={true}
        print={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        onClickPrint={handlePrint}>
        <BkPeraturanFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"id"}
        action={action}
        selected={dataSelected}
        searchByField={SEARCH_BY_FIELDS}></TableData>

      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkPeraturanForm onCancel={handleCloseModal}></BkPeraturanForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuPeraturanDiDesa}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuPeraturanDiDesa}
      />
    </>
  )
}
