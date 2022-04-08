import { axiosInstance } from "../config/axiosConfig";
class CategoryService {
  getAllCategory() {
    return axiosInstance
      .get("/category/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}
export default new CategoryService();
