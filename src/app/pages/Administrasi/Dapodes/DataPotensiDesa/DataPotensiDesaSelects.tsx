import React from "react"
import SelectStatic from "@app/components/Select/SelectStatic"

export function SelectAdaAtauTidak({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Ada", value: "ada" },
        { label: "Tidak Ada", value: "tidak ada" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectYaAtauTidak({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Ya", value: "ya" },
        { label: "Tidak", value: "tidak" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectAktifAtauPasif({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Aktif", value: "aktif" },
        { label: "Pasif", value: "pasif" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectAktifAtauTidakAktif({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Aktif", value: "aktif" },
        { label: "Tidak aktif", value: "tidak aktif" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectPotensi({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Besar", value: "besar" },
        { label: "Sedang", value: "sedang" },
        { label: "Kecil", value: "kecil" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectBaikAtauRusak({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Baik", value: "baik" },
        { label: "Rusak", value: "rusak" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectBaikAtauTidak({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Baik", value: "baik" },
        { label: "Tidak baik", value: "tidak baik" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectKualitasAirMinum({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Baik", value: "baik" },
        { label: "Berbau", value: "berbau" },
        { label: "Berwarna", value: "berwarna" },
        { label: "Berasa", value: "berasa" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectKesuburanTanah({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Merah", value: "merah" },
        { label: "Kuning", value: "kuning" },
        { label: "Hitam", value: "hitam" },
        { label: "Abu-abu", value: "abu-abu" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectPendidikan({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "SD", value: "sd" },
        { label: "SMP", value: "smp" },
        { label: "SMA", value: "sma" },
        { label: "Diploma", value: "diploma" },
        { label: "S1", value: "s1" },
        { label: "Pascasarjana", value: "pascasarjana" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectTerdaftarAtauTerakreditasi({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Terdaftar", value: "terdaftar" },
        { label: "Terakreditasi", value: "terakreditasi" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectBulan({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Januari", value: "januari" },
        { label: "Februari", value: "februari" },
        { label: "Maret", value: "maret" },
        { label: "April", value: "april" },
        { label: "Mei", value: "mei" },
        { label: "Juni", value: "juni" },
        { label: "Juli", value: "juli" },
        { label: "Agustus", value: "agustus" },
        { label: "September", value: "september" },
        { label: "Oktober", value: "oktober" },
        { label: "Nopember", value: "nopember" },
        { label: "Desember", value: "desember" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}

export function SelectPemerintahSwastaSwadaya({
  control,
  errors,
  fieldName,
  additionalOptions = {},
}: {
  control: any
  errors: any
  fieldName: string
  additionalOptions?: any
}) {
  return (
    <SelectStatic
      control={control}
      errors={errors}
      fieldName={fieldName}
      options={[
        { label: "Pemerintah", value: "pemerintah" },
        { label: "Swasta", value: "swasta" },
        { label: "Swadaya", value: "swadaya" },
      ]}
      additionalOptions={additionalOptions}
    />
  )
}
