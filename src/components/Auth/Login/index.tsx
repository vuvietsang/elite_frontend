import React from "react";
import { useSelector } from "react-redux";
import { LoginDto } from "../../../dto/LoginDto";
import useLogin from "../Hooks/useLogin";
import LoginForm from "./components/LoginForm";

interface props {
  onCancel: () => void;
  onOpenRegister: () => void;
}
const Login = (props: props) => {
  const { onCancel, onOpenRegister } = props;
  const { mutate: login, isLoading, isSuccess, status, isError } = useLogin();
  const auth = useSelector((state: any) => state.auth.isAuth);
  const handleSubmit = async (data: LoginDto) => {
    await login(data);
  };
  if (isSuccess || !isError == false) {
    onCancel();
  }
  return (
    <LoginForm
      onOpenRegister={onOpenRegister}
      onCancel={onCancel}
      onSubmitt={handleSubmit}
    />
  );
};
export default Login;
