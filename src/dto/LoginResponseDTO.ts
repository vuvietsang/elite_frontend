export interface LoginResponseDto{
    userId:number;
    fullName:string;
    username:string;
    email:string;
    roleName:string;
    phone:string;
    token:string;
    avatar:string;
}

export interface SuccessLoginResponseDto{
    data:LoginResponseDto;
}
