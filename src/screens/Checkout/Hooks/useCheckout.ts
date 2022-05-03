import { useSnackbar } from "notistack";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { checkout } from "../../../api/orderService";
import OrderDetailsDto from "../../../dto/OrderDetailsDto";
import { logoutCart } from "../../Products/Slice/cartSlice";

const useCheckout = () => {
  const nav = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  return useMutation(
    async (data: OrderDetailsDto[]) => {
      return await checkout(data);
    },
    {
      onSuccess: (data) => {
        enqueueSnackbar("Checkout Successfully!", { variant: "success" });
        localStorage.removeItem("cart");
        dispatch(logoutCart());
        nav("/products");
      },
      onError: (error: any) => {
        enqueueSnackbar(error.response.data.errorMessage, { variant: "error" });
      },
    }
  );
};
export default useCheckout;
