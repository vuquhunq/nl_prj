import { axiosInstance } from "../config/axiosConfig";

class PromotionServices {
    
    getAllPromotion() {
      return axiosInstance
        .get("/promotion/")
        .then((res) => res.data)
        .catch((err) => alert(err));
    };

    addPromotion(payload) {
      return axiosInstance({
        url: "/promotion/",
        method: "POST",
        data: payload,
        headers: {
          "Content-Type": "Application/json",
        },
      }).then(() => alert("Thành công"))
        .catch((err) => alert(err));
    };

    deletePromotion(id_promotion) {
      return axiosInstance({
        url: "/promotion/"+id_promotion,
        method: "DELETE",
        data: id_promotion,
        headers: {
          "Content-Type": "Application/json",
        },
      }).then(() => alert("Thành công"))
        .catch((err) => alert(err));
    };

    deletePromotionCategory(id_promotion){
      return axiosInstance({
        url: "/promotion/update-category/"+id_promotion,
        method: "DELETE",
        data: id_promotion,
        headers: {
          "Content-Type": "Application/json",
        },
      }).then(() => alert("Thành công"))
        .catch((err) => alert(err));
    }

    updatePromotion(payload) {
      return axiosInstance({
        url: "/promotion/",
        method: "PUT",
        data: payload,
        headers: {
          "Content-Type": "Application/json",
        },
      }).then(() => alert("Thành công"))
        .catch((err) => alert(err));
    }
  }
  
  export default new PromotionServices();