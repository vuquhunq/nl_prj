import { access_token } from "../config/authConfig";
import { axiosInstance } from "../config/axiosConfig";
import AuthServices from "./AuthServices";

class UserServices {
  getInfoUser() {
    return axiosInstance
      .get("/user/info-user", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch(() => {
        AuthServices.logout();
        window.location.reload();
      });
  }
}

export default new UserServices();
