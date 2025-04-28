import CardImageInfo from "@app/components/Card/CardImageInfo"
import NoData from "@app/components/Error/NoData"
import { cdnUrl } from "@app/helper/cdn.helper"
import { replaceAll } from "@app/helper/string.helper"
import { dateFormat } from "@app/helper/time.helper"
import { API_PATH } from "@app/services/_path.service"
import useApiRequest from "@app/services/useApiRequest"
import { DFlex } from "@app/styled/flex.styled"
import { FormGroupTitle } from "@app/styled/typography.styled"
import { capitalize, isArray, lowerCase } from "lodash"
import { nanoid } from "nanoid"
import React, { useEffect, useState } from "react"
import {
  Button,
  Card,
  Col,
  ModalBody,
  ModalFooter,
  Row,
  Table,
} from "react-bootstrap"
import styled from "styled-components"

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
          (i.Key.startsWith("lampiran") || i.Key.startsWith("lampiran_")) &&
          i.Value !== ""
      )
      .reduce((acc = [] as any[], item: any) => {
        if (isArray(item?.Value)) {
          item?.Value?.forEach((anItem: any) => {
            acc.push({
              Key: capitalize(
                replaceAll(replaceAll(anItem?.[0]?.Value, { lampiran_: "" }), {
                  _: " ",
                })
              ),
              Value: cdnUrl(anItem?.[1].Value),
            })
          })
        } else {
          acc.push({
            ...item,
            Key: capitalize(
              replaceAll(replaceAll(item?.Key, { lampiran_: "" }), { _: " " })
            ),
            Value: cdnUrl(item?.Value),
          })
        }

        return acc
      }, [] as any[])
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
    "tanggal_hari_ini",
    "nama_kelurahan",
    "nama_kecamatan",
    "nama_kota",
    "nama_provinsi",
    "website",
    "email",
    "telp",
    "kodePos",
    "alamat_kop",
    "tanda_tangan_nama",
    "tanda_tangan_jabatan",
    "tanda_tangan_nip",
    "collection",
    "jenis_layanan",
    "updatedAt",
    "createdAt",
  ]
  const lampiranPrefix = ["lampiran", "upload"]
  const dataDetails = isArray(details) ? details : details?.formDetails
  const formDetails = dataDetails
    ?.filter((f: any) => ignored?.indexOf(f?.Key) == -1)
    ?.filter((f: any) => lampiranPrefix.indexOf(f?.Key.split("_")[0]) == -1)
    ?.map((item: any) => {
      const value = isArray(item?.Value)
        ? item?.Value?.filter((f: any) => f != null)
            .filter((f: any) => ignored?.indexOf(f?.Key) == -1)
            .map((i: any) => {
              if (isArray(i)) {
                return i
                  ?.filter((f: any) => f != null)
                  .filter((f: any) => ignored?.indexOf(f?.Key) == -1)
                  .map((x: any) => {
                    return {
                      ...x,
                      Key: formatKey(replaceAll(x?.Key, { _: " " })),
                      Value: x?.Value,
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

const noop = () => void 0

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

enum VerifikasiTypeEnum {
  VERIFIKASI = "verifikasi",
  DETAIL = "detail",
}

export default function VerifikasiSuratMasuk({
  form,
  type = VerifikasiTypeEnum.VERIFIKASI,
  onRejected = noop,
  onApproved = noop,
}: IVerifikasiSuratMasuk) {
  const [urlPath] = useState<any>(
    `${API_PATH().form.mainForm}/${form?.collection}/details?id=${form?.id}`
  )

  const [details, setDetails] = useState<any>()
  const [params] = useState<any>({})

  /** AUDIENCE REQ DATA */
  const apiRequest = useApiRequest({
    url: form?.url ? form?.url : urlPath,
    method: form?.httpMethod || "POST",
    params: params,
  })

  const handleRejected = () => {
    if (onRejected) {
      onRejected(form)
    }
  }

  const handleApproved = () => {
    if (onApproved) {
      onApproved(form)
    }
  }

  useEffect(() => {
    const result = parserFormDetail(apiRequest?.response?.data)

    setDetails(result)
  }, [apiRequest?.response])

  function isImgUrl(url: any) {
    return /\.(jpg|jpeg|JPG|JPEG|png|webp|avif|gif)$/.test(url)
  }

  if (apiRequest?.loading) {
    return <p className="text-center my-4">Loading...</p>
  }
  return (
    <>
      <ModalBody>
        {isArray(details?.formDetails) ? (
          <>
            <CardInfoDetails className="border-0" type={type}>
              <Card.Body>
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
                  {details?.formDetails?.map((item: any) => (
                    <tbody key={nanoid()}>
                      {isArray(item?.Value) ? (
                        <>
                          <tr>
                            <td colSpan={3}>
                              <FormGroupTitle>{item?.Key}</FormGroupTitle>
                            </td>
                          </tr>

                          {item?.Value?.map((item2: any, index2: number) => (
                            <>
                              {isArray(item2) ? (
                                <>
                                  <tr className={item?.Key}>
                                    <td className="px-2 fw-bold">
                                      {item?.Key} {index2 + 1}
                                    </td>
                                  </tr>
                                  {item2?.map((item3: any) => (
                                    <>
                                      {isArray(item3?.Value) ? (
                                        <>
                                          {item3?.Value?.map((item4: any) => (
                                            <>
                                              <tr key={nanoid()}>
                                                <td>{item4?.Key}</td>
                                                <td className="dotdot">: </td>
                                                <td>
                                                  {isValidValue(item4)
                                                    ? item4?.Value
                                                    : "-"}
                                                </td>
                                              </tr>
                                            </>
                                          ))}
                                        </>
                                      ) : (
                                        <tr key={nanoid()}>
                                          <td>{item3?.Key}</td>
                                          <td className="dotdot">: </td>
                                          {lowerCase(item3?.Key)?.includes(
                                            "tanggal"
                                          ) && item3?.Value ? (
                                            <td>{dateFormat(item3?.Value)}</td>
                                          ) : (
                                            <td>
                                              {isValidValue(item3)
                                                ? item3?.Value
                                                : "-"}
                                            </td>
                                          )}
                                        </tr>
                                      )}
                                    </>
                                  ))}
                                </>
                              ) : (
                                <>
                                  {isArray(item2.Value) ? (
                                    <>
                                      {item2?.Value?.map((item2Val: any) => (
                                        <>
                                          {isArray(item2Val) ? (
                                            <>
                                              <tr>
                                                <td>
                                                  <h6 className="mb-0">
                                                    {item2.Key}
                                                  </h6>
                                                </td>
                                              </tr>
                                              {item2Val?.map((val: any) => (
                                                <>
                                                  <tr
                                                    className="mb-3"
                                                    key={nanoid()}>
                                                    <td>{val?.Key}</td>
                                                    <td className="dotdot">
                                                      :{" "}
                                                    </td>
                                                    <td className="dddd">
                                                      {isValidValue(val)
                                                        ? val?.Value
                                                        : "-"}
                                                    </td>
                                                  </tr>
                                                  <hr />
                                                </>
                                              ))}
                                            </>
                                          ) : (
                                            <>
                                              {isArray(item2Val.Value) ? (
                                                <>
                                                  {item2Val.Value?.map(
                                                    (item3Val: any) => (
                                                      <tr key={nanoid()}>
                                                        <td>{item3Val?.Key}</td>
                                                        <td className="dotdot">
                                                          :{" "}
                                                        </td>
                                                        <td className="dddd">
                                                          {isValidValue(
                                                            item3Val
                                                          )
                                                            ? item3Val?.Value
                                                            : "-"}
                                                        </td>
                                                      </tr>
                                                    )
                                                  )}
                                                </>
                                              ) : (
                                                <tr key={nanoid()}>
                                                  <td>{item2Val?.Key}</td>
                                                  <td className="dotdot">: </td>
                                                  <td className="1">
                                                    {isValidValue(item2Val)
                                                      ? item2Val?.Value
                                                      : "-"}
                                                  </td>
                                                </tr>
                                              )}
                                            </>
                                          )}
                                        </>
                                      ))}
                                    </>
                                  ) : (
                                    <tr key={nanoid()}>
                                      <td>{item2?.Key}</td>
                                      <td className="dotdot">: </td>
                                      {lowerCase(item2?.Key)?.includes(
                                        "tanggal"
                                      ) && item2?.Value ? (
                                        <td>{dateFormat(item2?.Value)}</td>
                                      ) : (
                                        <td className="ddd">
                                          {isValidValue(item2)
                                            ? item2?.Value
                                            : "-"}
                                        </td>
                                      )}
                                    </tr>
                                  )}
                                </>
                              )}
                            </>
                          ))}
                        </>
                      ) : (
                        <tr
                          hidden={
                            item?.Key == "Workspaceid" || item?.Key == "Status"
                          }>
                          <td>{item?.Key}</td>
                          <td className="dotdot">: </td>
                          {lowerCase(item?.Key)?.includes("tanggal") &&
                          item?.Value ? (
                            <td>{dateFormat(item?.Value)}</td>
                          ) : (
                            <td>
                              {isValidValue(item) ? (
                                isImgUrl(item?.Value) ? (
                                  <a
                                    target="_blank"
                                    href={cdnUrl(item?.Value)}
                                    rel="noreferrer">
                                    <img
                                      width="240px"
                                      height="135px"
                                      className="object-fit-cover rounded"
                                      src={cdnUrl(item?.Value)}></img>
                                  </a>
                                ) : (
                                  item?.Value
                                )
                              ) : (
                                "-"
                              )}
                            </td>
                          )}
                        </tr>
                      )}
                    </tbody>
                  ))}
                </TableDetails>
              </Card.Body>
            </CardInfoDetails>

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
      <ModalFooter>
        {type == VerifikasiTypeEnum.VERIFIKASI && details?.formDetails && (
          <DFlex className="col-50">
            <Button
              className="me-2"
              type="button"
              variant="outline-primary"
              onClick={handleRejected}>
              Tolak
            </Button>
            <Button
              type="submit"
              variant="primary btn-submit"
              onClick={handleApproved}>
              Terima
            </Button>
          </DFlex>
        )}
      </ModalFooter>
    </>
  )
}
interface IVerifikasiSuratMasuk {
  onRejected?: any
  onApproved?: any
  form: any
  type?: any
}

const CardInfoDetails = styled(Card)`
  .card-body {
    padding: 1.1rem;
  }

  background: ${(props) =>
    props.type === VerifikasiTypeEnum.VERIFIKASI
      ? `var(--body-bg) url('/static/illustration/data-verification.svg')
    right bottom no-repeat`
      : "var(--body-bg)"};
`
const TableDetails = styled(Table)`
  margin-bottom: 0;
  > :not(caption) > * > * {
    padding: 0.4rem 1rem;
  }
  surat td.dotdot {
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 5px;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
`
