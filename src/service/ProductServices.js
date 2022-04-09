import { axiosInstance } from "../config/axiosConfig";
class ProductServices {
  getAllProduct() {
    return axiosInstance.get("/product/all-product").then((res) => res.data);
  }
  addBasicProduct(data) {
    return axiosInstance
      .post("/product/create-product-basic", data, {
        headers: {
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data);
  }
  addDetailProduct(data) {
    console.log(data.file);
    const formData = new FormData();
    for (let i = 0; i < data.file.length; i++) {
      console.log(data.file[i].name);
      formData.append("file", data.file[i], data.file[i].name);
    }

    return axiosInstance({
      url: `/product/create-product-detail?id_product=${data.id_product}&id_color=${data.id_color}`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    })
      .then((res) => res)
      .catch((err) => alert(err));
  }
  addSizeQuantity(payload) {
    return axiosInstance
      .post("/product/create-size-quantity", payload, {
        headers: {
          "Content-Type": "Application/json",
        },
      })
      .then((res) => res.data);
  }
}
export default new ProductServices();
