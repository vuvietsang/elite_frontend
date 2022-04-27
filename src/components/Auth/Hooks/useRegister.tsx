import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login  as loginStore} from "../Slice";
import { login, register } from "../../../api/authService";
import { useSnackbar } from "notistack";
import { LoginDto } from "../../../dto/LoginDto";
import { RegisterDto } from "../../../dto/RegisterDto";
const useRegister = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation(
    async (data: RegisterDto) => {
      return await register(data);
    },
    {
      onSuccess: (data) => {
        dispatch(loginStore(data));
        navigate("/");
        enqueueSnackbar("Register Successfully!",{variant:"success"});
      },
      onError: (error:any) => {
        enqueueSnackbar(error.response.data.errorMessage,{variant:"error"})}
      }
  );
};

export default useRegister;
