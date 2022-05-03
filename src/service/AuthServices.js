import { axiosInstance } from "../config/axiosConfig";

class AuthService {
  googleLogin(){
    return axiosInstance('/login').then((res)=>res.data)
  }
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
  userRegister(payload) {
    return axiosInstance.post("/user/sgin-up", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=>res.status).catch(err=>console.log(err));
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
        return res.status
      }).catch(err=>err.status);
  }
  logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("access_admin_token");
    localStorage.removeItem("cart-detail")
    window.location.reload()
  }
}
export default new AuthService();
