import React, { useState } from "react"
/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import { BK_AGENDA_COLUMNS } from "@app/config/react-table/administrasi/bk-agenda.config"
import BkAgendaForm from "./BkAgendaForm"
import { IBukuAgenda } from "@app/interface/administrasi/buku-agenda.interface"
import { cdnUrl } from "@app/helper/cdn.helper"
import { DescriptionInfo } from "@app/styled/typography.styled"
import ModalImport from "@app/components/Modals/ModalImport"
import BkAgendaFilter from "./BkAgendaFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { useSelector } from "react-redux"
import { get } from "lodash"
import TableDataIndex from "@app/modules/Table/TableDataWidgets/TableDataIndex"
import { dateFormat } from "@app/helper/time.helper"

export default function BkAgendaPage() {
  const { activePage } = useSelector((state: any) => state?.ui)

  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(API_PATH().form.administrasi.bukuAgenda)

  const [columns] = useState<any>(BK_AGENDA_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: activePage?.display,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: activePage?.display,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuAgenda) => {
      const lampiran = cdnUrl(item?.upload_lampiran_surat)
      let tableColumn: any = {}
      columns?.forEach((c: any) => {
        tableColumn[c?.accessor] = (
          <TableDataIndex
            type={c?.displayType}
            data={get(item, c?.valueField) || item}
          />
        )
        console.log(c?.displayType, get(item, c?.valueField))
      })

      // console.log(tableColumn)

      // dataTableValue.push(tableColumn)
      dataTableValue.push({
        number: (item as any)?.number,
        kode_persuratan: item?.kode_persuratan || "-",
        tanggal_terima_kirim_surat:
          dateFormat(item?.tanggal_terima_kirim_surat) || "-",
        jenis_surat: toTitleCase(item?.jenis_surat) || "-",
        nomor_surat_masuk: item?.nomor_surat_masuk || "-",
        pengirim: `${item?.jenis_surat == "Surat Masuk" ? toTitleCase(item?.pengirim) : toTitleCase(item?.ditujukan_kepada)}`,
        lampiran:
          lampiran != "#" ? (
            <a className={`primary`} href={lampiran} target="blank">
              Lihat Lampiran
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

  return (
    <>
      <TableDataListAction
        add={true}
        importFile={true}
        print={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        filter={true}
        path={API_PATH().downloadBuku.administrasi.bukuAgenda}>
        <BkAgendaFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={[
          "kode_persuratan",
          "tanggal_terima_kirim_surat",
          "jenis_surat",
          "nomor_surat_masuk",
          "pengirim",
          "nomor_surat_keluar",
          "ditujukan_kepada",
        ]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkAgendaForm onCancel={handleCloseModal}></BkAgendaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuAgenda}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuAgenda}
      />
    </>
  )
}
