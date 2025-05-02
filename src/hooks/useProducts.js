import { getProducts } from '../services/product'
import { useQuery } from '@tanstack/react-query'

function useProducts() {
    return useQuery({
        queryKey: ['Products'],
        queryFn: getProducts
    })
}

export default useProducts