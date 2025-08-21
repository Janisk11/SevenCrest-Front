import React, { useEffect, useState } from 'react'
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
    setLoading(true)
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch product')
        return res.json()
      })
      .then((data: Product) => {
        setProduct(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [productId])

  if (loading) return <CircularProgress />
  if (error) return <Typography color="error">{error}</Typography>
  if (!product) return <Typography>No product found</Typography>

  return (
    <Box maxWidth="md" sx={{ mx: 'auto', px: { xs: 2, sm: 4 }, mt: 4 }}>
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={() => category && navigate(`/${category}`)}
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
          <Typography variant="subtitle2">
            Rating: {product.rating} 
          </Typography>
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
