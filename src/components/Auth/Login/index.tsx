import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { login } from "../Slice";
import { LoginDto } from "../../../dto/LoginDto";
import useLogin from "../Hooks/useLogin";

interface props {
  onCancel: () => void;
  onOpenRegister: () => void;
}
const Login = (props: props) => {
  const { onCancel,onOpenRegister } = props;
  const {
    mutate: login,
    isLoading,
    isSuccess,
    status,
    isError,
  } = useLogin();
  const auth = useSelector((state: any) => state.auth.isAuth);
  const handleSubmit = async (data: LoginDto) => {
    await login(data);
  };
  if (isSuccess || !isError == false) {
    onCancel();
  }
  return <LoginForm onOpenRegister={onOpenRegister} onCancel={onCancel} onSubmitt={handleSubmit} />;
};
export default Login;
