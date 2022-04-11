import { axiosInstance } from "../config/axiosConfig";

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
        localStorage.setItem("access_admin_token", res.data);
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
      });
  }
  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("access_admin_token");

  }}
export default new AuthService();
