import axios from "axios"
import { debounce, get, orderBy, uniqBy } from "lodash"
import React, { useEffect, useState } from "react"
import { Controller } from "react-hook-form"
import { GetOptionLabel } from "react-select"
import AsyncSelect from "react-select/async"

import { ReactSelectStyle } from "@app/config/react-select.config"
import { postByController } from "@app/services/main.service"
import { Form } from "react-bootstrap"

interface IOption {
  readonly value: string
  readonly label: string
  readonly color: string
  readonly isFixed?: boolean
  readonly isDisabled?: boolean
}

function SelectAsyncDynamic({
  control,
  fieldName,
  fieldNameParent,
  watchParent,
  errors,
  placeholder = "Pilih...",
  pathServiceName,
  path,
  sortBy = "name",
  sortType = "ASC",
  labelField,
  valueField,
  labelName,
  queryParams = {},
  // sortBy = 'name',
  // sortType = 'asc',
  setValue,
  required = false,
  isDisabled = false,
  isClearable = true,
  isMulti = false,
  styles = ReactSelectStyle,
  getOptionLabel = undefined,
  errorDiv = true,
  options,
}: ISelectAsyncDynamic) {
  const source = axios.CancelToken.source()
  const [selectOptions, setSelectOptions] = useState<any>()
  console.log(selectOptions,'optionss');
  
  const [selectOptionsTemp, setSelectOptionsTemp] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [idParent, setIdParent] = useState()
  const [pathService] = useState<string>(path ? path : pathServiceName)

  const getSelectOptions = (
    inputVal: any,
    callback?: (options: IOption[]) => void
  ) => {
    setLoading(true)

    try {
      const parentField = fieldNameParent
        ? { [fieldNameParent]: watchParent ? watchParent : null }
        : {}

      const params = {
        page: 1,
        size: 25,
        order: sortType || "desc",
        orderBy: sortBy || "updatedAt",
        search: inputVal ? inputVal : undefined,
        ...parentField,
        ...queryParams,
      }

      if (isDisabled) {
        setLoading(false)
        return false
      }

      postByController(pathService, params, source.token)
        .then((response: any) => {
          const datas = get(response, "data") || []
          let data = datas?.map((d: any) => {
            return { label: d[labelField], value: d[valueField], __value: d }
          })

          setLoading(false)
          if (callback && data) {
            callback(data)
          }

          setSelectOptions(data)
          setSelectOptionsTemp(data)
        })
        .catch(function () {
          setLoading(false)
          if (callback) callback([])
          else setSelectOptions([])
        })
    } catch {
      setLoading(false)
    }
  }

  const loadOptions = (keyword: string, callback: any) => {
    const parentField = fieldNameParent
      ? { [fieldNameParent]: watchParent ? watchParent : null }
      : {}
    const paramsRequest: any = {
      page: 1,
      size: 30,
      order: sortType || "desc",
      search: keyword ? keyword : undefined,
      ...queryParams,
      ...parentField,
    }
    postByController(pathService, paramsRequest, source.token)
      .then((response: any) => {
        const datas = get(response, "data") || []
        let data = datas?.map((d: any) => {
          return { label: d[labelField], value: d[valueField], __value: d }
        })

        const newOptions = [...data, ...selectOptions]
        setSelectOptions(orderBy(uniqBy(newOptions, "value"), "label", "asc"))
        if (callback) callback(data)
      })
      .catch(function () {
        setLoading(false)
        if (callback) callback([])
        else {
          setSelectOptions([])
          setSelectOptionsTemp([])
        }
      })
  }

  /** SEARCH HANDLER AND DEBOUNCE */
  const debouncedSearchHandler = debounce(loadOptions, 1000)

  useEffect(() => {
    if (idParent != watchParent) {
      if (setValue) setValue(fieldName, null)
    }
    setIdParent(watchParent)
    getSelectOptions(undefined)
  }, [watchParent])

  useEffect(() => {
    return () => {
      source.cancel()
      setSelectOptions(undefined)
    }
  }, [])

  useEffect(() => {
    if (options && selectOptionsTemp) {
      const checkOptionExist = get(
        selectOptionsTemp.filter((f: any) => f?.value == options[valueField]),
        "0"
      )
      if (!checkOptionExist) {
        const prepandOptions = [
          {
            label: options[labelField],
            value: options[valueField],
            __value: options,
          },
        ]
        const o = orderBy(
          [...prepandOptions, ...selectOptions],
          ["label"],
          ["asc"]
        )
        setSelectOptions(o)
      }
    }
  }, [options, selectOptionsTemp])

  return (
    <>
      <Form.Group>
        <Form.Label>
          {labelName} {required && <span className="text-danger">*</span>}
        </Form.Label>

        <Controller
          control={control}
          defaultValue={""}
          name={fieldName}
          rules={{
            required: required,
          }}
          render={({ field: { onChange, value, ref } }) => (
            <>
              {isMulti ? (
                <AsyncSelect
                  placeholder={placeholder}
                  ref={ref}
                  value={
                    value
                      ? (Array.isArray(value) ? value : [value]).map(
                        (x: any) =>
                          selectOptions?.filter((y: any) => x == y.value)[0]
                      )
                      : []
                  }
                  onChange={(val: any) =>
                    onChange(val.map((x: any) => x.value))
                  }
                  classNamePrefix={`${get(errors, fieldName) ? "is-invalid" : ""}`}
                  loadOptions={debouncedSearchHandler}
                  defaultOptions={selectOptions}
                  styles={styles}
                  isLoading={loading}
                  isDisabled={isDisabled}
                  isClearable={isClearable}
                  isMulti={isMulti}
                  getOptionLabel={getOptionLabel}
                  menuPortalTarget={document.body}
                  menuShouldScrollIntoView={true}
                />
              ) : (
                <>
                  <AsyncSelect
                    placeholder={placeholder}
                    ref={ref}
                    value={selectOptions?.filter((c: any) => c.value == value)}
                    onChange={(val: any) => {
                      onChange(val?.value ? val?.value : null)
                      console.log(val?.value)
                    }}
                    classNamePrefix={`${get(errors, fieldName) ? "is-invalid" : ""}`}
                    loadOptions={debouncedSearchHandler}
                    defaultOptions={selectOptions}
                    styles={styles}
                    isLoading={loading}
                    isDisabled={isDisabled}
                    isClearable={isClearable}
                    getOptionLabel={getOptionLabel}
                    menuPortalTarget={document.body}
                    menuShouldScrollIntoView={true}
                  />
                </>
              )}
            </>
          )}
        />
      </Form.Group>
      {errorDiv && get(errors, fieldName) && (
        <div className="invalid-feedback d-block">
          {get(errors, fieldName)?.message}
        </div>
      )}
    </>
  )
}

interface ISelectAsyncDynamic {
  pathServiceName: string
  path?: string
  labelField: any
  valueField: any
  queryParams?: any
  sortBy?: string
  sortType?: string
  fieldName: string
  labelName?: string
  fieldNameParent?: string
  watchParent?: any
  control: any
  errors: any
  placeholder?: string
  setValue?: any
  isDisabled?: boolean
  isClearable?: boolean
  isSearchable?: boolean
  isMulti?: boolean
  required?: boolean
  options?: any
  defaultValue?: any
  styles?: any
  getOptionLabel?: GetOptionLabel<any> | undefined
  errorDiv?: boolean
}

export default SelectAsyncDynamic
