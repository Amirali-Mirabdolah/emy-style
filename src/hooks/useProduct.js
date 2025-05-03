import { getProduct } from '../services/product'
import { useQuery } from '@tanstack/react-query'

function useProduct(id) {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => getProduct(id)
    })
}

export default useProduct