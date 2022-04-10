import { access_token } from "../config/authConfig";
import { axiosInstance } from "../config/axiosConfig";

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
      .catch((err) => alert(err));
  }
}

export default new UserServices();
