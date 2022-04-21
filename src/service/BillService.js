import { access_token } from "../config/authConfig";
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
  getBillUser() {
    return axiosInstance
      .get("/bill/get-bill", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  getDetailBillUser(payload) {
    return axiosInstance(`/bill/get-bill/?id_bill=${payload}`,{
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "Application/json",
      }, 
    }).then(res=>res.data).catch(err=>console.log(err));
  }
}

export default new BillService();
