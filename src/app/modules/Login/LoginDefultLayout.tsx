import Button from "@app/components/Button/Button"
import EyeIcon, { EyeSlashIcon } from "@app/components/Icons/EyeIcon"
import UnlockIcon from "@app/components/Icons/UnlockIcon"
import UserIcon from "@app/components/Icons/UserIcon"
import FormInputControl from "@app/components/Input/FormInputControl"
import LazyImage from "@app/components/LazyLoad/LazyImage"
import LogoImage from "@app/components/Logo/LogoImage"
import LogoImageV3 from "@app/components/Logo/LogoImageV3"
import { cdnUrl } from "@app/helper/cdn.helper"
import { KominfoPseLogo } from "@app/pages/AppLanding/KominfoPseLogo"
import { DFlex } from "@app/styled/flex.styled"
import { LogoContainer, LogoLoginContainer } from "@app/styled/logo.styled"
import {
  Copyright,
  InputIcon,
  LabelForm,
  LoginForm,
  LoginFormBox,
  LoginFormContainer,
  LoginIntroText,
  WelcomeText,
} from "@app/styled/sginin.styled"
// import { Forgot } from '@app/styled/signin.styled';
import React, { useState } from "react"
import { Alert, Col, Form, InputGroup, Row } from "react-bootstrap"
import { useSelector } from "react-redux"

export default function LoginDefultLayout({
  errMessage,
  handleSubmit,
  onSubmitHandler,
  register,
  errors,
  isLoading,
}: ILoginDefaultLayout) {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { workspace } = useSelector((state: any) => state.app)

  const colorTheme = workspace?.application?.colorTheme || "sidesa"
  const backgroundStyle = workspace?.application?.backgroundStyle || "bg-1"

  const workspaceLoginBackground =
    workspace?.application?.loginBackground || null
  const bg =
    workspaceLoginBackground && workspaceLoginBackground != "undefined"
      ? cdnUrl(workspaceLoginBackground)
      : `/static/img/landing-page/${colorTheme}/${backgroundStyle}.png`

  return (
    <>
      <LoginFormContainer>
        <LoginFormBox>
          <LoginForm className="signin-form">
            {/* <LogoContainer className='mx-auto font-weight-light my-3'>
              <Logo workspace={workspace} />
              <span className='desa signin'>{camelCase(workspace?.desakelurahan_details?.nama_kelurahan)}</span>
            </LogoContainer> */}
            <LogoLoginContainer className="mx-auto font-weight-light">
              <LazyImage
                defaultImage="/static/logo-sikersa-aja.png"
                src={cdnUrl(workspace?.application?.logo)}
                className="w-100"
                alt=""
              />
            </LogoLoginContainer>
            <WelcomeText>Selamat datang</WelcomeText>
            <LoginIntroText>
              Silahkan login ke akun mu dan mulai menjelajahi web ID Desa
            </LoginIntroText>

            {/* ERROR MESSAGE  */}
            {errMessage && (
              <Alert className="w-100 text-capitalize" variant={`danger`}>
                {errMessage}
              </Alert>
            )}
            {/* !END ERROR MESSAGE  */}

            <Form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="w-100 mt-2">
              <Form.Group controlId="formEmail" className="mb-3">
                <LabelForm>Username</LabelForm>
                <InputGroup className="mb-3 mt-2">
                  <InputIcon>
                    <UserIcon />
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
                <InputGroup className="mb-3 mt-2">
                  <InputIcon>
                    <UnlockIcon />
                  </InputIcon>
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
                <Form.Group as={Col}>
                  <Form.Check
                    type="checkbox"
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
                className="w-100 font-weight-bold mt-3 text-white"
                isLoading={isLoading}
                style={{ minHeight: "3.5rem" }}>
                {isLoading ? "Masuk..." : "Selanjutnya"}
              </Button>
            </Form>
          </LoginForm>

          {/* <DFlex className="flex-column justify-content-center align-items-center">
            <KominfoPseLogo className="text-center" size="medium" />
          </DFlex>
          <Copyright className="text-center my-3">
            &copy; 2022 · PT ICONS MEDIA NUSANTARA · All rights reserved
          </Copyright> */}
        </LoginFormBox>
      </LoginFormContainer>
    </>
  )
}

export function Logo({ workspace = "null" }: { workspace: any | "null" }) {
  if (!workspace || workspace !== "null") {
    return <LogoImage logoColor="#fff" width="160" />
  }
  return <LogoImageV3 width="160" />
}

interface ILoginDefaultLayout {
  errMessage: any
  handleSubmit: any
  onSubmitHandler: any
  register: any
  errors: any
  isLoading: boolean
}
