import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { LoginDto } from "../../../../../dto/LoginDto";
import InputField from "../../../../FormInputs/InputField";
import PasswordField from "../../../../FormInputs/PasswordField";
interface props {
  onSubmitt: (values: any) => Promise<void>;
  onCancel: () => void;
  onOpenRegister: () => void;
}
const LoginForm = (props: props) => {
  const { onCancel, onSubmitt, onOpenRegister } = props;
  const schema = yup.object().shape({
    username: yup.string().required("Please enter username"),
    password: yup.string().required("Password can not be empty"),
  });
  const form = useForm<LoginDto>({
    defaultValues: {
      username: "sangvv",
      password: "123456",
    },
    resolver: yupResolver(schema),
  });
  const { handleSubmit } = form;
  return (
    <div>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmitt)}
        className="flex justify-center items-center w-80 h-80 my-12 mx-20 flex-col"
      >
        <p className="flex justify-center p-3 text-4xl">Login</p>
        <InputField form={form} label="Username" name="username" />
        <PasswordField form={form} label="Password" name="password" />
        <div className="flex flex-row space-x-3 mt-10">
          <Button
            variant="contained"
            type="submit"
            className="p-2  w-40 rounded-sm"
          >
            Login
          </Button>
          <Button
            className="p-2 w-36 rounded-sm"
            variant="contained"
            color="inherit"
            onClick={() => {
              onCancel();
            }}
          >
            Cancel
          </Button>
        </div>
        <div className="flex flex-row items-center space-x-2 mt-3">
          <p className="pb-1">You don't have an account?</p>
          <Button variant="text" className="left-0" onClick={onOpenRegister}>
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
