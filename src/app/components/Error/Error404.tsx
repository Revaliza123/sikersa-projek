import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TextCenter = styled.div`
  text-align: center;
  margin-top: 2.533rem;
  color: var(--black);
  h3 {
    font-size: 1.6rem;
  }
`;

export default function Error404(): React.ReactElement {
  return (
    <>
      <div className="container mt-3">
        {/* <img src="/static/illustration/logo-sidesa.svg" alt="" /> */}
        <TextCenter>
          <h3 className="lh-1">Halaman tidak ditemukan</h3>
          <p className="lh-1 mb-3">
            Maaf, permintaan halaman yang anda cari tidak tersedia{" "}
          </p>
          <Link to={"/"}>
            <button className="btn btn-primary mb-3">Kembali ke Beranda</button>
          </Link>
          <br />
          <img
            className="img-fluid"
            src="/static/illustration/work-at-home.svg"
            alt=""
          />
        </TextCenter>
      </div>
    </>
  );
}
