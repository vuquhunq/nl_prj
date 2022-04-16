import { axiosInstance } from "../config/axiosConfig";

class CommentsService {
  getCommentProduct(id_product) {
    return axiosInstance
      .get(`/rate-comment/${id_product}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
}

export default new CommentsService();
