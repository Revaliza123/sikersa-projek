import React from "react"
import styled from "styled-components"

function NoData({ mini = false, className = "loading-data" }) {
  return (
    <div className={className}>
      <div className="align-items-center d-flex h-100">
        <div className="align-items-center d-flex justify-content-center w-100">
          <div className="text-center w-70">
            {!Boolean(mini) && (
              <>
                <img
                  src="/static/icons/no-result.svg"
                  alt="No Data"
                  style={{ width: "8rem" }}
                />
                <TextNoData>Ups! Data tidak ditemukan</TextNoData>
                <TextDesciption>
                  Tidak ada hasil, sumber data kosong
                </TextDesciption>
              </>
            )}
            {Boolean(mini) && (
              <>
                <img
                  src="/static/icons/no-result.svg"
                  alt="No Data"
                  style={{ width: "5rem" }}
                />
                <TextNoDataMini>Ups! Data tidak ditemukan</TextNoDataMini>
                <TextDesciptionMini>
                  Tidak ada hasil, sumber data kosong
                </TextDesciptionMini>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoData

const TextNoData = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 1.067rem;
  line-height: 1.533rem;
  text-align: center;
  letter-spacing: 0.021rem;
  color: var(--black-900);
`
const TextDesciption = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.933rem;
  line-height: 1.333rem;
  text-align: center;
  letter-spacing: 0.021rem;
  color: var(--black-400);
`

const TextNoDataMini = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1.533rem;
  text-align: center;
  letter-spacing: 0.021rem;
  color: var(--black-900);
`
const TextDesciptionMini = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 0.888rem;
  line-height: 1.333rem;
  text-align: center;
  letter-spacing: 0.021rem;
  color: var(--black-400);
`
