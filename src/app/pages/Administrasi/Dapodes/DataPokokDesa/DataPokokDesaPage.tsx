import NoData from "@app/components/Error/NoData"
import PlusIcon from "@app/components/Icons/PlusIcon"
import JustifyContent from "@app/components/Layout/JustifyContent"
import { DATA_POKOK_DESA } from "@app/config/data.config"
import { ReactSelectStyleLight } from "@app/config/react-select.config"
import { yearOptions } from "@app/helper/time.helper"
import { API_PATH } from "@app/services/_path.service"
import { postByController } from "@app/services/main.service"
import { reloadingData } from "@app/store/reducers/ui"
import {
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "@app/styled/accordion.styled"
import { DFlex } from "@app/styled/flex.styled"
import { BULAN } from "@assets/dummy/form-options.dummy"
import axios from "axios"
import { get } from "lodash"
import moment from "moment"
import { nanoid } from "nanoid"
import React, { useEffect, useState } from "react"
import { Button, Table } from "react-bootstrap"
import BsAccordion from "react-bootstrap/Accordion"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useSearchParams } from "react-router-dom"
import Select from "react-select"
import styled from "styled-components"

const options = yearOptions(2019)
const currentMonth = moment().month()

export default function DataPokokDesaPage() {
  const { workspace } = useSelector((state: any) => state.app)

  const [activeKey] = useState<any>("1")
  const [path] = useState<string>(API_PATH().form.administrasi.dataPokokDesa)
  const [primaryKey] = useState<string>("_id")
  const source = axios.CancelToken.source()
  const { reloadData } = useSelector((state: any) => state.app)
  const [year, setYear] = useState<any>(options[0])
  const [month, setMonth] = useState<any>(BULAN[currentMonth])
  const [dataConfig] = useState<any>(DATA_POKOK_DESA)
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useDispatch()


  console.log(workspace)

  /** DATA RESP */
  const [respData, setRespData] = useState<any>([])

  /** GET DATA */
  const getAllData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 300))

    try {
      const params = {
        workspaceId: workspace._id,
        keyword: "DESC",
        orderBy: "created_at",
        page: 1,
        size: 10,
        filter: [
          {
            field: "bulan",
            value: month?.value,
          },
          {
            field: "tahun",
            value: year?.value,
          },
        ],
      }

      const req: any = await postByController(
        path + "/get-all",
        params,
        source.token
      )
      const results = req?.data
      const dataLength = results ? results.length : 0

      if (dataLength > 0) {
        let data = results.map((d: any) => {
          d.id = get(d, primaryKey)
          return d
        })

        let tmpRespData = data[0]
        let remapResp = dataConfig.map((root: any) => {
          root.children = root?.children?.map((child: any) => {
            return {
              ...child,
              value: tmpRespData[root.field][child.field] || "-",
            }
          })
          return root
        })

        setRespData(remapResp)
      } else {
        setRespData([])
      }

      if (reloadData) {
        dispatch(reloadingData(null))
      }
    } catch (err: any) {
      setRespData([])
    }
  }

  /** HANDLE RELOAD DATA CLICK */
  useEffect(() => {
    // if (reloadData) {
    getAllData()
    // }
  }, [month, year])

  const deleteSearchParams = () => {
    if (searchParams.has("year")) {
      searchParams.delete("year")
      setSearchParams(searchParams)
    }

    if (searchParams.has("month")) {
      searchParams.delete("month")
      setSearchParams(searchParams)
    }
  }

  const handleOnYourChange = (data: any) => {
    deleteSearchParams()

    setYear(data)
  }

  const handleOnMonthChange = (data: any) => {
    deleteSearchParams()

    setMonth(data)
  }

  useEffect(() => {
    if (searchParams.get("year") && searchParams.get("month")) {
      setMonth({
        ...BULAN.find(
          (x) => x.value === searchParams.get("month")?.toLowerCase()
        ),
      })
      setYear({
        value: Number(searchParams.get("year")),
        label: Number(searchParams.get("year")),
      })
    }
  }, [searchParams])

  return (
    <>
      <JustifyContent>
        <div>
          <DFlex>
            <Select
              value={year}
              options={options}
              styles={ReactSelectStyleLight}
              onChange={handleOnYourChange}
              placeholder="Tahun"
            />
            <Select
              className="ms-2"
              value={month}
              options={BULAN}
              styles={ReactSelectStyleLight}
              onChange={handleOnMonthChange}
              placeholder="Bulan"
            />
            {/* <Button variant='' className='ms-2' style={{ background: 'var(--white)' }}>
              <PlusIcon />
            </Button> */}
          </DFlex>
        </div>
        <div>
          <NavLink
            to={`/${workspace?.alias}/administrasi/data/pokok-desa/tambah-data`}>
            <Button variant="primary" className="ms-2">
              <PlusIcon /> Tambah Data
            </Button>
          </NavLink>
        </div>
      </JustifyContent>

      <div className="mt-3">
        {respData && respData?.length > 0 ? (
          respData.map((headerGroup: any) => (
            <BsAccordion key={nanoid()} defaultActiveKey={activeKey}>
              <AccordionItem eventKey="0">
                <AccordionHeader className="v2">
                  {headerGroup?.name}
                </AccordionHeader>
                <AccordionBody>
                  <Table className="mb-0 mt--1" responsive bordered>
                    <tbody>
                      {headerGroup?.children &&
                        headerGroup?.children?.map(
                          (item: any, indexItem: number) => (
                            <tr key={nanoid()}>
                              <td className="text-center" style={{ width: 15 }}>
                                {indexItem + 1}
                              </td>
                              <td>{item.name}</td>
                              <td style={{ width: "30%" }}>
                                <InfoDetailDesa>{item.value}</InfoDetailDesa>{" "}
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </Table>
                </AccordionBody>
              </AccordionItem>
            </BsAccordion>
          ))
        ) : (
          <NoData />
        )}
      </div>
    </>
  )
}

const InfoDetailDesa = styled.span`
  color: var(--primary);
  text-align: right;
  width: 100%;
  display: block;
`
