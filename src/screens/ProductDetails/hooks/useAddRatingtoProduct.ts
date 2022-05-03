import { useSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";
import { addRatingToProduct } from "../../../api/productService";
import { AddRatingDto } from "../../../dto/RatingDto";
const useAddRatingtoProduct = () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  return useMutation(
    async (data: AddRatingDto) => {
      return await addRatingToProduct(data);
    },
    {
      onSuccess: (data) => {
        enqueueSnackbar("Rating Successfully!", { variant: "success" });
        queryClient.invalidateQueries("useRatingProductById");
      },
      onError: (error: any) => {
        enqueueSnackbar(error.response.data.errorMessage, { variant: "error" });
      },
    }
  );
};

export default useAddRatingtoProduct;
