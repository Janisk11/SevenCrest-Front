import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Box,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Product } from '../../hooks/useProducts'

interface Props {
  productId: number
  category?: string
}

const ProductDetailPage: React.FC<Props> = ({ productId, category }) => {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await axios.get(
          `https://dummyjson.com/products/${productId}`
        )
        setProduct(res.data)
      } catch (err: any) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) return <CircularProgress />
  if (error) return <Typography color="error">{error}</Typography>
  if (!product) return <Typography>No product found</Typography>

  return (
    <Box maxWidth="md" sx={{ mx: 'auto', px: { xs: 2, sm: 4 }, mt: 4 }}>
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={() => navigate(category ? `/${category}` : '/products')}
      >
        Back to {category}
      </Button>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={product.thumbnail}
          alt={product.title}
          style={{ objectFit: 'contain' }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            €{product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="subtitle2">
            Category: {product.category}
          </Typography>
          <Typography variant="subtitle2">Rating: {product.rating}</Typography>
        </CardContent>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" color="primary">
            Add to Cart
          </Button>
        </Box>
      </Card>
    </Box>
  )
}

export default ProductDetailPage
