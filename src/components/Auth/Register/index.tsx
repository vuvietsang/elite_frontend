import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/RegisterForm";
import { login } from "../Slice";
import useLogin from "../Hooks/useLogin";
import RegisterForm from "./components/RegisterForm";
import { RegisterDto } from "../../../dto/RegisterDto";

interface props {
  handleCloseRegister: () => void;
  onOpenLogin:()=>void;
}
const Register = (props: props) => {
  const { handleCloseRegister,onOpenLogin } = props;
  const {
    mutate: login,
    isSuccess,
    isError,
  } = useLogin();
  const auth = useSelector((state: any) => state.auth.isAuth);
  const handleSubmit = async (data: RegisterDto) => {
    await login(data);
  };
  if (isSuccess || !isError == false) {
    handleCloseRegister();
  }
  return <RegisterForm onOpenLogin={onOpenLogin} handleCloseRegister={handleCloseRegister} onSubmitt={handleSubmit} />;
};
export default Register;