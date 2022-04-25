import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { login } from '../Slice';

interface props{
    onCancel:()=>void;
}
const Login=(props:any) =>{
    const {onCancel} = props;
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();


    const handleSubmit = async (values:any) => {
        // try {
        //     //----
        //     const action = login(values);
        //     const resultAction = await dispatch(action);
        //     const response = unwrapResult(resultAction);
        //     //
        //     const user = response.data.data
        //     if (user.role.roleName === "ADMIN") {
        //         navigate("/admin/accounts");
        //     }

        //     //close dialog
        //     const { closeDialog } = props;
        //     if (closeDialog) {
        //         closeDialog();
        //     }
        // } catch (error:any) {
        //     enqueueSnackbar(error.message, { variant: 'error' });
        // }
    };
    return (
        <div>
            <LoginForm onCancel={onCancel} onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;