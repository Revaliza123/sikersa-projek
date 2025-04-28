import { IEchartOptions } from "./echart-options.interface"

export interface IChartParser {
  series?: any
  name: any
  limit?: number
  color?: "repeat" | "single" | string
  orientation?: "horizontal" | "vertical"
  stack?: "total" | ""
  customOptions?: IEchartOptions | Record<string, any>
  customColor?: string
  customRadius?: string[]
  page?: number
}
