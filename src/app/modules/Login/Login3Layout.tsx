import Button from "@app/components/Button/Button"
import EyeIcon, { EyeSlashIcon } from "@app/components/Icons/EyeIcon"
import UnlockIcon from "@app/components/Icons/UnlockIcon"
import UserIcon from "@app/components/Icons/UserIcon"
import FormInputControl from "@app/components/Input/FormInputControl"
import { KominfoPseLogo } from "@app/pages/AppLanding/KominfoPseLogo"
import {
  Illustration,
  LoginContainer,
  LoginContent,
} from "@app/styled/login.styled"
import { LogoContainer } from "@app/styled/logo.styled"
import { InputIcon, LabelForm } from "@app/styled/sginin.styled"
import React, { useState } from "react"
import { Alert, Col, Form, InputGroup, Row, Container } from "react-bootstrap"
import { useSelector } from "react-redux"
import styled from "styled-components"
import LazyImage from "@app/components/LazyLoad/LazyImage"
import { cdnUrl } from "@app/helper/cdn.helper"

export default function Login3Layout({
  errMessage,
  handleSubmit,
  onSubmitHandler,
  register,
  errors,
  isLoading,
}: ILoginDefaultLayout) {
  const { workspace } = useSelector((state: any) => state.app)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const workspaceLoginBackground =
    workspace?.application?.loginBackground || null
  const bg =
    workspaceLoginBackground && workspaceLoginBackground != "undefined"
      ? cdnUrl(workspaceLoginBackground)
      : `/static/illustration/illustration-login-kiri.svg`

  return (
    <>
      <Container fluid className="p-0">
        <Row className="min-vh-100 gx-0">
          <Col xs="auto" className="position-relative">
            <LoginContainer>
              <LogoContainer className="pt-3 mx-4 justify-content-start m-0">
                {/* <Logo workspace={workspace} /><br /> */}
                {/* <span style={{left:'3.7rem'}} className='desa signin ps-0 me-2'>{camelCase(workspace?.desakelurahan_details?.nama_kelurahan)}</span> */}

                <LazyImage
                  defaultImage="/static/logo-desa/logo-default.svg"
                  src={cdnUrl(workspace?.application?.logo)}
                  className="w-55 ps-1"
                  alt=""
                />
              </LogoContainer>
              <LoginContent className="my-auto" style={{ height: "85%" }}>
                <div className="w-100">
                  <h2 className="login-title">Selamat datang di ID Desa</h2>
                  <p className="login-desc">
                    Silahkan login ke akun mu dan mulai menjelajahi ID Desa
                  </p>
                </div>

                {/* ERROR MESSAGE  */}
                {errMessage && (
                  <Alert className="w-100 text-capitalize" variant={`danger`}>
                    {errMessage}
                  </Alert>
                )}
                {/* !END ERROR MESSAGE  */}
                <Form
                  onSubmit={handleSubmit(onSubmitHandler)}
                  className="w-100 my-2">
                  <Form.Group controlId="formEmail">
                    <LabelForm>Username</LabelForm>
                    <InputGroup className="mb-3 mt-1">
                      <InputIcon style={{ transform: "translateY(4px)" }}>
                        <UserIcon width={22} height={23} />
                      </InputIcon>
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
                    <LabelForm>Password</LabelForm>
                    <InputGroup className="mt-1">
                      <InputIcon style={{ transform: "translateY(4px)" }}>
                        <UnlockIcon />
                      </InputIcon>
                      <FormInputControl
                        type={showPassword ? "text" : "password"}
                        className="ps-4"
                        formGroup={false}
                        register={register("password")}
                        isInvalid={errors?.password as boolean | undefined}
                        message={errors?.password?.message}
                        placeholder="Enter Password"
                      />
                      <InputIcon
                        className="cursor-pointer"
                        style={{ right: "0", cursor: "pointer" }}
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
                        {/* <span
                          dangerouslySetInnerHTML={{
                            __html: `<i class='fal fa-eye${
                              !showPassword ? '-slash' : ''
                            }'></i>`,
                          }}
                        ></span> */}
                      </InputIcon>
                    </InputGroup>
                  </Form.Group>
                  <Row>
                    <Form.Group as={Col} className="my-2 ">
                      <Form.Check
                        type="checkbox"
                        className="fw-bold"
                        label="Ingat saya?"
                        {...register("rememberMe")}
                        disabled={isLoading}
                      />
                    </Form.Group>
                    {/* <Form.Group as={Col} className='text-right'>
                      <Forgot className='cursor-pointer'>Lupa password?</Forgot>
                    </Form.Group> */}
                  </Row>
                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 font-weight-boldtext-white"
                    isLoading={isLoading}
                    style={{ minHeight: "3.2rem" }}>
                    {isLoading ? "Masuk..." : "Sign In"}
                  </Button>
                </Form>
              </LoginContent>
            </LoginContainer>
          </Col>
          <Col>
            <Illustration className="right">
              <div className="position-absolute bottom-0 w-100">
                <img className="img-fluid w-100" src={bg} alt="illustration" />
              </div>
            </Illustration>
          </Col>
        </Row>
        <KominfoPseLogoContainer>
          <KominfoPseLogo size="small" />
        </KominfoPseLogoContainer>
      </Container>
    </>
  )
}

const KominfoPseLogoContainer = styled.div`
  position: absolute;
  right: 4rem;
  top: 2rem;
`

interface ILoginDefaultLayout {
  errMessage: any
  handleSubmit: any
  onSubmitHandler: any
  register: any
  errors: any
  isLoading: boolean
}
