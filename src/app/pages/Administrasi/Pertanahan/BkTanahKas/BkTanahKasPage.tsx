import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import { BK_TANAH_KAS_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-tanah-kas-desa.config"
import { dateFormat } from "@app/helper/time.helper"
import BkTanahKasDesaForm from "./BkTanahKasForm"
import { IBukuTanahKasDesa } from "@app/interface/administrasi/buku-tanah-kas-desa.interface"
import ModalImport from "@app/components/Modals/ModalImport"
import BkTanahKasFilter from "./BkTanahKasFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "@app/pages/Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkTanahKasPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(API_PATH().form.administrasi.bukuTanahKasDesa)

  const [columns] = useState<any>(BK_TANAH_KAS_DESA_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Tanah Kas Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Tanah Kas Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuTanahKasDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        asal_tanah_kas_desa: toTitleCase(item?.asal_tanah_kas_desa) || "-",
        nomor_sertifikat_buku_letter: item?.nomor_sertifikat_buku_letter || "-",
        luas: (
          <p>
            {item?.luas}m<sup>2</sup>
          </p>
        ),
        kelas: item?.kelas || "-",
        "perolehan_tkd/tanggal_perolehan": dateFormat(
          item?.perolehan_tkd?.tanggal_perolehan
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
        path={API_PATH().downloadBuku.administrasi.bukuTanahKasDesa}>
        <BkTanahKasFilter />
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
          "asal_tanah_kas_desa",
          "nomor_sertifikat_buku_letter",
          "peruntukan",
          "lokasi",
        ]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkTanahKasDesaForm onCancel={handleCloseModal}></BkTanahKasDesaForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuTanahKasDesa}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuTanahKasDesa}
      />
    </>
  )
}
