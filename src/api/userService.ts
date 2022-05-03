import { GetUserDtoResponse } from "../dto/UserDto";
import { API } from "./axiosClient";

export const getUserById = async (userId: string) => {
  const { data } = await API.get<GetUserDtoResponse>(`/user/${userId}`);
  return data.data;
};
