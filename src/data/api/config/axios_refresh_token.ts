import { AppDispatch } from "@/sp/redux/store";
import axios from "axios";

import jwt_decode from "jwt-decode";
import { Sign_Out_Success, RefreshTokenSuccess } from "@/sp/redux/slice/users";
import { toast } from "react-toastify";
import { baseURL } from "./rootAxios";

//Axios auto refresh token
const handleRefreshToken = async () => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/token/refreshtoken",
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const CreateAxiosInstance = (
  dispatch: AppDispatch,
  accessToken: string
) => {
  const instance = axios.create({
    baseURL: baseURL,
  });

  instance.interceptors.request.use(
    async (config: any) => {
      const d = new Date();
      if (accessToken) {
        const decoToken: any = jwt_decode(accessToken);
        if (decoToken.exp - d.getTime() / 1000 < 0) {
          const data = await handleRefreshToken();
          dispatch(RefreshTokenSuccess(data.accessToken));
          config.headers["token"] = "Bearner " + data.accessToken;
        }
        return config;
      } else {
        dispatch(Sign_Out_Success());
        toast.error("Hết phiên đăng nhập!");
      }
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return instance;
};
