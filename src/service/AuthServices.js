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
        localStorage.setItem("adminToken", res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err.data));
  }

  logout() {
    localStorage.removeItem("adminToken");
  }
}
export default new AuthService();
