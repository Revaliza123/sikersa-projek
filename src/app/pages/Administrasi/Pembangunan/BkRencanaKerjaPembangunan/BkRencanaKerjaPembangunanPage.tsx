import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { BK_RENCANA_KERJA_PEMBANGUNAN_COLUMNS } from "@app/config/react-table/administrasi/bk-rencana-kerja-pembangunan.config"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import BkRencanaKerjaPembangunanForm from "./BkRencanaKerjaPembangunanForm"
import { IBukuRencanaKerjaPembangunan } from "@app/interface/administrasi/buku-rencana-kerja-pembangunan.interface"
import { numberCurrencyID } from "@app/helper/number.helper"
import ModalImport from "@app/components/Modals/ModalImport"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkRencanaKerjaPembangunanPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuRencanaKerjaPembangunan
  )

  const [columns] = useState<any>(BK_RENCANA_KERJA_PEMBANGUNAN_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "md",
    title: `Buku Rencana Kerja Pembangunan`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Rencana Kerja Pembangunan`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBukuRencanaKerjaPembangunan) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nama_proyek: toTitleCase(item?.nama_proyek) || "-",
        lokasi: toTitleCase(item?.lokasi) || "-",
        jumlah_biaya: numberCurrencyID(item?.jumlah_biaya) || "0",
        pelaksana: item?.pelaksana || "-",
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
        path={
          API_PATH().downloadBuku.administrasi.bukuRencanaKerjaPembangunan
        }></TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"_id"}
        action={action}
        selected={dataSelected}
        searchByField={[
          "nama_proyek",
          "lokasi",
          "biaya",
          "pelaksana",
        ]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkRencanaKerjaPembangunanForm
          onCancel={handleCloseModal}></BkRencanaKerjaPembangunanForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuRencanaKerjaPembangunan}`}
        templatePath={
          IMPORT_FILE_FORMAT().administrasi.bukuRencanaKerjaPembangunan
        }
      />
    </>
  )
}
