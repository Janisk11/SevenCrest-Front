import { useEffect, useState } from 'react'
import axios from 'axios'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  thumbnail: string
  rating: number
}

const API_URL = 'https://dummyjson.com/products'

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const fetchData = async () => {
      try {
        let url = API_URL
        if (category) {
          url = `${API_URL}/category/${category}`
        }

        const res = await axios.get(url)
        const data = res.data

        setProducts(data.products)
      } catch (err: any) {
        setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [category])

  return { products, loading, error }
}
