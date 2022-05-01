import { useQuery } from "react-query";
import { getAllProduct, getProductById, getRatingsProductById } from "../../../api/productService";

const useRatingProductById = (id:string|undefined,pageNumber:number,pageSize:number) => {
  return useQuery("useRatingProductById", async () => {
    return getRatingsProductById(id,pageNumber,pageSize);
  });
};

export default useRatingProductById;
