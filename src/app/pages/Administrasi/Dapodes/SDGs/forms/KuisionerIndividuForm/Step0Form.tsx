import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import * as Yup from "yup"
import { useWizard, WizardForm } from "../WizardForm/WizardForm"
import { useErrorForm } from "@app/helper/form-error.helper"
import { Input } from ".."
import { useDispatch } from "react-redux"
import { setSdgsAccount } from "@app/store/reducers/app"

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
})

export function Step0Form() {
  const { nextPage } = useWizard()
  const dispatch = useDispatch()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    // defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    // updateFormData(data);
    dispatch(setSdgsAccount(data))
    nextPage()
  }
  const { onErrorForm } = useErrorForm()
  // const {workspace} = useSelector((state: any) => state.app);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>SDGS Account</h5>
          <Row>
            <Col sm>
              <Input
                fieldName="username"
                labelName={"Username"}
                required={false}
                placeholder={"Masukkan username sdgs"}
              />
            </Col>
          </Row>
          <Row>
            <Col sm>
              <Input
                fieldName="password"
                labelName={"Password"}
                required={false}
                type={"password"}
                placeholder={"Masukkan password sdgs"}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
