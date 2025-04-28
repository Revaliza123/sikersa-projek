import { getByIdController } from "@app/services/main.service"
import axios from "axios"
import { useEffect, useState } from "react"

export function useGetById(path: string, id: string | number) {
  const [data, setData] = useState<any | null>(null)
  const [error, setError] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const source = axios.CancelToken.source()

  const fetcher = async () => {
    setLoading(true)
    try {
      const res = await getByIdController(path, id, source.token, true)
      setData(res.data)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (path && id) {
      fetcher()
    }
  }, [path, id])

  return { data, loading, error }
}
