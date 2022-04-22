import { axiosInstance } from "../config/axiosConfig";

class PurchaseService {
  createOrder(payload) {
    console.log(payload);
    return axiosInstance
      .post("/create-order", "", {
        params: payload,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
}
export default new PurchaseService();
