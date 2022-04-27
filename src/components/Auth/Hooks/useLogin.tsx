import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login  as loginStore} from "../Slice";
import { login } from "../../../api/authService";
import { useSnackbar } from "notistack";
import { LoginDto } from "../../../dto/LoginDto";
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
        navigate("/");
        enqueueSnackbar("Login Successfully!",{variant:"success"});
      },
      onError: (error:any) => {
        enqueueSnackbar(error.response.data.errorMessage,{variant:"error"})}
      }
  );
};

export default useLogin;
