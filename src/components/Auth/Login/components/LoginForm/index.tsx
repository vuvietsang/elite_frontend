import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoginDTO } from '../../../../../dto/LoginDTO';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {  LinearProgress } from '@mui/material';
import InputField from '../../../../FormInputs/InputField';
import PasswordField from '../../../../FormInputs/PasswordField';
import useLogin from '../../../Hooks/useLogin';
interface props{
    onSubmit:(values: any) => Promise<void>;
    onCancel:() => void;
}
const LoginForm = (props:props)=>{
    const {onCancel} = props;
    const auth = useSelector((state:any) => state.auth);
    console.log(auth);
    // const navigate = useNavigate();
    // if (auth) {
    //   navigate("/");
    // }
    const schema = yup.object().shape({
      username: yup.string().required("Vui Lòng Nhập tên tài khoản"),
  
      password: yup.string().required("Mật Khẩu Không Được Bỏ Trống"),
    });
    const form = useForm<LoginDTO>({
      defaultValues: {
        username: "sangvv",
        password: "123456",
      },
      resolver: yupResolver(schema),
    });
    const {isSubmitting} = form.formState;
    const { handleSubmit, ...formFunc } = form;
    const onSubmit =async (data:LoginDTO)=>{
       await login(data);
      if(isSuccess || !error ){
        onCancel();
      }
    }
    const { mutate: login, isLoading, error,isSuccess,status } = useLogin();
    return(
        <div>
        {isSubmitting && <LinearProgress />}
            <form  noValidate onSubmit={form.handleSubmit(onSubmit)} className="flex justify-center items-center w-80 my-8 mx-28 flex-col">
            <p className='flex justify-center p-3 text-3xl'>Login</p>
                <InputField form={form} label="Username" name='username' />
                <PasswordField form={form} label="Password" name='password' />
                <div className='flex flex-row space-x-2 mt-10'>
              <button type="submit" className="p-2 bg-gray-400 w-36 rounded-sm"  >
                Login
              </button>
              <button type="submit" className="p-2 bg-red-200 w-36 rounded-sm" onClick={()=>{onCancel()}} >
                Cancel
              </button>
              </div>
            </form>
      </div>
    )
}
export default LoginForm
