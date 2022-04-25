import { LoginDTO } from "../dto/LoginDTO";
import {  SuccessLoginResponseDTO } from "../dto/LoginResponseDTO";
import { API } from "./axiosClient";

export const login = async (requestData: LoginDTO) => {
    const {data} = await API.post<SuccessLoginResponseDTO>("/user/login", requestData);
    return data.data;
  };
  