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

  getAllUncofirmService() {
    return axiosInstance.get("/services/get-unconfimred-all/").then(() => alert("Thành công"));
  }

  getAllCofirmService() {
    return axiosInstance({
      url: "/services/get-confimred-all/",
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"));
  }

  updateServices(payload) {
    return axiosInstance({
      url: "/services/",
      method: "PUT",
      data: payload,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"))
      .catch((err) => alert(err));
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

  deleteNameServices(id_name_services) {
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
