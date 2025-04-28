export interface IEchartOptions {
  name?: any
  legend?: any
  tooltip?: any
  xAxis?: any
  yAxis?: any
  valueAxis?: any
  categoryAxis?: any
  grid?: any
  label?: any
  valueAxisTextStyle?: any // https://echarts.apache.org/en/option.html#yAxis.data.textStyle
  categoryAxisTextStyle?: any // https://echarts.apache.org/en/option.html#yAxis.data.textStyle
  [key: string]: any
}
