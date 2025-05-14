import { useQuery } from "@tanstack/react-query";
import { getProductsByCategory } from "../services/product";

function useCategory(id) {
    return useQuery({
        queryKey: ['productsCategory', id],
        queryFn: () => getProductsByCategory(id)
    })
}

export default useCategory