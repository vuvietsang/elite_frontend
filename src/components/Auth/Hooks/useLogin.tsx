import { useMutation } from "react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { LoginDTO } from "../../../dto/LoginDTO";
import { ErrorHttpResponse } from "../../../dto/ErrorHttpResponseDTO";
import { login  as loginStore} from "../Slice";
import { login } from "../../../api/authService";
const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation(
    async (data: LoginDTO) => {
      return await login(data);
    },
    {
      onSuccess: (data) => {
        dispatch(loginStore(data));
        //because data:any
        navigate("/");
      },
      onError: (_: AxiosError<ErrorHttpResponse>) => {
        console.log(_, "errorrrrrrrrrrr");
      },
    }
  );
};

export default useLogin;
