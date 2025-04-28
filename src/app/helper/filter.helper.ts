import { get, isObject } from "lodash"

export const generateFilter = (data: any) => {
  console.log(data)
  let filters: any = []
  Object.keys(data)
    ?.filter((f: any) => data[f])
    .map((field: any) => {
      const value = data[field]
      if (isObject(value)) {
        const p = isObject(value) ? toDotList({ [field]: value }) : value

        Object.keys(p)?.map((key: any) => {
          filters = [
            ...filters,
            {
              value: get(data, key),
              field: key,
            },
          ]
        })
      } else {
        filters = [
          ...filters,
          {
            value: value,
            field: field,
          },
        ]
      }
    })
  return filters?.filter((f: any) => f?.value)
}

function toDotList(obj: any) {
  function walk(into: any, obj: any, prefix: any = []) {
    Object.entries(obj).forEach((item) => {
      const key = item[0]
      const val = item[1] ? item[1] : ""
      if (typeof val === "object" && !Array.isArray(val))
        walk(into, val, [...prefix, key])
      else into[[...prefix, key].join(".")] = val
    })
  }
  const out = {}
  walk(out, obj)
  return out
}

export function flatObject(o: Record<string, any>, pk: string = "") {
  if (!o) return

  let result = {} as any

  Object.keys(o).forEach((k: string) => {
    const v = o[k]
    const _pk = pk ? `${pk}.${k}` : k
    if (typeof v === "object") {
      result = { ...result, ...flatObject(v, _pk) }
    } else {
      result[_pk] = v
    }
  })

  return result
}

export function generateFilterWithSkipDotNotation(o: Record<string, any>) {
  if (!o) return

  const result = [] as any[]
  const fo = flatObject(o)

  Object.keys(fo).forEach((k: string) => {
    if (fo[k]) {
      result.push({ field: k, value: fo[k] })
    }
  })

  return result
}
