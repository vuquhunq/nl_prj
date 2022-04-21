import { axiosInstance } from "../config/axiosConfig";

class ServiceServices {
  addService(payload) {
    return axiosInstance({
      url: "/services/",
      method: "POST",
      data: payload,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"));
  }
  getAllNameServices() {
    return axiosInstance
      .get("/name-services/")
      .then((res) => res.data)
      .catch((err) => alert(err));
  }
}

export default new ServiceServices();
