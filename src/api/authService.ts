import { LoginDto } from "../dto/LoginDto";
import { SuccessLoginResponseDto } from "../dto/LoginResponseDto";
import { RegisterDto } from "../dto/RegisterDto";
import { API } from "./axiosClient";

export const login = async (requestData: LoginDto) => {
  const { data } = await API.post<SuccessLoginResponseDto>(
    "/user/login",
    requestData
  );
  return data.data;
};

export const register = async (requestData: RegisterDto) => {
  const { data } = await API.post<SuccessLoginResponseDto>(
    "/user/register",
    requestData
  );
  return data.data;
};
