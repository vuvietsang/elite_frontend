import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, LinearProgress } from "@mui/material";
import InputField from "../../../../FormInputs/InputField";
import PasswordField from "../../../../FormInputs/PasswordField";
import useLogin from "../../../Hooks/useLogin";
import { RegisterDto } from "../../../../../dto/RegisterDto";
interface props {
  onSubmitt: (values: any) => Promise<void>;
  handleCloseRegister: () => void;
  onOpenLogin:()=>void;
}
const RegisterForm = (props: props) => {
  const { handleCloseRegister, onSubmitt,onOpenLogin } = props;
  const schema = yup.object().shape({
    username: yup.string().required("Vui Lòng Nhập tên tài khoản"),
    password: yup.string().required("Mật Khẩu Không Được Bỏ Trống"),
  });
  const form = useForm<RegisterDto>({
    defaultValues: {
      username: "sangvv",
      password: "123456",
    },
    resolver: yupResolver(schema),
  });
  const { isSubmitting } = form.formState;
  const { handleSubmit } = form;
  return (
    <div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmitt)}
        className="flex justify-center items-center w-80 h-80 my-12 mx-20 flex-col"
      >
        <p className="flex justify-center p-3 text-4xl">Register</p>
        <InputField form={form} label="Username" name="username" />
        <PasswordField form={form} label="Password" name="password" />
        <div className="flex flex-row space-x-3 mt-10">
          <Button variant="contained" type="submit" className="p-2  w-40 rounded-sm">
            Register
          </Button>
          <Button
            className="p-2 w-36 rounded-sm"
            variant="contained"
            color="inherit"
            onClick={() => {
              handleCloseRegister();
            }}
          >
            Cancel
          </Button>
        </div>
        <div className="flex flex-row items-center space-x-2 mt-3">
        <p className="pb-1">You already had an account?</p>
        <Button variant="text" onClick={()=>{onOpenLogin()}} className="left-0" >Login</Button>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
