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
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Password can not be empty"),
    email:yup.string().email("Email is invalid").required("Email can not be empty"),
    fullName: yup.string().required("Full name can not be empty"),
    phone:yup.string().required("Phone can not be empty"),
  });
  const form = useForm<RegisterDto>({
    defaultValues: {
      username: "sangvv1211",
      password: "123456",
      email:"vuvietsang10a9@gmail.com",
      fullName: "sangvu",
      phone:"0974172445",
      avatar:"https://static.ybox.vn/2017/12/23/a64bbe0c-e7a9-11e7-b05b-56c566ee3692.jpg",
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
        className="flex justify-center items-center w-auto h-full my-12 mx-20 flex-col"
      >
        <p className="flex justify-center p-3 text-4xl">Register</p>
        <InputField form={form} label="Username" name="username" />
        <PasswordField form={form} label="Password" name="password" />
        <InputField form={form} label="Email" name="email" />
        <InputField form={form} label="Full Name" name="fullName" />
        <InputField form={form} label="Phone" name="phone"/>
        <InputField hidden={true}  form={form} label="Avatar" name="avatar"/>
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
