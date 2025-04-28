import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

/** CONFIG */

/** COMPONENTS */
import { BK_MUTASI_PENDUDUK_COLUMNS } from "@app/config/react-table/administrasi/bk-mutasi-penduduk.config";
import { IBkMutasiPenduduk } from "@app/interface/administrasi/buku-mutasi-penduduk";
import { IModalData } from "@app/interface/modal.interface";
import TableData from "@app/modules/Table/TableData";
import TableDataListAction from "@app/modules/Table/TableDataListAction";
import { API_PATH } from "@app/services/_path.service";
import BkMutasiPendudukFilter from "./BkMutasiPendudukFilter";
// import ModalImport from '@app/components/Modals/ModalImport';
import DropdownActionData from "@app/components/Dropdown/DropdownActionData";
import ModalForm from "@app/components/Modals/ModalForm";
import { toTitleCase } from "@app/helper/string.helper";
import { TabLink } from "@app/styled/tab.styled";
import { Nav } from "react-bootstrap";
import ModalDetail from "../../../Layanan/SuratMasuk/VerifikasiSuratMasuk";

const HIDDEN_COLUMS = {
  masuk: ["pindah", "meninggal"],
  keluar: ["datang"],
};
export default function BkMutasiPendudukPage() {
  const navigate = useNavigate();
  /** DATA RESP */
  const [dataRows, setDataRows] = useState<any>([]);
  const [dataSelected, setDataSelected] = useState<any>();
  const [action, setAction] = useState<string>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [columns] = useState<any>(BK_MUTASI_PENDUDUK_COLUMNS());
  const [hiddenColums, setHiddenColumns] = useState<string[]>(
    HIDDEN_COLUMS.masuk
  );
  const [path] = useState<any>(API_PATH().form.administrasi.bukuMutasiPenduduk);

  /** MODAL */
  // const [modalImport, setModalImport] = useState<IModalData>({
  //   approved: false,
  //   size: 'md',
  // });

  const [modalDetail, setModalDetail] = useState<IModalData>({
    approved: false,
    size: "lg",
    title: `Buku Mutasi Penduduk`,
  });

  const [tabActive, setTabActive] = useState<"masuk" | "keluar">("masuk");

  /** MAP DATA FROM API RESPONSE */
  const handleRespDataApi = (data: any) => {
    let dataTableValue: any = [];
    data?.forEach((item: IBkMutasiPenduduk) => {
      dataTableValue.push({
        no: (item as any)?.number,
        nama_lengkap: toTitleCase((item as any)?.nama_lengkap) || "-",
        tempat_tanggal_lahir: `${
          (item as any)?.tempat_tanggal_lahir
            ? (item as any)?.tempat_tanggal_lahir
            : "-"
        }`,
        umur: item?.umur || 0,
        jenis_kelamin: (item as any)?.jenis_kelamin || "-",
        jenis_mutasi: (item as any)?.jenis_mutasi || "",
        datang: `${item?.Datang ? item?.Datang : "-"}`,
        pindah: `${item?.Pindah ? item?.Pindah : "-"}`,
        meninggal: `${item?.Meninggal ? item?.Meninggal : "-"}`,
        action: (
          <DropdownActionData
            actions={["detail", "delete", "print", "copy"]}
            item={item}
            handleDetail={handleDetail}
            handleEdit={handleEdit}
            handleSetPrivileges={handleSetPrivileges}
            handleDelete={handleDelete}
          />
        ),
      });
    });
    setDataRows(dataTableValue);
  };

  const handleSetPrivileges = (item: any) => {
    navigate(`settings/${item?.id}`);
  };

  /** DELETE HANDLING */
  const handleDelete = (item: any) => {
    setDataSelected(item);
    setAction("delete");
  };

  /** EDIT HANDLING */
  const handleEdit = (item: any) => {
    setDataSelected(item);
    setAction("edit.modal");
  };

  /** HANDLE IMPORT FILE */
  // const handleImportFile = () => {
  //   setModalImport((prevState: any) => ({
  //     ...prevState,
  //     show: true,
  //   }));
  // };

  const handleDetail = (item: any) => {
    setModalDetail((prevState: any) => ({
      ...prevState,
      show: true,
      collection: path.split("/").reverse()[0],
      id: item._id,
    }));
  };

  const handleChangeTab = (e: "masuk" | "keluar") => {
    setTabActive(e);
    searchParams.delete("page");
    setSearchParams(searchParams);
    setHiddenColumns([...HIDDEN_COLUMS[e]]);
  };

  return (
    <>
      <Nav
        className="mt-2 mb-4"
        activeKey={tabActive}
        onSelect={(e: any) => handleChangeTab(e)}
      >
        <Nav.Item style={{ width: "12rem" }}>
          <TabLink eventKey="masuk">Masuk</TabLink>
        </Nav.Item>
        <Nav.Item style={{ width: "12rem" }}>
          <TabLink eventKey="keluar">Keluar</TabLink>
        </Nav.Item>
      </Nav>
      <TableDataListAction
        add={false}
        filter={true}
        // importFile={true}
        // onClickImport={handleImportFile}
      >
        <BkMutasiPendudukFilter />
      </TableDataListAction>

      <TableData
        columnsConfig={columns}
        respDataApi={handleRespDataApi}
        rowData={dataRows}
        path={path}
        primaryKey={"id"}
        action={action}
        selected={dataSelected}
        endpoint={{
          getAll: "/get-mutasi",
          delete: "/delete",
        }}
        filterParams={{
          // fullname: "",
          // search: "",
          tipe_mutasi:
            tabActive === "masuk"
              ? ["Lahir", "Datang"]
              : ["Meninggal", "Pergi"],
        }}
        searchByField={["nama_lengkap"]}
        sorting={{
          orderBy: "nama_lengkap",
          order: "ASC",
        }}
        hiddenColumns={hiddenColums}
      ></TableData>

      <ModalForm ids="buku-detail" modalProps={modalDetail}>
        <ModalDetail form={modalDetail} type={"detail"} />
      </ModalForm>

      {/* <ModalImport
        modalProps={modalImport}
        path={`${API_PATH().import.administrasi.bukuMutasiPenduduk}`}
      /> */}
    </>
  );
}
