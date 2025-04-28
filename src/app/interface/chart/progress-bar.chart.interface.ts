export interface IProgressBarChart {
  limit?: number
  title?: string
  description?: string
  placement?: string
  url?: string | ""
  parser?: IProgressbarParser
  params?: any
  isLocationFilter?: boolean
  isWithImage?: boolean
  filtersMore?: any
}

export interface IProgressbarParser {
  items?: any
  formatter?: any
  name?: any
  value?: any
  suffix?: any
  isPercentageValue?: boolean
  isPartyNameAliasAsImage?: boolean
}
