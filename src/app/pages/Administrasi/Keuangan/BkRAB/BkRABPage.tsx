import React, { useState } from "react"

/** CONFIG */

/** COMPONENTS */
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { IModalData } from "@app/interface/modal.interface"
import ModalForm from "@app/components/Modals/ModalForm"
import BkRABForm from "./BkRABForm"
import { BK_RENCANA_ANGGARAN_BIAYA_COLUMNS } from "@app/config/react-table/administrasi/bk-rencana-anggaran-biaya.config"
import { IBkRencanaAnggaranBiaya } from "@app/interface/administrasi/buku-rencana-anggaran-biaya.interface"
import { cdnUrl } from "@app/helper/cdn.helper"
import { DescriptionInfo } from "@app/styled/typography.styled"
import { dateFormat } from "@app/helper/time.helper"
import ModalImport from "@app/components/Modals/ModalImport"
import BkRABFilter from "./BkRABFilter"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"
import { toTitleCase } from "@app/helper/string.helper"
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"

export default function BkRABPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()
  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuRencanaAnggaranBiaya
  )

  const [columns] = useState<any>(BK_RENCANA_ANGGARAN_BIAYA_COLUMNS())

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Rencana Anggaran Biaya`,
  })
  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })
  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Rencana Anggaran Biaya`,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []

    data?.forEach((item: IBkRencanaAnggaranBiaya) => {
      const lampiran = cdnUrl(item?.lampiran)
      dataTableValue.push({
        no: (item as any)?.number,
        jenis_RAB_APB_desa: toTitleCase(item?.jenis_RAB_APB_desa) || "-",
        tanggal_RAB: dateFormat(item?.tanggal_RAB),
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
        path={API_PATH().downloadBuku.administrasi.bukuRencanaAnggaranBiaya}>
        <BkRABFilter />
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
          "jenis_RAB_APB_desa",
          "tanggal_RAB",
          "keterangan",
        ]}></TableData>
      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkRABForm onCancel={handleCloseModal}></BkRABForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuRencanaAnggaranBiaya}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuRAB}
      />
    </>
  )
}
