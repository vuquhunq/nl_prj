import { axiosInstance } from "../config/axiosConfig";
class GenderService {
  getGender() {
   return axiosInstance.get(`/gender`).then((res) => res.data);
  }
}

export default new GenderService();
