import { getColorVarCss } from '@app/helper/color.helper';

export const JUMLAH_PENDUDUK_TIAP_DUSUN = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'break',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      labelLine: {
        length: 5,
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Dusun 1',
          itemStyle: { color: getColorVarCss('--secondary') },
        },
        {
          value: 1735,
          name: 'Dusun 2',
          itemStyle: { color: getColorVarCss('--c1') },
        },
        {
          value: 980,
          name: 'Dusun 3',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        { value: 300, name: 'Dusun 5', itemStyle: { color: '#9193FB' } },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: '#fff',
        },
      },
    },
  ],
};

export const JUMLAH_PRASARANA_UMUM = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'break',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      labelLine: {
        length: 5,
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Balai Pertemuan',
          itemStyle: { color: getColorVarCss('--secondary') },
        },
        {
          value: 735,
          name: 'Pasar Desa',
          itemStyle: { color: getColorVarCss('--c1') },
        },
        {
          value: 1280,
          name: 'Sumur Desa',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        { value: 300, name: 'Olahraga', itemStyle: { color: '#9193FB' } },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const JUMLAH_PENDUDUK_JENIS_GENDER = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: true,
    bottom: 0,
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'elipsis',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      labelLine: {
        length: 5,
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Laki-Laki',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 735,
          name: 'Perempuan',
          itemStyle: { color: getColorVarCss('--c1') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const JUMLAH_PENDUDUK_KEWARGANEGARAAN = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    bottom: 0,
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'break',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      labelLine: {
        length: 5,
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      data: [
        {
          value: 1048,
          name: 'WNI',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 300,
          name: 'WNA',
          itemStyle: { color: getColorVarCss('--c3') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const STATUS_PERKAWINAN = {
  tooltip: {
    trigger: 'item',
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'truncate',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      labelLine: {
        length: 5,
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Kawin',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 735,
          name: 'Belum Kawin',
          itemStyle: { color: getColorVarCss('--secondary') },
        },
        {
          value: 300,
          name: 'Kawin\nTidak\nTercatat',
          itemStyle: { color: getColorVarCss('--c1') },
        },
        {
          value: 150,
          name: 'Kawin\nTercatat',
          itemStyle: { color: getColorVarCss('--c2') },
        },
        {
          value: 435,
          name: 'Cerai',
          itemStyle: { color: getColorVarCss('--c3') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const JUMLAH_PENDIDIKAN_KHUSUS = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    bottom: 0,
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'break',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      labelLine: {
        length: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Pesantren',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 735,
          name: 'Sekolah Luar Biasa',
          itemStyle: { color: getColorVarCss('--secondary') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const JUMLAH_PUTUS_SEKOLAH = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: true,
    bottom: 0,
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'break',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      labelLine: {
        length: 5,
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Tidak Lulus',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 735,
          name: 'Tidak Bersekolah',
          itemStyle: { color: getColorVarCss('--c3') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const LUAS_WILAYAH_PENGGUNAAN = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    bottom: 0,
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        overflow: 'break',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      labelLine: {
        length: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Tanah\nSawah',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 450,
          name: 'Tanah Kering',
          itemStyle: { color: getColorVarCss('--secondary') },
        },
        {
          value: 145,
          name: 'Tanah\nUmum',
          itemStyle: { color: getColorVarCss('--c1') },
        },
        {
          value: 355,
          name: 'Tanah Hutan',
          itemStyle: { color: getColorVarCss('--c2') },
        },
        {
          value: 155,
          name: 'Tanah Perkebunan',
          itemStyle: { color: getColorVarCss('--c3') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const KEJADIAN_KRIMINAL = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    bottom: 0,
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      labelLine: {
        length: 10,
      },
      data: [
        {
          value: 3,
          name: 'Pemerkosaan',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 10,
          name: 'Pencurian',
          itemStyle: { color: getColorVarCss('--secondary') },
        },
        {
          value: 20,
          name: 'Perkelahian',
          itemStyle: { color: getColorVarCss('--c1') },
        },
        {
          value: 2,
          name: 'Pembunuhan',
          itemStyle: { color: getColorVarCss('--c2') },
        },
        {
          value: 1,
          name: 'Penipuan',
          itemStyle: { color: getColorVarCss('--c3') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};

export const KEPEMILIKAN_HUTAN_LUAS = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    show: false,
    bottom: 0,
  },
  series: [
    {
      name: '',
      type: 'pie',
      radius: ['50%', '70%'],
      label: {
        // overflow: 'break',
        lineHeight: 12,
        color: 'rgba(134, 151, 168, 0.85)',
      },
      itemStyle: {
        borderColor: getColorVarCss('--white'),
        borderWidth: 5,
      },
      labelLine: {
        length: 5,
      },
      data: [
        {
          value: 1048,
          name: 'Perhutani',
          itemStyle: { color: getColorVarCss('--primary') },
        },
        {
          value: 735,
          name: 'Negara',
          itemStyle: { color: getColorVarCss('--secondary') },
        },
        {
          value: 735,
          name: 'Perorangan',
          itemStyle: { color: getColorVarCss('--c1') },
        },
        {
          value: 735,
          name: 'Adat',
          itemStyle: { color: getColorVarCss('--c2') },
        },
      ],
      emphasis: {
        itemStyle: {
          borderWidth: 5,
          borderColor: getColorVarCss('--white'),
        },
      },
    },
  ],
};
