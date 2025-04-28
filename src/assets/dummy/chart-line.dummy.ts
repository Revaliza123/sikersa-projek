import { getColorVarCss } from '@app/helper/color.helper';

export const JUMLAH_PENDUDUK = {
  tooltip: {
    trigger: 'item',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: '5%',
    left: '6%',
    right: '2%',
    bottom: '2%',
    containLabel: false,
  },
  xAxis: {
    type: 'category',
    data: ['One', 'Two', 'Three', 'Four', 'Five', 'Six'],
    axisLine: { show: false, onZero: false, color: '#fff' },
    boundaryGap: false,
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getColorVarCss('--black-75'),
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLine: { show: false, onZero: false },
    boundaryGap: [0, '10%'],
    axisTick: {
      show: false,
    },
    axisLabel: {
      color: 'rgba(134, 151, 168, 0.85)',
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: getColorVarCss('--black-75'),
      },
    },
  },
  series: [
    {
      data: [-100, -30, -90, 60, -10, 20, -100],
      type: 'line',
      symbolSize: 10,
      symbol: 'circle',
      smooth: true,
      lineStyle: {
        width: 3,
      },
      itemStyle: { color: getColorVarCss('--primary') },
      emphasis: {
        focus: 'series',
      },
    },
  ],
};
