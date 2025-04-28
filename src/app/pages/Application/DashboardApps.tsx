import React from "react";
import styled from "styled-components";
import CardMenu from "../../components/Card/CardMenu";
import { Col, Row } from "react-bootstrap";

function DashboardApps() {
  return (
    <Wrapper>
      <DFlexColumn>
        <DivLogo>
          <img src="/static/logo/bpjs-kesehatan.jpg" alt="" height={"100%"} />
        </DivLogo>
        <Row>
          <Col md={3}>
            <CardMenu name="Administrasi" />
          </Col>
          <Col md={3}>
            <CardMenu name="Pelayanan" />
          </Col>
          <Col md={3}>
            <CardMenu name="Data Desa" />
          </Col>
          <Col md={3}>
            <CardMenu name="Ekspor Data" />
          </Col>
        </Row>
      </DFlexColumn>
    </Wrapper>
  );
}

export default DashboardApps;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const DFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const DivLogo = styled.div`
  height: 20rem;
`;
