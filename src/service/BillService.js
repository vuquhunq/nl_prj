import { axiosInstance } from "../config/axiosConfig";
import { access_admin_token, access_token } from "../config/authConfig";
class BillService {
  getBillService() {
    return axiosInstance
      .get("/bill/get-bill/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  getAdminBillService() {
    return axiosInstance
      .get("/bill/admin-get-bill/", {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  getUserDetailBill(id) {
    return axiosInstance
      .get("/bill/get-bill/", {
        params: { id_bill: id },
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  getAdminDetailBillService(id) {
    return axiosInstance
      .get(`/bill/admin-get-bill/${id && `?id_bill=${id}`}`, {
        headers: {
          Authorization: `Bearer ${access_admin_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  addBillService(payload) {
    return axiosInstance
      .post("/bill/", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.status)
      .catch((err) => alert(err));
  }

  updateBillService(payload) {
    return axiosInstance
      .put("/bill/", payload, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "Application/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => alert(err));
  }
}

export default new BillService();
