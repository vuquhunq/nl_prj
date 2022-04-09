import { axiosInstance } from "../config/axiosConfig";

class PaymentService {
  addCreateOrder(payload) {
    return axiosInstance
      .post("/create-order", payload)
      .then((res) => res.data)
      .catch((err) => alert(err.maeesage));
  }
  getPayment() {
    return axiosInstance
      .get("/payment_return")
      .then((res) => res.data)
      .catch((err) => alert(err.message));
  }
}
export default new PaymentService();
