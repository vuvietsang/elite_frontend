export interface OrderDto{
    id:number;
    status:boolean;
    isConfirmed:boolean;
    createDate:string|Date;
    totalPrice:number;
    userId:number;
    userName:string;
}

