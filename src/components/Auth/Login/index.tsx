import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { login } from '../Slice';
import { LoginDTO } from '../../../dto/LoginDTO';
import useLogin from '../Hooks/useLogin';

interface props{
    onCancel:()=>void;
}
const Login=(props:any) =>{
    const {onCancel} = props;
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const { mutate: login, isLoading, error,isSuccess,status } = useLogin();

    const auth = useSelector((state:any) => state.auth.isAuth);
    // if (auth) {
    //   navigate("/");
    // }
    const handleSubmit =async (data:LoginDTO)=>{
        await login(data);
       if(isSuccess || !error ){
         onCancel();
       }
     }
    return (
        <div>
            <LoginForm onCancel={onCancel} onSubmitt={handleSubmit} />
        </div>
    );
}

export default Login;