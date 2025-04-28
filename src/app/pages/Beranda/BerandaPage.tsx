import { nanoid } from "nanoid";
import React, { useEffect, useMemo, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";

import CardContent1 from "@app/components/Card/CardContent1";
import CardStatisticCountData from "@app/modules/Statistic/CardStatisticCountData";
import CardStatisticJumlahPenduduk from "@app/modules/Statistic/CardStatisticJumlahPenduduk";
import ListGroupItemData from "@app/modules/Statistic/ListGroupItemData";
import { API_PATH } from "@app/services/_path.service";
import requestApi from "@app/services/api.service";
import axios from "axios";
import { useSelector } from "react-redux";
import { LazyImage } from "@app/components";
import { DFlex } from "@app/styled/flex.styled";
import MapsLibre from "@app/modules/Maps/MapsLibre";

const DEFAULT_LONG_LAT = {
  latitude: -6.9175,
  longitude: 107.6191,
};

export default function AdmBerandaPage() {
  const { workspace } = useSelector((state: any) => state.app);
  const [params] = useState({
    workspaceId: workspace?._id,
  });
  const source = axios.CancelToken.source();
  const [detailDesa, setDetailDesa] = useState<any>();

  const [summaryStatsAdmKeuangan] = useState<any>([
    {
      label: "Anggaran Pendapatan Dan Belanja Desa",
      url: API_PATH().summary.administrasi.anggaranPendapatanDanBelanjaDesa,
    },
    {
      label: "Rencana Anggaran Biaya",
      url: API_PATH().summary.administrasi.rencanaAnggaranBiaya,
    },
    {
      label: "Kas Pembantu Kegaiatan",
      url: API_PATH().summary.administrasi.kasPembantuKegiatan,
    },
    {
      label: "Kas Umum",
      url: API_PATH().summary.administrasi.kasUmum,
    },
    {
      label: "Kas Pembantu",
      url: API_PATH().summary.administrasi.kasPembantu,
    },
    {
      label: "Bank Desa",
      url: API_PATH().summary.administrasi.bankDesa,
    },
  ]);

  const [summaryStatsAdmUmum] = useState<any>([
    {
      label: "Peraturan Desa",
      url: API_PATH().summary.administrasi.peraturanDesa,
    },
    {
      label: "Keputusan Kepala Desa",
      url: API_PATH().summary.administrasi.keputusanKepalaDesa,
    },
    {
      label: "Inventaris Kekayaan Desa",
      url: API_PATH().summary.administrasi.inventarisDanKekayaanDesa,
    },
    {
      label: "Aparat Pemerintah Desa",
      url: API_PATH().summary.administrasi.aparatPemerintahDesa,
    },
    {
      label: "Tanah Kas Desa",
      url: API_PATH().summary.administrasi.tanahKasDesa,
    },
    {
      label: "Tanah Desa",
      url: API_PATH().summary.administrasi.tanahDesa,
    },
    {
      label: "Agenda",
      url: API_PATH().summary.administrasi.agenda,
    },
    {
      label: "Ekspedisi",
      url: API_PATH().summary.administrasi.ekspedisi,
    },
    {
      label: "Lembaran dan Berita Desa",
      url: API_PATH().summary.administrasi.lembaranDesaDanBeritaDesa,
    },
  ]);

  const [summaryStatsAdmPenduduk] = useState<any>([
    {
      label: "Jumlah Penduduk",
      url: API_PATH().summary.administrasi.indukPenduduk,
    },
    {
      label: "Mutasi Penduduk",
      url: API_PATH().summary.administrasi.mutasiPenduduk,
    },
    {
      label: "Penduduk Sementara",
      url: API_PATH().summary.administrasi.pendudukSementara,
    },
  ]);

  const [jumlahPendudukBerdasarkanGender] = useState<any>([
    {
      url: API_PATH().summary.administrasi.jumlahPendudukBerdasarkanGender,
    },
  ]);

  const renderSummaryStatsAdmKeuangan = useMemo(() => {
    return summaryStatsAdmKeuangan?.map((item: any) => {
      return (
        <ListGroupItemData
          key={nanoid()}
          url={item?.url}
          label={item?.label}
          params={params}
        />
      );
    });
  }, [summaryStatsAdmKeuangan]);

  const renderSummaryStatsAdmPenduduk = useMemo(() => {
    return summaryStatsAdmPenduduk?.map((item: any) => {
      return (
        <Col md="4" sm key={nanoid()}>
          <CardStatisticCountData
            labelAsHeader={true}
            url={item?.url}
            label={item?.label}
            params={params}
          />
        </Col>
      );
    });
  }, [summaryStatsAdmPenduduk]);

  const renderJumlahPendudukBerdasarkanGender = useMemo(() => {
    return jumlahPendudukBerdasarkanGender?.map((item: any) => {
      return (
        <CardStatisticJumlahPenduduk
          key={nanoid()}
          url={item?.url}
          label={item?.label}
          params={params}
        />
      );
    });
  }, [jumlahPendudukBerdasarkanGender]);

  const renderSummaryStatsAdmUmum = useMemo(() => {
    return summaryStatsAdmUmum?.map((item: any) => {
      return (
        <Col md="4" sm key={nanoid()}>
          <CardStatisticCountData
            labelAsHeader={true}
            url={item?.url}
            label={item?.label}
            params={params}
          />
        </Col>
      );
    });
  }, [summaryStatsAdmUmum]);

  const getSubdistrictPerDistrict = async (districtCode: string) => {
    try {
      const req = await requestApi().post(
        `${API_PATH().admLocation.subdistrict}`,
        {
          order: "DESC",
          page: 1,
          districtCode: districtCode,
          size: 10,
        },
        {
          cancelToken: source.token,
        }
      );
      return req?.data;
    } catch (err) {
      return null;
    }
  };

  const getVillagePolygon = async (subdistrictCode: string) => {
    try {
      const req = await requestApi().get(
        `${
          API_PATH().admLocation.detailSubdistrict
        }?subdistrict_code=${subdistrictCode}`,
        {
          cancelToken: source.token,
        }
      );
      return req?.data;
    } catch (err) {
      return null;
    }
  };

  const getPolygon = async (workspace: any) => {
    const allSubdistrict = await getSubdistrictPerDistrict(
      workspace?.kode_kecamatan
    );
    const allSubdistrictPromises = allSubdistrict
      .filter((x: any) => x?.kode_kelurahan !== workspace?.kode_kelurahan)
      .map((x: any) => getVillagePolygon(x?.kode_kelurahan));
    const req = await Promise.all([
      getVillagePolygon(workspace?.kode_kelurahan),
      ...allSubdistrictPromises,
    ]);

    setDetailDesa({
      kelurahan: req[0],
      all_kelurahan: req.slice(1),
    });
  };

  useEffect(() => {
    if (workspace?.desakelurahan_details) {
      getPolygon(workspace?.desakelurahan_details);
    }
  }, [workspace?.desakelurahan_details]);

  return (
    <>
      <Row className="g-3">
        <Col lg={8}>
          {/* <div className="my-3">{renderJumlahPendudukBerdasarkanGender}</div> */}
          <div className="mb-2">
            <h5 className="fw-bolder">Sebaran Penduduk</h5>
            <div
              className="position-relative w-100"
              style={{ height: "300px" }}
            >
              {/* <MapPolygon data={detailDesa} /> */}
              <MapsLibre height={"100%"} width={"100%"} />
              {/* <LazyImage
                defaultImage="/static/logo-desa/logo-default.svg"
                src={"/static/img/maps-image.jpg"}
                className="w-100 h-100"
                alt=""
              /> */}
            </div>
          </div>
          <h5 className="fw-bolder">Administrasi Penduduk</h5>
          <Row className="gy-2 gx-2 mb-2">{renderSummaryStatsAdmPenduduk}</Row>
          <h5 className="fw-bolder">Administrasi Umum</h5>
          <Row className="gy-2 gx-2">{renderSummaryStatsAdmUmum}</Row>
        </Col>
        <Col lg={4}>
          <DFlex className="flex-column">
            <CardContent1
              className="overflow-hidden position-relative"
              title="Administrasi Keuangan"
            >
              <ListGroup variant="flush" style={{ height: "58rem" }}>
                {renderSummaryStatsAdmKeuangan}
              </ListGroup>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <img
                  src="/static/illustration/keuanganillustration.svg"
                  width={"100%"}
                  alt=""
                />
              </div>
              {/* <AdministrasiKeuanganIllustration /> */}
            </CardContent1>
          </DFlex>
        </Col>
      </Row>
      {/* <Row>
        <Col md="7">
          <CardContent1 className="mb-3" title="Administrasi Penduduk">
            <Row className="gy-2 gx-2">{renderSummaryStatsAdmPenduduk}</Row>
          </CardContent1>
        </Col>
        <Col md="5">
          <CardContent1
            className="mb-3"
            title="Jumlah Penduduk Berdasarkan Gender">
            <div style={{ height: "12rem" }}>
              <ChartData
                name="Jumlah Penduduk Berdasarkan Gender"
                url={
                  API_PATH().summary.administrasi
                    .jumlahPendudukBerdasarkanGender
                }
                parser={"pie.default"}
                options={{
                  label: {
                    position: "inside",
                    overflow: "none",
                    fontSize: 16,
                    color: "#444",
                    backgroundColor: "#fff",
                    padding: 4,
                    formatter: (p: any) => `${p.name}\n\n(${p.percent}%)`,
                  },
                }}
                params={params}
              />
            </div>
          </CardContent1>
        </Col>
      </Row> */}
      {/* <Row>
        <Col md="4">
          <CardContent1 className="mb-3" title="Administrasi Keuangan">
            <ListGroup variant="flush" style={{ minHeight: "38rem" }}>
              {renderSummaryStatsAdmKeuangan}
            </ListGroup>
          </CardContent1>
        </Col>

        <Col md="8">
          <CardContent1 title="Administrasi Umum">
            <Row className="gy-2 gx-2">{renderSummaryStatsAdmUmum}</Row>
          </CardContent1>
        </Col>
      </Row> */}
    </>
  );
}
