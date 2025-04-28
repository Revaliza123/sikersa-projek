import { getColorVarCss } from '@app/helper/color.helper';
import { reverse } from 'lodash';

export const JUMLAH_PENDUDUK_AGAMA = {
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
  yAxis: [
    {
      type: 'category',
      data: reverse([
        'Islam',
        'Kristen',
        'Katolik',
        'Hindu',
        'Budha',
        'Konghucu',
      ]),
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
  xAxis: [
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
      name: 'Agama',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: reverse([720, 432, 301, 134, 190, 60]),
    },
  ],
};

export const JUMLAH_PENDUDUK_GOLONGAN_DARAH = {
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
  yAxis: [
    {
      type: 'category',
      data: reverse(['O', 'A', 'A+', 'AB', 'B', 'Tidak Tahu']),
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
  xAxis: [
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
      name: 'Agama',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--c1'), borderRadius: [4] },
      data: reverse([720, 432, 301, 134, 190, 60]),
    },
  ],
};

export const DEMOGRAFI_PENDIDIKAN_KK = {
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
  yAxis: [
    {
      type: 'category',
      data: reverse(['SD', 'SMP', 'SMA', 'SMK', 'S1', 'S2']),
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
  xAxis: [
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
      name: 'Agama',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary'), borderRadius: [4] },
      data: reverse([720, 432, 301, 134, 190, 60]),
    },
  ],
};

export const DEMOGRAFI_PENDIDIKAN_DITEMPUH = {
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
  yAxis: [
    {
      type: 'category',
      data: reverse(['SD', 'SMP', 'SMA', 'SMK', 'S1', 'S2']),
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
  xAxis: [
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
      name: 'Agama',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--c3'), borderRadius: [4] },
      data: reverse([720, 432, 301, 134, 190, 60]),
    },
  ],
};

export const RADIO_MURID_GURU = {
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
  yAxis: [
    {
      type: 'category',
      data: reverse(['SD', 'SMP', 'SMA', 'SMK', 'S1', 'S2']),
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
  xAxis: [
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
      name: 'Agama',
      type: 'bar',
      barGap: 0.1,
      barWidth: '25px',
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--c1'), borderRadius: [4] },
      data: reverse([720, 432, 301, 134, 190, 60]),
    },
  ],
};

export const KEPEMILIKAN_LAHAN_PERTANIAN = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
    },
  },
  legend: { show: false },
  grid: {
    top: '5',
    left: '2%',
    right: '2%',
    bottom: '5%',
    containLabel: true,
  },
  xAxis: {
    type: 'value',
    axisLine: { show: false },
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed',
        color: getColorVarCss('--black-75'),
      },
    },
  },
  yAxis: {
    type: 'category',
    axisLine: { show: false },
    data: ['Perkebunan', 'Buah-buahan', 'Pangan'],
    splitLine: {
      show: false,
      lineStyle: {
        color: getColorVarCss('--black-75'),
      },
    },
  },
  series: [
    {
      name: 'Adat',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--primary') },
      data: [320, 302, 301, 334, 390, 330, 320],
    },
    {
      name: 'Perhutani',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--secondary') },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Negara',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--c1') },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Perorangan',
      type: 'bar',
      stack: 'total',
      label: {
        show: false,
      },
      emphasis: {
        focus: 'series',
      },
      itemStyle: { color: getColorVarCss('--c3') },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
};
