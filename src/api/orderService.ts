import OrderDetailsDto from "../dto/OrderDetailsDto";
import CheckoutResponse from "../dto/OrderDto";
import { API } from "./axiosClient";

export const checkout = async (orders: OrderDetailsDto[]) => {
  const { data } = await API.post<CheckoutResponse>(`orders/checkout`, orders);
  return data.data;
};
