import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { register } from "../../../api/authService";
import { RegisterDto } from "../../../dto/RegisterDto";
import { login as loginStore } from "../Slice";
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
        enqueueSnackbar("Register Successfully!", { variant: "success" });
      },
      onError: (error: any) => {
        enqueueSnackbar(error.response.data.errorMessage, { variant: "error" });
      },
    }
  );
};

export default useRegister;
