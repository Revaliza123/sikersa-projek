import React, { useEffect, useState, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Row, Col, Form, Card, Nav } from "react-bootstrap"
import axios from "axios"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import TopBarLoader from "@app/components/Loader/TopBarLoader"
import { addNotification } from "@app/store/notification/notification.action"
import { notificationTemplate } from "@app/helper/notificationTemplate"
import { LazyImage, Button, ButtonCancel } from "@app/components"
// import UserFormPasswword from '@app/modules/Users/UserFormPasswword'
import { getItem } from "@app/helper/localstorage.helper"

import { getByIdController, putByController } from "@app/services/main.service"
import { uploadImage } from "@app/services/cdn-upload.service"
// import { randomColorDefault } from '@app/config/app.config'
import { IUser } from "@app/interface/main"
import ImageIcon from "@app/components/Icons/ImageIcon"
import styled from "styled-components"
import ChevronRightIcon from "@app/components/Icons/ChevronRightIcon"
import {
  DFlex,
  DFlexALignCenter,
  DFlexJustifyBetween,
} from "@app/styled/flex.styled"
import CopyIcon from "@app/components/Icons/CopyIcon"
import UserCheckIcon from "@app/components/Icons/UserCheckIcon"
import ClockIcon from "@app/components/Icons/ClockIcon"
import VillageIcon2 from "@app/components/Icons/VillageIcon2"
import moment from "moment"
import FormInputControl from "@app/components/Input/FormInputControl"
import TrashIcon from "@app/components/Icons/TrashIcon"
import { setLoggedInUserDetail } from "@app/store/reducers/auth"

export default function ProfilePage() {
  const dispatch = useDispatch()
  const source = axios.CancelToken.source()
  const credentials = getItem("me")
  const [key, setKey] = useState("akun")
  const { workspace } = useSelector((state: any) => state.app)
  const { loggedInUser } = useSelector((state: any) => state.auth)
  const desa = workspace?.desakelurahan_details?.nama_kelurahan

  const refUploadFoto = useRef<any>(null)

  const [dataSelected, setDataSelected] = useState<any>()
  const [loadingForm, setLoadingForm] = useState<boolean>(false)
  const [previewImage, setPreviewImage] = useState<any>({
    file: undefined,
    base64: null,
  })
  const [role, setRole] = useState("")

  /** FORM  HANDLE */
  const validationSchema = Yup.object().shape({
    about: Yup.string().nullable(),
    address: Yup.string(),
    avatar: Yup.string(),
    email: Yup.string(),
    fullname: Yup.string(),
    nik: Yup.string(),
    phone: Yup.string(),
    rt: Yup.string(),
    rw: Yup.string(),
    status: Yup.string(),
    username: Yup.string(),
  })

  const validationSchema_changePassword = Yup.object().shape({
    oldPassword: Yup.string().required(),
    newPassword: Yup.string()
      .matches(
        /(?=^.{6,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Panjangnya minimal 6 karakter||Menggunakan huruf besar dan kecil||Menggunakan minimal 1 angka dan 1 simbol"
      )
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("newPassword"), null], "Passwords doesn't match"),
  })

  interface IChangePassword {
    id: string
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(validationSchema) })

  const {
    register: registerChangePassword,
    handleSubmit: handleSubmitChangePassword,
    setValue: setValueChangePassword,
    formState: { errors: errorsChangePassword },
    clearErrors: clearErrorsPassword,
  } = useForm<IChangePassword>({
    resolver: yupResolver(validationSchema_changePassword),
  })

  const removeUnusedData = (data: any) => {
    const tempData = { ...data }
    delete tempData.password
    delete tempData.workspaceId
    delete tempData.role
    delete tempData.roleId
    delete tempData.emailVerifiedAt
    delete tempData.createdAt
    delete tempData.updatedAt
    delete tempData.status

    // tempData.updatedAt = 0
    // tempData.createdAt = 0

    return tempData
  }

  const initDataForm = (rawData: any) => {
    console.log(rawData)
    const data = removeUnusedData(rawData)
    if (data) {
      Object.keys(data).map((field: any) => {
        setValue(field, data[field])
      })
    }
  }

  const onSubmitForm = (data: any) => {
    const params = { ...data }
    console.log(params)
    if (previewImage.file) {
      uploadImageCDN(params)
    } else {
      updateData(params)
    }
  }

  const onSubmitChangePasswordForm = async (data: any) => {
    setValueChangePassword("id", credentials?._id)
    await new Promise((resolve) => setTimeout(resolve, 300))
    setLoadingForm(true)

    try {
      await putByController("/apps/auth/change-password", data, source.token)
      setLoadingForm(false)
      dispatchNotification(`Success update password`, "success")
    } catch (err: any) {
      setLoadingForm(false)
      dispatchNotification(`Failed update password`, "danger")
    }
  }

  const resetPasswordForm = () => {
    setValueChangePassword("oldPassword", "")
    setValueChangePassword("newPassword", "")
    setValueChangePassword("confirmPassword", "")
    clearErrorsPassword("oldPassword")
    clearErrorsPassword("newPassword")
    clearErrorsPassword("confirmPassword")
  }

  useEffect(() => {
    getDataById()
  }, [credentials?.id])

  /** GET EDIT DATA */
  const getDataById = async () => {
    try {
      const [req, reqRole] = await Promise.all([
        getByIdController("/location/sikersa/auth/users/get-one", credentials?.id, source.token),
        getByIdController(
          "/location/sikersa/privilege/role",
          credentials?.roleId,
          source.token
        ),
      ])
      setDataSelected(req?.data)
      initDataForm(req?.data)
      setRole(reqRole?.data?.name)
    } catch {}
  }

  /** PUT / UPDATE DATA REQUEST */
  const updateData = async (params: any) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    setLoadingForm(true)

    try {
      await putByController("/apps/auth/update-profile", params, source.token)
      setLoadingForm(false)
      dispatchNotification(`Success update user`, "success")

      if (previewImage.base64 === "") {
        dispatch(setLoggedInUserDetail({ ...loggedInUser, avatar: "" }))
      } else if (previewImage.base64) {
        dispatch(
          setLoggedInUserDetail({ ...loggedInUser, avatar: params?.avatar })
        )
      }
    } catch (err: any) {
      setLoadingForm(false)
      dispatchNotification(`Failed update user`, "danger")
    }
  }

  const uploadImageCDN = async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    setLoadingForm(true)

    try {
      const formData: any = new FormData()
      formData.append("file", previewImage.file)
      formData.append("root", process.env.APP_ALIAS)
      formData.append("folder", "user")
      formData.append("prefix", "avatar")

      const req = await uploadImage(formData, source.token)
      dispatchNotification(`Success upload foto profile`, "success")
      data.avatar = req.data
      updateData(data)
    } catch (err: any) {
      setLoadingForm(false)
      dispatchNotification(`Failed upload foto profile`, "danger")
    }
  }

  const onChangeFoto = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0]
      const reader: any = new FileReader()
      reader.onload = () => {
        setPreviewImage((prevState: any) => ({
          ...prevState,
          base64: reader.result,
          file: file,
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  /** NOTIFICATION HANDLER */
  const dispatchNotification = (msg: string = "", type: string = "") => {
    const notification = notificationTemplate(msg, type)
    dispatch(addNotification({ ...notification, message: msg, type: type }))
  }

  const handleDeleteAvatar = () => {
    setValue("avatar", "")
    setPreviewImage({
      file: null,
      base64: "",
    })
    setDataSelected((prevstate: any) => ({ ...prevstate, avatar: null }))
  }

  return (
    <>
      <TopBarLoader isLoading={loadingForm} />
      <Card>
        <Row className="animate__animated gx-0 animate__fadeIn">
          <Col sm={4} className="border-end management-separator">
            <div className="p-3">
              <div className="w-100 text-center position-relative">
                {(dataSelected?.avatar || previewImage.file) && (
                  <ButtonDeleteAvatar
                    variant=""
                    onClick={handleDeleteAvatar}
                    className="">
                    <TrashIcon width={24} />
                  </ButtonDeleteAvatar>
                )}
                <LazyImage
                  src={
                    (previewImage.base64 === "" && "/static/avatar.svg") ||
                    previewImage.base64 ||
                    `${process.env.CDN}${dataSelected?.avatar}`
                  }
                  alt=""
                  defaultImage={useMemo(
                    () =>
                      loggedInUser?.avatar !== ""
                        ? `${process.env.CDN}${loggedInUser?.avatar}`
                        : "/static/avatar.svg",
                    [workspace]
                  )}
                  width={328}
                  height={328}
                  className="img-thumbnail image-circle image-profile-user"
                />
                <div className="text-center mt-3">
                  <EditButton
                    onClick={() => refUploadFoto.current.click()}
                    type="button"
                    className="btn btn-link">
                    <ImageIcon />
                    Ubah Foto Profil
                  </EditButton>
                  <input
                    ref={refUploadFoto}
                    onChange={onChangeFoto}
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    hidden
                  />
                </div>
              </div>
            </div>
            <ProfileTab
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k: any) => setKey(k)}
              className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="akun">
                  Akun
                  <ChevronRightIcon />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="biodata">
                  Biodata
                  <ChevronRightIcon />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="keamanan">
                  Keamanan
                  <ChevronRightIcon />
                </Nav.Link>
              </Nav.Item>
            </ProfileTab>
          </Col>
          <Col sm={8} className="">
            {(key === "akun" || key === "biodata") && (
              <Form noValidate onSubmit={handleSubmit(onSubmitForm)}>
                {key === "akun" && (
                  <>
                    <div className="p-3 border-bottom">
                      <h3>Detail Akun</h3>
                      <Form.Group className="mb-3" controlId="role">
                        <Form.Label>Role</Form.Label>
                        <DFlexJustifyBetween>
                          <DFlexALignCenter>
                            <UserCheckIcon />
                            <span className="ms-2">{role ? role : "-"}</span>
                          </DFlexALignCenter>
                          <CopyIcon />
                        </DFlexJustifyBetween>
                      </Form.Group>
                      <Row className="mb-3">
                        <Col sm="6">
                          <Form.Group controlId="createdAt">
                            <Form.Label>Tanggal dibuat</Form.Label>
                            <br />
                            <Form.Control
                              disabled
                              {...register("createdAt")}
                              isInvalid={!!errors.id}
                              type="text"
                              placeholder="Your Role Id"
                              className="d-none"
                            />
                            <DFlexALignCenter>
                              <ClockIcon width={22} />
                              <span className="ms-2">
                                {dataSelected?.createdAt
                                  ? moment(dataSelected.createdAt).format(
                                      "DD / MM / YYYY"
                                    )
                                  : "-"}
                              </span>
                            </DFlexALignCenter>
                          </Form.Group>
                        </Col>
                        <Col sm="6">
                          <Form.Group controlId="updatedAt">
                            <Form.Label>Tanggal terakhir diubah</Form.Label>
                            <br />
                            <DFlexALignCenter>
                              <ClockIcon width={22} />
                              <span className="ms-2">
                                {dataSelected?.updatedAt
                                  ? moment(dataSelected.updatedAt).format(
                                      "DD / MM / YYYY"
                                    )
                                  : "-"}
                              </span>
                            </DFlexALignCenter>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Form.Group controlId="desa">
                        <Form.Label>Desa</Form.Label>
                        <DFlexJustifyBetween>
                          <DFlexALignCenter>
                            <VillageIcon2 width={22} />
                            <span className="ms-2">{desa ? desa : "-"}</span>
                          </DFlexALignCenter>
                          <CopyIcon />
                        </DFlexJustifyBetween>
                      </Form.Group>
                    </div>
                    <div className="p-3">
                      <FormInputControl
                        type="email"
                        labelName="Email"
                        register={register("email")}
                        isInvalid={!!errors?.email}
                        message={errors?.email?.message}
                        placeholder="Masukan email"
                        className="mb-0"
                      />
                      <p className="m-0 mb-3 text-primary mt-1">
                        {dataSelected?.emailVerifiedAt === 0
                          ? "Email belum terverifikasi"
                          : `Email terverifikasi pada ${moment(dataSelected?.emailVerifiedAt).format("LL")}`}{" "}
                      </p>

                      <FormInputControl
                        type="text"
                        labelName="Username"
                        register={register("username")}
                        isInvalid={!!errors?.username}
                        message={errors?.username?.message}
                        placeholder="Masukan username"
                        className="mb-0"
                      />
                    </div>
                  </>
                )}
                {key === "biodata" && (
                  <>
                    <div className="p-3 pb-0">
                      <h3>Detail Biodata</h3>

                      <FormInputControl
                        type="text"
                        labelName="Nama"
                        register={register("fullname")}
                        isInvalid={!!errors?.fullname}
                        message={errors?.fullname?.message}
                        placeholder="Masukan nama"
                      />
                      <FormInputControl
                        type="text"
                        labelName="Nomor Telepon"
                        register={register("phone")}
                        isInvalid={!!errors?.phone}
                        message={errors?.phone?.message}
                        placeholder="Masukan no hp / telepon"
                      />
                      <FormInputControl
                        type="text"
                        labelName="Tentang Saya"
                        register={register("about")}
                        isInvalid={!!errors?.about}
                        message={errors?.about?.message}
                        placeholder="Masukan tentang saya"
                      />
                      <FormInputControl
                        type="text"
                        labelName="NIK"
                        register={register("nik")}
                        isInvalid={!!errors?.nik}
                        message={errors?.nik?.message}
                        placeholder="Masukan NIK"
                      />
                      <Row className="mb-3">
                        <Col sm={6}>
                          <FormInputControl
                            type="number"
                            labelName="RT"
                            register={register("rt")}
                            isInvalid={!!errors?.rt}
                            message={errors?.rt?.message}
                            placeholder="Masukan RT"
                          />
                        </Col>
                        <Col sm={6}>
                          <FormInputControl
                            type="number"
                            labelName="RW"
                            register={register("rw")}
                            isInvalid={!!errors?.rw}
                            message={errors?.rw?.message}
                            placeholder="Masukan RW"
                          />
                        </Col>
                      </Row>
                      <FormInputControl
                        type="text"
                        labelName="Alamat"
                        register={register("address")}
                        isInvalid={!!errors?.address}
                        message={errors?.address?.message}
                        placeholder="Masukan alamat"
                      />
                    </div>
                  </>
                )}
                <DFlex className="col-50 pb-3 justify-content-end px-3 ">
                  <ButtonCancel />
                  <Button
                    type="submit"
                    variant="primary btn-submit"
                    isLoading={loadingForm}>
                    {dataSelected?.id ? "Simpan Perubahan" : "Simpan"}
                  </Button>
                </DFlex>
              </Form>
            )}
            {key === "keamanan" && (
              <Form
                noValidate
                onSubmit={handleSubmitChangePassword(
                  onSubmitChangePasswordForm
                )}>
                <div className="py-3">
                  <div className="px-3">
                    <h3>Ubah Password</h3>
                  </div>
                  <div className="px-3">
                    <FormInputControl
                      type="password"
                      labelName="Old Password"
                      register={registerChangePassword("oldPassword")}
                      isInvalid={!!errorsChangePassword?.oldPassword}
                      message={errorsChangePassword?.oldPassword?.message}
                      placeholder="Masukan password lama"
                    />
                  </div>
                  <hr className="border-bottom" />

                  <div className="px-3">
                    <FormInputControl
                      type="password"
                      labelName="New Password"
                      register={registerChangePassword("newPassword")}
                      isInvalid={!!errorsChangePassword?.newPassword}
                      message={errorsChangePassword?.newPassword?.message}
                      placeholder="Masukan password baru"
                    />
                    <FormInputControl
                      type="password"
                      labelName="Confirm Password"
                      register={registerChangePassword("confirmPassword")}
                      isInvalid={!!errorsChangePassword?.confirmPassword}
                      message={errorsChangePassword?.confirmPassword?.message}
                      placeholder="Konfirmasi password baru"
                    />
                  </div>
                </div>
                <DFlex className="col-50 py-3 justify-content-end px-3 ">
                  <ButtonCancel onClick={resetPasswordForm} />
                  <Button
                    type="submit"
                    variant="primary btn-submit"
                    isLoading={loadingForm}>
                    {dataSelected?.id ? "Simpan Perubahan" : "Simpan"}
                  </Button>
                </DFlex>
              </Form>
            )}
          </Col>
        </Row>
      </Card>
    </>
  )
}

const EditButton = styled(Button)`
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  box-shadow: none;
  color: var(--primary);
  margin-left: auto;
  margin-right: auto;
  font-size: 1.3rem;
`

const ProfileTab = styled(Nav)`
  border-bottom: 0;
  flex-direction: column;
  .nav-link {
    border: none;
    width: 100%;
    text-align: left;
    padding: 0.8rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--black);
    &.active {
      background: var(--primary-25);
      color: var(--primary);
    }
  }
`
const ButtonDeleteAvatar = styled(Button)`
  float: right;
  border: none;
  color: var(--danger);
  position: absolute;
  top: -10px;
  right: -10px;
`
