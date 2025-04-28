import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import ModalForm from "@app/components/Modals/ModalForm"
import { IModalData } from "@app/interface/modal.interface"
import { BK_BANK_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-bank-desa.config"
import BkBankDesaForm from "./BkBankDesaForm"
import { IBukuBankDesa } from "@app/interface/administrasi/buku-bank-desa.interface"
import { cdnUrl } from "@app/helper/cdn.helper"
import { dateFormat } from "@app/helper/time.helper"
import { DescriptionInfo } from "@app/styled/typography.styled"
import ModalImport from "@app/components/Modals/ModalImport"
import BkBankDesaFilter from "./BkBankDesaFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkBankDesaPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_BANK_DESA_COLUMNS())

  const [path] = useState<string>(API_PATH().form.administrasi.bukuBankDesa)

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Bank Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Bank Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBukuBankDesa) => {
      const lampiran = cdnUrl(item?.lampiran)

      dataTableValue.push({
        no: (item as any)?.number,
        tanggal: dateFormat(item?.tanggal_transaksi) || "-",
        keterangan: toTitleCase(item?.uraian_transaksi) || "-",
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
        path={API_PATH().downloadBuku.administrasi.bukuBankDesa}>
        <BkBankDesaFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={["uraian_transaksi"]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkBankDesaForm onCancel={handleCloseModal}></BkBankDesaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuBankDesa}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuBankDesa}
      />
    </>
  )
}
