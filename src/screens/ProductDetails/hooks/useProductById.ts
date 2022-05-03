import { useQuery } from "react-query";
import { getProductById } from "../../../api/productService";

const useProductById = (id: string | undefined) => {
  return useQuery("getProductById", async () => {
    return getProductById(id);
  });
};

export default useProductById;
