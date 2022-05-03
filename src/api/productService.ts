import {
  GetAllProductDtoResponse,
  GetProductDtoByIdResponse,
} from "../dto/ProductDto";
import {
  AddRatingDto,
  GetPageRatingDtoResponse,
  GetRatingDtoResponse,
} from "../dto/RatingDto";
import { API } from "./axiosClient";

export const getAllProduct = async (
  pageNumber: number,
  pageSize: number,
  search: string,
  sort: string
) => {
  const { data } = await API.get<GetAllProductDtoResponse>(
    `products?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}&sort=${sort}`
  );
  return data.data;
};
export const getProductById = async (id: string | undefined) => {
  const { data } = await API.get<GetProductDtoByIdResponse>(`products/${id}`);
  return data.data;
};
export const getRatingsProductById = async (
  id: string | undefined,
  pageNumber: number,
  pageSize: number
) => {
  const { data } = await API.get<GetPageRatingDtoResponse>(
    `products/rating/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return data.data;
};
export const addRatingToProduct = async (ratingDto: AddRatingDto) => {
  const { data } = await API.post<GetRatingDtoResponse>(
    `products/rating`,
    ratingDto
  );
  return data.data;
};
