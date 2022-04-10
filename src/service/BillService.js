import { axiosInstance } from "../config/axiosConfig";

class BillService {
  getBillService(){
    return axiosInstance
      .get("/bill/get-bill/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  addBillService(payload) {
    return axiosInstance
      .post("/bill/", payload)
      .then((res) => res.data)
      .catch((err) => alert(err));
  }
}

export default new BillService();