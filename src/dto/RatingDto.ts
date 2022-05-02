export interface RatingDto{
    comment:string;
    ratingStar:number;
    productId:string;
    productName:string;
    userName:string;
    ratingDate:string;
}
export interface AddRatingDto{
    comment:string;
    ratingStar:number;
    productId:string;
    userId:number;
}
export interface GetRatingDtoResponse{
    data:RatingDto;
}
export interface GetPageRatingDtoResponse{
    data:{content:RatingDto[],totalPages:number,totalElements:number}
}