import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../../../../common/client/Sidebar";
import ClientNavbar from "../../../../common/client/Navbar";
import GridViewProduct from "../../../../container/Product/GridViewProduct";
import "./style.css";
import { useParams } from "react-router-dom";
import ProductServices from "../../../../service/ProductServices";
export default function ListProducts() {
  const { id_category } = useParams();
  console.log(id_category);
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProduct] = useState();
  const [categories, setCategories] = useState([]);
  const [colores, setColores] = useState([]);

  useEffect(() => {
    ProductServices.getAllProduct().then((res) => setProducts(res));
  }, []);
  console.log(products, filterProducts, colores, categories);
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
          categories={categories}
          setCategories={setCategories}
          setColores={setColores}
        />
        <Container fluid className="py-3 overflow-auto">
          <GridViewProduct products={products} />
        </Container>
      </Container>
    </>
  );
}
