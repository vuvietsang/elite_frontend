import { GetAllProductDtoResponse, GetProductDtoByIdResponse, ProductDto } from "../dto/ProductDto";
import { API } from "./axiosClient";

 export const  getAllProduct=async(pageNumber:number,pageSize:number,search:string)=>{
    const { data }= await API.get<GetAllProductDtoResponse>(`products?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    return data.data;
}
 export const  getProductById=async(id:string|undefined)=>{
    const { data }= await API.get<GetProductDtoByIdResponse>(`products/${id}`);
    return data.data;
}