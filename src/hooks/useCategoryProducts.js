import { useQuery } from "@tanstack/react-query";
import { getCategoryProducts } from "../services/product";

function useCategoryProducts(id) {
    return useQuery({
        queryKey: ['categoryProducts', id],
        queryFn: () => getCategoryProducts(id)
    })
}

export default useCategoryProducts