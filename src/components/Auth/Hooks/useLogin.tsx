import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../../api/authService";
import { LoginDto } from "../../../dto/LoginDto";
import { login as loginStore } from "../Slice";
const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation(
    async (data: LoginDto) => {
      return await login(data);
    },
    {
      onSuccess: (data) => {
        dispatch(loginStore(data));
        if (data.roleName == "ADMIN") navigate("/admin");
        enqueueSnackbar("Login Successfully!", { variant: "success" });
      },
      onError: (error: any) => {
        enqueueSnackbar(error.response.data.errorMessage, { variant: "error" });
      },
    }
  );
};

export default useLogin;
