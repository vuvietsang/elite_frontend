import { AxiosResponse } from "axios";

export interface ProductDto{
    id:number;
    name:string;
    quantity:number;
    description:string;
    price:number;
    status:boolean;
    image:string;
    createDate:string;
    updateDate:string;
    categoryName:string;
}

export interface GetAllProductDtoResponse{
    data:{content:ProductDto[],totalPage:number}
}