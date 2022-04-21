import { axiosInstance } from "../config/axiosConfig";
class CategoryService {
  getAllCategory() {
    return axiosInstance
      .get("/category/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
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
}
export default new CategoryService();
