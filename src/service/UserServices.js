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
        window.location = "/";
      });
  }
  updateProfileUser(payload) {
    return axiosInstance
      .put("/user/update-info-user/", payload, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.status)
      .catch((err) => err.status);
  }
  updatePasswordUser({ payload }) {
    return axiosInstance
      .put("/user/change-password/", payload, {
        header: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => alert(res))
      .catch((err) => alert(err));
  }
}

export default new UserServices();
