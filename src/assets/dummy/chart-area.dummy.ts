export const JUMLAH_PENDUDUK_TIAP_DUSUN_AREA = {
  radar: {
    // shape: 'circle',
    indicator: [
      { name: 'Dusun 1', max: 6500 },
      { name: 'Dusun 2', max: 16000 },
      { name: 'Dusun 3', max: 30000 },
      { name: 'Dusun 4', max: 38000 },
      { name: 'Dusun 5', max: 52000 },
      { name: 'Dusun 6', max: 25000 },
      { name: 'Dusun 7', max: 25000 },
    ],
    radius: '75%',
    center: ['50%', '52%'],
  },

  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget',
          areaStyle: {
            color: 'rgba(251, 233, 71, 0.4)'
          },
          lineStyle: {
            color: 'rgba(251, 233, 71, 1)',
            borderWidth: '2px'
          }
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending',
          areaStyle: {
            color: 'rgba(1, 204, 143, 0.4)'
          },
          lineStyle: {
            color: 'rgba(1, 204, 143, 1)',
            borderWidth: '2px'
          }
        },
        {
          value: [4000, 8000, 18000, 36000, 4000, 5800],
          name: 'Actual Spending',
          areaStyle: {
            color: 'rgba(145, 147, 251, 0.4)'
          },
          lineStyle: {
            color: 'rgba(145, 147, 251, 1)',
            borderWidth: '2px'
          }
        },
      ]
    }
  ]
};