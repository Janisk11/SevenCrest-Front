import { Route, Routes } from 'react-router-dom'

import './App.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './theme'
import ResponsiveAppBar from './components/layout/ResponsiveAppBar'
import EnhancedCategoryPageWrapper from './pages/EnhancedCategoryPageWrapper'
import ProductDetailPageWrapper from './pages/ProductDetailPageWrapper'

import Footer from './components/layout/Footer'

import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/gents"
          element={
            <EnhancedCategoryPage category="mens-shirts" title="gents" />
          }
        />
        <Route
          path="/ladies"
          element={
            <EnhancedCategoryPage category="womens-dresses" title="ladies" />
          }
        />
        <Route
          path="/kids"
          element={<EnhancedCategoryPage category="tops" title="kids" />}
        />
        <Route path="/:category/:id" element={<ProductDetailPageWrapper />} /> */}
        <Route path="/:category" element={<EnhancedCategoryPageWrapper />} />
        <Route path="/:category/:id" element={<ProductDetailPageWrapper />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  )
}

// Wrapper to extract productId from route params
// const ProductDetailPageWrapper = () => {
//   const { category, id } = useParams<{ category: string; id: string }>()
//   if (!id) return <div>Invalid Product</div>
//   return <ProductDetailPage productId={parseInt(id, 10)} category={category} />
// }

export default App
