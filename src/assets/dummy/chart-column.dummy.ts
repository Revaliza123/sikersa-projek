import { getColorVarCss } from '@app/helper/color.helper';

export const PRASARANA_AIR_BERSIH_BG = {
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '0%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    data: [],
  },
  // toolbox: {
  //   show: true,
  //   orient: 'vertical',
  //   left: 'right',
  //   top: 'center',
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     magicType: { show: true, type: ['line', 'bar', 'stack'] },
  //     restore: { show: true },
  //     saveAsImage: { show: true },
  //   },
  // },
  xAxis: [
    {
      type: 'category',
      data: [
        'Dusun 1',
        'Dusun 2',
        'Dusun 3',
        'Dusun 4',
        'Dusun 5',
        'Dusun 6',
        'Dusun 7',
        'Dusun 8',
        'Dusun 9',
        'Dusun 10',
      ],
      axisLabel: {
        show: false,
        rotate: 0,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
      axisTick: {
        show: false,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
        onZero: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Prasarana Air Bersih',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(134, 151, 168, 0.15)',
        borderRadius: [4],
      },
      emphasis: {
        focus: 'series',
      },
      smooth: true,
      itemStyle: {
        color: getColorVarCss('--primary'),
        borderRadius: [0, 0, 4, 4],
      },
      data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390],
    },
  ],
};

export const JUMLAH_PENDUDUK_GENDER = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '4%',
    right: '2%',
    bottom: '25%',
    containLabel: false,
  },
  legend: {
    show: true,
    bottom: 0,
  },
  // toolbox: {
  //   show: true,
  //   orient: 'vertical',
  //   left: 'right',
  //   top: 'center',
  //   feature: {
  //     mark: { show: true },
  //     dataView: { show: true, readOnly: false },
  //     magicType: { show: true, type: ['line', 'bar', 'stack'] },
  //     restore: { show: true },
  //     saveAsImage: { show: true },
  //   },
  // },
  xAxis: [
    {
      type: 'category',
      data: ['Dusun 1', 'Dusun 2', 'Dusun 3', 'Dusun 4', 'Dusun 5', 'Dusun 6'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Laki-Laki',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390],
    },
    {
      name: 'Perempuan',
      type: 'bar',
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: '#A6EB9D', borderRadius: [4] },
      data: [220, 182, 191, 234, 290, 320, 332, 301, 334, 390],
    },
  ],
};

export const JUMLAH_PENDUDUK_PEKERJAAN = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Guru', 'TNI', 'Petani', 'Wiraswasta', 'Pelajar', 'Pengangguran'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Laki-Laki',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: [320, 332, 301, 334, 390, 320, 332, 301, 334, 390],
    },
    {
      name: 'Perempuan',
      type: 'bar',
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: '#A6EB9D', borderRadius: [4] },
      data: [220, 182, 191, 234, 290, 320, 332, 301, 334, 390],
    },
  ],
};

export const JUMLAH_ANAK_LULUS_PENDIDIKAN_UMUM = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['SD', 'SMP', 'SMA', 'SMK', 'D3', 'S1', 'S2'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Lulus Pendidikan',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: [320, 232, 201, 334, 100, 200, 50],
    },
  ],
};

export const JUMLAH_SARANA_PENDIDIKAN = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['SD', 'SMP', 'SMA', 'SMK', 'Paud', 'Universitas', 'Perpustakaan'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Lulus Pendidikan',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: [320, 232, 201, 334, 100, 200, 50],
    },
  ],
};

export const RASIO_NAKES = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Perawat', 'Mantri', 'Bidan', 'Dokter', 'Spesialis'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Lulus Pendidikan',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: [320, 232, 201, 334, 100, 200, 50],
    },
  ],
};

export const JUMLAH_LAHAN_PERTANIAN = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Perawat', 'Mantri', 'Bidan', 'Dokter', 'Spesialis'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Lulus Pendidikan',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: [320, 232, 201, 334, 100, 200, 50],
    },
  ],
};

export const LAHAN_PERTANIAN = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['2018', '2019', '2020', '2021', '2022'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Lahan Pertanian',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: [320, 232, 201, 334, 100, 200, 50],
    },
  ],
};

export const LUAS_HUTAN = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '2%',
    right: '2%',
    bottom: '2%',
    containLabel: true,
  },
  legend: {
    show: false,
    bottom: 0,
  },
  xAxis: [
    {
      type: 'category',
      data: ['2018', '2019', '2020', '2021', '2022'],
      axisLabel: {
        rotate: 0,
        color: '#4F4F4F',
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        onZero: false,
        color: '#fff',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: getColorVarCss('--black-75'),
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: 'rgba(134, 151, 168, 0.85)',
      },
    },
  ],
  series: [
    {
      name: 'Luas Hutan',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--secondary'), borderRadius: [4] },
      data: [320, 232, 201, 334, 100, 200, 50],
    },
  ],
};
