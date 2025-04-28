import Button from "@app/components/Button/Button"
import ArrowLeftIcon2 from "@app/components/Icons/ArrowLeftIcon2"
import DoubleHouseFillIcon from "@app/components/Icons/DoubleHouseFillIcon"
import EyeIcon, { EyeSlashIcon } from "@app/components/Icons/EyeIcon"
import UnlockIcon from "@app/components/Icons/UnlockIcon"
import UserIcon from "@app/components/Icons/UserIcon"
import FormInputControl from "@app/components/Input/FormInputControl"
import LazyImage from "@app/components/LazyLoad/LazyImage"
import { cdnUrl } from "@app/helper/cdn.helper"
import { KominfoPseLogo } from "@app/pages/AppLanding/KominfoPseLogo"
import { API_PATH } from "@app/services/_path.service"
import useApiRequest from "@app/services/useApiRequest"
import { CopyrightText_New } from "@app/styled/app-landing.styled"
import { DFlexALignCenter, DFlexJustifyBetween } from "@app/styled/flex.styled"
import { LogoContainer } from "@app/styled/logo.styled"
import { InputIcon, LabelForm } from "@app/styled/sginin.styled"
import { size } from "lodash"
import React, { useState } from "react"
import { Alert, Col, Form, InputGroup, Modal, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export default function Login6Layout({
  errMessage,
  handleSubmit,
  onSubmitHandler,
  register,
  errors,
  isLoading,
  logoType = "workspace",
}: ILoginDefaultLayout) {
  const { pathname } = useLocation()
  const { workspace } = useSelector((state: any) => state.app)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isCarrouselOpen, setIsCarrouselOpen] = useState<boolean>(false)
  const [modalZoom, setModalZoom] = useState<any>({
    show: false,
    activeIndex: undefined,
  })
  const loginSlider =
    pathname === "/signin"
      ? false
      : workspace?.application?.loginSlider || false

  const path = API_PATH().form.administrasi.loginSlider + "/get-all"
  const [param] = useState<any>({
    page: 1,
    size: 9999,
    filter: [{ value: workspace?._id, field: "workspaceId" }],
  })

  const { response } = useApiRequest({
    url: path,
    method: "POST",
    params: param,
  })

  const workspaceLoginBackground =
    workspace?.application?.loginBackground || null
  const bg =
    workspaceLoginBackground && workspaceLoginBackground != "undefined"
      ? cdnUrl(workspaceLoginBackground)
      : "/static/illustration/illustration-login-6.svg"

  const defaultLogo = "/static/logo-desa/logo-default.svg"
  const workspaceLogo =
    logoType === "workspace"
      ? cdnUrl(workspace?.application?.logo)
      : defaultLogo

  return (
    <>
      <div
        className="min-vh-100 position-relative"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}>
        <div className="d-none d-md-block">
          <DFlexJustifyBetween
            style={{
              padding: "0 8rem",
            }}>
            <LogoContainer className="m-0 justify-content-start">
              <LazyImage
                defaultImage={defaultLogo}
                src={workspaceLogo}
                className="w-40"
                alt=""
              />
            </LogoContainer>
            <KominfoPseLogoContainer>
              <KominfoPseLogo size="medium" />
            </KominfoPseLogoContainer>
          </DFlexJustifyBetween>
        </div>

        <DFlexALignCenter
          // style={{ height: "calc(100vh - 19rem)" }}
          className="position-relative">
          <Login6Container>
            <Login6Content>
              <LogoContainer className="m-0 w-100 mb-3 justify-content-center">
                <LazyImage
                  defaultImage={defaultLogo}
                  src={workspaceLogo}
                  className="w-50"
                  alt=""
                />
              </LogoContainer>
              <div className="">
                <h2 className="login-title">Selamat datang di IDS Desa</h2>
              </div>

              {/* ERROR MESSAGE  */}
              {errMessage && (
                <Alert className="w-100 text-capitalize" variant={`danger`}>
                  {errMessage}
                </Alert>
              )}
              {/* !END ERROR MESSAGE  */}
              <Form onSubmit={handleSubmit(onSubmitHandler)} className="w-100">
                <Form.Group controlId="formEmail" className="mb-2">
                  <LabelForm6>Username</LabelForm6>
                  <InputGroup className="mt-1">
                    <InputIcon6>
                      <UserIcon />
                    </InputIcon6>
                    <FormInputControl
                      type="text"
                      className="ps-4"
                      formGroup={false}
                      register={register("username")}
                      isInvalid={errors?.username as boolean | undefined}
                      message={errors?.username?.message}
                      placeholder="Enter username"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <LabelForm6>Password</LabelForm6>
                  <InputGroup className="mt-1">
                    <InputIcon6>
                      <UnlockIcon />
                    </InputIcon6>
                    <FormInputControl
                      type={showPassword ? "text" : "password"}
                      className="ps-4"
                      formGroup={false}
                      register={register("password")}
                      isInvalid={errors?.password as boolean | undefined}
                      message={errors?.password?.message}
                      placeholder="******"
                    />
                    <InputIcon
                      className="cursor-pointer"
                      style={{ right: "0", cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                    </InputIcon>
                  </InputGroup>
                </Form.Group>
                <Row>
                  <Form.Group as={Col} className="my-2">
                    <Form.Check
                      type="checkbox"
                      label="Ingat saya?"
                      {...register("rememberMe")}
                      disabled={isLoading}
                    />
                  </Form.Group>
                </Row>
                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 font-weight-bold text-white"
                  isLoading={isLoading}
                  style={{ minHeight: "3.2rem" }}>
                  {isLoading ? "Masuk..." : "Sign In"}
                </Button>
              </Form>
            </Login6Content>
          </Login6Container>

          {loginSlider && size(response?.data) && (
            <WrapperSlider>
              <CarouselImage isopen={isCarrouselOpen ? 1 : 0}>
                <ToggleCarrousel
                  isopen={isCarrouselOpen ? 1 : 0}
                  onClick={() => setIsCarrouselOpen(!isCarrouselOpen)}>
                  <CurveElement type="top" isopen={isCarrouselOpen ? 1 : 0} />
                  <div className="arrow">
                    <ArrowLeftIcon2 />
                  </div>
                  <div className="icon">
                    <DoubleHouseFillIcon />
                  </div>
                  <CurveElement
                    type="bottom"
                    isopen={isCarrouselOpen ? 1 : 0}
                  />
                </ToggleCarrousel>
                <div className="swiper-container">
                  <Swiper
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={0}
                    speed={50}
                    pagination={{ type: "bullets" }}
                    loop={true}
                    navigation={true}
                    className="mySwiper"
                    modules={[Pagination, Navigation]}>
                    {response?.data
                      ?.sort((a: any, b: any) => a?.number - b?.number)
                      ?.map((item: any, i: number) => (
                        <SwiperSlide key={i}>
                          <LazyImage
                            src={cdnUrl(item?.filepath)}
                            onClick={() =>
                              setModalZoom({
                                show: true,
                                activeIndex: i,
                                data: item,
                              })
                            }
                            className="border-radius-5 cursor-pointer"
                            style={{
                              width: "100%",
                              height: "20rem",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />
                          <h5 className="mt-2 mb-1 fw-bold">{item?.title}</h5>
                          <p className="m-0">{item?.description}</p>
                        </SwiperSlide>
                      ))}
                  </Swiper>
                </div>
              </CarouselImage>

              <Modal
                show={modalZoom?.show}
                onHide={() =>
                  setModalZoom({
                    show: false,
                    activeIndex: undefined,
                  })
                }
                size="xl"
                centered>
                <Modal.Header closeButton className=" p-3 pt-2 pb-0">
                  <h5 className="mt-2 mb-1 font-weight-700">
                    {modalZoom?.data?.title}
                  </h5>
                </Modal.Header>
                <Modal.Body className="p-3">
                  <LazyImage
                    src={cdnUrl(modalZoom?.data?.filepath)}
                    className="border-radius-5"
                    style={{
                      width: "100%",
                      height: "30rem",
                      objectFit: "contain",
                      backgroundColor: "var(--black-10)",
                    }}
                  />
                  <p className="mt-2 mb-0">{modalZoom?.data?.description}</p>
                </Modal.Body>
              </Modal>
            </WrapperSlider>
          )}
        </DFlexALignCenter>
        <div className="d-none d-md-block mt-3" style={{ height: "3rem" }}>
          <CopyrightText_New className="start-0 py-2">
            Copyright 2022 by PT ICONS MEDIA NUSANTARA. All Rights Reserved.
          </CopyrightText_New>
        </div>
      </div>
    </>
  )
}

const KominfoPseLogoContainer = styled.div`
  padding: 2rem 2rem 0 0;
`

const Login6Container = styled.div`
  width: 100%;
  background-color: var(--white);
  padding: 3.5rem;
  border-radius: 0.6rem;
  position: relative;
  transition: all 0.3s ease-in-out;
  margin-top: 5rem;
  // height: calc(100vh);

  @media (min-width: 768px) {
    width: 29rem;
    height: inherit;
    margin-left: 8rem;
    margin-top: 0;
  }

  .login-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--black);
    width: 100%;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }

  .login-desc {
    font-weight: 400;
    color: var(--black-300);
    width: 100%;
  }
`

const Login6Content = styled.div`
  display: flex;
  flex-direction: column;
  // height: 83vh;
  justify-content: center;
`

const LabelForm6 = styled(LabelForm)`
  font-size: 0.9rem;
`

const InputIcon6 = styled(InputIcon)`
  transform: translateY(3px);
`

const CarouselImage = styled.div<{ isopen: number }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  display: flex;
  align-items: center;
  height: 100%;
  margin-top: 1rem;

  .swiper-container {
    background-color: var(--white);
    padding: ${({ isopen }) => (isopen ? "2rem" : "0")};
    border-radius: 0.6rem;
    width: ${({ isopen }) => (isopen ? "90vh" : "0")};
    transition: all 0.3s ease-in-out;
    opacity: ${({ isopen }) => (isopen ? "1" : "0")};

    .mySwiper {
      .swiper-slide {
        padding-bottom: 2rem;
        height: 28.35rem;

        p {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .swiper-slide-prev,
      .swiper-slide-next {
        transform: scale(0.9);
        transition: all 0.3s ease-in-out;
      }

      .swiper-slide-active {
        transform: scale(1);
        transition: all 0.3s ease-in-out;
      }

      .swiper-pagination {
        bottom: 0;
      }

      .swiper-pagination-bullet-active {
        background-color: var(--primary);
        width: 2rem;
        border-radius: 10rem;
      }
    }
  }
`

const ToggleCarrousel = styled.div<{ isopen: number }>`
  position: relative;
  background-color: var(--white);
  border-radius: 10rem;
  transition: all 0.3s ease-in-out;
  width: 4rem;
  height: ${({ isopen }) => (isopen ? "4rem" : "2.7rem")};
  cursor: pointer;
  margin-right: ${({ isopen }) => (!isopen ? "3rem" : "-1.2rem")};

  .arrow,
  .icon {
    top: 50%;
    transform: translateY(-50%);
  }

  .arrow {
    position: absolute;
    color: var(--black);
    transition: all 0.3s ease-in-out;
    left: ${({ isopen }) => (isopen ? "2.8rem" : "1px")};
    transform: ${({ isopen }) =>
      isopen
        ? "rotate(180deg) translateY(45%)"
        : "rotate(0deg) translateY(-50%)"};
    width: fit-content;
  }

  .icon {
    position: absolute;
    color: var(--primary);
    right: ${({ isopen }) => (isopen ? "1.3rem" : "1px")};
    transition: all 0.3s ease-in-out;
  }
`

const CurveElement = styled.div<{ isopen: number; type: "top" | "bottom" }>`
  visibility: ${({ isopen }) => (isopen ? "visible" : "hidden")};
  opacity: ${({ isopen }) => (isopen ? "1" : "0")};
  position: absolute;
  left: 0;
  width: 44px;
  height: 2rem;
  background-color: transparent;
  box-shadow: 20px 0px 0 var(--white);
  border-radius: ${({ type }) =>
    type === "top" ? "0 0 10rem 0" : "0 10rem 0 0"};
  ${({ type }) => (type === "top" ? "bottom" : "top")}: 94%;
  z-index: ${({ type }) => (type === "top" ? "unset" : "-1")};
  transition: all 0.3s ease-in-out;
`

const WrapperSlider = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`

interface ILoginDefaultLayout {
  errMessage: any
  handleSubmit: any
  onSubmitHandler: any
  register: any
  errors: any
  isLoading: boolean
  logoType?: "general" | "workspace"
}
