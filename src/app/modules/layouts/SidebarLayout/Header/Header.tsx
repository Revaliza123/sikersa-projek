import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { toggleSidebarMenu } from "@app/store/reducers/ui";

import { useApp } from "@app/context/AppContext";

/** STYLED */
import BreadcrumbPage from "@app/components/Breadcrumb/BreadcrumbPage";
import Button from "@app/components/Button/Button";
import BellIcon from "@app/components/Icons/BellIcon";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@app/components/Icons/ChevronIcon";
import ClockIcon from "@app/components/Icons/ClockIcon";
import { PesanIcon } from "@app/components/Icons/PesanIcon";
import SearchIcon from "@app/components/Icons/SearchIcon";
import { currentDate } from "@app/helper/time.helper";
import { ButtonIcon } from "@app/styled/button.styled";
import { DFlex } from "@app/styled/flex.styled";
import { font } from "@app/styled/function/_font.styled";
import { PageCurrentDate, PageTitle } from "@app/styled/typography.styled";
import { Badge, Container } from "react-bootstrap";
import styled from "styled-components";
import AvatarDropdown from "./AvatarDropdown";
import FontDropdown from "./FontDropdown";
import MenuShortcut from "./MenuShortcut";
import { LazyImage } from "@app/components";

const TODAY = currentDate();

function Header() {
  const location = useLocation();
  const { loggedInUser } = useSelector((state: any) => state.auth);

  const { isSidebarMenuCollapsed, activePage, menuStyle } = useSelector(
    (state: any) => state.ui
  );
  const { workspace } = useSelector((state: any) => state.app);

  const [search, setSearch] = useState<any>("");
  const dispatch = useDispatch();

  const { onChangeSearchValue } = useApp();

  useEffect(() => {
    setSearch("");
    onChangeSearchValue("");
  }, [location?.pathname]);

  console.log("COLLAPSE", isSidebarMenuCollapsed);

  /** CHANGE THEME MODE */
  const toggleSidenavMenu = () => {
    if (menuStyle == "v2") return false;

    // if (!isSidebarMenuCollapsed) {
    //   document
    //     .getElementById("sidenavsub")
    //     ?.classList.add("animate__slideOutLeft")
    // }
    setTimeout(() => {
      dispatch(toggleSidebarMenu(undefined));
    }, 250);
  };

  console.log(loggedInUser,'userrrrr');

  useEffect(() => {
    debouncedSearchHandler(search);
  }, [search]);

  /**
   * ! Search handler & debounce
   * @param event
   */
  const searchHandler = (value: any) => {
    onChangeSearchValue(value || "");
  };
  const debouncedSearchHandler = useCallback(debounce(searchHandler, 500), []);
  const isExportData = location?.pathname?.includes("/data-ekspor/");

  const toggleMenuMobile = () => {
    console.log("toggle menu", isSidebarMenuCollapsed);
    dispatch(toggleSidebarMenu());
  };

  return (
    <>
      <SiteHeader
        className={`site-header light sidebar-mini ${
          isExportData ? "ps-0" : ""
        } ${isSidebarMenuCollapsed == 0 ? "" : "sidebar-mini"} ${menuStyle}`}
      >
        {/* LEFT */}
        <Container fluid className="">
          <HeaderContent
            className="d-flex justify-content-between"
            style={{
              background: "var(--white)",
              marginTop: "0.75rem",
              marginBottom: "0",
            }}
          >
            <DFlex className="gap-2">
              {/* {isExportData && (
                <AppLogoContainer>
                <LazyImage
                defaultImage="/static/logo-desa/logo-default.svg"
                src={cdnUrl(workspace?.application?.logo)}
                alt=""
                height={34}
                  />
                </AppLogoContainer>
                )} */}

              {/* <Button
                type="button"
                className="d-none d-md-block me-3 p-0 bg-transparent no-outline"
                variant="btn-link text-primary border-0">
                <MenuBarIcon />
              </Button> */}

              {/* <Button
                onClick={toggleMenuMobile}
                type="button"
                className="d-block me-1 px-1 bg-transparent no-outline"
                variant="btn-link text-primary border-0"
                >
                {isSidebarMenuCollapsed == 0 ? (
                  <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                    )}
                    </Button> */}

              <LazyImage
                defaultImage=""
                src={"/static/logo-sikersas.png"}
                alt=""
                height={'auto'}
              />
              <PageTitle className="elipsis">{activePage?.display}</PageTitle>
            </DFlex>

            {/* RIGHT */}
            <DFlex className="align-items-center">
              <HeaderRightSectionDesktopOnly>
                <Link to={`/${workspace?.alias}/pesan/pesan-masuk`}>
                  <DFlex className="align-items-center gap-1">
                    <DFlex className="position-relative">
                      <PesanIcon />
                      <Circle>20</Circle>
                    </DFlex>
                    <TextPesan className="m-0">Pesan</TextPesan>
                  </DFlex>
                </Link>
                <DateInfo>
                  <PageCurrentDate>
                    <ClockIcon /> 
                    <span className="ms-1">{TODAY}</span>
                  </PageCurrentDate>
                </DateInfo>
                <FontDropdown />
                {/* {menuStyle == "v2" && <MenuShortcut />} */}
                {/* <SwitchTheme /> */}
                {/* <ButtonIcon className="border-0">
                  <SearchIcon />
                </ButtonIcon> */}
                {/* <ButtonIcon className="border-0">
                  <BellIcon />
                  <BadgeNotification
                    bg=""
                    className="rounded-pill"
                  ></BadgeNotification>
                </ButtonIcon> */}
              </HeaderRightSectionDesktopOnly>
              {/* <MenuShortcut /> */}
              <AvatarDropdown></AvatarDropdown>
            </DFlex>
          </HeaderContent>
          <BreadcrumbPage />
        </Container>
      </SiteHeader>
    </>
  );
}

const AppLogoContainer = styled.div`
  padding: 0.4rem 2.5rem 0 1.3rem;
`;

const BadgeNotification = styled(Badge)`
  position: absolute !important;
  right: -0.2rem;
  top: 0;
  height: 0.5rem;
  width: 0.5rem;
  background: var(--secondary);
  padding: 0.5rem;
  display: block !important;
`;

const DateInfo = styled.nav`
  ${font({ color: "var(--black-400)", size: ".8rem" })};
  padding: 0 1.5rem;
  border-right: 1px solid var(--black-100);
  margin-right: 1rem;
  display: none;

  @media (min-width: 920px) {
    display: block;
  }
`;

const SiteHeader = styled.nav`
  // display: none;
  color: var(--black-500);
  border: 0;
  // margin: 1.2rem 0 1.2rem 2rem;

  // @media (min-width: 920px) {
  //   display: block;
  // }
`;

const HeaderContent = styled.div`
  position: sticky;
  top: 0;
  border-radius: 0.35rem 0.35rem 0 0;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  height: 4.25rem;
  border: 1px solid var(--black-50);
  box-shadow: 2px 0px 24px 0px rgba(225, 230, 235, 0.08);
  z-index: 1;
`;

const HeaderRightSectionDesktopOnly = styled.div`
  display: none;

  @media (min-width: 920px) {
    display: flex;
    align-items: center;
  }
`;

const TextPesan = styled.p`
  color: var(--black-400);
  margin: 0;
  &:hover {
    color: var(--black-400);
  }
`;

const Circle = styled.div`
  position: absolute;
  top: -0.2rem;
  right: -0.2rem;
  height: 1.3rem;
  width: 1.3rem;
  font-size: 0.7rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background-color: #d71920;
`;

export default React.memo(Header);
