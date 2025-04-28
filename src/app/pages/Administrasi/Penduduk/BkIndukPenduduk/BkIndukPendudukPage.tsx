import React, { useMemo, useState } from "react"

/** COMPONENTS */
import ModalForm from "@app/components/Modals/ModalForm"
import { IMPORT_FILE_FORMAT } from "@app/config/import-format.config"
import { BK_INDUK_PENDUDUK_COLUMNS } from "@app/config/react-table/administrasi/bk-induk-penduduk.config"
import { useDownloadableWithPayload } from "@app/helper/download.helper"
import { timeFormat } from "@app/helper/time.helper"
import { IBukuIndukPenduduk } from "@app/interface/administrasi/buku-induk-penduduk.interface"
import { IModalData } from "@app/interface/modal.interface"
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import BkIndukPendudukFilter from "./BkIndukPendudukFilter"
import BkIndukPendudukForm from "./BkIndukPendudukForm"
// import { useSelector } from 'react-redux';
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import ModalImportBukuIndukPenduduk from "@app/components/Modals/ModalImportBukuIndukPenduduk"
import { toTitleCase } from "@app/helper/string.helper"
import { Modal } from "react-bootstrap"
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk"

const SEARCH_BY_FIELDS = [
  "nik",
  "nomor_kk",
  "nama_lengkap",
  "jenis_kelamin",
  "tempat_lahir",
  "tanggal_lahir",
]

export default function BkIndukPendudukPage() {
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [path] = useState<string>(
    API_PATH().form.administrasi.bukuIndukPenduduk
  )

  const [columns, setColumns] = useState<any>(BK_INDUK_PENDUDUK_COLUMNS())

  const { downloadFile } = useDownloadableWithPayload({
    searchBy: SEARCH_BY_FIELDS,
  })

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Induk Penduduk`,
  })

  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "md",
  })

  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Induk Penduduk`,
    show: false,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: IBukuIndukPenduduk) => {
      dataTableValue.push({
        no: (item as any)?.number,
        "nama_lengkap": toTitleCase(item?.umum?.nama_lengkap) || "-",
        "nomor_kk": item?.kelahiran?.nomor_kk || "-",
        "nik": item?.umum?.nik || "-",
        "tanggal_lahir": `${timeFormat(item?.kelahiran?.tanggal_lahir, "YYYY-MM-DD")}`,
        "jenis_kelamin": item?.umum?.jenis_kelamin || "-",
        umur: item?.umum?.umur || 0,
        "pendidikan_terakhir": item?.umum?.pendidikan_terakhir || "-",
        "pekerjaan": item?.umum?.pekerjaan || "-",
        "status_perkawinan": toTitleCase(
          item?.nikah_cerai?.status_perkawinan || "-"
        ),
        "golongan_darah": item?.umum?.golongan_darah || "-",
        "tempat_lahir": toTitleCase(
          item?.kelahiran?.tempat_lahir || "-"
        ),
        "alamat_rumah": item?.umum?.alamat_rumah || "-",
        "rt": item?.umum?.rt || "-",
        "rw": item?.umum?.rw || "-",
        berkas: (
          <a className="primary" href="">
            Lihat File
          </a>
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

  /** HANDLE PRINT */
  const handlePrint = (e: any) => {
    let url: string
    let additionalOptions = { field: [] }
    if (e && "type" in e && e?.type === "filtered") {
      url = API_PATH().downloadBuku.administrasi.bukuIndukPendudukByFilter
      additionalOptions = {
        field: columns.reduce((acc = [] as string[], curr: any) => {
          if (curr?.show) {
            if (
              curr?.accessor &&
              curr?.accessor !== "" &&
              curr?.accessor !== "action"
            ) {
              if (curr?.accessor === "no") {
                acc.push("no_urut")
              } else {
                const field = curr?.accessor?.split("/").reverse()[0]
                acc.push(field)
              }
            }
          }

          return acc
        }, []),
      }
    } else {
      url = API_PATH().downloadBuku.administrasi.bukuIndukPenduduk
    }

    downloadFile(url, additionalOptions)
  }

  const handleDetail = (item: any) => {
    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      collection: path.split("/").reverse()[0],
      id: item?._id,
    }))
  }

  const handleChangeDisplayColumns = (col: any) => {
    const newColumns = Object.values(col)
    setColumns([...newColumns])
  }

  const displayColumnsObject = useMemo(
    () =>
      columns.reduce((acc: any = {}, curr: any) => {
        acc[curr.accessor] = { ...curr }
        return acc
      }, {}),
    [columns]
  )

  const hiddenColumns = useMemo(
    () =>
      columns
        .map((c: any) => ("show" in c && !c.show ? c.accessor : null))
        .filter(Boolean),
    [columns]
  )

  return (
    <>
      <TableDataListAction
        add={true}
        btnAddText="Tambah Data"
        print={true}
        onClickImport={handleImportFile}
        onClickAdd={handleAddClick}
        onClickPrint={handlePrint}
        importFile={true}
        filter={true}
        printActionType="dropdown"
        displayColumns={displayColumnsObject}
        onChangeDisplayColumn={handleChangeDisplayColumns}>
        {({ isOpen, setIsOpen }: any) =>
          isOpen ? (
            <Modal show={isOpen} onHide={() => setIsOpen(!isOpen)}>
              <Modal.Header closeButton>
                <Modal.Title>Filter</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <BkIndukPendudukFilter />
              </Modal.Body>
            </Modal>
          ) : null
        }
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"id"}
        action={action}
        selected={dataSelected}
        searchByField={SEARCH_BY_FIELDS}
        sorting={{
          order: "DESC",
        }}
      ></TableData>

      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <BkIndukPendudukForm onCancel={handleCloseModal}></BkIndukPendudukForm>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"}  />
      </ModalForm>

      <ModalImportBukuIndukPenduduk
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuIndukPenduduk}`}
        templatePath={IMPORT_FILE_FORMAT().administrasi.bukuIndukPenduduk}
      />
    </>
  )
}
