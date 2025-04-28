import ArchiveMenuIcon from "@app/components/Icons/ArchiveMenuIcon";
import FileTextMenuIcon from "@app/components/Icons/FileTextMenuIcon";
import GridMenuIcon from "@app/components/Icons/GridMenuIcon";
import UploadCloudMenuIcon from "@app/components/Icons/UploadCloudMenuIcon";
import UserCheckMenuIcon from "@app/components/Icons/UserCheckMenuIcon";
import {
  CardHeaderMenu,
  // DescMenu,
  DropdownImage,
  DropdownMenu,
  LinkMenu,
  TitleMenu,
} from "@app/styled/card-menu.styled";
import { Icon } from "@app/styled/icon.styled";
import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function MenuShortcut() {
  const { workspace } = useSelector((state: any) => state.app);
  const menus: any[] = [
    {
      id: "1",
      path: "/administrasi",
      icon: <ArchiveMenuIcon />,
      title: "Administrasi",
      enabled: false,
    },
    {
      id: "2",
      path: "/layanan",
      icon: <UserCheckMenuIcon />,
      title: "Layanan Warga",
      enabled: false,
    },
    {
      id: "3",
      path: "/data",
      icon: <FileTextMenuIcon />,
      title: "Data Desa",
      enabled: false,
    },
    {
      id: "4",
      path: "/data-ekspor",
      icon: <UploadCloudMenuIcon />,
      title: "Data Eksport",
      enabled: false,
    },
  ];
  const { privileges } = useSelector((state: any) => state.auth);

  const filteredMenus = menus.reduce((acc = [] as any[], curr: any) => {
    const enabledMenu =
      privileges?.filter((x: any) => x?.id?.startsWith(curr?.id)).length > 1;
    curr["enabled"] = enabledMenu;

    // if (enabledMenu) {
      acc.push(curr);
    // }

    return acc;
  }, []);

  // fill the space if only 1 menu
  const widthKlass = filteredMenus.length == 1 ? "w-100" : "";

  return (
    <>
      <DropdownImage
        data-tip="Menu"
        className="hide-toogle mmenu hide-focus ms-2"
      >
        <Dropdown.Toggle
          className="p-0 bg-transparent border-0 no-outline"
          variant=""
        >
          <div className="align-items-center d-flex py-2">
            <ToggleBtn>
              <GridMenuIcon />
            </ToggleBtn>
          </div>
        </Dropdown.Toggle>

        <DropdownMenu>
          <Card className="border-0">
            <CardHeaderMenu>Menu Desa</CardHeaderMenu>
            <Card.Body className="p-0">
              <MenuContainer className={widthKlass}>
                {filteredMenus?.map((item: any) => (
                  <Dropdown.Item
                    key={item?.id}
                    as={"div"}
                    bsPrefix="item"
                    className={widthKlass}
                  >
                    <LinkMenu
                      to={`${
                        workspace?.prefixPath ? `/${workspace?.prefixPath}` : ""
                      }${item?.path}`}
                      className={`p-0 ${widthKlass}`}
                    >
                      {item?.icon}
                      <TitleMenu className="mt-1">{item?.title}</TitleMenu>
                      {/* <DescMenu>Lorem Ipsum</DescMenu> */}
                    </LinkMenu>
                  </Dropdown.Item>
                ))}
              </MenuContainer>
            </Card.Body>
          </Card>
        </DropdownMenu>
      </DropdownImage>
    </>
  );
}

const ToggleBtn = styled(Icon)`
  background: var(--black-50);
  padding: 0.5rem;
  width: auto;
  border-radius: var(--border-radius);
`;

const MenuContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2px;
  min-width: 0;
  width: 20.5rem;
  border-top: 2px solid var(--black-50);
`;
