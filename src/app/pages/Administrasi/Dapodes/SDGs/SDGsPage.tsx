/* eslint-disable @typescript-eslint/no-unused-vars */
import DropdownActionData from "@app/components/Dropdown/DropdownActionData"
import ModalForm from "@app/components/Modals/ModalForm"
import { SDGS_COLUMNS } from "@app/config/react-table/administrasi/sdgs.config"
import { generateFilter } from "@app/helper/filter.helper"
import { deleteItem } from "@app/helper/localstorage.helper"
import { toTitleCase } from "@app/helper/string.helper"
import { timeFormat } from "@app/helper/time.helper"
import { IModalData } from "@app/interface/modal.interface"
import TableData from "@app/modules/Table/TableData"
import TableDataListAction from "@app/modules/Table/TableDataListAction"
import { API_PATH } from "@app/services/_path.service"
import { setActiveFilters } from "@app/store/reducers/ui"
import React, { useEffect, useState } from "react"
import { Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import SDGsDetail from "./SDGsDetail"
import SDGsFilter from "./SDGsFilter"
import { SDGsForm } from "./SDGsForm"
import SdgsImportModal from "./SdgsIImportModal"

const options = [{ value: "", label: "Pilih Kuesioner" }]

export default function SDGsPage() {
  const dispatch = useDispatch()
  const { workspace } = useSelector((state: any) => state.app)

  const [options] = useState([])
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([])
  const [dataSelected, setDataSelected] = useState<any>()
  const [action, setAction] = useState<string>()

  const [path] = useState<string>(API_PATH().sdgs)

  const [columns] = useState<any>(SDGS_COLUMNS())

  // const {downloadFile} = useDownloadableWithPayload();

  /** MODAL */
  const [modal, setModal] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `SDGs Kuesioner`,
  })

  // const [modalImport, setModalImport] = useState<IModalData>({
  //   approved: false,
  //   size: 'md',
  // });

  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Detail Kuisioner SDGs`,
    show: false,
  })

  const [modalImport, setModalImport] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Import Kuisioner SDGs`,
    show: false,
  })

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = []
    data?.forEach((item: any) => {
      dataTableValue.push({
        no: (item as any)?.number,
        category: toTitleCase(item?.type || "-")?.replace("_", " "),
        nama: toTitleCase(item?.sdgs?.nama || "-"),
        nik: item?.sdgs?.nik || item?.sdgs?.nik_kepala_keluarga || "-",
        nomor_kartu_keluarga:
          item?.sdgs?.nomor_kartu_keluarga || item?.sdgs?.no_kk || "-",
        desa: item?.sdgs?.desa || "-",
        rt: item?.sdgs?.rt || "-",
        rw: item?.sdgs?.rw || "-",
        createdAt: timeFormat(item?.createdAt, "DD/MM/YYYY"),
        updatedAt: timeFormat(item?.updatedAt, "DD/MM/YYYY"),
        status: toTitleCase(item?.exportstatus || "pending"),
        action: (
          // <DropdownActionData actions={['detail', 'update', 'delete']} item={item} handleDetail={handleDetail} handleEdit={handleEdit} handleDelete={handleDelete} />
          <DropdownActionData
            actions={["detail", "delete"]}
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

  // /** HANDLE ADD */
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
  const handleCloseModal = (payload: any | null = null) => {
    setAction(undefined)
    setDataSelected(undefined)
    setModal((prevState: any) => ({
      ...prevState,
      show: false,
    }))
    // remove storage when close modal
    deleteItem("sdgs")

    if (payload) {
      handleDetail(payload)
    }
  }

  const handleDetail = (item: any) => {
    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      httpMethod: "GET",
      url: `${API_PATH().sdgs}/get-one-list?id=${item.id}`,
    }))
  }

  /** HANDLE RELOAD DATA CLICK */
  useEffect(() => {
    // if (reloadData) {
    // getAllData()
    // }

    const workspaceFilter = {
      filters: {
        filter: generateFilter({ workspaceId: [workspace?._id] }),
      },
    }
    dispatch(setActiveFilters(workspaceFilter))
  }, [workspace?._id])

  const handleImportFile = () => {
    setModalImport((prevState: any) => ({
      ...prevState,
      show: true,
    }))
  }

  return (
    <>
      <TableDataListAction
        add={true}
        importFile={true}
        btnAddText="Isi Kuisioner"
        onClickAdd={handleAddClick}
        onClickImport={handleImportFile}
        filter={true}
        inline={true}
        // renderAddButton={() => (
        //   <Dropdown className="hide-toogle hide-focus">
        //     <Dropdown.Toggle className="bg-transparent border-0" id={`dropdown-act-isi-kuesioner`}>
        //       <Button variant='primary' className="ms-1">
        //         <PlusIcon /> Isi Kuesioner
        //       </Button>

        //     </Dropdown.Toggle>
        //     <Dropdown.Menu>
        //       <Dropdown.Item>Kuesioner Individu</Dropdown.Item>
        //       <Dropdown.Item>Kuesioner Keluarga</Dropdown.Item>
        //       <Dropdown.Item>Kuesioner Rukun Tetangga</Dropdown.Item>
        //       <Dropdown.Item>Kuesioner Desa</Dropdown.Item>
        //   </Dropdown.Menu>
        // </Dropdown>
        // )}
      >
        <SDGsFilter />
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
          "sdgs.nama",
          "sdgs.nomor_kartu_keluarga",
          "sdgs.nomor_kk",
          "sdgs.nik",
          "sdgs.jenis_kelamin",
          "sdgs.tempat_lahir",
          "sdgs.tanggal_lahir",
          "type",
        ]}
        sorting={{
          orderBy: "created_at",
          order: "DESC",
        }}
        endpoint={{
          getAll: "/get-all-local",
          delete: "/delete",
        }}
        disableFilterWorkspaceId={true}></TableData>

      <ModalForm modalProps={modal} onHide={handleCloseModal}>
        <Modal.Body>
          <SDGsForm afterSubmit={(e: any) => handleCloseModal(e)} />
        </Modal.Body>
      </ModalForm>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <SDGsDetail form={modalDetail} />
      </ModalForm>

      <SdgsImportModal modalProps={modalImport} />
    </>
  )
}
