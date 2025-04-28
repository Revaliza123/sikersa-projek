import CardImageInfo from "@app/components/Card/CardImageInfo"
import NoData from "@app/components/Error/NoData"
import { cdnUrl } from "@app/helper/cdn.helper"
import { replaceAll } from "@app/helper/string.helper"
import { dateFormat } from "@app/helper/time.helper"
import useApiRequest from "@app/services/useApiRequest"
import { API_PATH } from "@app/services/_path.service"
import { FormGroupTitle } from "@app/styled/typography.styled"
import { capitalize, isArray, lowerCase } from "lodash"
import { nanoid } from "nanoid"
import React, { Fragment, useEffect, useMemo, useState } from "react"
import { Button, Card, Col, ModalBody, Row, Table } from "react-bootstrap"
import styled from "styled-components"

export interface KVNType {
  Key: string
  Value: any[] | KVNType[]
}

const orderAscSomeKey = (key: string) => {
  const keys = [
    "desa_/_kelurahan",
    "dusun",
    "rw",
    "rt",
    "umur",
    "jenis_kelamin",
    "nama_panggilan",
    "nama_lengkap",
    "nama",
    "nik",
    "nomor_surat",
  ]
  return keys.indexOf(key)
}

const formatKey = (key: string) => {
  const mustBeUpperCase: any = {
    nik: "NIK",
    rt: "RT",
    rw: "RW",
    hp: "HP",
    kk: "KK",
    ktp: "KTP",
  } as any
  const keyCap = capitalize(key) || ""
  const tmp = keyCap
    .split(" ")
    .map((x: string) => {
      const xlc = x.toLowerCase()
      if (xlc in mustBeUpperCase) {
        return mustBeUpperCase[xlc]
      }

      return x
    })
    .join(" ")

  return tmp
}

function isImgUrl(url: any) {
  return /\.(jpg|jpeg|JPG|JPEG|png|webp|avif|gif)$/.test(url)
}

const isValidValue = ({ Value, Key }: { Value: any; Key: string }) => {
  const invalidTexts = ["", "undefined", "null"]
  const stringifyKey = ["umur", "usia"] // value of these keys will be convert to string

  if (stringifyKey.includes(Key)) {
    Value = String(Value)
  }

  if (typeof Value === "number") {
    return Value === 0 ? false : true
  }

  return invalidTexts.includes(Value) ? false : true
}

const parseLampiran = (data: any) => {
  if (!data) return []

  if ("lampiran" in data && isArray(data.lampiran)) {
    return data.lampiran
      .filter((i: any) => Boolean(i))
      .map((item: any) => {
        return {
          ...item,
          Key: capitalize(
            replaceAll(replaceAll(item?.Key, { upload_: "" }), { _: " " })
          ),
          Value: cdnUrl(item?.Value),
        }
      })
  }

  if ("formDetails" in data && isArray(data.formDetails)) {
    return data.formDetails
      .filter((i: any) => Boolean(i))
      .filter(
        (i: { Key: string; Value: string }) =>
          i.Key.startsWith("lampiran_") && i.Value !== ""
      )
      .map((item: any) => {
        return {
          ...item,
          Key: capitalize(
            replaceAll(replaceAll(item?.Key, { lampiran_: "" }), { _: " " })
          ),
          Value: cdnUrl(item?.Value),
        }
      })
  }

  return []
}

const parserFormDetail = (details: any) => {
  // ignore these properties which will not show in detail ui
  const ignored = [
    "created_at",
    "_id",
    "updated_at",
    "workspaceId",
    "status",
    "detail_workspace",
    "id_tanda_tangan",
    "act_by_username",
    "edited_by",
    "workspace",
    "act_by",
    "user_id",
    "jenis_perubahan",
    "penambahan",
    "pengurangan",
    "password",
    "username",

    // custom surat
    "formId",
    "templateId",
    "template",
    "templatePath",

    // 'sumber_data',
  ]
  const lampiranPrefix = ["lampiran", "upload"]
  const dataDetails = isArray(details) ? details : details?.formDetails
  const formDetails = dataDetails
    ?.filter((f: any) => ignored?.indexOf(f?.Key) == -1)
    ?.filter((f: any) => lampiranPrefix.indexOf(f?.Key.split("_")[0]) == -1)
    ?.map((item: any) => {
      const value = isArray(item?.Value)
        ? item?.Value?.flat()
            .filter((f: any) => f != null)
            .filter((f: any) => ignored?.indexOf(f?.Key) == -1)
            .map((i: any) => {
              if (isArray(i)) {
                return i
                  ?.flat()
                  .filter((f: any) => f != null)
                  .filter((f: any) => ignored?.indexOf(f?.Key) == -1)
                  .map((x: any) => {
                    return {
                      ...x,
                      Key: formatKey(replaceAll(x?.Key, { _: " " })),
                      Value:
                        typeof x?.Value === "string" ||
                        typeof x?.Value === "number"
                          ? x?.Value
                          : "",
                      Order: orderAscSomeKey(x?.Key), // flag for order some keys e.g: nomor_surat, nik, nama
                    }
                  })
                  .sort((a: any, b: any) => b.Order - a.Order)
              }

              return {
                ...i,
                Key: formatKey(replaceAll(i?.Key, { _: " " })),
                Order: orderAscSomeKey(i.Key), // flag for order some keys
              }
            })
            .sort((a: any, b: any) => b.Order - a.Order)
        : item?.Value
      return {
        ...item,
        Key: formatKey(replaceAll(item?.Key, { _: " " })),
        Value: value,
        Order: orderAscSomeKey(item.Key), // flag for order some keys
      }
    })
    .sort((a: any, b: any) => b.Order - a.Order)

  const lampiran = parseLampiran(details)

  return { formDetails: formDetails, lampiran: lampiran }
}

export default function DataPotensiDesaDetail({
  form,
  onClose,
}: IDataPotensiDesaDetail) {
  const [urlPath] = useState<any>(
    `${API_PATH().form.mainForm}/${form?.collection}/details?id=${form?.id}`
  )

  const [details, setDetails] = useState<any>()
  const [params] = useState<any>({})
  const [page, setPage] = useState(0)

  /** AUDIENCE REQ DATA */
  const apiRequest = useApiRequest({
    url: form?.url ? form?.url : urlPath,
    method: form?.httpMethod || "POST",
    params: params,
  })

  useEffect(() => {
    if (apiRequest?.response?.data) {
      const result = parserFormDetail(apiRequest?.response?.data)

      setDetails(result)
    }
  }, [apiRequest?.response])

  if (apiRequest?.loading) {
    return <p className="text-center my-4">Loading...</p>
  }
  return (
    <>
      <ModalBody>
        {isArray(details?.formDetails) ? (
          <>
            <CardInfoDetails className="border-0">
              <Card.Body>
                <div className="table-responsive">
                  <TableDetails borderless>
                    <tbody>
                      {form?.jenis_layanan ? (
                        <tr>
                          <td className="fw-bold text-capitalize">
                            Jenis Surat:
                          </td>
                          <td className="dotdot">: </td>
                          <td className="fw-bold text-capitalize">
                            {form?.jenis_layanan}
                          </td>
                        </tr>
                      ) : null}
                    </tbody>
                    {details?.formDetails?.map((item: any, idx: number) => (
                      <>
                        {isArray(item?.Value) ? (
                          <tbody
                            key={nanoid()}
                            className={page === idx - 9 ? "d-block" : "d-none"}
                            data-num={idx}>
                            <tr>
                              <td colSpan={3}>
                                <FormGroupTitle>{item?.Key}</FormGroupTitle>
                              </td>
                            </tr>

                            {item?.Value?.map((item2: KVNType) => (
                              <>
                                {isArray(item2?.Value) ? (
                                  <>
                                    <RenderTitleRow item={item2} />
                                    {item2?.Value.map((item3: KVNType) => (
                                      <>
                                        {isArray(item3?.Value) ? (
                                          <>
                                            <RenderTitleRow item={item3} />
                                            {item3?.Value?.map(
                                              (item4: KVNType) => (
                                                <>
                                                  {isArray(item4.Value) ? (
                                                    <>
                                                      {item4?.Value?.map(
                                                        (item5: KVNType) => (
                                                          <>
                                                            {isArray(
                                                              item5?.Value
                                                            ) ? (
                                                              <>
                                                                <RenderTitleRow
                                                                  item={item5}
                                                                />
                                                                {item5?.Value?.map(
                                                                  (
                                                                    item6: KVNType
                                                                  ) => (
                                                                    <>
                                                                      <RenderRow
                                                                        key={nanoid()}
                                                                        item={
                                                                          item6
                                                                        }
                                                                      />
                                                                    </>
                                                                  )
                                                                )}
                                                              </>
                                                            ) : (
                                                              <RenderRow
                                                                key={nanoid()}
                                                                item={item5}
                                                              />
                                                            )}
                                                          </>
                                                        )
                                                      )}
                                                    </>
                                                  ) : (
                                                    <RenderRow
                                                      key={nanoid()}
                                                      item={item4}
                                                    />
                                                  )}
                                                </>
                                              )
                                            )}
                                          </>
                                        ) : (
                                          <RenderRow
                                            key={nanoid()}
                                            item={item3}
                                          />
                                        )}
                                      </>
                                    ))}
                                  </>
                                ) : (
                                  <RenderRow key={nanoid()} item={item2} />
                                )}
                              </>
                            ))}
                          </tbody>
                        ) : (
                          <tbody
                            key={nanoid()}
                            className={page === 0 ? "d-block" : "d-none"}>
                            <RenderRow item={item} />
                          </tbody>
                        )}
                      </>
                    ))}
                  </TableDetails>
                </div>
              </Card.Body>
            </CardInfoDetails>
            <div className="d-flex justify-content-end align-items-center my-2 gap-1">
              <Button
                onClick={() => setPage(page > 0 ? page - 1 : 0)}
                type="button"
                variant="outline-primary">
                Sebelumnya
              </Button>
              {page < details?.formDetails?.length - 10 ? (
                <Button
                  onClick={() => setPage(page + 1)}
                  type="button"
                  variant="outline-primary">
                  Selanjutnya
                </Button>
              ) : (
                <Button
                  onClick={onClose}
                  type="button"
                  variant="outline-primary">
                  Selesai
                </Button>
              )}
            </div>

            {details?.lampiran && details?.lampiran?.length > 0 ? (
              <>
                <FormGroupTitle className="mt-4">Lampiran</FormGroupTitle>

                <Row className="mt-3 gx-2 gy-2">
                  {details?.lampiran?.map((item: any) => (
                    <Col md="4" key={nanoid()}>
                      <a href={item?.Value} target={"_blank"} rel="noreferrer">
                        <CardImageInfo
                          image={item?.Value}
                          label={item?.Key}></CardImageInfo>
                      </a>
                    </Col>
                  ))}
                </Row>
              </>
            ) : null}
          </>
        ) : (
          <div style={{ position: "relative", height: "15rem" }}>
            <NoData />
          </div>
        )}
      </ModalBody>
    </>
  )
}

let tmp = 0
function RenderRow({ item }: { item: KVNType | any | any[] }) {
  const renderValue = useMemo(() => {
    if (isValidValue(item)) {
      if (isImgUrl(item?.Value)) {
        return (
          <a target="_blank" href={cdnUrl(item?.Value)} rel="noreferrer">
            <img
              width="240px"
              height="135px"
              className="object-fit-cover rounded"
              src={cdnUrl(item?.Value)}
            />
          </a>
        )
      }

      if (lowerCase(item?.Key)?.includes("tanggal")) {
        return dateFormat(item?.Value)
      }

      return item?.Value
    }

    return "-"
  }, [item])

  const renderKey = useMemo(() => {
    return formatKey(replaceAll(item?.Key, { _: " " }))
  }, [item])

  if (isArray(item)) {
    const rendered = tmp != Object.values(item).map((x) => x?.Key).length
    if (rendered) {
      tmp = Object.values(item).map((x) => x?.Key).length
    }

    const header = rendered ? (
      <tr>
        {Object.values(item).map((x: any) => (
          <td key={nanoid()} className="fw-bold">
            {formatKey(replaceAll(x?.Key, { _: " ", key: "" }))}
          </td>
        ))}
      </tr>
    ) : null

    const body = (
      <tr>
        {Object.values(item).map((x: any) => (
          <td key={nanoid()}>
            {isValidValue(x?.Value) && !isArray(x?.Value) ? x?.Value : "-"}
          </td>
        ))}
      </tr>
    )

    return (
      <>
        {header}
        {body}
      </>
    )
  }

  return (
    <tr key={nanoid()}>
      <td>{renderKey}</td>
      <td className="dotdot">: </td>
      <td>{renderValue}</td>
    </tr>
  )
}

function RenderTitleRow({ item }: { item: KVNType }) {
  const renderKey = useMemo(() => {
    return formatKey(replaceAll(item?.Key, { _: " " }))
  }, [item])

  return (
    <>
      <tr>
        <td colSpan={3}>
          <h6 className="mb-1 mt-3 fw-bolder">{renderKey}</h6>
        </td>
      </tr>
    </>
  )
}

interface IDataPotensiDesaDetail {
  form: any
  onClose: () => void
}

const CardInfoDetails = styled(Card)`
  .card-body {
    padding: 1.1rem;
  }

  background: var(--body-bg);
`

const TableDetails = styled(Table)`
  margin-bottom: 0;
  > :not(caption) > * > * {
    padding: 0.4rem 1rem;
  }
  vertical-align: middle;

  surat td.dotdot {
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 5px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`
