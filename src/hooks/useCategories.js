import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../services/product'

function useCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })
}

export default useCategories