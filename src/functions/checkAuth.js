import axios from "axios";
import config from "../configs/config.json";
export const isAuth = () => {
  let authToken = localStorage.getItem("auth_token") ?? "";
  if (!authToken) return false;

  return axios
    .get(`${config.baseApi}/auth/me`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    .then((res) => {
      if (res?.data.length == 0) return false;
      localStorage.setItem("auth_user", JSON.stringify(res.data[0]));
    })
    .catch((err) => {
      return false;
    });
};
