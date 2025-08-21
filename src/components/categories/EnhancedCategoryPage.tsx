import React from 'react'
import { Link } from 'react-router-dom'
import {
  Grid,
  Typography,
  CircularProgress,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from '@mui/material'
import { useProducts } from '../../hooks/useProducts'

interface Props {
  category: string
  title: string
}

const EnhancedCategoryPage: React.FC<Props> = ({ category, title }) => {
  const { products, loading, error } = useProducts(category)

  if (loading) return <CircularProgress />
  if (error) return <Typography color="error">{error}</Typography>

  return (
    <Box maxWidth="xl" sx={{ mx: 'auto', px: { xs: 2, sm: 8 } }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.thumbnail} // change the replace option as it is used for fake store image api
                alt={product.title}
                style={{ objectFit: 'contain' }}
              />
              <CardContent>
                <Typography variant="subtitle1" noWrap>
                  {product.title}
                </Typography>
                <Typography variant="h6">€{product.price}</Typography>
              </CardContent>
              <CardActions>
                {/* <Button size="small">Add to Cart</Button> */}
                <Button
                  size="small"
                  component={Link}
                  to={`/${title}/${product.id}`}
                  target="_blank"
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default EnhancedCategoryPage
