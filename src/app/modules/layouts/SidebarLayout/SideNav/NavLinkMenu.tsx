import { ICONS } from "@app/config/icon.config"
import { IMenu } from "@app/interface/menu.interface"
import get from "lodash/get"
import { nanoid } from "nanoid"
import React from "react"
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const icon: any = ICONS

export default function NavLinkMenu({
  menu,
  isSidebarMenuCollapsed,
}: INavLinkMenu) {
  const handleClickNav = (e: any, menu: any) => {
    if (menu?.enabled === false) {
      e.preventDefault()
    }
  }
  return (
    <>
      {menu.type == "menu" && (
        <OverlayTrigger
          key={nanoid()}
          placement={"right"}
          trigger={["hover", "focus"]}
          show={
            isSidebarMenuCollapsed == 0 && menu?.children?.length == 0
              ? false
              : undefined
          }
          overlay={
            <Tooltip
              id={`tooltip-menu-${nanoid()}`}
              className={menu?.children?.length > 0 ? "nav-sub" : ""}>
              {menu?.children?.length == 0 ? (
                menu?.display
              ) : (
                <>
                  <Nav className="flex-column">
                    <NavLinkCustom eventKey="disabled" className="small">
                      {menu?.display}
                    </NavLinkCustom>
                    {menu?.children.map((m2: IMenu) => {
                      return (
                        <NavLinkMenu
                          menu={m2}
                          isSidebarMenuCollapsed={false}
                          key={nanoid()}
                        />
                      )
                    })}
                  </Nav>
                </>
              )}
            </Tooltip>
          }>
          {menu?.children?.length > 0 ? (
            <Nav.Link className="nav-link" key={nanoid()}>
              <span className="icon">{get(icon, menu?.icon)}</span>
              <MenuText className="mt">{menu?.display}</MenuText>
            </Nav.Link>
          ) : (
            <NavLink
              className={`nav-link`}
              to={menu?.path}
              key={nanoid()}
              onClick={(e) => handleClickNav(e, menu)}>
              <span className="icon">{get(icon, menu?.icon)}</span>
              <MenuText className="mt">{menu?.display}</MenuText>
            </NavLink>
          )}
        </OverlayTrigger>
      )}
      {menu?.type == "separator-group" && (
        <Nav.Link className="nav-group disabled" key={nanoid()}>
          <span className="icon-sm">{get(icon, menu?.icon)}</span>
          <MenuText className="mt">{menu?.display}</MenuText>
        </Nav.Link>
      )}
    </>
  )
}
const MenuText = styled.span``

const NavLinkCustom = styled(Nav.Link)`
  .active {
    color: white !important;
  }
`

interface INavLinkMenu {
  menu: IMenu
  isSidebarMenuCollapsed: any
}
