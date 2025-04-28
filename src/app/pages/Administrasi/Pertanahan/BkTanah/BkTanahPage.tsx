import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import { BK_TANAH_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-tanah-desa.config"
import BkTanahDesaForm from "./BkTanahForm"
import { IBukuTanahDesa } from "@app/interface/administrasi/buku-tanah-desa.interface"
import ModalImport from "@app/components/Modals/ModalImport"
import BkTanahFilter from "./BkTanahFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "@app/pages/Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkTanahPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_TANAH_DESA_COLUMNS())

  const [path] = useState<string>(API_PATH().form.administrasi.bukuTanahDiDesa)

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Tanah Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Tanah Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuTanahDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        "pemilik/nama_perorangan_badan_hukum":
          toTitleCase(item?.pemilik?.nama_perorangan_badan_hukum) || "-",
        "tanah/luas_tanah": (
          <p>
            {item?.tanah?.luas_tanah}m<sup>2</sup>
          </p>
        ),
        "tanah/status_hak_tanah":
          toTitleCase(item?.tanah?.status_hak_tanah) || "-",
        "tanah/penggunaan_tanah":
          toTitleCase(item?.tanah?.penggunaan_tanah) || "-",
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
        path={API_PATH().downloadBuku.administrasi.bukuTanahDiDesa}>
        <BkTanahFilter />
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
          "pemilik.nama_perorangan_badan_hukum",
          "tanah.penggunaan_tanah",
          "tanah.status_hak_tanah",
        ]}></TableData>

      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkTanahDesaForm onCancel={handleCloseModal}></BkTanahDesaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuTanahDiDesa}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuTanahDiDesa}
      />
    </>
  )
}
