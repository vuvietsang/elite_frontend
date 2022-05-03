import { useQuery } from "react-query";
import { getAllProduct } from "../../../api/productService";

const useProducts = (
  pageNumber: number,
  pageSize: number,
  search: string,
  sort: string
) => {
  return useQuery(`getAllProducts${pageNumber}${search}${sort}`, async () => {
    return getAllProduct(pageNumber, pageSize, search, sort);
  });
};

export default useProducts;
