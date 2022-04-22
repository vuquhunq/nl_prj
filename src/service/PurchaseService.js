import { axiosInstance } from "../config/axiosConfig";

class PurchaseService {
  createOrder(payload) {
    return axiosInstance
      .post("/create-order", payload)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}
export default new PurchaseService();
