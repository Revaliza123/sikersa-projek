import React, { useState } from "react"
/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import { BK_KEPUTUSAN_KEPALA_DESA_COLUMNS } from "@app/config/react-table/administrasi/bk-keputusan-kepala-desa.config"
import BkKeputusanKadesForm from "./BkKeputusanKadesForm"
import { IBukuKeputusanKepalaDesa } from "@app/interface/administrasi/buku-keputusan-kepala-desa.interface"
import { cdnUrl } from "@app/helper/cdn.helper"
import ModalImport from "@app/components/Modals/ModalImport"
import BkKeputusanKadesFilter from "./BkKeputusanKadesFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { dateFormat } from "@app/helper/time.helper"
import { DescriptionInfo } from "@app/styled/typography.styled"

export default function BkKeputusanKadesPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKeputusanKepalaDesa
  )

  const [columns] = useState<any>(BK_KEPUTUSAN_KEPALA_DESA_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Keputusan Kepala Desa`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Keputusan Kepala Desa`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: IBukuKeputusanKepalaDesa[]) => {
    let dataTableValue: any = []

    data?.forEach((item: IBukuKeputusanKepalaDesa) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nomor_keputusan: item?.nomor_keputusan || "-",
        tanggal_keputusan: dateFormat(item?.tanggal_keputusan) || "-",
        tentang: toTitleCase(item?.tentang) || "-",
        uraian_singkat: toTitleCase(item?.uraian_singkat) || "-",
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
        keterangan: "",
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
        path={API_PATH().downloadBuku.administrasi.bukuKeputusanKepalaDesa}>
        <BkKeputusanKadesFilter />
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
          "nomor_keputusan",
          "tentang",
          "tanggal_keputusan",
        ]}></TableData>

      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkKeputusanKadesForm
          onCancel={handleCloseModal}></BkKeputusanKadesForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuKeputusanKepalaDesa}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuKeputusanKades}
      />
    </>
  )
}
