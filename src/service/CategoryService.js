import { axiosInstance } from "../config/axiosConfig";
class CategoryService {
  getAllCategory() {
    return axiosInstance
      .get("/category/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
<<<<<<< HEAD

  addCategory(payload) {
    return axiosInstance({
      url: "/category/",
      method: "POST",
      data: payload,
      headers: {
        "Content-Type": "application/json",
       
      },
    }).then(() => alert("Thành công"))
      .catch((err) => alert(err));
  }

  updateCategory(payload) {
    return axiosInstance({
      url: "/category/",
      method: "PUT", 
      data: payload,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"))
      .catch((err) => alert(err));
  }

  deleteCategory(id_category) {
    return axiosInstance({
      url: "/category/"+id_category,
      method: "DELETE",
      data: id_category,
      headers: {
        "Content-Type": "Application/json",
      },
    }).then(() => alert("Thành công"))
      .catch((err) => alert(err));
  }
 
=======
  addCategory(payload) {
    return axiosInstance
      .post("/category/", payload)
      .then((res) => alert("Thành công"))
      .catch((err) => alert(err));
  }
  updateCategory(payload) {
    return axiosInstance
      .put("/category/", payload)
      .then((res) => console.log("Thành công"));
  }
  deleteCategory(id_category) {
    return axiosInstance
      .delete(`/category/${id_category}`)
      .then((res) => alert("Thành công"));
  }
>>>>>>> 725b1a9 (add service category)
}
export default new CategoryService();
