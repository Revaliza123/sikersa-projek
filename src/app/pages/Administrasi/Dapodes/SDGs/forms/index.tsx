import TrashIcon from "@app/components/Icons/TrashIcon"
import FormInputControl from "@app/components/Input/FormInputControl"
import { InputLocation } from "@app/components/Input/FormInputLocation"
import FormInputMask from "@app/components/Input/FormInputMask"
import SelectAsyncDynamic from "@app/components/Select/SelectAsyncDynamic"
import SelectStatic from "@app/components/Select/SelectStatic"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import { isArray, snakeCase } from "lodash"
import React, { useEffect } from "react"
import { Button, Form } from "react-bootstrap"
import { useFieldArray, useFormContext, useWatch } from "react-hook-form"
import { useDisableField } from "./fieldDisable"

type CustomCommonFieldType = {
  labelName: string
  required: boolean
  placeholder: string
  fieldName: string
  type?: string | any
  additionalOptions?: any
  helperText?: string
}
export function Input({
  labelName,
  required,
  placeholder,
  fieldName,
  type = "text",
  additionalOptions = {},
  helperText = "",
}: CustomCommonFieldType) {
  const {
    register,
    // watch,
    control,
    formState: { errors },
  } = useFormContext()
  const { isFieldDisable } = useDisableField()
  // disable when field has defaultValue
  let options = {} as any

  if (type === "number") {
    options["min"] = 0
    options["max"] = "any"
    options["step"] = "any"
  }

  options = {
    ...options,
    ...additionalOptions,
    disabled: isFieldDisable(fieldName),
  }

  if (type === "currency") {
    return (
      <Form.Group className="mb-3">
        <Form.Label>
          {labelName} {required && <RequiredInfo />}
        </Form.Label>
        {helperText ? <Form.Text muted>{helperText}</Form.Text> : null}
        <FormInputMask
          prefix={"Rp "}
          register={register(fieldName)}
          errors={errors}
          control={control}
          field={fieldName}
          placeholder={placeholder}
          decimalScale={0}
          required={required}
          allowNegative={false}
        />
      </Form.Group>
    )
  }

  return (
    <FormInputControl
      labelName={labelName}
      required={required}
      register={register(fieldName)}
      isInvalid={!!errors[fieldName]}
      message={errors[fieldName]?.message}
      placeholder={placeholder}
      additionalOptions={options}
      type={type}
      helperText={helperText}
    />
  )
}

export function Select({
  labelName,
  required,
  placeholder,
  fieldName,
  options,
  additionalOptions,
}: any) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext()
  const watch = useWatch({
    control,
    name: fieldName,
  })
  // const { isFieldDisable } = useDisableField();
  const opts = {
    ...additionalOptions,
    // isDisabled: isFieldDisable(fieldName)
  }

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {labelName} {required && <RequiredInfo />}
      </Form.Label>
      <SelectStatic
        control={control}
        errors={errors}
        fieldName={fieldName}
        options={options}
        placeholder={placeholder}
        additionalOptions={opts}
      />
      {watch && watch.match(/(lainnya)/gi) ? (
        <div className="my-1">
          <FormInputControl
            labelName={""}
            required={required}
            register={register(`${fieldName}_lainnya`)}
            isInvalid={!!errors[fieldName]}
            message={errors[fieldName]?.message}
            placeholder={"Lainnya"}
          />
        </div>
      ) : null}
    </Form.Group>
  )
}

export function SelectAsync({
  labelName,
  fieldName,
  labelField,
  valueField,
  url,
  className = "mb-3",
  required = false,
  queryParams = {},
  additionalOptions = {},
}: any) {
  const {
    // register,
    control,
    formState: { errors },
  } = useFormContext()
  // const watch = useWatch({
  //   control,
  //   name: fieldName
  // });
  // const { isFieldDisable } = useDisableField();
  const opts = {
    ...additionalOptions,
    // isDisabled: isFieldDisable(fieldName)
  }
  const defaultQueryParams = { size: 50 }
  const queryParamsObj = { ...defaultQueryParams, ...queryParams }

  return (
    <>
      <Form.Group className={className}>
        <Form.Label>
          {labelName} {required && <RequiredInfo />}
        </Form.Label>
        <SelectAsyncDynamic
          isClearable={false}
          errors={errors}
          control={control}
          labelField={labelField}
          valueField={valueField}
          fieldName={fieldName}
          pathServiceName={url}
          queryParams={queryParamsObj}
          {...opts}
        />
      </Form.Group>
    </>
  )
}

export function Provinsi({
  fieldName,
  labelName = "",
}: {
  fieldName: string
  labelName?: string
}) {
  const {
    // register,
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <InputLocation.Provinsi
      control={control}
      errors={errors}
      fieldName={fieldName}
      labelName={labelName}
    />
  )
}

export function KabupatenKota({
  fieldName,
  watcherParent,
  labelName = "",
}: {
  fieldName: string
  watcherParent: any
  labelName?: string
}) {
  const {
    // register,
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <InputLocation.KabupatenKota
      control={control}
      errors={errors}
      fieldName={fieldName}
      labelName={labelName}
      watcherParent={watcherParent}
    />
  )
}

export function Kecamatan({
  fieldName,
  watcherParent,
  labelName = "",
}: {
  fieldName: string
  watcherParent: any
  labelName?: string
}) {
  const {
    // register,
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <InputLocation.Kecamatan
      control={control}
      errors={errors}
      fieldName={fieldName}
      labelName={labelName}
      watcherParent={watcherParent}
    />
  )
}

export function KelurahanDesa({
  fieldName,
  watcherParent,
  labelName = "",
}: {
  fieldName: string
  watcherParent: any
  labelName?: string
}) {
  const {
    // register,
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <InputLocation.DesaKelurahan
      control={control}
      errors={errors}
      fieldName={fieldName}
      labelName={labelName}
      watcherParent={watcherParent}
    />
  )
}

export function Choices({ labelName, required, fieldName, options }: any) {
  const { register, control, formState } = useFormContext()
  const { isFieldDisable } = useDisableField()
  const field = `${fieldName}`
  const watch = useWatch({
    control,
    name: field,
  })

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {labelName} {required && <RequiredInfo />}
      </Form.Label>
      <div className="my-2">
        {options &&
          options.map((option: any, idx: number) => (
            <Form.Check
              key={idx}
              id={`form_${snakeCase(labelName)}_${option?.value}`}
              inline
              label={option?.label}
              value={option?.value}
              type={"radio"}
              isInvalid={!!formState.errors[field]}
              {...register(field)}
              disabled={isFieldDisable(fieldName)}
            />
          ))}
        {watch && watch.match(/(lainnya)/gi) ? (
          <div className="my-1">
            <FormInputControl
              labelName={""}
              required={required}
              register={register(`${fieldName}_lainnya`)}
              isInvalid={!!formState?.errors[`${field}_lainnya`]}
              message={formState.errors[`${field}_lainnya`]?.message}
              placeholder={"Lainnya"}
            />
          </div>
        ) : null}
      </div>
    </Form.Group>
  )
}

export function TableChoices({ labelName, required, fieldName, options }: any) {
  const { register, formState } = useFormContext()

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {labelName} {required && <RequiredInfo />}
      </Form.Label>
      <div className="my-2">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Ya</th>
              <th>Tidak</th>
            </tr>
          </thead>
          <tbody>
            {isArray(options) && options.length
              ? options.map((item: any, idx: number) => {
                  const field = `${fieldName}.${item?.fieldName}`
                  return (
                    <tr key={idx}>
                      <td style={{ width: "70%" }}>
                        {`${idx + 1}.`} {item?.label}
                      </td>
                      <td>
                        <Form.Check
                          inline
                          label={""}
                          value={"ya"}
                          type={"radio"}
                          isInvalid={!!formState.errors[field]}
                          {...register(field)}
                        />
                      </td>
                      <td>
                        <Form.Check
                          inline
                          label={""}
                          value={"tidak"}
                          type={"radio"}
                          isInvalid={!!formState.errors[field]}
                          {...register(field)}
                        />
                      </td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </table>
      </div>
    </Form.Group>
  )
}

export function TableInputs({
  labelName,
  required,
  fieldName,
  options,
  helperText = "",
}: any) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {labelName} {required && <RequiredInfo />}
      </Form.Label>
      {helperText ? <Form.Text>{helperText}</Form.Text> : null}
      <div className="my-2">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isArray(options) && options.length
              ? options.map((item: any, idx: number) => {
                  const field = `${fieldName}.${item?.fieldName}`
                  let itemOpts = {} as any

                  if (item?.type === "number") {
                    itemOpts["min"] = 0
                    itemOpts["max"] = "any"
                    itemOpts["step"] = "any"
                  }

                  itemOpts = {
                    ...itemOpts,
                    ...item?.additionalOptions,
                  }

                  return (
                    <tr key={idx}>
                      <td style={{ width: "50%" }}>
                        {`${idx + 1}.`} {item?.label}{" "}
                        {item?.required ? <RequiredInfo /> : null}
                      </td>
                      <td>
                        <FormInputControl
                          className=""
                          labelName={""}
                          required={required}
                          register={register(`${field}`)}
                          isInvalid={!!errors[field]}
                          message={errors[field]?.message}
                          placeholder={
                            item.placeholder || `Masukkan ${item.label}`
                          }
                          type={item?.type || "text"}
                          helperText={item?.helperText}
                          additionalOptions={itemOpts}
                        />
                      </td>
                    </tr>
                  )
                })
              : null}
          </tbody>
        </table>
      </div>
    </Form.Group>
  )
}

export function FieldLainnya({
  control,
  fieldName,
  index,
  required,
  register,
  errors,
}: any) {
  const watch = useWatch({
    control,
    name: `${fieldName}.${index}.sumber_penghasilan`,
  })

  return (
    <div className="mt-1">
      {watch === "lainnya" && (
        <FormInputControl
          labelName={""}
          required={required}
          register={register(`${fieldName}_lainnya`)}
          isInvalid={!!errors[fieldName]}
          message={errors[fieldName]?.message}
          placeholder={"Lainnya"}
        />
      )}
    </div>
  )
}

export function FieldArray({
  fieldName,
  required,
  children,
  defaultValue,
  title,
  subtitle,
  helperText = "",
}: any) {
  const {
    control,
    register,
    formState: { errors },
    watch,
  } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
  })

  const appendOne = () => {
    if (Array.isArray(defaultValue)) {
      defaultValue.forEach((v: any) => append(v))
    } else {
      append(defaultValue)
    }
  }

  useEffect(() => {
    if (fields.length === 0) {
      appendOne()
    }
  }, [fields])

  return (
    <>
      {title ? <h6 className="fs-6">{title}</h6> : null}
      {helperText ? <span>{helperText}</span> : null}
      <div>
        {fields.map((field: any, index: number) => (
          <div key={index}>
            <div className="d-flex justify-content-between mt-3">
              {subtitle ? (
                <p className="fw-bold">
                  {subtitle} <span className="text-success">{index + 1}</span>
                </p>
              ) : (
                "-"
              )}
              <Button
                onClick={() => remove(index)}
                type="button"
                variant="outline-danger">
                <TrashIcon />
              </Button>
            </div>
            {children({
              field,
              index,
              required,
              remove,
              append,
              fieldName,
              register,
              control,
              errors,
              watch,
            })}
          </div>
        ))}
        <div className="d-flex justify-content-end my-2">
          <Button onClick={appendOne} type="button" variant="outline-primary">
            Tambah
          </Button>
        </div>
      </div>
    </>
  )
}

/**
 * 
 * categories={['Sinyal Operator','Sinyal Internet']}
 * selectOptions={[
                  { label: 'Ada sinyal', value: 'Ada sinyal' },
                  { label: 'Tidak ada sinyal', value: 'Tidak ada sinyal' },
                ]}
 * options={[
 *  { labelName: 'Telkomsel', fieldName: ['telkomsel_operator','telkomsel_internet']},
 * ]
 */

export function TableSelects({
  labelName,
  required,
  categories,
  options,
  selectOptions,
  fieldName,
}: {
  labelName: string
  required: boolean
  categories: string[]
  selectOptions: { label: string; value: string }[]
  selectOptions2: { label: string; value: string }[]
  options: any[]
  fieldName: string | string[]
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {labelName} {required && <RequiredInfo />}
      </Form.Label>
      <div className="my-2">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>{categories[0]}</th>
              <th>{categories[1]}</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option: any) => {
              const firstField = `${fieldName}.${option.fieldName[0]}`
              const secondField = `${fieldName}.${option.fieldName[1]}`
              return (
                <tr key={option.fieldName}>
                  <td>{option.labelName}</td>
                  <td>
                    <SelectStatic
                      control={control}
                      errors={errors[firstField]}
                      fieldName={firstField}
                      options={selectOptions}
                      placeholder={`Pilih...`}
                    />
                  </td>
                  <td>
                    <SelectStatic
                      control={control}
                      errors={errors[secondField]}
                      fieldName={secondField}
                      options={selectOptions}
                      placeholder={`Pilih...`}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </Form.Group>
  )
}

export function Checkboxes({ labelName, required, fieldName, options }: any) {
  const {
    register,
    // watch,
    formState,
  } = useFormContext()
  const { isFieldDisable } = useDisableField()

  return (
    <Form.Group className="mb-3">
      <Form.Label>
        {labelName} {required && <RequiredInfo />}
      </Form.Label>
      <div className="my-2">
        {options &&
          options.map((option: any, idx: number) => {
            const field = `${fieldName}`
            return (
              <div key={idx}>
                <Form.Check
                  id={`form_${snakeCase(labelName)}_${option?.value}`}
                  inline
                  label={option?.label}
                  value={option?.value}
                  type={"checkbox"}
                  isInvalid={!!formState.errors[field]}
                  {...register(field)}
                  disabled={isFieldDisable(field)}
                />
              </div>
            )
          })}
      </div>
    </Form.Group>
  )
}
