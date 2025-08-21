import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetailPage from '../components/products/ProductDetailPage'

const ProductDetailPageWrapper: React.FC = () => {
  const { category, id } = useParams<{ category: string; id: string }>()
  if (!id) return <div>Invalid Product</div>

  return <ProductDetailPage productId={parseInt(id, 10)} category={category} />
}

export default ProductDetailPageWrapper
