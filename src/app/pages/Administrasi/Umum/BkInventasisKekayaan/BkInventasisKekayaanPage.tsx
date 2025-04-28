import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import { BK_INVENTARIS_KEKAYAAN_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-inventaris-kekayaan-desa.config"
import BkInventarisKekayaanDesaForm from "./BkInventarisKekayaanForm"
import { IBukuInventarisKekayaanDesa } from "@app/interface/administrasi/buku-inventaris-kekayaan-desa.interface"
import ModalImport from "@app/components/Modals/ModalImport"
import BkInventarisKekayaanFilter from "./BkInventarisKekayaanFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { numberCurrencyID } from "@app/helper/number.helper"
import { dateFormat } from "@app/helper/time.helper"

export default function BkInventasisKekayaanPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_INVENTARIS_KEKAYAAN_DESA_COLUMNS())

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuInventarisKekayaanDesa
  )

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Inventaris Kekayaan Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Inventaris Kekayaan Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuInventarisKekayaanDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        jenis_barang: toTitleCase(item?.jenis_barang) || "-",
        nilai_beli: numberCurrencyID(item?.nilai_beli) || "-",
        "keadaan_barang_bangunan_awal_tahun/baik":
          item?.keadaan_barang_bangunan_awal_tahun?.baik || "-",
        "keadaan_barang_bangunan_awal_tahun/rusak":
          item?.keadaan_barang_bangunan_awal_tahun?.rusak || "-",
        "penghapusan_barang_dan_bangunan/tanggal_dihapus": dateFormat(
          item?.penghapusan_barang_dan_bangunan?.tanggal_dihapus
        ),
        "keadaan_barang_bangunan_akhir_tahun/baik":
          item?.keadaan_barang_bangunan_akhir_tahun?.baik || "-",
        "keadaan_barang_bangunan_akhir_tahun/rusak":
          item?.keadaan_barang_bangunan_akhir_tahun?.rusak || "-",
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

  /** HANDLE CLOSE MODAL */
  const handleCloseModal = () => {
    setAction(undefined)
    setDataSelected(undefined)
    setModal((prevState: any) => ({
      ...prevState,
      show: false,
    }))
  }

  return (
    <>
      <TableDataListAction
        add={true}
        // filter={true}
        importFile={true}
        print={true}
        btnAddText="Tambah Data"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        path={API_PATH().downloadBuku.administrasi.bukuInventarisKekayaanDesa}>
        <BkInventarisKekayaanFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={`_id`}
        action={action}
        selected={dataSelected}
        searchByField={["jenis_barang"]}></TableData>
      <ModalForm modalProps={modal}>
        <BkInventarisKekayaanDesaForm
          onCancel={handleCloseModal}></BkInventarisKekayaanDesaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuInventarisKekayaanDesa}`}
        templatePath={
          IMPORT_FILE_FORMAT().administrasi.bukuInventarisDanKekayaanDesa
        }
      />
    </>
  )
}
