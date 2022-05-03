import React from "react";
import { useSelector } from "react-redux";
import { RegisterDto } from "../../../dto/RegisterDto";
import useRegister from "../Hooks/useRegister";
import RegisterForm from "./components/RegisterForm";

interface props {
  handleCloseRegister: () => void;
  onOpenLogin: () => void;
}
const Register = (props: props) => {
  const { handleCloseRegister, onOpenLogin } = props;
  const { mutate: register, isSuccess, isError } = useRegister();
  const auth = useSelector((state: any) => state.auth.isAuth);
  const handleSubmit = async (data: RegisterDto) => {
    await register(data);
  };
  if (isSuccess || !isError == false) {
    handleCloseRegister();
  }
  return (
    <RegisterForm
      onOpenLogin={onOpenLogin}
      handleCloseRegister={handleCloseRegister}
      onSubmitt={handleSubmit}
    />
  );
};
export default Register;
