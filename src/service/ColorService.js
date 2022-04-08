import { axiosInstance } from "../config/axiosConfig";

class ColorService {
  getColor(color) {
    return axiosInstance
      .get("/color/")
      .then((res) =>
        color ? res.data.filter((data) => data.id_color === color) : res.data
      );
  }
}

export default new ColorService();