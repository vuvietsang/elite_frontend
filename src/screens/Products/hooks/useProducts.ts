import { useQuery } from "react-query";
import { getAllProduct } from "../../../api/productService";

const useProducts = (pageNumber:number,pageSize:number,search:string) => {
  return useQuery(`getAllProducts${pageNumber}`, async () => {
    return getAllProduct(pageNumber,pageSize,search);
  });
};

export default useProducts;
