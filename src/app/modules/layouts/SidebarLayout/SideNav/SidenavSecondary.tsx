import ToggleTheme from "@app/components/Input/ToggleTheme";
import { ICONS } from "@app/config/icon.config";
import { IMenu } from "@app/interface/menu.interface";
import { setThemeMode, toggleSidebarMenu } from "@app/store/reducers/ui";
import { DFlex } from "@app/styled/flex.styled";
import { font } from "@app/styled/function/_font.styled";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Accordion, Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
// import AppLogo from './AppLogo';
// import LogoImageV4 from '@app/components/Logo/LogoImageV4'
import PlusIcon from "@app/components/Icons/PlusIcon";
import ModalBuatPesan from "@app/components/Modals/ModalBuatPesan";
import { cdnUrl } from "@app/helper/cdn.helper";
import { LazyImage } from "@app/components";
const icon: any = ICONS;

export default function SidenavSecondary({
  activeParentMenu,
  activePage,
  navs,
}: any) {
  const dispatch = useDispatch();
  const { menuStyle, themeMode } = useSelector((state: any) => state.ui);
  const { workspace } = useSelector((state: any) => state.app);
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);

  /** CHANGE THEME MODE */
  const handleToggleThemeMode = () => {
    const mode = themeMode == "light" ? "dark" : "light";
    dispatch(setThemeMode(mode));
  };

  const handleClickNav = (e: any, menu: any) => {
    if (menu?.enabled === false) {
      e.preventDefault();
    }
  };

  const toggleSidebar = () => {
    dispatch(toggleSidebarMenu());
  };

  return (
    <SideNavSub
      // animate__animated animate__slideInLeft animate__faster
      className={`
      ${menuStyle}`}
      id="sidenavsub"
      style={{ minHeight: "64.5rem", marginTop: "8px" }}
    >
      <div>
        {menuStyle == "v2" && (
          <>
            {/* <AppLogoContainer className="py-2">
            <AppLogo />
            <span className='desa'>{camelCase(workspace?.desakelurahan_details?.nama_kelurahan)}</span>
          </AppLogoContainer> */}
            <AppLogoContainer className="py-2">
              <LazyImage
                defaultImage="/static/logo-desa/logo-default.svg"
                src={cdnUrl(workspace?.application?.logo)}
                className="w-90 px-3"
                alt=""
              />
            </AppLogoContainer>
          </>
        )}

        <SideNavSubHeader
          className="subheader"
          theme={{ menuStyle: menuStyle }}
          hidden
        >
          <SideNavTitle theme={{ menuStyle: menuStyle }}>
            <p className="mb-0">DESA {workspace?.name}</p>
            <p
              role="button"
              onClick={toggleSidebar}
              className="d-block d-lg-none mb-0"
            >
              X
            </p>
          </SideNavTitle>
        </SideNavSubHeader>
        <SideNavSubBody>
          {location?.pathname === "/batulayang/pesan/pesan-masuk" ? (
            <Button className="w-100" onClick={() => setShowModal(true)}>
              <PlusIcon /> Buat Pesan
            </Button>
          ) : (
            <p className="fw-bolder py-2 mb-0">{activeParentMenu?.display}</p>
          )}
          <Nav className="flex-column menu">
            <CustomAccordion
              defaultActiveKey={activePage?.idParent}
              key={nanoid()}
            >
              {navs?.map((n: any) => {
                if (n?.children?.length > 0) {
                  return (
                    <Accordion.Item eventKey={n?.id} key={nanoid()}>
                      <AccordionHeader>
                        {/* {n?.icon && (
                          <span className="icon">{get(icon, n?.icon)}</span>
                        )} */}
                        {n?.display}
                      </AccordionHeader>
                      <Accordion.Body>
                        <Nav className="flex-column menu sub">
                          {n?.children?.map((nm: IMenu) => (
                            <NavLink
                              className={`nav-link ${
                                nm?.enabled === false ? " disabled" : ""
                              }`}
                              to={nm?.path}
                              key={nanoid()}
                              onClick={(e) => handleClickNav(e, nm)}
                            >
                              {nm?.display}
                            </NavLink>
                          ))}
                        </Nav>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                } else {
                  return (
                    <NavLink
                      className="nav-link noChild"
                      to={n?.path}
                      onClick={(e) => handleClickNav(e, n)}
                      key={nanoid()}
                    >
                      {/* {n?.icon && (
                        <span className="icon">{get(icon, n?.icon)}</span>
                      )} */}

                      {n?.display}
                    </NavLink>
                  );
                }
              })}
            </CustomAccordion>
          </Nav>
        </SideNavSubBody>
      </div>

      <ModalBuatPesan
        show={showModal}
        handleClose={() => setShowModal(false)}
      />

      {menuStyle == "v2" && (
        <BottomSideNav>
          <DFlex className="cursor-pointer" onClick={handleToggleThemeMode}>
            <ToggleTheme></ToggleTheme>{" "}
            <ThemeModeText>{themeMode} Theme</ThemeModeText>
          </DFlex>
        </BottomSideNav>
      )}
    </SideNavSub>
  );
}

const AppLogoContainer = styled.div`
  padding: 2.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  /* margin-left: -1rem; */

  .desa {
    color: #fff;
    padding: 0rem 0 0rem 75px;
    font-size: 1rem;
    line-height: 2.75rem;
    position: absolute;
    margin-top: -0.5rem;
    font-weight: 500;
    text-transform: capitalize;
  }
`;

const ThemeModeText = styled.h5`
  line-height: 2.75;
  font-size: 0.85rem;
  margin-left: 1rem;
  text-transform: capitalize;
`;

const BottomSideNav = styled.div`
  padding: 0.75rem 1.25rem;
  /* margin-bottom: -0.75rem; */
  /* position: absolute; */
  bottom: 0.5rem;
  background: #10172a;
  width: 100%;
  color: #bfc5cd;
`;

const CustomAccordion = styled(Accordion)`
  color: #bfc5cd;

  .accordion-body .nav .nav-link {
    color: #bfc5cd;
  }
`;

const AccordionHeader = styled(Accordion.Header)`
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.33;

  .accordion-button {
    color: #e9ebed;
    &::after {
      background-image: url("/static/icons/caret-right.svg");
    }
  }
`;

const SideNavSub = styled.div`
  display: flex;
  background: var(--white);
  // height: 100%;
  width: 16.7rem;
  margin-left: 5.9rem;
  position: absolute;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  // top: 0;
  // transform: translateY(-50%);
  // display: none;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
  border: 1px solid var(--black-50);
  box-shadow: 0px 4px 20px 0px rgba(76, 87, 125, 0.02);
  z-index: 10;
  @media (max-width: 1000px) {
    display: none;
    // top: 50%;
    // transform: translateY(-50%);
  }

  /* width */
  ::-webkit-scrollbar {
    width: 0;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  .icon {
    width: 2rem;
    display: block;
    float: left;

    &-sm {
      display: none;
      /* float: left; */
    }
  }

  &.v2 {
    margin-left: 0 !important;
    background: #10172a;
    .subheader {
      border-color: rgba(255, 255, 255, 0.05) !important;
    }
  }
`;

const SideNavSubHeader = styled.div`
  display: flex;
  height: 4rem;
  padding: 0.75rem 1.5rem;
  border-bottom: 1px solid;
  border-color: ${(props) =>
    props.theme?.menuStyle == "v2" ? "var(--body-bg)" : "var(--primary)"};
`;

const SideNavSubBody = styled.div`
  padding: 1rem 1.5rem;
`;

const SideNavTitle = styled.div`
  ${font({})};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 2.5;
  text-transform: uppercase;
  color: ${(props) =>
    props.theme?.menuStyle == "v2" ? "#fff" : "var(--primary)"};
`;
