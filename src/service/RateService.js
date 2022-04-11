import { axiosInstance } from "../config/axiosConfig";

class RateService {
  getRateProduct(id_product) {
    return axiosInstance
      .get(`/rate/average-start/${id_product}`)
      .then((res) => res.data)
      .catch((err) => alert(err));
  }
}

export default new RateService();
