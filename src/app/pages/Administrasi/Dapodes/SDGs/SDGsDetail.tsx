import { replaceAll } from "@app/helper/string.helper"
import useApiRequest from "@app/services/useApiRequest"
import { FormGroupTitle } from "@app/styled/typography.styled"
import { capitalize, isArray } from "lodash"
import { nanoid } from "nanoid"
import React, { useEffect, useState } from "react"
import { Card, ModalBody, ModalFooter } from "react-bootstrap"
import styled from "styled-components"

const parserFormDetail = (details: any) => {
  const ignored = [
    "createdAt",
    "_id",
    "updatedAt",
    "workspaceId",
    "nikId",
    "createdBy",
  ]
  const dataDetails = isArray(details) ? details : details?.formDetails
  const formDetails = dataDetails
    ?.filter((f: any) => ignored?.indexOf(f?.Key) == -1)
    ?.map((item: any) => {
      const value = isArray(item?.Value)
        ? item?.Value?.filter((f: any) => ignored?.indexOf(f?.Key) == -1).map(
            (i: any) => {
              if (isArray(i)) {
                return i
                  ?.filter((f: any) => ignored?.indexOf(f?.Key) == -1)
                  .map((x: any) => {
                    return {
                      ...x,
                      Key: capitalize(replaceAll(x?.Key, { _: " " })),
                      Value: isArray(x?.Value)
                        ? x?.Value?.filter(
                            (f: any) => ignored?.indexOf(f?.Key) == -1
                          ).map((y: any) => ({
                            ...y,
                            Key: capitalize(replaceAll(y?.Key, { _: " " })),
                          }))
                        : x?.Value,
                    }
                  })
              }

              return {
                ...i,
                Key: capitalize(replaceAll(i?.Key, { _: " " })),
                Value: isArray(i?.Value)
                  ? i?.Value?.filter(
                      (f: any) => ignored?.indexOf(f?.Key) == -1
                    ).map((y: any) => ({
                      ...y,
                      Key: capitalize(replaceAll(y?.Key, { _: " " })),
                    }))
                  : i?.Value,
              }
            }
          )
        : item?.Value
      return {
        ...item,
        Key: capitalize(replaceAll(item?.Key, { _: " " })),
        Value: value,
      }
    })
  return { formDetails: formDetails }
}

export default function SDGsDetail({ form }: ISDGsDetail) {
  const [details, setDetails] = useState<any>()
  const [params] = useState<any>({})

  /** AUDIENCE REQ DATA */
  const apiRequest = useApiRequest({
    url: form?.url,
    method: form?.httpMethod || "GET",
    params: params,
  })

  useEffect(() => {
    const result = parserFormDetail(apiRequest?.response?.data)
    setDetails(result)
  }, [apiRequest?.response])

  return (
    <>
      <ModalBody>
        {isArray(details?.formDetails) ? (
          <>
            <CardInfoDetails className="border-0">
              <Card.Body>
                {details?.formDetails?.map((item: any) =>
                  isArray(item?.Value) ? (
                    <>
                      <FormGroupTitle>{item?.Key}</FormGroupTitle>

                      {item?.Value?.map((item2: any) => (
                        <>
                          {isArray(item2.Value) ? (
                            <div key={nanoid()}>
                              <p className="fw-bold mb-1">{item2.Key}:</p>
                              <ul style={{ listStyle: "none" }}>
                                {item2?.Value?.map((item2Val: any) => (
                                  <li key={nanoid()}>
                                    <DetailItem item={item2Val} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <DetailItem key={nanoid()} item={item2} />
                          )}
                        </>
                      ))}
                    </>
                  ) : (
                    <DetailItem key={nanoid()} item={item} />
                  )
                )}
              </Card.Body>
            </CardInfoDetails>
          </>
        ) : (
          <p className="text-center">Loading...</p>
        )}
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  )
}
interface ISDGsDetail {
  form: any
}

const CardInfoDetails = styled(Card)`
  .card-body {
    padding: 1.1rem;
  }

  background: var(--body-bg);
`

function DetailItem({ item }: any) {
  return (
    <div className="mb-3">
      <p className="fw-bold mb-1">{item?.Key}:</p>
      <p className="mb-0">{item?.Value ? item?.Value : "-"}</p>
    </div>
  )
}
