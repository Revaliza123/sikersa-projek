import { Button } from "@app/components"
import CiCloseBig from "@app/components/Icons/CiCloseBig"
import FilterIcon from "@app/components/Icons/FilterIcon"
import FrameIcon from "@app/components/Icons/FrameIcon"
import PlusIcon from "@app/components/Icons/PlusIcon"
import PrintIcon from "@app/components/Icons/PrintIcon"
import SearchIcon from "@app/components/Icons/SearchIcon"
import UploadIcon from "@app/components/Icons/UploadIcon"
import { useDownloadableWithPayload } from "@app/helper/download.helper"
import { setSearchValue } from "@app/store/reducers/ui"
import { DFlex } from "@app/styled/flex.styled"
import { debounce } from "lodash"
import React, { ChangeEvent, useCallback, useEffect, useState } from "react"
import {
  Col,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import styled from "styled-components"
import { useToggleHideColumnReactTable } from "./useToggleHideColumnReactTable"

interface iTableDataListAction {
  children?: any
  add?: boolean
  importFile?: boolean
  print?: boolean
  filter?: boolean
  showSearch?: boolean
  btnAddText?: string
  searchPlaceholder?: string
  onClickImport?: any
  onClickAdd?: any
  onClickPrint?: any
  path?: string
  inline?: boolean
  displayColumns?: any | null
  onChangeDisplayColumn?: any
  excludeColumns?: string[]
  renderSearchField?: any
  printActionType?: "button" | "dropdown"
}

export default function TableDataListAction({
  children,
  add = true,
  importFile = false,
  print = false,
  filter = false,
  showSearch = true,
  btnAddText = "Tambah Data",
  searchPlaceholder = "Cari...",
  onClickImport,
  onClickAdd,
  onClickPrint,
  path,
  inline = false,
  displayColumns = null,
  excludeColumns = ["no", "action"],
  onChangeDisplayColumn,
  renderSearchField = null,
  printActionType = "button",
}: iTableDataListAction) {
  const { activePage, searchValue } = useSelector((state: any) => state.ui)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  // const [loadingExport, setLoadingExport] = useState<any>('');
  const [search, setSearch] = useState<any>("")
  const [filterBar, setFilterBar] = useState<boolean>(false)
  const { downloadFile, isDownloadFileLoading } = useDownloadableWithPayload()
  let [searchParams, setSearchParams] = useSearchParams()
  const { displayColumnsValues, handleChangeDisplayColumn } =
    useToggleHideColumnReactTable({
      columns: displayColumns,
      excludeColumns: excludeColumns,
    })

  useEffect(() => {
    debouncedSearchHandler(search)
  }, [search])

  /** SEARCH HANDLER */
  const searchHandler = (value: any) => {
    dispatch(setSearchValue(value || ""))
  }

  const debouncedSearchHandler = useCallback(debounce(searchHandler, 500), [])

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    searchParams.delete("page")
    searchParams.append("page", "1")

    setSearchParams(searchParams)
    setSearch(value)
  }

  // whenever searchValue from redux is falsy
  // then clear input search value
  useEffect(() => {
    if (searchValue === "") {
      setSearch("")
    }
  }, [searchValue])

  const handleImportFile = (e: any) => {
    if (onClickImport) {
      onClickImport(e)
    } else {
      const target = typeof add == "boolean" ? "add" : add
      navigate(target)
    }
  }

  const handleFilter = () => {
    if (filterBar) {
      setFilterBar(false)
    } else {
      setFilterBar(true)
    }
  }

  const handleAddClick = (e: any) => {
    if (onClickAdd) {
      onClickAdd(e)
    } else {
      const target = typeof add == "boolean" ? "add" : add
      navigate(target)
    }
  }

  const handlePrint = (e: any) => {
    if (path && printActionType === "button") {
      downloadFile(path)
    } else if (onClickPrint && printActionType === "dropdown") {
      onClickPrint(e)
    } else {
      onClickPrint(e)
    }
  }

  const resetSearch = () => {
    setSearch("")
    dispatch(setSearchValue(null))
  }

  const renderPrint = () => {
    if (printActionType === "dropdown") {
      return (
        <Dropdown
          className="hide-toogle"
          autoClose="outside"
          align={"end"}
          placement="auto-end">
          <Dropdown.Toggle
            variant="outline-primary"
            className="h-100"
            id={`dropdown-print`}>
            <PrintIcon />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handlePrint({ type: "all" })}>
              Cetak Semua
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handlePrint({ type: "filtered" })}>
              Cetak Berdasarkan Filter
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )
    }

    return (
      <Button
        variant="secondary"
        onClick={handlePrint}
        className="mx-1"
        style={{ color: "var(--black)" }}
        isLoading={isDownloadFileLoading}>
        <PrintIcon /> Cetak
      </Button>
    )
  }

  return (
    <>
      <Row className="align-items-center mb-3 gy-3">
        <Col lg={5}>
          <DFlex className="gap-1 flex-wrap" style={{ minWidth: "20rem" }}>
            {showSearch && (
              <>
                {renderSearchField && typeof renderSearchField == "function"
                  ? renderSearchField()
                  : null}
                <SearchInputGroup>
                  <InputGroup.Text id="search" className="bg-white">
                    <SearchIcon />
                  </InputGroup.Text>
                  <FormControl
                    placeholder={searchPlaceholder}
                    aria-label={searchPlaceholder}
                    className="inline-group bg-white ps-0"
                    onChange={handleChangeSearch}
                    value={search}
                  />
                  {search ? (
                    <InputGroup.Text
                      id="search"
                      className="bg-white"
                      onClick={resetSearch}>
                      <CiCloseBig />
                    </InputGroup.Text>
                  ) : null}
                </SearchInputGroup>
              </>
            )}
            {filter && !inline && (
              <Button
                variant="outline-warning"
                onClick={handleFilter}
                style={{ border: 0 }}>
                <FilterIcon />
              </Button>
            )}
            {filter &&
              inline &&
              (typeof children === "function"
                ? children({ isOpen: filterBar, setIsOpen: setFilterBar })
                : children)}

            {displayColumnsValues && displayColumnsValues.length > 0 ? (
              <Dropdown className="hide-toogle" autoClose="outside">
                <Dropdown.Toggle
                  variant="outline-warning"
                  className="border-0 h-100"
                  id={`dropdown-display-column`}>
                  <FrameIcon />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <ColumnsToggleForm>
                    {displayColumnsValues.map((col: any) => (
                      <Dropdown.Item key={col.accessor} as="div">
                        <Form.Check
                          type={"checkbox"}
                          id={col?.["Header"]}
                          label={col?.["Header"]}
                          value={col?.accessor}
                          onChange={() =>
                            handleChangeDisplayColumn(
                              col,
                              onChangeDisplayColumn
                            )
                          }
                          defaultChecked={col?.["show"]}
                        />
                      </Dropdown.Item>
                    ))}
                  </ColumnsToggleForm>
                </Dropdown.Menu>
              </Dropdown>
            ) : null}
          </DFlex>
        </Col>
        <Col lg={7}>
          <DFlex className="justify-content-end">
            {activePage?.privileges?.import && importFile && (
              <Button
                variant="outline-primary"
                onClick={handleImportFile}
                className="me-1">
                <UploadIcon />
              </Button>
            )}
            {activePage?.privileges?.print && print ? renderPrint() : null}
            {activePage?.privileges?.create && add && (
              <Button
                variant="primary"
                className="ms-1 text-white"
                onClick={handleAddClick}>
                <PlusIcon /> {btnAddText}
              </Button>
            )}
          </DFlex>
        </Col>
      </Row>
      {filterBar &&
        !inline &&
        (typeof children === "function"
          ? children({ isOpen: filterBar, setIsOpen: setFilterBar })
          : children)}
    </>
  )
}

const ColumnsToggleForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 30rem;
  max-height: 22rem;
`
const SearchInputGroup = styled(InputGroup)`
  width: 100%;

  @media (min-width: 768px) {
    width: 18rem;
  }
`
