import { access_token } from "../config/authConfig";
import { axiosInstance } from "../config/axiosConfig";

class AdminServices {
  getAdmin() {
    return axiosInstance
      .get("/admin/", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => alert(err.message));
  }
  getAdminInfo() {
    return axiosInstance
      .get("/admin/get-account-info", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => alert(err.message));
  }
  getAllAdmin() {
    return axiosInstance
      .get("/admin/get-all-admin", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => alert(err.message));
  }
}

export default new AdminServices();
