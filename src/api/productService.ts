import { GetAllProductDtoResponse } from "../dto/ProductDTO";
import { API } from "./axiosClient";

 export const  getAllProduct=async(pageNumber:number,pageSize:number,search:string)=>{
    const { data }= await API.get<GetAllProductDtoResponse>(`products?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    return data.data;
}