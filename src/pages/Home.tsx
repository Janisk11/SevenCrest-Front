import React from 'react'
import { Link } from 'react-router-dom'

import {
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material'
import Grid from '@mui/material/Grid'

import herobgxs from '../static/images/hero-bg-xs.jpg'
import herobgsm from '../static/images/hero-bg-sm.jpg'
import herobgmd from '../static/images/hero-bg-md.jpg'
import herobglg from '../static/images/hero-bg-lg.jpg'
import herobgxl from '../static/images/hero-bg-xl.jpg'
import gentsImg from '../static/images/gents.jpg'
import ladiesImg from '../static/images/ladies.jpg'
import kidsImg from '../static/images/kids.jpg'

const categories = [
  { name: 'Gents', Img: gentsImg, whereto:'/gents', clr: 'primary' as const },
  { name: 'Ladies', Img: ladiesImg,  whereto:'/ladies', clr: 'secondary' as const },
  { name: 'Kids', Img: kidsImg,  whereto:'/kids', clr: 'success' as const },
]

const Home: React.FC = () => {
  return (
    <Container disableGutters maxWidth="xl" sx={{ textAlign: 'center' }}>
      <Box
        component="section"
        sx={{
          backgroundImage: {
            xs: `url(${herobgxs})`,
            sm: `url(${herobgsm})`,
            md: `url(${herobgmd})`,
            lg: `url(${herobglg})`,
            xl: `url(${herobgxl})`,
          },
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          p: {
            xs: '4rem 0',
            sm: '6rem 0',
            md: '8rem 0',
            lg: '10rem 0',
            xl: '12rem 0',
          },
        }}
      >
        <Typography variant="h3" color="white" gutterBottom>
          Premium Jerseys for Every Fan
        </Typography>
        <Typography variant="h6" color="white" gutterBottom>
          Shop the latest jerseys for Gents, Ladies & Kids
        </Typography>
        {categories.map((category, idx) => (
          <Button
            key={idx}
            variant="contained"
            color={category.clr}
            style={{ margin: '0.5rem' }}
            component={Link}
            to={category.whereto}
          >
            Shop {category.name}
          </Button>
        ))}
      </Box>

      <Box component="section" sx={{ p: { xs: '2rem 2rem', md: '4rem 3rem' } }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="240"
                  image={category.Img}
                  alt={`${category.name} Jersey`}
                />
                <CardContent sx={{ backgroundColor: 'primary' }}>
                  <Typography variant="h6">{category.name}</Typography>
                  <Button
                    component={Link}
                    to={category.whereto}
                    variant="outlined"
                    fullWidth
                  >
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box component="section" sx={{ p: { xs: '2rem 2rem', md: '4rem 3rem' } }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Featured Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3].map((productId) => (
            <Grid key={productId} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`/images/jersey${productId}.jpg`}
                  alt={`Jersey ${productId}`}
                />
                <CardContent>
                  <Typography variant="subtitle1">
                    Team Jersey {productId}
                  </Typography>
                  <Typography variant="body2">€{30 + productId * 5}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Home
