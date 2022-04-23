import { axiosInstance } from "../config/axiosConfig";

class PurchaseService {
  createOrder(payload) {
    return axiosInstance
      .get("/create-order", {
        params: payload,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}
export default new PurchaseService();
