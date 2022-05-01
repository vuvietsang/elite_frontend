export interface RatingDto{
    comment:string;
    ratingStar:number;
    productId:string;
    productName:string;
    userName:string;
    ratingDate:string;
}

export interface GetRatingDtoResponse{
    data:{content:RatingDto[],totalPages:number,totalElements:number}
}