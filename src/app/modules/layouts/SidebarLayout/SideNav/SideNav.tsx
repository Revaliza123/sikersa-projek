import React, { useEffect, useState } from "react"
import { Card, Nav } from "react-bootstrap"

import { get } from "lodash"

import { ROLE_ACCESS } from "@app/helper/auth.helper"

import AppLogo from "./AppLogo"

/** STYLED */
import styled from "styled-components"

import { ContainerNav, SideNavContainer } from "@app/styled/sidenav.styled"

import ToggleTheme from "@app/components/Input/ToggleTheme"
import { ADMIN_MENU } from "@app/config/menu.config"
import { cdnUrl } from "@app/helper/cdn.helper"
import { initNestedMenu } from "@app/helper/menu.helper"
import { IMenu } from "@app/interface/menu.interface"
import { setThemeMode, toggleSidebarMenu } from "@app/store/reducers/ui"
import { DFlex } from "@app/styled/flex.styled"
import { nanoid } from "nanoid"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import NavLinkMenu from "./NavLinkMenu"
import SidenavSecondary from "./SidenavSecondary"
import { LazyImage } from "@app/components"

function SideNav({ activeParentMenu, navs }: any) {
  const location = useLocation()
  const { workspace } = useSelector((state: any) => state.app)
  const defaultLogo = "/static/logo-desa/logo-default.svg"
  const workspaceLogo = workspace?.application?.logo
    ? cdnUrl(workspace?.application?.logo)
    : defaultLogo
  const dispatch = useDispatch()
  const { isSidebarMenuCollapsed, themeMode, menuStyle } = useSelector(
    (state: any) => state.ui
  )

  console.log("side", isSidebarMenuCollapsed)

  const [menus, setMenus] = useState<any>()
  const [roleAccess, setRoleAccess] = useState<any>()

  // roleAccessCheck('users', 'view')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const roleAccessCheck = (module: string, action: string) => {
    if (get(roleAccess, module)) {
      const priv = roleAccess[module].indexOf(action)
      return priv >= 0 ? true : false
    }
    return false
  }

  useEffect(() => {
    const priv = ROLE_ACCESS("all")
    setRoleAccess(priv)
  }, [])

  /** CHANGE THEME MODE */
  const handleToggleThemeMode = () => {
    const mode = themeMode == "light" ? "dark" : "light"
    dispatch(setThemeMode(mode))
  }

  useEffect(() => {
    const NESTED_MENU = initNestedMenu(
      "",
      ADMIN_MENU()
        ?.map((m: any) => {
          m.path = workspace?.prefixPath
            ? `/${workspace?.prefixPath}${m?.path}`
            : m?.path
          return m
        })
        .filter((f: any) => f?.idParent == ""),
      null
    )
    setMenus(NESTED_MENU)
  }, [])

  useEffect(() => {
    if (menuStyle === "v2") {
      dispatch(toggleSidebarMenu(0))
    }
  }, [menuStyle])

  return (
    <>
      {/* <Card
        style={{
          position: "absolute",
          top: "0",
          padding: "2rem 0",
          margin: ".8rem 3rem .8rem 1.5rem",
          minWidth: "22.2rem",
          borderRadius: "0.3rem",
          border: "none",
          display: isSidebarMenuCollapsed === 1 ? "none" : "block",
        }}>
        <DFlex className="justify-content-center">
          <LazyImage src={workspaceLogo} width={268} height={67.238} />
        </DFlex>
      </Card> */}

      {(menuStyle == "v1" ||
        location?.pathname == "/data-ekspor/expor-data") && (
          <SideNavContainer
            className={`sidenav sidenav-mini ${isSidebarMenuCollapsed ? "" : "expanded"} bg-primary`}
            style={{
              marginTop:
                isSidebarMenuCollapsed === 1 ? "calc(11.5rem - 14px)" : "calc(11.5rem - 14px)",
              minHeight: "64.5rem",
              maxHeight: "64.5rem",
            }}>
            <ContainerNav>
              <div className="mb-auto w-100">
                <div
                  className={isSidebarMenuCollapsed == 1 ? "d-block" : "d-none"}
                  style={{
                    paddingBottom: isSidebarMenuCollapsed == 1 ? "4rem" : "0",
                  }}>
                  <AppLogo type={"logo"} />
                </div>
                <Nav defaultActiveKey="/dashboard" className="flex-column">
                  {menus?.map((menu: IMenu) => (
                    <NavLinkMenu
                      menu={menu}
                      isSidebarMenuCollapsed={true}
                      key={nanoid()}
                    />
                  ))}
                </Nav>
              </div>
              <BottomSideNav>
                <ToggleTheme onChangeTheme={handleToggleThemeMode}></ToggleTheme>
              </BottomSideNav>
            </ContainerNav>
          </SideNavContainer>
        )}

      {/* SUB SIDENAV  */}
      {!isSidebarMenuCollapsed &&
        location?.pathname != "/data-ekspor/expor-data" && (
          <SideNavSubMenu navs={navs} activeParentMenu={activeParentMenu} />
        )}
    </>
  )
}

const SideNavSubMenu = ({ activeParentMenu, navs }: any) => {
  const { activePage } = useSelector((state: any) => state?.ui)

  return (
    <SidenavSecondary
      activeParentMenu={activeParentMenu}
      activePage={activePage}
      navs={navs}></SidenavSecondary>
  )
}

const BottomSideNav = styled.div`
  padding: 0.75rem 1.25rem;
  margin-top: auto;
`

export default React.memo(SideNav)
