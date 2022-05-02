import { useMutation, useQueryClient } from "react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login, register } from "../../../api/authService";
import { useSnackbar } from "notistack";
import { LoginDto } from "../../../dto/LoginDto";
import { RegisterDto } from "../../../dto/RegisterDto";
import { addRatingToProduct } from "../../../api/productService";
import { AddRatingDto } from "../../../dto/RatingDto";
const useAddRatingtoProduct= () => {
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  return useMutation(
    async (data: AddRatingDto) => {
      return await addRatingToProduct(data);
    },
    {
      onSuccess: (data) => {
        enqueueSnackbar("Rating Successfully!",{variant:"success"});
        queryClient.invalidateQueries("useRatingProductById");
      },
      onError: (error:any) => {
        enqueueSnackbar(error.response.data.errorMessage,{variant:"error"})}
      }
  );
};

export default useAddRatingtoProduct;
