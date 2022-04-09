import { axiosInstance } from "../config/axiosConfig";

class BillService {
  addBillService(payload) {
    return axiosInstance
      .post("/bill/", payload)
      .then((res) => res.data)
      .catch((err) => alert(err));
  }
}

export default new BillService();