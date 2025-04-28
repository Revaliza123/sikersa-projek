import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import BkKasPembantuKegiatanForm from "./BkKasPembantuKegiatanForm"
import { cdnUrl } from "@app/helper/cdn.helper"
import { DescriptionInfo } from "@app/styled/typography.styled"
import { dateFormat } from "@app/helper/time.helper"
import { BK_KAS_PEMBANTU_COLUMNS } from "@app/config/react-table/administrasi/bk-kas-pembantu.config"
import { IBkKasPembantu } from "@app/interface/administrasi/buku-kas-pembantu.interface"
import ModalImport from "@app/components/Modals/ModalImport"
import BkKasPembantuKegiatanFilter from "./BkKasPembantuKegiatanFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkKasPembantuKegiatanPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKasPembantuKegiatan
  )

  const [columns] = useState<any>(BK_KAS_PEMBANTU_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Kas Pembantu Kegiatan`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Kas Pembantu Kegiatan`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBkKasPembantu) => {
      const lampiran = cdnUrl(item?.lampiran)
      dataTableValue.push({
        no: (item as any)?.number,
        tanggal: dateFormat(item?.tanggal) || "-",
        keterangan: toTitleCase(item?.keterangan) || "-",
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
        filter={true}
        importFile={true}
        print={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        path={API_PATH().downloadBuku.administrasi.bukuKasPembantuKegiatan}>
        <BkKasPembantuKegiatanFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={["keterangan"]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkKasPembantuKegiatanForm
          onCancel={handleCloseModal}></BkKasPembantuKegiatanForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuKasPembantuKegiatan}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuKasPembantuKegiatan}
      />
    </>
  )
}
