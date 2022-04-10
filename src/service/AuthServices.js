import { axiosInstance } from "../config/axiosConfig";
import UserServices from "./UserServices";

class AuthService {
  login(payload) {
    return axiosInstance
      .post("/admin/login", payload, {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.data));
  }
  userLogin(payload) {
    return axiosInstance
      .post("/user/log-in", payload, {
        headers: {
          "Content-Type": "Application/json",
        },
      })
      .then((res) => {
        localStorage.setItem("access_token", res.data);
        UserServices.getInfoUser().then((res) =>
          localStorage.setItem("info_user", res.data)
        );
      });
  }
  logout() {
    localStorage.removeItem("access_token");
  }
}
export default new AuthService();
