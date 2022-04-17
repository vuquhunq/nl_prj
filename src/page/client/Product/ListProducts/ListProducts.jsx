import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ClientNavbar from "../../../../common/client/Navbar";
import Sidebar from "../../../../common/client/Sidebar";
import GridViewProduct from "../../../../container/Product/GridViewProduct";
import ProductServices from "../../../../service/ProductServices";
import "./style.css";
export default function ListProducts() {
  const [products, setProducts] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    ProductServices.getAllProduct().then((res) => setProducts(res));
  }, []);
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
        />
        <Container fluid className="py-3 overflow-auto">
          <GridViewProduct products={products} />
        </Container>
      </Container>
    </>
  );
}
