import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import ModalForm from "@app/components/Modals/ModalForm"
import { IModalData } from "@app/interface/modal.interface"
import { BK_APBD_COLUMNS } from "@app/config/react-table/administrasi/bk-anggaran-pbd.config"
import BkAPBDDesaForm from "./BkAPBDDesForm"
import { cdnUrl } from "@app/helper/cdn.helper"
import { IBukuAPBDField } from "@app/interface/administrasi/buku-apbd.interface"
import { dateFormat } from "@app/helper/time.helper"
import { DescriptionInfo } from "@app/styled/typography.styled"
import ModalImport from "@app/components/Modals/ModalImport"
import BkAPBDDesFilter from "./BkAPBDDesFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import { createDownloadable } from "@app/helper/download.helper"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkAPBDesPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuAnggaranPendapatanDanBelanjaDesa
  )

  const [columns] = useState<any>(BK_APBD_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Anggaran Pendapatan Dan Belanja Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Anggaran Pendapatan Dan Belanja Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBukuAPBDField) => {
      const lampiran = cdnUrl(item?.upload_lampiran_surat)

      dataTableValue.push({
        no: (item as any)?.number,
        jenis_anggaran: toTitleCase(item?.jenis_anggaran) || "-",
        nomer_perdes: item?.nomer_perdes || "-",
        tanggal_perdes: dateFormat(item?.tanggal_perdes) || "-",
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
            actions={["detail", "update", "delete", "print"]}
            item={item}
            handleDetail={handleDetail}
            handleEdit={handleEdit}
            handlePrintItem={handlePrintItem}
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

  /** HANDLE PRINT */
  // const handlePrint = () => {
  //   const url = API_PATH().downloadBuku.administrasi.bukuAnggaranPendapatanDanBelanjaDesa;
  //   createDownloadable(url);
  // };

  const handlePrintItem = (item: any) => {
    const url = `${API_PATH().downloadBuku.administrasi.bukuAnggaranPendapatanDanBelanjaDesa}/${item._id}`
    createDownloadable(url)
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
        print={false}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        filter={true}>
        <BkAPBDDesFilter />
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
          "jenis_anggaran",
          "nomor_perdes",
          "tanggal_perdes",
        ]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkAPBDDesaForm onCancel={handleCloseModal}></BkAPBDDesaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuAnggaranPendapatanDanBelanjaDesa}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuAPBD}
      />
    </>
  )
}
