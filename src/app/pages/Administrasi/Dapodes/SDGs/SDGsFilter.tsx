import CiCloseBig from "@app/components/Icons/CiCloseBig"
import SelectStatic from "@app/components/Select/SelectStatic"
import { generateFilter } from "@app/helper/filter.helper"
import { setActiveFilters, setSearchValue } from "@app/store/reducers/ui"
import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

export default function SDGsFilter() {
  const dispatch = useDispatch()
  const { workspace } = useSelector((state: any) => state.app)
  const { searchValue } = useSelector((state: any) => state.ui)
  const {
    control,
    // register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<any>({
    mode: "onChange",
  })
  const [defaultFilter] = useState(
    generateFilter({ workspaceId: [workspace?._id] })
  )
  const [isFiltered, setIsFiltered] = useState(false)

  const onSubmitForm = (data: any) => {
    const { umur, type } = data
    const range = JSON.parse(umur || "{}")
    const params: any = generateFilter({
      type: [type],
    })

    dispatch(
      setActiveFilters({
        filters: {
          filter: [...defaultFilter, ...params],
          ...range,
        },
      })
    )
    setIsFiltered(true)
  }

  const handleReset = () => {
    setValue("type", null) // reset type select field
    dispatch(
      setActiveFilters({
        filters: {
          filter: defaultFilter,
        },
      })
    )
    dispatch(setSearchValue(""))
    setIsFiltered(false)
  }

  // show clear filter button when searching
  useEffect(() => {
    if (searchValue !== "") {
      setIsFiltered(true)
    }
  }, [searchValue])

  return (
    <Form
      className="d-flex flex-wrap gap-1"
      noValidate
      onSubmit={handleSubmit(onSubmitForm)}>
      <SelectStatic
        control={control}
        errors={errors}
        fieldName={"type"}
        options={[
          { label: "Individu", value: "individu" },
          { label: "Keluarga", value: "keluarga" },
          { label: "Rukun Tetangga", value: "rukun_tetangga" },
          { label: "Desa", value: "desa" },
        ]}
        placeholder={"Pilih kuisioner"}
      />
      <Button type="submit" variant="primary">
        Cari
      </Button>
      {isFiltered ? (
        <Button
          onClick={handleReset}
          type="button"
          variant="danger"
          className="text-white">
          <CiCloseBig /> Reset filter
        </Button>
      ) : null}
    </Form>
  )
}
