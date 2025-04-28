import React, { useState } from "react"
/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import ModalForm from "@app/components/Modals/ModalForm"
import { IModalData } from "@app/interface/modal.interface"
import { BK_KEGIATAN_PEMBANGUNAN_COLUMNS } from "@app/config/react-table/administrasi/bk-kegiatan-pembangunan.config"
import BkKegiatanPembangunanForm from "./BkKegiatanPembangunanForm"
import { IBukuKegiatanPembangunan } from "@app/interface/administrasi/buku-kegiatan-pembangunan.interface"
import { numberCurrencyID } from "@app/helper/number.helper"
import { dateFormat } from "@app/helper/time.helper"
import BkKegiatanPembangunanFilter from "./BkKegiatanPembangunanFilter"
import ModalImport from "@app/components/Modals/ModalImport"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import { DescriptionInfo } from "@app/styled/typography.styled"
import { cdnUrl } from "@app/helper/cdn.helper"

export default function BkKegiatanPembangunanPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [columns] = useState<any>(BK_KEGIATAN_PEMBANGUNAN_COLUMNS())

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuKegiatanPembangunan
  )

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "md",
    title: `Buku Kegiatan Pembangunan`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Kegiatan Pembangunan`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBukuKegiatanPembangunan) => {
      const lampiran = cdnUrl(item?.upload_lampiran_surat)

      dataTableValue.push({
        no: (item as any)?.number,
        nama_proyek: toTitleCase(item?.nama_proyek) || "-",
        sifat_proyek: toTitleCase(item?.sifat_proyek) || "-",
        jumlah_biaya: numberCurrencyID(item?.jumlah_biaya) || "0",
        waktu_pengerjaan: `${dateFormat(item?.waktu_pengerjaan)}`,
        lokasi: item?.lokasi || "-",
        pelaksana: item?.pelaksana || "-",
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
        path={API_PATH().downloadBuku.administrasi.bukuKegiatanPembangunan}
        filter={true}>
        <BkKegiatanPembangunanFilter />
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
          "nama_proyek",
          "sifat_proyek",
          "biaya",
          "pelaksana",
        ]}></TableData>
      <ModalForm modalProps={modal}>
        <BkKegiatanPembangunanForm
          onCancel={handleCloseModal}></BkKegiatanPembangunanForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuKegiatanPembangunan}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuKegiatanPembangunan}
      />
    </>
  )
}
