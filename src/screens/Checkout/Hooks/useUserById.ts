import { useQuery } from "react-query";
import { getAllProduct, getProductById } from "../../../api/productService";
import { getUserById } from "../../../api/userService";

const useUserById = (id: string) => {
  return useQuery("getProductById", async () => {
    return getUserById(id);
  });
};

export default useUserById;
