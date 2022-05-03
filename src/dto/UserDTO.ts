export interface UserDto {
  userId: number;
  fullName: string;
  username: string;
  email: string;
  roleName: string;
  phone: string;
  status: boolean;
  avatar: string;
  address: string;
}
export interface GetUserDtoResponse {
  data: UserDto;
}
