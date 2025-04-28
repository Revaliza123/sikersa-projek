/** String Helper Title Case  */
export function toTitleCase(str: string | number | undefined) {
  if (typeof str === "number") return str.toString()
  if (typeof str === 'object') return '-'
  if (!str) return str || "-"
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export function Abbreviation(text: any) {
  return text
    ?.split(/\s/)
    .reduce(function (accumulator: any, word: any) {
      return accumulator + word.charAt(0)
    }, "")
    .substring(0, 2)
}

export function replaceAll(str: string, mapObj: any) {
  if (!str) return str

  if (typeof str !== "string") {
    str = String(str)
  }

  const re = new RegExp(Object.keys(mapObj).join("|"), "gi")

  return str.replace(re, function (matched: any) {
    return mapObj[matched.toLowerCase()]
  })
}

export function camelToSnakeCase(str: string) {
  return str.replace(
    new RegExp(/[A-Z]/g),
    (letter) => `_${letter.toLowerCase()}`
  )
}
