import { useParams } from 'react-router-dom'
import EnhancedCategoryPage from '../components/categories/EnhancedCategoryPage'
import categoryMap from '../utils/categoryMap'

export default function EnhancedCategoryPageWrapper() {
    const { category } = useParams<{ category: string }>()

    // fallback if category doesn't exist in map
    if (!category || !categoryMap[category]) {
        return <div>Category not found</div>
    }

    const { apiCategory, title } = categoryMap[category]

    return <EnhancedCategoryPage category={apiCategory} title={title} />
}
