// pages/categories/LadiesPage.tsx
import React from 'react'
import EnhancedCategoryPage from '../../components/categories/EnhancedCategoryPage'

const Ladies: React.FC = () => {
  return (
    <EnhancedCategoryPage
      category="womens-dresses" // actual Fake Store category
      title="ladies" // title shown on page
    />
  )
}

export default Ladies
