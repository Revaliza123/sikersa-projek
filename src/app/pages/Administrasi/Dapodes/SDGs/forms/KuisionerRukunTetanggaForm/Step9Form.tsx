import { yupResolver } from "@hookform/resolvers/yup"
import React from "react"
import { Col, Form, Row } from "react-bootstrap"
import { FormProvider, useForm } from "react-hook-form"
import { Checkboxes, FieldArray, Input, Select, TableInputs } from ".."
import * as Yup from "yup"
import { WizardForm, useWizard } from "../WizardForm/WizardForm"
import FormInputControl from "@app/components/Input/FormInputControl"
import RequiredInfo from "@app/components/Tooltip/RequiredInfo"
import SelectStatic from "@app/components/Select/SelectStatic"
import { useErrorForm } from "@app/helper/form-error.helper"

const validationSchema = Yup.object().shape({
  luas_lahan_menurut_jenis_penggunaan_lahan: Yup.object().shape({
    lahan_sawah_irigasi: Yup.number(),
    lahan_sawah_non_irigasi: Yup.number(),
    kebun: Yup.number(),
    huma_ladang: Yup.number(),
    tambak: Yup.number(),
    kolam_tebat_empang: Yup.number(),
    lahan_gembala_ternak: Yup.number(),
    lahan_perusahaan_perkebunan: Yup.number(),
    areal_hutan: Yup.number(),
    lahan_pertanian_non_sawah_lainnya: Yup.number(),
    lahan_pertambangan: Yup.number(),
    lahan_perumahan: Yup.number(),
    lahan_perkantoran: Yup.number(),
    lahan_pertokoan: Yup.number(),
    lahan_industri: Yup.number(),
    fasilitas_umum: Yup.number(),
    lahan_lainnya: Yup.number(),
  }),
  nama_sungai_yang_melintasi: Yup.object().shape({
    sungai_1: Yup.string(),
    sungai_2: Yup.string(),
    sungai_3: Yup.string(),
  }),
  nama_danau_waduk_situ: Yup.object().shape({
    danau_1: Yup.string(),
    danau_2: Yup.string(),
    danau_3: Yup.string(),
  }),
  jumlah_mata_air: Yup.number(),
  jumlah_embung: Yup.number(),
  pemanfaatan_embung: Yup.object().shape({
    jumlah_petani_yang_memanfaatkan_embung: Yup.number(),
    total_lahan_yang_memperoleh_manfaat_embung: Yup.number(),
  }),
  ketersediaan_sumur_bor_sawah_dan_pompa_air_untuk_lahan_pertanian:
    Yup.string(),
  pemanfaatan_sumur_bor: Yup.object().shape({
    jumlah_petani_yang_memanfaatkan_sumur_bor: Yup.number(),
    total_lahan_yang_memanfaatkan_sumur_bor_dan_pompa_air: Yup.number(),
  }),
  kondisi_sungai: Yup.string().required(),
  sungai_digunakan: Yup.string().when("kondisi_sungai", {
    is: (value: string) =>
      value.match(/(kondisi)\s+(baik)/gi) || value.match(/(tercemar)/gi),
    then: Yup.string().required(),
    otherwise: Yup.string(),
  }),
  jenis_penggunaan_sungai: Yup.array()
    .of(Yup.string())
    .when("sungai_digunakan", {
      is: (value: string) => value && value.match(/(digunakan)/gi),
      then: Yup.array().of(Yup.string().required()),
      otherwise: Yup.array().of(Yup.string()),
    }),
  kondisi_saluran_irigasi: Yup.string().required(),
  saluran_irigasi_digunakan: Yup.string().when("kondisi_saluran_irigasi", {
    is: (value: string) =>
      (value && value.match(/(kondisi)\s+(baik)/gi)) ||
      value.match(/(tercemar)/gi),
    then: Yup.string().required(),
    otherwise: Yup.string(),
  }),
  jenis_penggunaan_saluran_irigasi: Yup.array()
    .of(Yup.string())
    .when("saluran_irigasi_digunakan", {
      is: (value: string) => value && value.match(/(digunakan)/gi),
      then: Yup.array().of(Yup.string().required()),
      otherwise: Yup.array().of(Yup.string()),
    }),
  kondisi_danau_waduk_situ_bendungan: Yup.string().required(),
  danau_waduk_situ_bendungan_digunakan: Yup.string().when(
    "kondisi_danau_waduk_situ_bendungan",
    {
      is: (value: string) =>
        value.match(/(kondisi)\s+(baik)/gi) || value.match(/(tercemar)/gi),
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  jenis_penggunaan_danau_waduk_situ_bendungan: Yup.array()
    .of(Yup.string())
    .when("saluran_irigasi_digunakan", {
      is: (value: string) => value && value.match(/(digunakan)/gi),
      then: Yup.array().of(Yup.string().required()),
      otherwise: Yup.array().of(Yup.string()),
    }),
  kondisi_embung: Yup.string().required(),
  embung_digunakan: Yup.string().when("kondisi_embung", {
    is: (value: string) =>
      value.match(/(kondisi)\s+(baik)/gi) || value.match(/(tercemar)/gi),
    then: Yup.string().required(),
    otherwise: Yup.string(),
  }),
  jenis_penggunaan_embung: Yup.array()
    .of(Yup.string())
    .when("embung_digunakan", {
      is: (value: string) => value && value.match(/(digunakan)/gi),
      then: Yup.array().of(Yup.string().required()),
      otherwise: Yup.array().of(Yup.string()),
    }),
  keberadaan_sumber_limbah_dari_pabrik_industry_usaha: Yup.string().when(
    "kondisi_danau_waduk_situ_bendungan",
    {
      is: (value: string) =>
        value.match(/(kondisi)\s+(baik)/gi) || value.match(/(tercemar)/gi),
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  keberadaan_sumber_limbah_dari_rumah_tangga: Yup.string().when(
    "kondisi_danau_waduk_situ_bendungan",
    {
      is: (value: string) =>
        value.match(/(kondisi)\s+(baik)/gi) || value.match(/(tercemar)/gi),
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  keberadaan_sumber_limbah_lainnya: Yup.string().when(
    "kondisi_danau_waduk_situ_bendungan",
    {
      is: (value: string) =>
        value.match(/(kondisi)\s+(baik)/gi) || value.match(/(tercemar)/gi),
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  sumber_limbah_berlokasi_di: Yup.string().when(
    "keberadaan_sumber_limbah_dari_rumah_tangga",
    {
      is: (value: string) => value && value === "Ya",
      then: Yup.string().required(),
      otherwise: Yup.string(),
    }
  ),
  pencemaran_air_setahun_terakhir: Yup.object().shape({
    pencemaran_air: Yup.string().required(),
    sumber_pencemaran: Yup.array()
      .of(Yup.string())
      .when("pencemaran_air_setahun_terakhir.pencemaran_air", {
        is: (value: string) => value && value === "Ada",
        then: Yup.array().of(Yup.string().required()),
        otherwise: Yup.array().of(Yup.string()),
      }),
    lokasi_limbah: Yup.string().when(
      "pencemaran_air_setahun_terakhir.pencemaran_air",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.string().required(),
        otherwise: Yup.string(),
      }
    ),
    pengaduan_warga: Yup.string().when(
      "pencemaran_air_setahun_terakhir.pencemaran_air",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.string().required(),
        otherwise: Yup.string(),
      }
    ),
  }),
  pencemaran_tanah_setahun_terakhir: Yup.object().shape({
    pencemaran_tanah: Yup.string().required(),
    sumber_pencemaran: Yup.array()
      .of(Yup.string())
      .when("pencemaran_tanah_setahun_terakhir.pencemaran_tanah", {
        is: (value: string) => value && value === "Ada",
        then: Yup.array().of(Yup.string().required()),
        otherwise: Yup.array().of(Yup.string()),
      }),
    lokasi_limbah: Yup.string().when(
      "pencemaran_tanah_setahun_terakhir.pencemaran_tanah",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.string().required(),
        otherwise: Yup.string(),
      }
    ),
    pengaduan_warga: Yup.string().when(
      "pencemaran_tanah_setahun_terakhir.pencemaran_tanah",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.string().required(),
        otherwise: Yup.string(),
      }
    ),
  }),
  pencemaran_udara_setahun_terakhir: Yup.object().shape({
    pencemaran_tanah: Yup.string().required(),
    sumber_pencemaran: Yup.array()
      .of(Yup.string())
      .when("pencemaran_udara_setahun_terakhir.pencemaran_tanah", {
        is: (value: string) => value && value === "Ada",
        then: Yup.array().of(Yup.string().required()),
        otherwise: Yup.array().of(Yup.string()),
      }),
    lokasi_limbah: Yup.string().when(
      "pencemaran_udara_setahun_terakhir.pencemaran_tanah",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.string().required(),
        otherwise: Yup.string(),
      }
    ),
    pengaduan_warga: Yup.string().when(
      "pencemaran_udara_setahun_terakhir.pencemaran_tanah",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.string().required(),
        otherwise: Yup.string(),
      }
    ),
    pengolahan_daur_ulang_sampah_limbah: Yup.string().required(),
    kebiasaan_masyarakat_membakar_ladang_kebun_di_desa_kelurahan_untuk_proses_usaha_pertanian:
      Yup.string().required(),
    keberadaan_lokasi_penggalian_golongan_c: Yup.string().required(),
  }),
  tanah_longsor: Yup.object().shape({
    bencana_tanah_longsor_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_tanah_longsor: Yup.number().when(
      "tanah_longsor.bencana_tanah_longsor_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_tanah_longsor: Yup.number().when(
      "tanah_longsor.bencana_tanah_longsor_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_banjir: Yup.number().when(
      "tanah_longsor.bencana_tanah_longsor_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_tanah_longsor: Yup.number().when(
      "tanah_longsor.bencana_tanah_longsor_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  banjir: Yup.object().shape({
    bencana_banjir_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_banjir: Yup.number().when(
      "banjir.bencana_banjir_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_banjir: Yup.number().when(
      "banjir.bencana_banjir_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_banjir: Yup.number().when(
      "banjir.bencana_banjir_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_banjir: Yup.number().when(
      "banjir.bencana_banjir_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  banjir_bandang: Yup.object().shape({
    bencana_banjir_bandang_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_banjir_bandang: Yup.number().when(
      "banjir_bandang.bencana_banjir_bandang_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_banjir_bandang: Yup.number().when(
      "banjir_bandang.bencana_banjir_bandang_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_banjir_bandang: Yup.number().when(
      "banjir_bandang.bencana_banjir_bandang_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_banjir_bandang: Yup.number().when(
      "banjir_bandang.bencana_banjir_bandang_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  gempa_bumi: Yup.object().shape({
    bencana_gempa_bumi_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_gempa_bumi: Yup.number().when(
      "gempa_bumi.bencana_gempa_bumi_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_gempa_bumi: Yup.number().when(
      "gempa_bumi.bencana_gempa_bumi_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_gempa_bumi: Yup.number().when(
      "gempa_bumi.bencana_gempa_bumi_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_gempa_bumi: Yup.number().when(
      "gempa_bumi.bencana_gempa_bumi_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  tsunami: Yup.object().shape({
    bencana_tsunami_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_tsunami: Yup.number().when(
      "tsunami.bencana_tsunami_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_tsunami: Yup.number().when(
      "tsunami.bencana_tsunami_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_tsunami: Yup.number().when(
      "tsunami.bencana_tsunami_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  gelombang_pasang_laut: Yup.object().shape({
    bencana_gelombang_pasang_laut_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_gelombang_pasang_laut: Yup.number().when(
      "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_gelombang_pasang_laut: Yup.number().when(
      "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_gelombang_pasang_laut: Yup.number().when(
      "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_gelombang_pasang_laut: Yup.number().when(
      "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  angin_puyuh_putting_beliung_topan: Yup.object().shape({
    bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir:
      Yup.string().required(),
    banyak_kejadian: Yup.number().when(
      "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa: Yup.number().when(
      "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi: Yup.number().when(
      "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak: Yup.number().when(
      "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  gunung_meletus: Yup.object().shape({
    bencana_gunung_meletus_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_gunung_meletus: Yup.number().when(
      "gunung_meletus.bencana_gunung_meletus_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_gunung_meletus: Yup.number().when(
      "gunung_meletus.bencana_gunung_meletus_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_gunung_meletus: Yup.number().when(
      "gunung_meletus.bencana_gunung_meletus_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_gunung_meletus: Yup.number().when(
      "gunung_meletus.bencana_gunung_meletus_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  kebakaran_hutan_lahan: Yup.object().shape({
    bencana_kebakaran_hutan_lahan_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_kebakaran_hutan_lahan: Yup.number().when(
      "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_kebakaran_hutan_lahan: Yup.number().when(
      "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_kebakaran_hutan_lahan: Yup.number().when(
      "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_kebakaran_hutan_lahan: Yup.number().when(
      "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  kekeringan_lahan: Yup.object().shape({
    bencana_kekeringan_lahan_setahun_terakhir: Yup.string().required(),
    banyak_kejadian_kekeringan_lahan_jumlah: Yup.number().when(
      "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    korban_jiwa_kekeringan_lahan_jiwa: Yup.number().when(
      "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    pengungsi_kekeringan_lahan_jiwa: Yup.number().when(
      "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    warga_terdampak_kekeringan_lahan_jiwa: Yup.number().when(
      "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  mitigasi_bencana: Yup.object().shape({
    sistem_peringatan_dini_bencana_alam: Yup.string().required(),
    sistem_peringatan_dini_khusus_tsunami: Yup.string().required(),
    perlengkapan_keselamatan: Yup.string().required(),
    rambu_rambu_dan_jalur_evakuasi_bencana: Yup.string().required(),
    pembuatan_perawatan_normalisasi: Yup.string().required(),
  }),
  keberadaan_sarana_pendidikan: Yup.array().of(
    Yup.object().shape({
      jenjang_pendidikan: Yup.string(),
      jenjang_pendidikan_lainnya: Yup.string().when("jenjang_pendidikan", {
        is: (value: string) => value && value.match(/(lainnya)/),
        then: Yup.string(),
      }),
      jumlah_guru: Yup.number(),
      jumlah_murid: Yup.number(),
      jumlah_pegawai: Yup.number(),
      kondisi_bangunan: Yup.string(),
      nama_sarana_pendidikan: Yup.string(),
      pemilik: Yup.string(),
    })
  ),
  perpustakaan_atau_taman_bacaan: Yup.string().required(),
  keberadaan_sarana_kesehatan: Yup.array().of(
    Yup.object().shape({
      jumlah_bidan: Yup.number(),
      jumlah_dokter: Yup.number(),
      jumlah_pegawai_lain: Yup.number(),
      jumlah_tenaga_kesehatan: Yup.number(),
      kondisi_bangunan: Yup.string(),
      nama_sarana_kesehatan: Yup.string(),
      pemilik: Yup.string(),
      sarana_kesehatan: Yup.string(),
    })
  ),
  muntaber_diare: Yup.object().shape({
    kejadian_muntaber_diare: Yup.string().required(),
    jumlah_penderita: Yup.number().when(
      "muntaber_diare.kejadian_muntaber_diare",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    jumlah_meninggal: Yup.number().when(
      "muntaber_diare.kejadian_muntaber_diare",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  demam_berdarah: Yup.object().shape({
    kejadian_demam_berdarah: Yup.string().required(),
    jumlah_penderita: Yup.number().when(
      "demam_berdarah.kejadian_demam_berdarah",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    jumlah_meninggal: Yup.number().when(
      "demam_berdarah.kejadian_demam_berdarah",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  campak: Yup.object().shape({
    kejadian_campak: Yup.string().required(),
    jumlah_penderita: Yup.number().when("campak.kejadian_campak", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("campak.kejadian_campak", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  malaria: Yup.object().shape({
    kejadian_malaria: Yup.string().required(),
    jumlah_penderita: Yup.number().when("malaria.kejadian_malaria", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("malaria.kejadian_malaria", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  flu_burung_sars: Yup.object().shape({
    kejadian_flu_burung_sars: Yup.string().required(),
    jumlah_penderita: Yup.number().when(
      "flu_burung_sars.kejadian_flu_burung_sars",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    jumlah_meninggal: Yup.number().when(
      "flu_burung_sars.kejadian_flu_burung_sars",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  covid_19: Yup.object().shape({
    kejadian_covid_19: Yup.string().required(),
    jumlah_penderita: Yup.number().when("covid_19.kejadian_covid_19", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("covid_19.kejadian_covid_19", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  hepatitis_b: Yup.object().shape({
    kejadian_hepatitis_b: Yup.string().required(),
    jumlah_penderita: Yup.number().when("hepatitis_b.kejadian_hepatitis_b", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("hepatitis_b.kejadian_hepatitis_b", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  hepatitis_e: Yup.object().shape({
    kejadian_hepatitis_e: Yup.string().required(),
    jumlah_penderita: Yup.number().when("hepatitis_e.kejadian_hepatitis_e", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("hepatitis_e.kejadian_hepatitis_e", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  difteri: Yup.object().shape({
    kejadian_difteri: Yup.string().required(),
    jumlah_penderita: Yup.number().when("difteri.kejadian_difteri", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("difteri.kejadian_difteri", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  chikungunya: Yup.object().shape({
    kejadian_chikungunya: Yup.string().required(),
    jumlah_penderita: Yup.number().when("chikungunya.kejadian_chikungunya", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("chikungunya.kejadian_chikungunya", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  leptospirosis: Yup.object().shape({
    kejadian_chikungunya: Yup.string().required(),
    jumlah_penderita: Yup.number().when("leptospirosis.kejadian_chikungunya", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("leptospirosis.kejadian_chikungunya", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  kolera: Yup.object().shape({
    kejadian_kolera: Yup.string().required(),
    jumlah_penderita: Yup.number().when("kolera.kejadian_kolera", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
    jumlah_meninggal: Yup.number().when("kolera.kejadian_kolera", {
      is: (value: string) => value && value === "Ada",
      then: Yup.number().required(),
      otherwise: Yup.number(),
    }),
  }),
  gizi_buruk_marasmus_dan_kwasiorkor: Yup.object().shape({
    kejadian_gizi_buruk_marasmus_dan_kwasiorkor: Yup.string().required(),
    jumlah_penderita: Yup.number().when(
      "gizi_buruk_marasmus_dan_kwasiorkor.kejadian_gizi_buruk_marasmus_dan_kwasiorkor",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    jumlah_meninggal: Yup.number().when(
      "gizi_buruk_marasmus_dan_kwasiorkor.kejadian_gizi_buruk_marasmus_dan_kwasiorkor",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
  }),
  penyakit_lainnya: Yup.object().shape({
    kejadian_penyakit_lain: Yup.string().required(),
    jumlah_penderita: Yup.number().when(
      "penyakit_lainnya.kejadian_penyakit_lain",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    jumlah_meninggal: Yup.number().when(
      "penyakit_lainnya.kejadian_penyakit_lain",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.number().required(),
        otherwise: Yup.number(),
      }
    ),
    nama_penyakit: Yup.string().when(
      "penyakit_lainnya.kejadian_penyakit_lain",
      {
        is: (value: string) => value && value === "Ada",
        then: Yup.string().required(),
        otherwise: Yup.string(),
      }
    ),
    jumlah_warga_peserta_jaminan_sosial_kesehatan: Yup.number().required(),
    jumlah_warga_peserta_jaminan_sosial_ketenagakerjaan:
      Yup.number().required(),
  }),
  tempat_ibadah: Yup.object().shape({
    masjid: Yup.number(),
    musala_surau_langgar: Yup.number(),
    gereja_kristen: Yup.number(),
    gereja_katolik: Yup.number(),
    kapel: Yup.number(),
    pura: Yup.number(),
    wihara: Yup.number(),
    kelenteng: Yup.number(),
    lainnya: Yup.string(),
  }),
  situs_cagar_budaya: Yup.object().shape({
    situs_cagar_budaya_1: Yup.string(),
    situs_cagar_budaya_2: Yup.string(),
    situs_cagar_budaya_3: Yup.string(),
    perkiraan_jumlah_keluarga: Yup.string(),
    perkiraan_jumlah_jiwa: Yup.string(),
    ruang_publik_terbuka_yang_peruntukan_utamanya_sebagai_tempat_bagi_warga_desa_kelurahan_untuk_bersantai_bermain_tanpa_perlu_membayar:
      Yup.string(),
    kehamilan: Yup.string(),
    kelahiran: Yup.string(),
    pekerjaan_pencaharian: Yup.string(),
    alam_lingkungan_hidup: Yup.string(),
    perkawinan: Yup.string(),
    kehidupan_warga: Yup.string(),
    kematian: Yup.string(),
  }),
})

export function Step9Form() {
  const { updateFormData, formDataMemoized } = useWizard()
  const methods = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: formDataMemoized,
  })
  const onSubmit = (data: any) => {
    console.log("submit stepone", data)
    updateFormData(data)
  }
  const { onErrorForm } = useErrorForm()

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onErrorForm)}>
        <div>
          <h5>LINGKUNGAN</h5>

          <Row>
            <Col sm>
              <TableInputs
                labelName={"70. Luas lahan menurut jenis penggunaan lahan (Ha)"}
                helperText={
                  "Untuk angka presisi dapat gunakan titik. Contoh: 10.5"
                }
                fieldName={"luas_lahan_menurut_jenis_penggunaan_lahan"}
                required={false}
                options={[
                  {
                    label: "Lahan sawah irigasi",
                    value: "lahan_sawah_irigasi",
                    fieldName: "lahan_sawah_irigasi",
                    type: "number",
                  },
                  {
                    label:
                      "Lahan sawah non-irigasi (tadah hujan, pasang surut, rawa, dll)",
                    value: "lahan_sawah_non_irigasi",
                    fieldName: "lahan_sawah_non_irigasi",
                    type: "number",
                  },
                  {
                    label: "Kebun",
                    value: "kebun",
                    fieldName: "kebun",
                    type: "number",
                  },
                  {
                    label: "Huma/ladang",
                    value: "huma_ladang",
                    fieldName: "huma_ladang",
                    type: "number",
                  },
                  {
                    label: "Tambak",
                    value: "tambak",
                    fieldName: "tambak",
                    type: "number",
                  },
                  {
                    label: "Kolam/tebat/empang",
                    value: "kolam_tebat_empang",
                    fieldName: "kolam_tebat_empang",
                    type: "number",
                  },
                  {
                    label: "Lahan gembala ternak",
                    value: "lahan_gembala_ternak",
                    fieldName: "lahan_gembala_ternak",
                    type: "number",
                  },
                  {
                    label: "Lahan perusahaan perkebunan",
                    value: "lahan_perusahaan_perkebunan",
                    fieldName: "lahan_perusahaan_perkebunan",
                    type: "number",
                  },
                  {
                    label: "Areal hutan",
                    value: "areal_hutan",
                    fieldName: "areal_hutan",
                    type: "number",
                  },
                  {
                    label: "Lahan pertanian non sawah lainnya",
                    value: "lahan_pertanian_non_sawah_lainnya",
                    fieldName: "lahan_pertanian_non_sawah_lainnya",
                    type: "number",
                  },
                  {
                    label: "Lahan pertambangan",
                    value: "lahan_pertambangan",
                    fieldName: "lahan_pertambangan",
                    type: "number",
                  },
                  {
                    label: "Lahan perumahan",
                    value: "lahan_perumahan",
                    fieldName: "lahan_perumahan",
                    type: "number",
                  },
                  {
                    label: "Lahan perkantoran",
                    value: "lahan_perkantoran",
                    fieldName: "lahan_perkantoran",
                    type: "number",
                  },
                  {
                    label: "Lahan pertokoan",
                    value: "lahan_pertokoan",
                    fieldName: "lahan_pertokoan",
                    type: "number",
                  },
                  {
                    label: "Lahan industri",
                    value: "lahan_industri",
                    fieldName: "lahan_industri",
                    type: "number",
                  },
                  {
                    label:
                      "Fasilitas umum (lapangan, prasarana umum, jalan, dermaga, dll)",
                    value: "fasilitas_umum",
                    fieldName: "fasilitas_umum",
                    type: "number",
                  },
                  {
                    label: "Lahan lainnya",
                    value: "lahan_lainnya",
                    fieldName: "lahan_lainnya",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={"71. Nama sungai yang melintasi"}
                fieldName={"nama_sungai_yang_melintasi"}
                required={false}
                options={[
                  {
                    label: "Sungai 1",
                    value: "sungai_1",
                    fieldName: "sungai_1",
                  },
                  {
                    label: "Sungai 2",
                    value: "sungai_2",
                    fieldName: "sungai_2",
                  },
                  {
                    label: "Sungai 3",
                    value: "sungai_3",
                    fieldName: "sungai_3",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={"72. Nama danau/waduk/situ"}
                fieldName={"nama_danau_waduk_situ"}
                required={false}
                options={[
                  { label: "Danau 1", value: "danau_1", fieldName: "danau_1" },
                  { label: "Danau 2", value: "danau_2", fieldName: "danau_2" },
                  { label: "Danau 3", value: "danau_3", fieldName: "danau_3" },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"73. Jumlah mata air"}
                required={false}
                placeholder={"Masukkan jumlah mata air"}
                fieldName={"jumlah_mata_air"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Input
                labelName={"74. Jumlah embung"}
                required={false}
                placeholder={"Masukkan jumlah embung"}
                fieldName={"jumlah_embung"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={"75. Pemanfaatan embung"}
                fieldName={"pemanfaatan_embung"}
                helperText={
                  "Untuk angka presisi dapat gunakan titik. Contoh: 10.5"
                }
                required={false}
                options={[
                  {
                    label: "Jumlah petani yang memanfaatkan embung",
                    value: "jumlah_petani_yang_memanfaatkan_embung",
                    fieldName: "jumlah_petani_yang_memanfaatkan_embung",
                    type: "number",
                  },
                  {
                    label: "Total lahan (Ha) yang memperoleh manfaat embung",
                    value: "total_lahan_yang_memperoleh_manfaat_embung",
                    fieldName: "total_lahan_yang_memperoleh_manfaat_embung",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={
                  "76. Ketersediaan sumur bor sawah dan pompa air untuk lahan pertanian"
                }
                fieldName={
                  "ketersediaan_sumur_bor_sawah_dan_pompa_air_untuk_lahan_pertanian"
                }
                required={false}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "ketersediaan_sumur_bor_sawah_dan_pompa_air_untuk_lahan_pertanian",
                  },
                  {
                    label: "Tidak Ada",
                    value: "Tidak Ada",
                    fieldName:
                      "ketersediaan_sumur_bor_sawah_dan_pompa_air_untuk_lahan_pertanian",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <TableInputs
                labelName={"77. Pemanfaatan sumur bor"}
                fieldName={"pemanfaatan_sumur_bor"}
                helperText={
                  "Untuk angka presisi dapat gunakan titik. Contoh: 10.5"
                }
                required={false}
                options={[
                  {
                    label: "Jumlah petani yang memanfaatkan sumur bor",
                    value: "jumlah_petani_yang_memanfaatkan_sumur_bor",
                    fieldName: "jumlah_petani_yang_memanfaatkan_sumur_bor",
                    type: "number",
                  },
                  {
                    label: "Total lahan (Ha) yang memperoleh manfaat sumur bor",
                    value:
                      "total_lahan_yang_memanfaatkan_sumur_bor_dan_pompa_air",
                    fieldName:
                      "total_lahan_yang_memanfaatkan_sumur_bor_dan_pompa_air",
                    type: "number",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm>
              <Select
                labelName={"78. Kondisi sungai"}
                fieldName={"kondisi_sungai"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Kondisi Baik",
                    value: "Kondisi Baik",
                    fieldName: "kondisi_sungai",
                  },
                  {
                    label: "Tercemar",
                    value: "Tercemar",
                    fieldName: "kondisi_sungai",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kondisi_sungai",
                  },
                ]}
              />
            </Col>
          </Row>

          {methods.watch("kondisi_sungai") &&
          (methods.watch("kondisi_sungai").match(/(kondisi)\s+(baik)/gi) ||
            methods.watch("kondisi_sungai").match(/(tercemar)/gi)) ? (
            <Row>
              <Col sm>
                <Select
                  labelName={"79. Sungai digunakan"}
                  fieldName={"sungai_digunakan"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Digunakan",
                      value: "Digunakan",
                      fieldName: "sungai_digunakan",
                    },
                    {
                      label: "Tidak digunakan",
                      value: "Tidak digunakan",
                      fieldName: "sungai_digunakan",
                    },
                    {
                      label: "Tidak ada",
                      value: "Tidak ada",
                      fieldName: "sungai_digunakan",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          {methods.watch("sungai_digunakan") &&
          methods.watch("sungai_digunakan").match(/(digunakan)/gi) ? (
            <Row>
              <Col sm>
                <Checkboxes
                  labelName={"80. Jenis penggunaan sungai"}
                  fieldName={"jenis_penggunaan_sungai"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Mandi/cuci",
                      value: "Mandi/cuci",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Sumber air minum/masak",
                      value: "Sumber air minum/masak",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Bahan baku air minum",
                      value: "Bahan baku air minum",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Pengairan/irigasi lahan pertanian",
                      value: "Pengairan/irigasi lahan pertanian",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Pariwisata (komersial)",
                      value: "Pariwisata (komersial)",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Perikanan",
                      value: "Perikanan",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Transportasi",
                      value: "Transportasi",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Pembangkit listrik",
                      value: "Pembangkit listrik",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "Industri/pabrik",
                      value: "Industri/pabrik",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                    {
                      label: "lainnya",
                      value: "lainnya",
                      fieldName: "jenis_penggunaan_sungai",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          <Row>
            <Col sm>
              <Select
                labelName={"81. Kondisi saluran irigasi"}
                fieldName={"kondisi_saluran_irigasi"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Kondisi baik",
                    value: "Kondisi Baik",
                    fieldName: "kondisi_saluran_irigasi",
                  },
                  {
                    label: "Tercemar",
                    value: "Tercemar",
                    fieldName: "kondisi_saluran_irigasi",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kondisi_saluran_irigasi",
                  },
                ]}
              />
            </Col>
          </Row>

          {(methods.watch("kondisi_saluran_irigasi") &&
            methods
              .watch("kondisi_saluran_irigasi")
              .match(/(kondisi)\s+(baik)/gi)) ||
          methods.watch("kondisi_saluran_irigasi").match(/(tercemar)/gi) ? (
            <Row>
              <Col sm>
                <Select
                  labelName={"82. Saluran irigasi digunakan"}
                  fieldName={"saluran_irigasi_digunakan"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Digunakan",
                      value: "Digunakan",
                      fieldName: "saluran_irigasi_digunakan",
                    },
                    {
                      label: "Tidak digunakan",
                      value: "Tidak digunakan",
                      fieldName: "saluran_irigasi_digunakan",
                    },
                    {
                      label: "Tidak ada",
                      value: "Tidak ada",
                      fieldName: "saluran_irigasi_digunakan",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          {methods.watch("saluran_irigasi_digunakan") &&
          methods.watch("saluran_irigasi_digunakan").match(/(digunakan)/gi) ? (
            <Row>
              <Col sm>
                <Checkboxes
                  labelName={"83. Jenis penggunaan saluran irigasi"}
                  fieldName={"jenis_penggunaan_saluran_irigasi"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Mandi/cuci",
                      value: "Mandi/cuci",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Sumber air minum/masak",
                      value: "Sumber air minum/masak",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Bahan baku air minum",
                      value: "Bahan baku air minum",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Pengairan/irigasi lahan pertanian",
                      value: "Pengairan/irigasi lahan pertanian",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Pariwisata (komersial)",
                      value: "Pariwisata (komersial)",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Perikanan",
                      value: "Perikanan",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Transportasi",
                      value: "Transportasi",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Pembangkit listrik",
                      value: "Pembangkit listrik",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "Industri/pabrik",
                      value: "Industri/pabrik",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                    {
                      label: "lainnya",
                      value: "lainnya",
                      fieldName: "jenis_penggunaan_saluran_irigasi",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          <Row>
            <Col sm>
              <Select
                labelName={"84. Kondisi danau/waduk/situ/bendungan"}
                fieldName={"kondisi_danau_waduk_situ_bendungan"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Kondisi baik",
                    value: "Kondisi Baik",
                    fieldName: "kondisi_danau_waduk_situ_bendungan",
                  },
                  {
                    label: "Tercemar",
                    value: "Tercemar",
                    fieldName: "kondisi_danau_waduk_situ_bendungan",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kondisi_danau_waduk_situ_bendungan",
                  },
                ]}
              />
            </Col>
          </Row>

          {methods.watch("kondisi_danau_waduk_situ_bendungan") &&
          (methods
            .watch("kondisi_danau_waduk_situ_bendungan")
            .match(/(kondisi)\s+(baik)/gi) ||
            methods
              .watch("kondisi_danau_waduk_situ_bendungan")
              .match(/(tercemar)/gi)) ? (
            <Row>
              <Col sm>
                <Select
                  labelName={"85. Danau/waduk/situ/bendungan digunakan"}
                  fieldName={"danau_waduk_situ_bendungan_digunakan"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Digunakan",
                      value: "Digunakan",
                      fieldName: "danau_waduk_situ_bendungan_digunakan",
                    },
                    {
                      label: "Tidak digunakan",
                      value: "Tidak digunakan",
                      fieldName: "danau_waduk_situ_bendungan_digunakan",
                    },
                    {
                      label: "Tidak ada",
                      value: "Tidak ada",
                      fieldName: "danau_waduk_situ_bendungan_digunakan",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          {methods.watch("danau_waduk_situ_bendungan_digunakan") &&
          methods
            .watch("danau_waduk_situ_bendungan_digunakan")
            .match(/(digunakan)/gi) ? (
            <Row>
              <Col sm>
                <Checkboxes
                  labelName={"86. Jenis penggunaan Danau/waduk/situ/bendungan"}
                  fieldName={"jenis_penggunaan_danau_waduk_situ_bendungan"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Mandi/cuci",
                      value: "Mandi/cuci",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Sumber air minum/masak",
                      value: "Sumber air minum/masak",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Bahan baku air minum",
                      value: "Bahan baku air minum",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Pengairan/irigasi lahan pertanian",
                      value: "Pengairan/irigasi lahan pertanian",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Pariwisata (komersial)",
                      value: "Pariwisata (komersial)",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Perikanan",
                      value: "Perikanan",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Transportasi",
                      value: "Transportasi",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Pembangkit listrik",
                      value: "Pembangkit listrik",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "Industri/pabrik",
                      value: "Industri/pabrik",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                    {
                      label: "lainnya",
                      value: "lainnya",
                      fieldName: "jenis_penggunaan_danau_waduk_situ_bendungan",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          <Row>
            <Col sm>
              <Select
                labelName={"87. Kondisi Embung"}
                fieldName={"kondisi_embung"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Kondisi baik",
                    value: "Kondisi Baik",
                    fieldName: "kondisi_embung",
                  },
                  {
                    label: "Tercemar",
                    value: "Tercemar",
                    fieldName: "kondisi_embung",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "kondisi_embung",
                  },
                ]}
              />
            </Col>
          </Row>

          {methods.watch("kondisi_embung") &&
          (methods.watch("kondisi_embung").match(/(kondisi)\s+(baik)/gi) ||
            methods.watch("kondisi_embung").match(/(tercemar)/gi)) ? (
            <Row>
              <Col sm>
                <Select
                  labelName={"88. Embung digunakan"}
                  fieldName={"embung_digunakan"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Digunakan",
                      value: "Digunakan",
                      fieldName: "embung_digunakan",
                    },
                    {
                      label: "Tidak digunakan",
                      value: "Tidak digunakan",
                      fieldName: "embung_digunakan",
                    },
                    {
                      label: "Tidak ada",
                      value: "Tidak ada",
                      fieldName: "embung_digunakan",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          {methods.watch("embung_digunakan") &&
          methods.watch("embung_digunakan").match(/(digunakan)/gi) ? (
            <Row>
              <Col sm>
                <Checkboxes
                  labelName={"89. Jenis penggunaan embung"}
                  fieldName={"jenis_penggunaan_embung"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Mandi/cuci",
                      value: "Mandi/cuci",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Sumber air minum/masak",
                      value: "Sumber air minum/masak",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Bahan baku air minum",
                      value: "Bahan baku air minum",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Pengairan/irigasi lahan pertanian",
                      value: "Pengairan/irigasi lahan pertanian",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Pariwisata (komersial)",
                      value: "Pariwisata (komersial)",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Perikanan",
                      value: "Perikanan",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Transportasi",
                      value: "Transportasi",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Pembangkit listrik",
                      value: "Pembangkit listrik",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "Industri/pabrik",
                      value: "Industri/pabrik",
                      fieldName: "jenis_penggunaan_embung",
                    },
                    {
                      label: "lainnya",
                      value: "lainnya",
                      fieldName: "jenis_penggunaan_embung",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          {methods.watch("kondisi_danau_waduk_situ_bendungan") &&
          (methods
            .watch("kondisi_danau_waduk_situ_bendungan")
            .match(/(kondisi)\s+(baik)/gi) ||
            methods
              .watch("kondisi_danau_waduk_situ_bendungan")
              .match(/(tercemar)/gi)) ? (
            <>
              <Row>
                <Col sm>
                  <Select
                    labelName={
                      "90. Keberadaan sumber limbah dari pabrik/industri/usaha"
                    }
                    fieldName={
                      "keberadaan_sumber_limbah_dari_pabrik_industry_usaha"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Ya",
                        value: "Ya",
                        fieldName:
                          "keberadaan_sumber_limbah_dari_pabrik_industry_usaha",
                      },
                      {
                        label: "Tidak",
                        value: "Tidak",
                        fieldName:
                          "keberadaan_sumber_limbah_dari_pabrik_industry_usaha",
                      },
                    ]}
                  />
                </Col>
              </Row>

              <Row>
                <Col sm>
                  <Select
                    labelName={"91. Keberadaan sumber limbah dari rumah tangga"}
                    fieldName={"keberadaan_sumber_limbah_dari_rumah_tangga"}
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Ya",
                        value: "Ya",
                        fieldName: "keberadaan_sumber_limbah_dari_rumah_tangga",
                      },
                      {
                        label: "Tidak",
                        value: "Tidak",
                        fieldName: "keberadaan_sumber_limbah_dari_rumah_tangga",
                      },
                    ]}
                  />
                </Col>
              </Row>

              <Row>
                <Col sm>
                  <Select
                    labelName={"92. Keberadaan sumber limbah lainnya"}
                    fieldName={"keberadaan_sumber_limbah_lainnya"}
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Ya",
                        value: "Ya",
                        fieldName: "keberadaan_sumber_limbah_lainnya",
                      },
                      {
                        label: "Tidak",
                        value: "Tidak",
                        fieldName: "keberadaan_sumber_limbah_lainnya",
                      },
                    ]}
                  />
                </Col>
              </Row>
            </>
          ) : null}

          {methods.watch("keberadaan_sumber_limbah_dari_rumah_tangga") &&
          methods.watch("keberadaan_sumber_limbah_dari_rumah_tangga") ===
            "Ya" ? (
            <Row>
              <Col sm>
                <Select
                  labelName={"93. Sumber limbah berlokasi di"}
                  fieldName={"sumber_limbah_berlokasi_di"}
                  required={true}
                  placeholder={"Pilih data terkait"}
                  options={[
                    {
                      label: "Dalam RT",
                      value: "Dalam RT",
                      fieldName: "sumber_limbah_berlokasi_di",
                    },
                    {
                      label: "Dalam RW",
                      value: "Dalam RW",
                      fieldName: "sumber_limbah_berlokasi_di",
                    },
                    {
                      label: "Dalam Desa",
                      value: "Dalam Desa",
                      fieldName: "sumber_limbah_berlokasi_di",
                    },
                    {
                      label: "Luar Desa",
                      value: "Luar Desa",
                      fieldName: "sumber_limbah_berlokasi_di",
                    },
                  ]}
                />
              </Col>
            </Row>
          ) : null}

          <Row>
            <Col sm={12}>
              <h5>Pencemaran Air Setahun Terakhir</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"94. Pencemaran air"}
                fieldName={"pencemaran_air_setahun_terakhir.pencemaran_air"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "pencemaran_air_setahun_terakhir.pencemaran_air",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "pencemaran_air_setahun_terakhir.pencemaran_air",
                  },
                ]}
              />
            </Col>
            {methods.watch("pencemaran_air_setahun_terakhir.pencemaran_air") &&
            methods.watch("pencemaran_air_setahun_terakhir.pencemaran_air") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Checkboxes
                    labelName={"95. Sumber pencemaran"}
                    fieldName={
                      "pencemaran_air_setahun_terakhir.sumber_pencemaran"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Pabrik/industry/usaha",
                        value: "Pabrik/industry/usaha",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.sumber_pencemaran",
                      },
                      {
                        label: "Rumah tangga",
                        value: "Rumah tangga",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.sumber_pencemaran",
                      },
                      {
                        label: "lainnya",
                        value: "lainnya",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.sumber_pencemaran",
                      },
                    ]}
                  />
                </Col>
                <Col sm={12}>
                  <Select
                    labelName={"96. Lokasi limbah"}
                    fieldName={"pencemaran_air_setahun_terakhir.lokasi_limbah"}
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Dalam RT",
                        value: "Dalam RT",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Dalam RW",
                        value: "Dalam RW",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Dalam Desa",
                        value: "Dalam Desa",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Luar Desa",
                        value: "Luar Desa",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.lokasi_limbah",
                      },
                    ]}
                  />
                </Col>
                <Col sm={12}>
                  <Select
                    labelName={"97. Pengaduan warga"}
                    fieldName={
                      "pencemaran_air_setahun_terakhir.pengaduan_warga"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Ada",
                        value: "Ada",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.pengaduan_warga",
                      },
                      {
                        label: "Tidak ada",
                        value: "Tidak ada",
                        fieldName:
                          "pencemaran_air_setahun_terakhir.pengaduan_warga",
                      },
                    ]}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Pencemaran Tanah Setahun Terakhir</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"98. Pencemaran tanah"}
                fieldName={"pencemaran_tanah_setahun_terakhir.pencemaran_tanah"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "pencemaran_tanah_setahun_terakhir.pencemaran_tanah",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "pencemaran_tanah_setahun_terakhir.pencemaran_tanah",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "pencemaran_tanah_setahun_terakhir.pencemaran_tanah"
            ) &&
            methods.watch(
              "pencemaran_tanah_setahun_terakhir.pencemaran_tanah"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Checkboxes
                    labelName={"99. Sumber pencemaran"}
                    fieldName={
                      "pencemaran_tanah_setahun_terakhir.sumber_pencemaran"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Pabrik/industry/usaha",
                        value: "Pabrik/industry/usaha",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.sumber_pencemaran",
                      },
                      {
                        label: "Rumah tangga",
                        value: "Rumah tangga",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.sumber_pencemaran",
                      },
                      {
                        label: "lainnya",
                        value: "lainnya",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.sumber_pencemaran",
                      },
                    ]}
                  />
                </Col>
                <Col sm={12}>
                  <Select
                    labelName={"100. Lokasi limbah"}
                    fieldName={
                      "pencemaran_tanah_setahun_terakhir.lokasi_limbah"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Dalam RT",
                        value: "Dalam RT",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Dalam RW",
                        value: "Dalam RW",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Dalam Desa",
                        value: "Dalam Desa",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Luar Desa",
                        value: "Luar Desa",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.lokasi_limbah",
                      },
                    ]}
                  />
                </Col>
                <Col sm={12}>
                  <Select
                    labelName={"101. Pengaduan warga"}
                    fieldName={
                      "pencemaran_tanah_setahun_terakhir.pengaduan_warga"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Ada",
                        value: "Ada",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.pengaduan_warga",
                      },
                      {
                        label: "Tidak ada",
                        value: "Tidak ada",
                        fieldName:
                          "pencemaran_tanah_setahun_terakhir.pengaduan_warga",
                      },
                    ]}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Pencemaran Udara Setahun Terakhir</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"102. Pencemaran tanah"}
                fieldName={"pencemaran_udara_setahun_terakhir.pencemaran_tanah"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.pencemaran_tanah",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.pencemaran_tanah",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "pencemaran_udara_setahun_terakhir.pencemaran_tanah"
            ) &&
            methods.watch(
              "pencemaran_udara_setahun_terakhir.pencemaran_tanah"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Checkboxes
                    labelName={"103. Sumber pencemaran"}
                    fieldName={
                      "pencemaran_udara_setahun_terakhir.sumber_pencemaran"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Pabrik/industry/usaha",
                        value: "Pabrik/industry/usaha",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.sumber_pencemaran",
                      },
                      {
                        label: "Rumah tangga",
                        value: "Rumah tangga",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.sumber_pencemaran",
                      },
                      {
                        label: "lainnya",
                        value: "lainnya",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.sumber_pencemaran",
                      },
                    ]}
                  />
                </Col>
                <Col sm={12}>
                  <Select
                    labelName={"104. Lokasi limbah"}
                    fieldName={
                      "pencemaran_udara_setahun_terakhir.lokasi_limbah"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Dalam RT",
                        value: "Dalam RT",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Dalam RW",
                        value: "Dalam RW",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Dalam Desa",
                        value: "Dalam Desa",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.lokasi_limbah",
                      },
                      {
                        label: "Luar Desa",
                        value: "Luar Desa",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.lokasi_limbah",
                      },
                    ]}
                  />
                </Col>
                <Col sm={12}>
                  <Select
                    labelName={"105. Pengaduan warga"}
                    fieldName={
                      "pencemaran_udara_setahun_terakhir.pengaduan_warga"
                    }
                    required={true}
                    placeholder={"Pilih data terkait"}
                    options={[
                      {
                        label: "Ada",
                        value: "Ada",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.pengaduan_warga",
                      },
                      {
                        label: "Tidak ada",
                        value: "Tidak ada",
                        fieldName:
                          "pencemaran_udara_setahun_terakhir.pengaduan_warga",
                      },
                    ]}
                  />
                </Col>
              </>
            ) : null}
            <Col sm={12}>
              <Select
                labelName={"106. Pengolahan/daur ulang sampah/limbah"}
                fieldName={
                  "pencemaran_udara_setahun_terakhir.pengolahan_daur_ulang_sampah_limbah"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada, sebagian warga terlibat",
                    value: "Ada, sebagian warga terlibat",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.pengolahan_daur_ulang_sampah_limbah",
                  },
                  {
                    label: "Ada, warga tidak terlibat",
                    value: "Ada, warga tidak terlibat",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.pengolahan_daur_ulang_sampah_limbah",
                  },
                  {
                    label: "Tidak ada kegiatan",
                    value: "Tidak ada kegiatan",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.pengolahan_daur_ulang_sampah_limbah",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "107. Kebiasaan masyrakat membakar ladang/kebun di desa/kelurahan untuk proses usaha pertanian"
                }
                fieldName={
                  "pencemaran_udara_setahun_terakhir.kebiasaan_masyarakat_membakar_ladang_kebun_di_desa_kelurahan_untuk_proses_usaha_pertanian"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.kebiasaan_masyarakat_membakar_ladang_kebun_di_desa_kelurahan_untuk_proses_usaha_pertanian",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.kebiasaan_masyarakat_membakar_ladang_kebun_di_desa_kelurahan_untuk_proses_usaha_pertanian",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "108. Keberadaan lokasi penggalian Golongan C (misalnya: batu kali, pasir, kapur, kaolin, pasir kuarsa, tanah liat, dll)"
                }
                fieldName={
                  "pencemaran_udara_setahun_terakhir.keberadaan_lokasi_penggalian_golongan_c"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.keberadaan_lokasi_penggalian_golongan_c",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "pencemaran_udara_setahun_terakhir.keberadaan_lokasi_penggalian_golongan_c",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Tanah longsor</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"109. Bencana tanah longsor setahun terakhir"}
                fieldName={
                  "tanah_longsor.bencana_tanah_longsor_setahun_terakhir"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "tanah_longsor.bencana_tanah_longsor_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "tanah_longsor.bencana_tanah_longsor_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "tanah_longsor.bencana_tanah_longsor_setahun_terakhir"
            ) &&
            methods.watch(
              "tanah_longsor.bencana_tanah_longsor_setahun_terakhir"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"110. Banyak kejadian tanah longsor (jumlah)"}
                    required={true}
                    placeholder={"Masukkan jumlah kejadian tanah longsor"}
                    fieldName={"tanah_longsor.banyak_kejadian_tanah_longsor"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"111. Korban jiwa tanah longsor (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah korban jiwa tanah longsor"}
                    fieldName={"tanah_longsor.korban_jiwa_tanah_longsor"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"112. Pengungsi banjir (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah pengungsi banjir"}
                    fieldName={"tanah_longsor.pengungsi_banjir"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"113. Warga terdampak tanah longsor (jiwa)"}
                    required={true}
                    placeholder={
                      "Masukkan jumlah warga terdampak tanah longsor"
                    }
                    fieldName={"tanah_longsor.warga_terdampak_tanah_longsor"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Banjir</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"114. Bencana banjir setahun terakhir"}
                fieldName={"banjir.bencana_banjir_setahun_terakhir"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "banjir.bencana_banjir_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "banjir.bencana_banjir_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch("banjir.bencana_banjir_setahun_terakhir") &&
            methods.watch("banjir.bencana_banjir_setahun_terakhir") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"115. Banyak kejadian banjir (jumlah)"}
                    required={true}
                    placeholder={"Masukkan jumlah kejadian banjir"}
                    fieldName={"banjir.banyak_kejadian_banjir"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"116. Korban jiwa banjir (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah korban jiwa banjir"}
                    fieldName={"banjir.korban_jiwa_banjir"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"117. Pengungsi banjir (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah pengungsi banjir"}
                    fieldName={"banjir.pengungsi_banjir"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"118. Warga terdampak banjir (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah warga terdampak banjir"}
                    fieldName={"banjir.warga_terdampak_banjir"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Banjir bandang</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"119. Bencana banjir bandang setahun terakhir"}
                fieldName={
                  "banjir_bandang.bencana_banjir_bandang_setahun_terakhir"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "banjir_bandang.bencana_banjir_bandang_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "banjir_bandang.bencana_banjir_bandang_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "banjir_bandang.bencana_banjir_bandang_setahun_terakhir"
            ) &&
            methods.watch(
              "banjir_bandang.bencana_banjir_bandang_setahun_terakhir"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"120. Banyak kejadian banjir bandang (jumlah)"}
                    required={true}
                    placeholder={"Masukkan jumlah kejadian banjir"}
                    fieldName={"banjir_bandang.banyak_kejadian_banjir_bandang"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"121. Korban jiwa banjir bandang (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah korban jiwa banjir"}
                    fieldName={"banjir_bandang.korban_jiwa_banjir_bandang"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"122. Pengungsi banjir bandang (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah pengungsi banjir"}
                    fieldName={"banjir_bandang.pengungsi_banjir_bandang"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"123. Warga terdampak banjir bandang (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah warga terdampak banjir"}
                    fieldName={"banjir_bandang.warga_terdampak_banjir_bandang"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Gempa bumi</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"124. Bencana gempa bumi setahun terakhir"}
                fieldName={"gempa_bumi.bencana_gempa_bumi_setahun_terakhir"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "gempa_bumi.bencana_gempa_bumi_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "gempa_bumi.bencana_gempa_bumi_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch("gempa_bumi.bencana_gempa_bumi_setahun_terakhir") &&
            methods.watch("gempa_bumi.bencana_gempa_bumi_setahun_terakhir") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"125. Banyak kejadian gempa bumi (jumlah)"}
                    required={true}
                    placeholder={"Masukkan jumlah kejadian gempa bumi"}
                    fieldName={"gempa_bumi.banyak_kejadian_gempa_bumi"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"126. Korban jiwa gempa bumi (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah korban jiwa gempa bumi"}
                    fieldName={"gempa_bumi.korban_jiwa_gempa_bumi"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"127. Pengungsi gempa bumi (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah pengungsi gempa bumi"}
                    fieldName={"gempa_bumi.pengungsi_gempa_bumi"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"128. Warga terdampak gempa bumi (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah warga terdampak gempa bumi"}
                    fieldName={"gempa_bumi.warga_terdampak_gempa_bumi"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Tsunami</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"129. Bencana tsunami setahun terakhir"}
                fieldName={"tsunami.bencana_tsunami_setahun_terakhir"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "tsunami.bencana_tsunami_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "tsunami.bencana_tsunami_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch("tsunami.bencana_tsunami_setahun_terakhir") &&
            methods.watch("tsunami.bencana_tsunami_setahun_terakhir") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"130. Banyak kejadian tsunami (jumlah)"}
                    required={true}
                    placeholder={"Masukkan jumlah kejadian tsunami"}
                    fieldName={"tsunami.banyak_kejadian_tsunami"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"131. Korban jiwa tsunami (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah korban jiwa tsunami"}
                    fieldName={"tsunami.korban_jiwa_tsunami"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"132. Pengungsi tsunami (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah pengungsi tsunami"}
                    fieldName={"tsunami.pengungsi_tsunami"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"133. Warga terdampak tsunami (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah warga terdampak tsunami"}
                    fieldName={"tsunami.warga_terdampak_tsunami"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>gelombang pasang laut</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "134. Bencana gelombang pasang laut setahun terakhir"
                }
                fieldName={
                  "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir"
            ) &&
            methods.watch(
              "gelombang_pasang_laut.bencana_gelombang_pasang_laut_setahun_terakhir"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={
                      "135. Banyak kejadian gelombang pasang laut (jumlah)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah kejadian gelombang pasang laut"
                    }
                    fieldName={
                      "gelombang_pasang_laut.banyak_kejadian_gelombang_pasang_laut"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"136. Korban jiwa gelombang pasang laut (jiwa)"}
                    required={true}
                    placeholder={
                      "Masukkan jumlah korban jiwa gelombang pasang laut"
                    }
                    fieldName={
                      "gelombang_pasang_laut.korban_jiwa_gelombang_pasang_laut"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"137. Pengungsi gelombang pasang laut (jiwa)"}
                    required={true}
                    placeholder={
                      "Masukkan jumlah pengungsi gelombang pasang laut"
                    }
                    fieldName={
                      "gelombang_pasang_laut.pengungsi_gelombang_pasang_laut"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={
                      "138. Warga terdampak gelombang pasang laut (jiwa)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah warga terdampak gelombang pasang laut"
                    }
                    fieldName={
                      "gelombang_pasang_laut.warga_terdampak_gelombang_pasang_laut"
                    }
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Angin puyuh/putting beliung/topan</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "139. Bencana angin puyuh/putting beliung/topan setahun terakhir"
                }
                fieldName={
                  "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir"
            ) &&
            methods.watch(
              "angin_puyuh_putting_beliung_topan.bencana_angin_puyuh_putting_beliung_topan_setahun_terakhir"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={
                      "140. Banyak kejadian angin puyuh/putting beliung/topan (jumlah)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah kejadian angin puyuh/putting beliung/topan"
                    }
                    fieldName={
                      "angin_puyuh_putting_beliung_topan.banyak_kejadian"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={
                      "141. Korban jiwa angin puyuh/putting beliung/topan (jiwa)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah korban jiwa angin puyuh/putting beliung/topan"
                    }
                    fieldName={"angin_puyuh_putting_beliung_topan.korban_jiwa"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={
                      "142. Pengungsi angin puyuh/putting beliung/topan (jiwa)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah pengungsi angin puyuh/putting beliung/topan"
                    }
                    fieldName={"angin_puyuh_putting_beliung_topan.pengungsi"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={
                      "143. Warga terdampak angin puyuh/putting beliung/topan (jiwa)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah warga terdampak angin puyuh/putting beliung/topan"
                    }
                    fieldName={
                      "angin_puyuh_putting_beliung_topan.warga_terdampak"
                    }
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Gunung meletus</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"144. Bencana gunung meletus setahun terakhir"}
                fieldName={
                  "gunung_meletus.bencana_gunung_meletus_setahun_terakhir"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "gunung_meletus.bencana_gunung_meletus_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "gunung_meletus.bencana_gunung_meletus_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "gunung_meletus.bencana_gunung_meletus_setahun_terakhir"
            ) &&
            methods.watch(
              "gunung_meletus.bencana_gunung_meletus_setahun_terakhir"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"145. Banyak kejadian gunung meletus (jumlah)"}
                    required={true}
                    placeholder={"Masukkan jumlah kejadian gunung meletus"}
                    fieldName={"gunung_meletus.banyak_kejadian_gunung_meletus"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"146. Korban jiwa gunung meletus (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah korban jiwa gunung meletus"}
                    fieldName={"gunung_meletus.korban_jiwa_gunung_meletus"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"147. Pengungsi gunung meletus (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah pengungsi gunung meletus"}
                    fieldName={"gunung_meletus.pengungsi_gunung_meletus"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"148. Warga terdampak gunung meletus (jiwa)"}
                    required={true}
                    placeholder={
                      "Masukkan jumlah warga terdampak gunung meletus"
                    }
                    fieldName={"gunung_meletus.warga_terdampak_gunung_meletus"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Kebakaran hutan/lahan</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "149. Bencana kebakaran hutan/lahan setahun terakhir"
                }
                fieldName={
                  "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir"
            ) &&
            methods.watch(
              "kebakaran_hutan_lahan.bencana_kebakaran_hutan_lahan_setahun_terakhir"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={
                      "150. Banyak kejadian kebakaran hutan/lahan (jumlah)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah kejadian kebakaran hutan/lahan"
                    }
                    fieldName={
                      "kebakaran_hutan_lahan.banyak_kejadian_kebakaran_hutan_lahan"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"151. Korban jiwa kebakaran hutan/lahan (jiwa)"}
                    required={true}
                    placeholder={
                      "Masukkan jumlah korban jiwa kebakaran hutan/lahan"
                    }
                    fieldName={
                      "kebakaran_hutan_lahan.korban_jiwa_kebakaran_hutan_lahan"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"152. Pengungsi kebakaran hutan/lahan (jiwa)"}
                    required={true}
                    placeholder={
                      "Masukkan jumlah pengungsi kebakaran hutan/lahan"
                    }
                    fieldName={
                      "kebakaran_hutan_lahan.pengungsi_kebakaran_hutan_lahan"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={
                      "153. Warga terdampak kebakaran hutan/lahan (jiwa)"
                    }
                    required={true}
                    placeholder={
                      "Masukkan jumlah warga terdampak kebakaran hutan/lahan"
                    }
                    fieldName={
                      "kebakaran_hutan_lahan.warga_terdampak_kebakaran_hutan_lahan"
                    }
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Kekeringan (lahan)</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"154. Bencana kekeringan lahan setahun terakhir"}
                fieldName={
                  "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir"
            ) &&
            methods.watch(
              "kekeringan_lahan.bencana_kekeringan_lahan_setahun_terakhir"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"155. Banyak kejadian kekeringan lahan (jumlah)"}
                    required={true}
                    placeholder={"Masukkan jumlah kejadian kekeringan lahan"}
                    fieldName={
                      "kekeringan_lahan.banyak_kejadian_kekeringan_lahan_jumlah"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"156. Korban jiwa kekeringan lahan (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah korban jiwa kekeringan lahan"}
                    fieldName={
                      "kekeringan_lahan.korban_jiwa_kekeringan_lahan_jiwa"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"157. Pengungsi kekeringan lahan (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah pengungsi kekeringan lahan"}
                    fieldName={
                      "kekeringan_lahan.pengungsi_kekeringan_lahan_jiwa"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"158. Warga terdampak kekeringan lahan (jiwa)"}
                    required={true}
                    placeholder={
                      "Masukkan jumlah warga terdampak kekeringan lahan"
                    }
                    fieldName={
                      "kekeringan_lahan.warga_terdampak_kekeringan_lahan_jiwa"
                    }
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Mitigasi Bencana</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"159. Sistem peringatan dini bencana alam"}
                fieldName={
                  "mitigasi_bencana.sistem_peringatan_dini_bencana_alam"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "mitigasi_bencana.sistem_peringatan_dini_bencana_alam",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "mitigasi_bencana.sistem_peringatan_dini_bencana_alam",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={"160. Sistem peringatan dini khusus tsunami"}
                fieldName={
                  "mitigasi_bencana.sistem_peringatan_dini_khusus_tsunami"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Bukan wilayah potensi tsunami",
                    value: "Bukan wilayah potensi tsunami",
                    fieldName:
                      "mitigasi_bencana.sistem_peringatan_dini_khusus_tsunami",
                  },
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "mitigasi_bencana.sistem_peringatan_dini_khusus_tsunami",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "mitigasi_bencana.sistem_peringatan_dini_khusus_tsunami",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "161. Perlengkapan keselamatan (perahu karet, tenda, masker, dll)"
                }
                fieldName={"mitigasi_bencana.perlengkapan_keselamatan"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "mitigasi_bencana.perlengkapan_keselamatan",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "mitigasi_bencana.perlengkapan_keselamatan",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={"162. Rambu-rambu dan jalur evakuasi bencana"}
                fieldName={
                  "mitigasi_bencana.rambu_rambu_dan_jalur_evakuasi_bencana"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "mitigasi_bencana.rambu_rambu_dan_jalur_evakuasi_bencana",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "mitigasi_bencana.rambu_rambu_dan_jalur_evakuasi_bencana",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "163. Pembuatan/perawatan/normalisasi: sungai, kanal, tanggul, parit, drainase, waduk, pantai, dll"
                }
                fieldName={"mitigasi_bencana.pembuatan_perawatan_normalisasi"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "mitigasi_bencana.pembuatan_perawatan_normalisasi",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "mitigasi_bencana.pembuatan_perawatan_normalisasi",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <FieldArray
                fieldName="keberadaan_sarana_pendidikan"
                required={false}
                defaultValue={{
                  jenjang_pendidikan: "",
                  jumlah_guru: 0,
                  jumlah_murid: 0,
                  jumlah_pegawai: 0,
                  kondisi_bangunan: "",
                  nama_sarana_pendidikan: "",
                  pemilik: "",
                }}
                title="164. Keberadaan sarana pendidikan"
                subtitle="Sarana pendidikan">
                {({
                  index,
                  required,
                  fieldName,
                  register,
                  control,
                  errors,
                  watch,
                }: any) => (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Jenjang pendidikan {required && <RequiredInfo />}
                      </Form.Label>
                      <SelectStatic
                        control={control}
                        errors={errors?.fieldName?.index?.jenjang_pendidikan}
                        fieldName={`${fieldName}.${index}.jenjang_pendidikan`}
                        options={[
                          { label: "1. Pos PAUD", value: "1. Pos PAUD" },
                          { label: "2. TK/RA/BA", value: "2. TK/RA/BA" },
                          { label: "3. SD/Mi", value: "3. SD/Mi" },
                          { label: "4. SDLB", value: "4. SDLB" },
                          { label: "5. SMP/MTs", value: "5. SMP/MTs" },
                          { label: "6. SMPLB", value: "6. SMPLB" },
                          { label: "7. SMU/MA", value: "7. SMU/MA" },
                          { label: "8. SMK", value: "8. SMK" },
                          { label: "9. SMALB", value: "9. SMALB" },
                          {
                            label: "10. Akademi/perguruan tinggi",
                            value: "10. Akademi/perguruan tinggi",
                          },
                          { label: "11. Pesantren", value: "11. Pesantren" },
                          {
                            label: "12. Madrasah diniyah",
                            value: "12. Madrasah diniyah",
                          },
                          {
                            label: "13. Seminari/sejenisnya",
                            value: "13. Seminari/sejenisnya",
                          },
                          {
                            label: "14. Sekolah agama lainnya",
                            value: "14. Sekolah agama lainnya",
                          },
                          {
                            label:
                              "15. Kegiatan pemberantasan buta aksara/keaksaraan fungsional (KF)",
                            value:
                              "15. Kegiatan pemberantasan buta aksara/keaksaraan fungsional (KF)",
                          },
                          {
                            label: "16. Kegiatan Kejar Paket A",
                            value: "16. Kegiatan Kejar Paket A",
                          },
                          {
                            label: "17. Kegiatan Kejar Paket B",
                            value: "17. Kegiatan Kejar Paket B",
                          },
                          {
                            label: "18. Kegiatan Kejar Paket C",
                            value: "18. Kegiatan Kejar Paket C",
                          },
                          {
                            label: "19. Kelompok bermain/ play group",
                            value: "19. Kelompok bermain/ play group",
                          },
                          {
                            label: "20. Tempat penitipan anak",
                            value: "20. Tempat penitipan anak",
                          },
                          {
                            label: "21. Taman Pendidikan Alquran",
                            value: "21. Taman Pendidikan Alquran",
                          },
                          {
                            label: "22. Kursus bahasa asing",
                            value: "22. Kursus bahasa asing",
                          },
                          {
                            label: "23. Kursus komputer",
                            value: "23. Kursus komputer",
                          },
                          {
                            label: "24. Kursus menjahit/ tata busana",
                            value: "24. Kursus menjahit/ tata busana",
                          },
                          {
                            label: "25. Kursus kecantikan",
                            value: "25. Kursus kecantikan",
                          },
                          {
                            label: "26. Kursus montir mobil/motor",
                            value: "26. Kursus montir mobil/motor",
                          },
                          {
                            label: "27. Kursus menyetir",
                            value: "27. Kursus menyetir",
                          },
                          {
                            label: "28. Kursus elektronika",
                            value: "28. Kursus elektronika",
                          },
                          {
                            label: "29. Kursus memasak/ tataboga",
                            value: "29. Kursus memasak/ tataboga",
                          },
                          {
                            label: "30. Kursus mengetik",
                            value: "30. Kursus mengetik",
                          },
                          {
                            label: "31. Kursus akuntansi",
                            value: "31. Kursus akuntansi",
                          },
                          {
                            label: "32. Kursus lainnya",
                            value: "32. Kursus lainnya",
                          },
                        ]}
                        placeholder={"Pilih jenjang pendidikan"}
                      />
                      {watch(`${fieldName}.${index}.jenjang_pendidikan`) &&
                      watch(`${fieldName}.${index}.jenjang_pendidikan`).match(
                        /(lainnya)/
                      ) ? (
                        <FormInputControl
                          required={required}
                          isInvalid={
                            !!errors?.fieldName?.index
                              ?.jenjang_pendidikan_lainnya
                          }
                          message={
                            errors?.fieldName?.index?.jenjang_pendidikan_lainnya
                              ?.message
                          }
                          register={register(
                            `${fieldName}.${index}.jenjang_pendidikan_lainnya`
                          )}
                          placeholder={`Masukkan jenjang pendidikan lainnya`}
                        />
                      ) : null}
                    </Form.Group>

                    <FormInputControl
                      labelName={"Nama sarana pendidikan"}
                      required={required}
                      isInvalid={
                        !!errors?.fieldName?.index?.nama_sarana_pendidikan
                      }
                      message={
                        errors?.fieldName?.index?.nama_sarana_pendidikan
                          ?.message
                      }
                      type={"text"}
                      register={register(
                        `${fieldName}.${index}.nama_sarana_pendidikan`
                      )}
                      placeholder={`Masukkan nama sarana pendidikan`}
                    />

                    <Form.Group className="mb-3">
                      <Form.Label>
                        Pemilik {required && <RequiredInfo />}
                      </Form.Label>
                      <SelectStatic
                        control={control}
                        errors={errors}
                        fieldName={`${fieldName}.${index}.pemilik`}
                        options={[
                          { label: "Negeri", value: "Negeri" },
                          { label: "Swasta", value: "Swasta" },
                        ]}
                        placeholder={"Pilih pemilik"}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        Kondisi bangunan {required && <RequiredInfo />}
                      </Form.Label>
                      <SelectStatic
                        control={control}
                        errors={errors?.fieldName?.index?.kondisi_bangunan}
                        fieldName={`${fieldName}.${index}.kondisi_bangunan`}
                        options={[
                          { label: "Layak", value: "Layak" },
                          { label: "Rusak", value: "Rusak" },
                        ]}
                        placeholder={"Pilih kondisi bangunan"}
                      />
                    </Form.Group>

                    <FormInputControl
                      labelName={"Jumlah guru"}
                      required={required}
                      isInvalid={!!errors?.fieldName?.index?.jumlah_guru}
                      message={errors?.fieldName?.index?.jumlah_guru?.message}
                      type={"number"}
                      register={register(`${fieldName}.${index}.jumlah_guru`)}
                      placeholder={`Masukkan jumlah guru`}
                    />

                    <FormInputControl
                      labelName={"Jumlah murid"}
                      required={required}
                      isInvalid={!!errors?.fieldName?.index?.jumlah_murid}
                      message={errors?.fieldName?.index?.jumlah_murid?.message}
                      type={"number"}
                      register={register(`${fieldName}.${index}.jumlah_murid`)}
                      placeholder={`Masukkan jumlah murid`}
                    />

                    <FormInputControl
                      labelName={"Jumlah pegawai"}
                      required={required}
                      isInvalid={!!errors?.fieldName?.index?.jumlah_pegawai}
                      message={
                        errors?.fieldName?.index?.jumlah_pegawai?.message
                      }
                      type={"number"}
                      register={register(
                        `${fieldName}.${index}.jumlah_pegawai`
                      )}
                      placeholder={`Masukkan jumlah pegawai`}
                    />
                  </>
                )}
              </FieldArray>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"165. Perpustakaan atau taman bacaan"}
                fieldName={"perpustakaan_atau_taman_bacaan"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "perpustakaan_atau_taman_bacaan",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName: "perpustakaan_atau_taman_bacaan",
                  },
                ]}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <h6></h6>
              <FieldArray
                fieldName="keberadaan_sarana_kesehatan"
                required={false}
                defaultValue={{
                  jumlah_bidan: 0,
                  jumlah_dokter: 0,
                  jumlah_pegawai_lain: 0,
                  jumlah_tenaga_kesehatan: 0,
                  kondisi_bangunan: "",
                  nama_sarana_kesehatan: "",
                  pemilik: "",
                  sarana_kesehatan: "",
                }}
                title="166. Keberadaan sarana kesehatan"
                subtitle="Sarana kesehatan">
                {({
                  index,
                  required,
                  fieldName,
                  register,
                  control,
                  errors,
                }: any) => (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        Sarana kesehatan {required && <RequiredInfo />}
                      </Form.Label>
                      <SelectStatic
                        control={control}
                        errors={errors?.fieldName?.index?.sarana_kesehatan}
                        fieldName={`${fieldName}.${index}.sarana_kesehatan`}
                        options={[
                          { label: "1. Rumah sakit", value: "1. Rumah sakit" },
                          {
                            label: "2. Rumah sakit bersalin",
                            value: "2. Rumah sakit bersalin",
                          },
                          {
                            label: "3. Puskesmas dengan rawat inap",
                            value: "3. Puskesmas dengan rawat inap",
                          },
                          {
                            label: "4. Puskesmas tanpa rawat inap",
                            value: "4. Puskesmas tanpa rawat inap",
                          },
                          {
                            label: "5. Puskesmas pembantu",
                            value: "5. Puskesmas pembantu",
                          },
                          {
                            label: "6. Poliklinik/ balai pengobatan",
                            value: "6. Poliklinik/ balai pengobatan",
                          },
                          {
                            label: "7. Tempat praktik dokter",
                            value: "7. Tempat praktik dokter",
                          },
                          {
                            label: "8. Rumah bersalin",
                            value: "8. Rumah bersalin",
                          },
                          {
                            label: "9. Tempat praktik bidan",
                            value: "9. Tempat praktik bidan",
                          },
                          { label: "10. Poskesdes", value: "10. Poskesdes" },
                          { label: "11. Polindes", value: "11. Polindes" },
                          { label: "12. Apotik", value: "12. Apotik" },
                          {
                            label: "13. Toko khusus obat/jamu",
                            value: "13. Toko khusus obat/jamu",
                          },
                          { label: "14. Posyandu", value: "14. Posyandu" },
                          { label: "15. Posbindu", value: "15. Posbindu" },
                          {
                            label:
                              "16. Tempat praktik dukun bayi/ dukun bersalin/ paraji",
                            value:
                              "16. Tempat praktik dukun bayi/ dukun bersalin/ paraji",
                          },
                        ]}
                        placeholder={"Pilih fasilitas"}
                      />
                    </Form.Group>

                    <FormInputControl
                      labelName={"Nama sarana kesehatan"}
                      required={required}
                      isInvalid={
                        !!errors?.fieldName?.index?.nama_sarana_kesehatan
                      }
                      message={
                        errors?.fieldName?.index?.nama_sarana_kesehatan?.message
                      }
                      type={"text"}
                      register={register(
                        `${fieldName}.${index}.nama_sarana_kesehatan`
                      )}
                      placeholder={`Masukkan nama sarana kesehatan`}
                    />

                    <Form.Group className="mb-3">
                      <Form.Label>
                        Pemilik {required && <RequiredInfo />}
                      </Form.Label>
                      <SelectStatic
                        control={control}
                        errors={errors?.fieldName?.index?.pemilik}
                        fieldName={`${fieldName}.${index}.pemilik`}
                        options={[
                          { label: "Negeri", value: "Negeri" },
                          { label: "Swasta", value: "Swasta" },
                        ]}
                        placeholder={"Pilih pemilik"}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>
                        Kondisi bangunan {required && <RequiredInfo />}
                      </Form.Label>
                      <SelectStatic
                        control={control}
                        errors={errors?.fieldName?.index?.kondisi_bangunan}
                        fieldName={`${fieldName}.${index}.kondisi_bangunan`}
                        options={[
                          { label: "Layak", value: "Layak" },
                          { label: "Rusak", value: "Rusak" },
                        ]}
                        placeholder={"Pilih kondisi bangunan"}
                      />
                    </Form.Group>

                    <FormInputControl
                      labelName={"Jumlah dokter"}
                      required={required}
                      isInvalid={!!errors?.fieldName?.index?.jumlah_dokter}
                      message={errors?.fieldName?.index?.jumlah_dokter?.message}
                      type={"number"}
                      register={register(`${fieldName}.${index}.jumlah_dokter`)}
                      placeholder={`Masukkan jumlah dokter`}
                    />

                    <FormInputControl
                      labelName={"Jumlah bidan"}
                      required={required}
                      isInvalid={!!errors?.fieldName?.index?.jumlah_bidan}
                      message={errors?.fieldName?.index?.jumlah_bidan?.message}
                      type={"number"}
                      register={register(`${fieldName}.${index}.jumlah_bidan`)}
                      placeholder={`Masukkan jumlah bidan`}
                    />

                    <FormInputControl
                      labelName={"Jumlah tenaga kesehatan"}
                      required={required}
                      isInvalid={
                        !!errors?.fieldName?.index?.jumlah_tenaga_kesehatan
                      }
                      message={
                        errors?.fieldName?.index?.jumlah_tenaga_kesehatan
                          ?.message
                      }
                      type={"number"}
                      register={register(
                        `${fieldName}.${index}.jumlah_tenaga_kesehatan`
                      )}
                      placeholder={`Masukkan jumlah tenaga kesehatan`}
                    />

                    <FormInputControl
                      labelName={"Jumlah pegawai lain"}
                      required={required}
                      isInvalid={
                        !!errors?.fieldName?.index?.jumlah_pegawai_lain
                      }
                      message={
                        errors?.fieldName?.index?.jumlah_pegawai_lain?.message
                      }
                      type={"number"}
                      register={register(
                        `${fieldName}.${index}.jumlah_pegawai_lain`
                      )}
                      placeholder={`Masukkan jumlah pegawai lain`}
                    />
                  </>
                )}
              </FieldArray>
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Muntaber/diare</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"167. Kejadian Muntaber/diare"}
                fieldName={"muntaber_diare.kejadian_muntaber_diare"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "muntaber_diare.kejadian_muntaber_diare",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "muntaber_diare.kejadian_muntaber_diare",
                  },
                ]}
              />
            </Col>
            {methods.watch("muntaber_diare.kejadian_muntaber_diare") &&
            methods.watch("muntaber_diare.kejadian_muntaber_diare") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"168. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"muntaber_diare.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"169. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"muntaber_diare.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Demam berdarah</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"170. Kejadian demam berdarah"}
                fieldName={"demam_berdarah.kejadian_demam_berdarah"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "demam_berdarah.kejadian_demam_berdarah",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "demam_berdarah.kejadian_demam_berdarah",
                  },
                ]}
              />
            </Col>
            {methods.watch("demam_berdarah.kejadian_demam_berdarah") &&
            methods.watch("demam_berdarah.kejadian_demam_berdarah") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"171. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"demam_berdarah.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"172. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"demam_berdarah.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Campak</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"173. Kejadian campak"}
                fieldName={"campak.kejadian_campak"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "campak.kejadian_campak",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "campak.kejadian_campak",
                  },
                ]}
              />
            </Col>
            {methods.watch("campak.kejadian_campak") &&
            methods.watch("campak.kejadian_campak") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"174. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"campak.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"175. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"campak.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Malaria</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"176. Kejadian malaria"}
                fieldName={"malaria.kejadian_malaria"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "malaria.kejadian_malaria",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "malaria.kejadian_malaria",
                  },
                ]}
              />
            </Col>
            {methods.watch("malaria.kejadian_malaria") &&
            methods.watch("malaria.kejadian_malaria") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"177. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"malaria.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"178. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"malaria.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Flu burung/SARS</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"179. Kejadian flu burung/SARS"}
                fieldName={"flu_burung_sars.kejadian_flu_burung_sars"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "flu_burung_sars.kejadian_flu_burung_sars",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "flu_burung_sars.kejadian_flu_burung_sars",
                  },
                ]}
              />
            </Col>
            {methods.watch("flu_burung_sars.kejadian_flu_burung_sars") &&
            methods.watch("flu_burung_sars.kejadian_flu_burung_sars") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"180. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"flu_burung_sars.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"181. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"flu_burung_sars.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Covid-19</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"182. Kejadian covid-19"}
                fieldName={"covid_19.kejadian_covid_19"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "covid_19.kejadian_covid_19",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "covid_19.kejadian_covid_19",
                  },
                ]}
              />
            </Col>
            {methods.watch("covid_19.kejadian_covid_19") &&
            methods.watch("covid_19.kejadian_covid_19") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"183. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"covid_19.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"184. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"covid_19.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Hepatitis B</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"185. Kejadian hepatitis b"}
                fieldName={"hepatitis_b.kejadian_hepatitis_b"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "hepatitis_b.kejadian_hepatitis_b",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "hepatitis_b.kejadian_hepatitis_b",
                  },
                ]}
              />
            </Col>
            {methods.watch("hepatitis_b.kejadian_hepatitis_b") &&
            methods.watch("hepatitis_b.kejadian_hepatitis_b") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"186. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"hepatitis_b.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"187. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"hepatitis_b.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Hepatitis E</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"188. Kejadian hepatitis e"}
                fieldName={"hepatitis_e.kejadian_hepatitis_e"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "hepatitis_e.kejadian_hepatitis_e",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "hepatitis_e.kejadian_hepatitis_e",
                  },
                ]}
              />
            </Col>
            {methods.watch("hepatitis_e.kejadian_hepatitis_e") &&
            methods.watch("hepatitis_e.kejadian_hepatitis_e") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"189. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"hepatitis_e.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"190. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"hepatitis_e.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Difteri</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"191. Kejadian difteri"}
                fieldName={"difteri.kejadian_difteri"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "difteri.kejadian_difteri",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "difteri.kejadian_difteri",
                  },
                ]}
              />
            </Col>
            {methods.watch("difteri.kejadian_difteri") &&
            methods.watch("difteri.kejadian_difteri") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"192. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"difteri.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"193. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"difteri.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Chikungunya</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"194. Kejadian chikungunya"}
                fieldName={"chikungunya.kejadian_chikungunya"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "chikungunya.kejadian_chikungunya",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "chikungunya.kejadian_chikungunya",
                  },
                ]}
              />
            </Col>
            {methods.watch("chikungunya.kejadian_chikungunya") &&
            methods.watch("chikungunya.kejadian_chikungunya") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"195. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"chikungunya.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"196. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"chikungunya.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Leptospirosis</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"197. Kejadian leptospirosis"}
                fieldName={"leptospirosis.kejadian_chikungunya"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "leptospirosis.kejadian_chikungunya",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "leptospirosis.kejadian_chikungunya",
                  },
                ]}
              />
            </Col>
            {methods.watch("leptospirosis.kejadian_chikungunya") &&
            methods.watch("leptospirosis.kejadian_chikungunya") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"198. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"leptospirosis.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"199. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"leptospirosis.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Kolera</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"200. Kejadian kolera"}
                fieldName={"kolera.kejadian_kolera"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "kolera.kejadian_kolera",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "kolera.kejadian_kolera",
                  },
                ]}
              />
            </Col>
            {methods.watch("kolera.kejadian_kolera") &&
            methods.watch("kolera.kejadian_kolera") === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"201. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"kolera.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"202. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={"kolera.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Gizi buruk (marasmus dan kwasiorkor)</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"203. Kejadian Gizi buruk (marasmus dan kwasiorkor)"}
                fieldName={
                  "gizi_buruk_marasmus_dan_kwasiorkor.kejadian_gizi_buruk_marasmus_dan_kwasiorkor"
                }
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName:
                      "gizi_buruk_marasmus_dan_kwasiorkor.kejadian_gizi_buruk_marasmus_dan_kwasiorkor",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName:
                      "gizi_buruk_marasmus_dan_kwasiorkor.kejadian_gizi_buruk_marasmus_dan_kwasiorkor",
                  },
                ]}
              />
            </Col>
            {methods.watch(
              "gizi_buruk_marasmus_dan_kwasiorkor.kejadian_gizi_buruk_marasmus_dan_kwasiorkor"
            ) === "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"204. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={
                      "gizi_buruk_marasmus_dan_kwasiorkor.jumlah_penderita"
                    }
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"205. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah mata air"}
                    fieldName={
                      "gizi_buruk_marasmus_dan_kwasiorkor.jumlah_meninggal"
                    }
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Penyakit lainnya</h5>
            </Col>
            <Col sm={12}>
              <Select
                labelName={"206. Kejadian penyakit lainnya"}
                fieldName={"penyakit_lainnya.kejadian_penyakit_lain"}
                required={true}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada",
                    value: "Ada",
                    fieldName: "penyakit_lainnya.kejadian_penyakit_lain",
                  },
                  {
                    label: "Tidak",
                    value: "Tidak",
                    fieldName: "penyakit_lainnya.kejadian_penyakit_lain",
                  },
                ]}
              />
            </Col>
            {methods.watch("penyakit_lainnya.kejadian_penyakit_lain") &&
            methods.watch("penyakit_lainnya.kejadian_penyakit_lain") ===
              "Ada" ? (
              <>
                <Col sm={12}>
                  <Input
                    labelName={"207. Nama penyakit"}
                    required={true}
                    placeholder={"Masukkan nama penyakit"}
                    fieldName={"penyakit_lainnya.nama_penyakit"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"208. Jumlah penderita (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah penderita"}
                    fieldName={"penyakit_lainnya.jumlah_penderita"}
                    type={"number"}
                  />
                </Col>
                <Col sm={12}>
                  <Input
                    labelName={"209. Jumlah meninggal (jiwa)"}
                    required={true}
                    placeholder={"Masukkan jumlah meninggal"}
                    fieldName={"penyakit_lainnya.jumlah_meninggal"}
                    type={"number"}
                  />
                </Col>
              </>
            ) : null}
            <Col sm={12}>
              <Input
                labelName={
                  "210. Jumlah warga peserta jaminan sosial kesehatan (jiwa)"
                }
                required={true}
                placeholder={"Masukkan jumlah warga"}
                fieldName={
                  "penyakit_lainnya.jumlah_warga_peserta_jaminan_sosial_kesehatan"
                }
                type={"number"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={
                  "211. Jumlah warga peserta jaminan sosial ketenagakerjaan (jiwa)"
                }
                required={true}
                placeholder={"Masukkan jumlah warga"}
                fieldName={
                  "penyakit_lainnya.jumlah_warga_peserta_jaminan_sosial_ketenagakerjaan"
                }
                type={"number"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Tempat ibadah (jumlah)</h5>
            </Col>
            <Col sm={12}>
              <Input
                labelName={"212. Masjid"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.masjid"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"213. Musala/surau/langgar"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.musala_surau_langgar"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"214. Gereja kristen"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.gereja_kristen"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"215. Gereja katolik"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.gereja_katolik"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"216. Kapel"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.kapel"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"217. Pura"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.pura"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"218. Wihara"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.wihara"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"219. kelenteng"}
                required={false}
                type={"number"}
                placeholder={"Masukkan jumlah"}
                fieldName={"tempat_ibadah.kelenteng"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"220. Lainnya (sebutkan)"}
                required={false}
                placeholder={"Masukkan lainnya"}
                fieldName={"tempat_ibadah.lainnya"}
              />
            </Col>
          </Row>

          <Row>
            <Col sm={12}>
              <h5>Situs cagar budaya (sebutkan)</h5>
            </Col>
            <Col sm={12}>
              <Input
                labelName={"221. Situs cagar budaya 1"}
                required={false}
                placeholder={"Masukkan situs cagar budaya"}
                fieldName={"situs_cagar_budaya.situs_cagar_budaya_1"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"222. Situs cagar budaya 2"}
                required={false}
                placeholder={"Masukkan situs cagar budaya"}
                fieldName={"situs_cagar_budaya.situs_cagar_budaya_2"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"223. Situs cagar budaya 3"}
                required={false}
                placeholder={"Masukkan situs cagar budaya"}
                fieldName={"situs_cagar_budaya.situs_cagar_budaya_3"}
              />
            </Col>
            <Col sm={12}>
              <h5>Keberadaan suku terasing</h5>
            </Col>
            <Col sm={12}>
              <Input
                labelName={"224. Perkiraan jumlah keluarga"}
                required={false}
                placeholder={"Masukkan jumlah"}
                fieldName={"situs_cagar_budaya.perkiraan_jumlah_keluarga"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"225. Perkiraan jumlah jiwa"}
                required={false}
                placeholder={"Masukkan jumlah"}
                fieldName={"situs_cagar_budaya.perkiraan_jumlah_jiwa"}
              />
            </Col>
            <Col sm={12}>
              <Select
                labelName={
                  "226. Ruang publik terbuka yang  peruntukan utamanya sebagai tempat bagi warga desa/kelurahan untuk bersantai/bermain tanpa perlu membayar (misalnya: lapangan terbuka/alun-alun, taman, dll)"
                }
                fieldName={
                  "situs_cagar_budaya.ruang_publik_terbuka_yang_peruntukan_utamanya_sebagai_tempat_bagi_warga_desa_kelurahan_untuk_bersantai_bermain_tanpa_perlu_membayar"
                }
                required={false}
                placeholder={"Pilih data terkait"}
                options={[
                  {
                    label: "Ada, dikelola",
                    value: "Ada, dikelola",
                    fieldName:
                      "situs_cagar_budaya.ruang_publik_terbuka_yang_peruntukan_utamanya_sebagai_tempat_bagi_warga_desa_kelurahan_untuk_bersantai_bermain_tanpa_perlu_membayar",
                  },
                  {
                    label: "Ada, tidak dikelola",
                    value: "Ada, tidak dikelola",
                    fieldName:
                      "situs_cagar_budaya.ruang_publik_terbuka_yang_peruntukan_utamanya_sebagai_tempat_bagi_warga_desa_kelurahan_untuk_bersantai_bermain_tanpa_perlu_membayar",
                  },
                  {
                    label: "Tidak ada",
                    value: "Tidak ada",
                    fieldName:
                      "situs_cagar_budaya.ruang_publik_terbuka_yang_peruntukan_utamanya_sebagai_tempat_bagi_warga_desa_kelurahan_untuk_bersantai_bermain_tanpa_perlu_membayar",
                  },
                ]}
              />
            </Col>
            <Col sm={12}>
              <h5>Nama kearifan lokal/adat (tuliskan)</h5>
            </Col>
            <Col sm={12}>
              <Input
                labelName={"227. Kehamilan"}
                required={false}
                placeholder={"Masukkan data terkait"}
                fieldName={"situs_cagar_budaya.kehamilan"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"228. Kelahiran"}
                required={false}
                placeholder={"Masukkan data terkait"}
                fieldName={"situs_cagar_budaya.kelahiran"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"229. Pekerjaan/pencaharian"}
                required={false}
                placeholder={"Masukkan data terkait"}
                fieldName={"situs_cagar_budaya.pekerjaan_pencaharian"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"230. Alam/lingkungan hidup"}
                required={false}
                placeholder={"Masukkan data terkait"}
                fieldName={"situs_cagar_budaya.alam_lingkungan_hidup"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"231. Perkawinan"}
                required={false}
                placeholder={"Masukkan data terkait"}
                fieldName={"situs_cagar_budaya.perkawinan"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"232. Kehidupan warga"}
                required={false}
                placeholder={"Masukkan data terkait"}
                fieldName={"situs_cagar_budaya.kehidupan_warga"}
              />
            </Col>
            <Col sm={12}>
              <Input
                labelName={"233. Kematian"}
                required={false}
                placeholder={"Masukkan data terkait"}
                fieldName={"situs_cagar_budaya.kematian"}
              />
            </Col>
          </Row>
        </div>
        <WizardForm.Navigation />
      </form>
    </FormProvider>
  )
}
