import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import CardProduct from "../../components/client/Product/CardProduct";
import ProductServices from "../../service/ProductServices";
import "./style.css";
export default function GridViewProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductServices.getAllProduct().then((res) => setProducts(res));
  }, []);
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {products &&
        products.map((product, index) => (
          <CardProduct product={product} key={index} />
        ))}
    </Masonry>
  );
}
