/* eslint-disable @typescript-eslint/no-unused-vars */
import { ADMIN_MENU } from "@app/config/menu.config"
import { DFlexJustifyBetween } from "@app/styled/flex.styled"
import { get, reverse } from "lodash"
import { nanoid } from "nanoid"
import React, { useEffect, useState } from "react"
import { Breadcrumb } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import GridMenuIcon from "../Icons/GridMenuIcon"

const BreadcrumbItem = styled(Breadcrumb.Item)``

function BreadcrumbPage() {
  const { activePage, isSidebarMenuCollapsed } = useSelector(
    (state: any) => state?.ui
  )

  const location = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<any>()

  useEffect(() => {
    let breadcrumsData: any = [{ ...activePage, last: true }]
    if (activePage?.idParent) {
      const parent1 = get(
        ADMIN_MENU().filter((f: any) => f?.id == activePage?.idParent),
        0
      )
      breadcrumsData.push(parent1)

      if (parent1.idParent) {
        const parent2 = get(
          ADMIN_MENU().filter((f: any) => f?.id == parent1?.idParent),
          0
        )
        breadcrumsData.push(parent2)

        if (parent2.idParent) {
          const parent3 = get(
            ADMIN_MENU().filter((f: any) => f?.id == parent2?.idParent),
            0
          )
          breadcrumsData.push(parent3)
        }
      }
    }

    setBreadcrumbs(reverse(breadcrumsData))
  }, [activePage])

  if (get(breadcrumbs, "0.last")) {
    return <></>
  }

  return (
    <>
      <BreadCumbBox>
        <DFlexJustifyBetween>
          <Breadcrumb>
            {/* <BreadcrumbItem linkAs="span" style={{ lineHeight: "1.2" }}> */}
              {/* <img
                src="/static/icons/home-2.svg"
                alt=""
                style={{ width: "1rem" }}
              /> */}
              {/* <GridMenuIcon width={16} /> */}
            {/* </BreadcrumbItem> */}
            {breadcrumbs?.map((b: any) => (
              <BreadcrumbItem key={nanoid()} active={b?.last} linkAs="span">
                {b?.display}
              </BreadcrumbItem>
            ))} 
          </Breadcrumb>
          {/* **NEED SERVICE FIRST** */}
          {/* {location?.pathname?.includes("/data/jumlah-penduduk") ? (
          <Button variant="outline-primary">Download</Button>
        ) : null} */}
        </DFlexJustifyBetween>
      </BreadCumbBox>
    </>
  )
}

const BreadCumbBox = styled.div`
  background: var(--white);
  padding: 1.2rem 1.2rem 0 1.2rem;
  border-radius: 0 0 0.35rem 0.35rem;
  border: 1px solid var(--black-50);
  box-shadow: 2px 0px 24px 0px rgba(225, 230, 235, 0.08);
  position: sticky;
  top: 5.4rem;
  z-index: 0;
  margin-bottom: 1rem;
`

export default React.memo(BreadcrumbPage)
