import { GetAllProductDtoResponse, GetProductDtoByIdResponse, ProductDto } from "../dto/ProductDto";
import { GetRatingDtoResponse } from "../dto/RatingDto";
import { API } from "./axiosClient";

 export const  getAllProduct=async(pageNumber:number,pageSize:number,search:string,sort:string)=>{
        const { data }= await API.get<GetAllProductDtoResponse>(`products?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}&sort=${sort}`);
        return data.data; 
  
}
 export const  getProductById=async(id:string|undefined)=>{
    const { data }= await API.get<GetProductDtoByIdResponse>(`products/${id}`);
    return data.data;
}
 export const  getRatingsProductById=async(id:string|undefined,pageNumber:number,pageSize:number)=>{
    const { data }= await API.get<GetRatingDtoResponse>(`products/rating/${id}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
    return data.data;
}