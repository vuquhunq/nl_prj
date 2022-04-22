import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ClientNavbar from "../../../../common/client/Navbar";
import Sidebar from "../../../../common/client/Sidebar";
import GridViewProduct from "../../../../container/Product/GridViewProduct";
import ProductServices from "../../../../service/ProductServices";
import "./style.css";
export default function ListProducts({ gender }) {
  const [products, setProducts] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    if (colorList.length > 0 || categoryList.length > 0) {
      let obj = {};
      if (categoryList.length > 0) obj.list_id_category = categoryList;
      if (colorList.length > 0) obj.list_id_color = colorList;
      obj.id_gender = 0;
      ProductServices.getFilterProduct(obj).then((res) => setProducts(res));
    } else
      ProductServices.getAllProduct().then((res) =>
        gender
          ? setProducts(res.filter((product) => product.id_gender === gender))
          : setProducts(res)
      );
  }, [colorList, categoryList, gender]);

  return (
    <>
      <ClientNavbar />
      <Container
        id="client-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar
          active="categories"
          categoryList={categoryList}
          setCategoryList={setCategoryList}
          colorList={colorList}
          setColorList={setColorList}
          gender={gender}
        />
        <Container fluid className="py-3 overflow-auto">
          <GridViewProduct products={products} />
        </Container>
      </Container>
    </>
  );
}
