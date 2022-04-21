import { axiosInstance } from "../config/axiosConfig";
<<<<<<< HEAD
import { access_admin_token} from "../config/authConfig";
=======
import { access_token } from "../config/authConfig";
>>>>>>> 2ec2805e3421134df362f5c8d954a74a1aca805b
class BillService {
  getBillService(){
    return axiosInstance
      .get("/bill/get-bill/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
  getAdminBillService(){
    return axiosInstance
      .get("/bill/admin-get-bill/", {
        headers: {
<<<<<<< HEAD
          Authorization: `Bearer ${access_admin_token}`,
=======
          Authorization: `Bearer ${access_token}`,
>>>>>>> 2ec2805e3421134df362f5c8d954a74a1aca805b
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  getAdminDetailBillService(id){
    return axiosInstance
      .get("/bill/admin-get-bill/?id_bill="+id, {
        headers: {
<<<<<<< HEAD
          Authorization: `Bearer ${access_admin_token}`,
=======
          Authorization: `Bearer ${access_token}`,
>>>>>>> 2ec2805e3421134df362f5c8d954a74a1aca805b
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  addBillService(payload) {
    return axiosInstance
      .post("/bill/", payload)
      .then((res) => res.data)
      .catch((err) => alert(err));
  }

  updateBillService(payload){
    return axiosInstance
      .put("/bill/",payload,{
        headers: {
<<<<<<< HEAD
          Authorization: `Bearer ${access_admin_token}`,
=======
          Authorization: `Bearer ${access_token}`,
>>>>>>> 2ec2805e3421134df362f5c8d954a74a1aca805b
          "Content-Type": "Application/json",
        },
      })
      .then((res) => console.log(res.data))
      .catch((err) => alert(err));
  }
}

export default new BillService();