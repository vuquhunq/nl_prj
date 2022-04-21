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

  getAllService() {
    return axiosInstance({
      url: "/services/get-unconfimred-all/",
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"));
  }

  //Name Services
  getAllNameServices() {
    return axiosInstance
      .get("/name-services/")
      .then((res) => res.data)
      .catch((err) => alert(err));
  }

  addNameServices(payload) {
    return axiosInstance({
      url: "/name-services/",
      method: "POST",
      data: payload,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"))
      .catch((err) => alert(err));
  }

  updateNameServices(payload) {
    return axiosInstance({
      url: "/name-services/",
      method: "PUT",
      data: payload,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"))
      .catch((err) => alert(err));
  }

  deleteCategory(id_name_services) {
    return axiosInstance({
      url: "/name-services/"+id_name_services,
      method: "DELETE",
      data: id_name_services,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"))
      .catch((err) => alert(err));
  }
}

export default new ServiceServices();
