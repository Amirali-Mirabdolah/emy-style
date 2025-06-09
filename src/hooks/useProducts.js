import { getProducts } from '../services/product'
import { useQuery } from '@tanstack/react-query'

function useProducts(limit) {
    return useQuery({
        queryKey: ['Products'],
        queryFn: () => getProducts(limit)
    })
}

export default useProducts