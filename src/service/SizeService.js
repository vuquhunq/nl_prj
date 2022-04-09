import { axiosInstance } from "../config/axiosConfig";

class SizeService {
  getSize() {
    return axiosInstance
      .get("/size/")
      .then((res) => res.data)
      .catch((err) => alert(err));
  }
  updateSize(payload) {
    return axiosInstance
      .put("/size", payload)
      .then((res) => res.data)
      .catch((err) => alert(err));
  }
  addSize(payload) {
    return axiosInstance
      .post("/size", payload)
      .then((res) => res.data)
      .catch((err) => alert(err));
  }
  deleteSize(payload) {
      return axiosInstance.delete(`/size/${payload}`)
  }
}
export default new SizeService()
