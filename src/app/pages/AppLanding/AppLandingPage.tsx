import ExportIcon from "@app/components/Icons/LandingPage/ExportIcon";
import AdministrationIcon from "@app/components/Icons/LandingPage/AdministrationIcon";
import DocIcon from "@app/components/Icons/LandingPage/DocIcon";
import UserCheckIcon from "@app/components/Icons/LandingPage/UserCheckIcon";
// import LogoImageV4 from '@app/components/Logo/LogoImageV4';
import {
  // AppDescription,
  AppLandingContainer,
  AppLandingContent,
  CopyrightText,
  Header,
  HeaderContainer,
} from "@app/styled/app-landing.styled";
import { LogoContainer } from "@app/styled/logo.styled";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import LazyImage from "@app/components/LazyLoad/LazyImage";
import { cdnUrl } from "@app/helper/cdn.helper";
import AppCard from "@app/components/Card/AppsCard";

export default function AppLandingPage() {
  const { workspace } = useSelector((state: any) => state.app);

  const [apps] = useState<any>([
    {
      name: "Administrasi",
      description:
        "Sistem informasi administrasi desa yang diolah secara mandiri oleh perangkat desa.",
      image: <AdministrationIcon />,
      link: "/administrasi",
    },
    {
      name: "Layanan Warga",
      description:
        "Mempermudah pengajuan surat dengan layanan secara online. Pantau pengerjaan status surat yang telah anda ajukan melalui aplikasi.",
      image: <UserCheckIcon />,
      link: "/layanan",
    },
    {
      name: "Data Desa",
      description:
        "Tampilan visualisasi statistik mengenai informasi desa yang dikembangkan secara dinamis sesuai perkembangan masyarakat desa.",
      image: <DocIcon />,
      link: "/data",
    },
    {
      name: "Ekspor Data",
      description:
        "Aplikasi ID Desa dapat membantu perangkat desa untuk mengintegrasikan data ke sistem input lainnya sesuai dengan kebutuhan tiap desa. Lebih mudah tanpa berulang kali input.",
      image: <ExportIcon />,
      link: "/data-ekspor",
    },
  ]);

  const loadIcon = () => {
    // fetch('/api/v1/cdn/icons/solid/b2353a9ac6cae8eda8d209e62a21d57a-user.svg', {
    fetch(
      "/static/icons/bell.svg",
      // 'https://kit-pro.fontawesome.com/releases/latest/svgs/solid/user.svg',
      {
        cache: "force-cache",
        headers: {
          "Cache-Control": "max-age=3600",
          Pragma: "max-age=3600", // added for redundancy
        },
      }
    )
      .then((res) => res.text())
      .then((res) => {
        const holder: any = document.querySelector(".ei");
        if (holder) {
          holder.outerHTML = res;
        }
        // holder.querySelector('path').setAttribute("fill", "currentColor")
        // console.log(holder.querySelector('path').setAttribute("fill", "currentColor"));
      });
  };

  React.useEffect(() => {
    loadIcon();
  }, []);

  const colorTheme = workspace?.application?.colorTheme || "sidesa";
  const backgroundStyle = workspace?.application?.backgroundStyle || "bg-3";
  const bg = `/static/img/landing-page/${colorTheme}/${backgroundStyle}.png`;
  const bgBottom = `/static/img/landing-page/sidesa/bg-bottom.svg`;

  return (
    <>
      <AppLandingContainer>
        <Header className="mb-1">
          {/* <LogoContainer className='justify-content-center'>
                <LogoImageV2 />
                <span className='desa' style={{ transform: "translateX(0.4rem)" }}>{camelCase(workspace?.desakelurahan_details?.nama_kelurahan)}</span>
              </LogoContainer> */}
          <LogoContainer className="">
            <LazyImage
              defaultImage="/static/logo-sikersa-aja.png"
              src={cdnUrl(workspace?.application?.logo)}
              className="w-100"
              alt=""
            />
          </LogoContainer>
          {/* <AppDescription>
                Solusi aplikasi desa untuk mendukung program Desa Digital.
                Dengan smart system yang dapat memberikan sejumlah layanan
                seperti sistem informasi desa yang mudah diakses serta pelayanan
                publik yang kompatibel dan terintegrasi.
              </AppDescription> */}
        </Header>
        <AppLandingContent>
          {/* <HeaderContainer> */}
          {/* </HeaderContainer> */}
          <Container style={{ maxWidth: "1340px" }}>
            {/* <div style={{ width: '2rem', height:'2rem' }}>
              <i className='ei light user' id='ei'></i>  <i className='fas fa-user'></i>
            </div> <br />  */}

            <Row className="g-3 px-md-0 px-lg-7">
              {apps?.map((item: any) => (
                <Col md={6} sm={6} key={nanoid()}>
                  <AppCard {...item} workspace={workspace}></AppCard>
                </Col>
              ))}
            </Row>
          </Container>
          {/* <CopyrightText>
            © Copyright 2022 by PT HITUT ENDOG KACINGCALANG. All Rights
            Reserved. <a href="#">Facebook</a> <a href="#">Instagram</a>{" "}
            <a href="#">Twitter</a>
          </CopyrightText> */}
        </AppLandingContent>
      </AppLandingContainer>
    </>
  );
}
