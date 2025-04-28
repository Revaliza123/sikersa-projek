import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import SideNav from "./SideNav/SideNav";
import { ADMIN_MENU } from "@app/config/menu.config";
import { AppProvider } from "@app/context/AppContext";
import { initNestedMenu } from "@app/helper/menu.helper";
import { setActivePage } from "@app/store/reducers/ui";
import { get } from "lodash";
import { useDispatch, useSelector } from "react-redux";

function SidebarLayout() {
  const location = useLocation()
  const { isSidebarMenuCollapsed, menuStyle } = useSelector(
    (state: any) => state.ui
  )

  const isExportData = location?.pathname?.includes("/data-ekspor/")

  // const dispatch = useDispatch();
  const dispatch = useDispatch()
  const { workspace } = useSelector((state: any) => state.app)
  const { privileges } = useSelector((state: any) => state.auth)

  const [navs, setNavs] = useState<any>()
  const [activeParentMenu, setActiveParentMenu] = useState<any>()
  const [navsDefault, setNavsDefault] = useState<any>()
  const [navsDefaultFiltered, setNavsDefaultFiltered] = useState<any>()

  const checkMenuHasPriv = (id: any, priv: string) => {
    const check =
      privileges != "undefined"
        ? privileges?.find((f: any) => f?.id == id)?.privileges?.includes(priv)
        : false
    return check
  }

  useEffect(() => {
    if (navsDefault) {
      const currentPath = location?.pathname
      const pathnameArr = currentPath?.split("/")

      const menusMapped = navsDefault ? navsDefault : []
      const menusFiltered = navsDefaultFiltered
      const navParent: any = menusMapped?.filter(
        (f: any) =>
          f?.path ==
          `/${get(pathnameArr, "1")}${workspace?.prefixPath ? "/" + get(pathnameArr, "2") : ""}`
      )

      const navActive = get(navParent, "0")

      if (navActive?.id != activeParentMenu?.id) {
        const NESTED_MENU = initNestedMenu(navActive?.id, menusFiltered, null)
        setNavs(NESTED_MENU)
        setActiveParentMenu(navActive)
        // dispatch(toggleSidebarMenu(0));
      } else if (activeParentMenu == undefined) {
        const NESTED_MENU = initNestedMenu("", menusFiltered, null)
        setNavs(NESTED_MENU)
      }
    }
  }, [navsDefault, location?.pathname])

  /** INIT MENU */
  const initMenus = () => {
    const menusMapped = ADMIN_MENU()?.map((m: any) => {
      m.path = workspace?.prefixPath
        ? `/${workspace?.prefixPath}${m?.path}`
        : m?.path
      return m
    })
    const adminMenuFiltered = menusMapped
      .filter((f: any) => checkMenuHasPriv(f?.id, "view"))
      .map((f: any) => {
        let updatedPrivileges = f.privileges
          .map((p: any) => {
            let priv = {
              [p]: checkMenuHasPriv(f?.id, p),
            }
            return priv
          })
          .reduce((allObject: any, currentObject: any) => {
            const key = Object.keys(currentObject)[0]
            allObject[key] = currentObject[key]
            return allObject
          })
        return {
          ...f,
          privileges: updatedPrivileges,
        }
      })
    setNavsDefault(menusMapped)
    setNavsDefaultFiltered(adminMenuFiltered)
  }
  useEffect(() => {
    dispatch(
      setActivePage(
        navsDefaultFiltered?.find((f: any) => f?.path == location.pathname)
      )
    )
    // console.log('asd')
  }, [navsDefaultFiltered, location?.pathname])

  useEffect(() => {
    initMenus()

    const timeout = setTimeout(() => {
      document
        .getElementById("sidenavsub")
        ?.classList.remove("animate__slideInLeft")
      document
        .getElementById("sidenavsub")
        ?.classList.remove("animate__slideOutLeft")
    }, 500)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AppProvider>
      <Header />
      <SideNav navs={navs} activeParentMenu={activeParentMenu} />
      <div
        className={` 
         ${isSidebarMenuCollapsed == 0 ? "sidebar-expand" : "sidebar-mini"}
         ${menuStyle} ${isExportData ? "ps-0" : ""}`}
      >
        <div
          className={`${
            isExportData ? "container-fluid" : "container-fluid"
          } pb-3 `}
          style={{ paddingTop: ".5rem" }}
        >
          <Outlet />
        </div>
      </div>
    </AppProvider>
  );
}

export default React.memo(SidebarLayout);