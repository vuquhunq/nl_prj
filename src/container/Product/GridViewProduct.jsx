import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import CardProduct from "../../components/client/Product/CardProduct";
import ProductServices from "../../service/ProductServices";
import "./style.css";
export default function GridViewProduct() {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(8);
  useEffect(() => {
    ProductServices.getAllProduct().then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    if (products.length > 0 && limit > products.length) setLimit(products.length);

  }, [limit, products]);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
      onScroll={(e)=>console.log(e)}
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {products &&
          products
            .slice(0, limit)
            .map((product, index) => (
              <CardProduct product={product} key={index} />
            ))}
      </Masonry>
      <span
        onClick={() => {
          setLimit(limit + 8);
        }}
      >
        Load more ...
      </span>
    </>
  );
}
