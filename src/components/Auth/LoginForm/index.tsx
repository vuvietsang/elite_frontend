import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { LoginDTO } from '../../../dto/LoginDTO';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, Container, CssBaseline, LinearProgress } from '@mui/material';
import InputField from '../../FormInputs/InputField';
import PasswordField from '../../FormInputs/PasswordField';
interface props{
    onSubmit:(values: any) => Promise<void>;
    
}
const LoginForm = (props:props)=>{
    // const auth = useSelector((state:any) => state.auth.isAuth);
    // if (auth) {
    //   const navigate = useNavigate();
    //   navigate("/dashboard");
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
    const handleSubmit = ()=>{

    }
    return(
        <div>
        {isSubmitting && <LinearProgress />}
            <form  noValidate onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField form={form} label="Username" name='username' />
                <PasswordField form={form} label="Password" name='password' />

              <button type="submit" className="p-2 bg-gray-400 rounded-sm" >
                Login
              </button>
              
            </form>
           
      </div>
    )
}
export default LoginForm
