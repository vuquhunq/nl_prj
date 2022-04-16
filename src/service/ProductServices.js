import { axiosInstance } from "../config/axiosConfig";
class ProductServices {
  getAllProduct() {
    return axiosInstance.get("/product/all-product").then((res) => res.data);
  }
  getFilterProduct(payload) {
    return axiosInstance.post("/product/filter-product", payload, {
      "Content-Type": "application/json",
    });
  }
  getDetailProduct(payload) {
    return axiosInstance
      .get(`/product/first-product/${payload}`)
      .then((res) => res.data);
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
    const formData = new FormData();
    for (let i = 0; i < data.file.length; i++) {
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
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.data);
  }
  getCartProduct(payload) {
    return axiosInstance.post("/product/get-cart-product/", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
export default new ProductServices();
