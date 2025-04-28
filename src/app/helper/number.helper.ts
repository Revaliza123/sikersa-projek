export function numberCurrencyID(value: any) {
  return `Rp. ${(parseFloat(value) || 0).toLocaleString("id-ID")}`
}
export function formatThousand(value: any, maxAfterComma: number = 2) {
  return `${(parseFloat(value) || 0).toLocaleString("id-ID", {
    maximumFractionDigits: maxAfterComma,
  })}`
}
export function formatPercentage(value: any, maxAfterComma: number = 1) {
  return `${(parseFloat(value) || 0).toLocaleString("id-ID", {
    maximumFractionDigits: maxAfterComma,
  })}`
}

export const decimalNumberFormat = (number: any, afterComma: number = 1) => {
  return number ? number.toFixed(afterComma) : 0
}

const sufixes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
export const getBytes = (bytes: any) => {
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return (
    (!bytes && "0 Bytes") ||
    (bytes / Math.pow(1024, i)).toFixed(2) + " " + sufixes[i]
  )
}
