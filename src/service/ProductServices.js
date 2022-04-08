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
    let formdata = new FormData();
    for (let i = 0; i < data.file.length; i++) {
      formdata.append("File", data.file[i]);
    }
    console.log(formdata);
    return axiosInstance
      .post(
        `product/create-product-detail?id_product=${data.id_product}&id_color=${data.id_color}`,
        {
          body: {
            file: formdata,
          },
        },
        {
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        }
      )
      .then((res) => console.log("res", res))
      .catch((err) => console.log(err));
  }
}
export default new ProductServices();
