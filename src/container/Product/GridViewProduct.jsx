import React, { useState } from "react";
import Masonry from "react-masonry-css";
import CardProduct from "../../components/client/Product/CardProduct";
import "./style.css";
export default function GridViewProduct({ products }) {
  const [limit, setLimit] = useState(8);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {products &&
          products
            .map((product, index) => (
              <CardProduct product={product} key={index} />
            ))}
      </Masonry>
      {/* <span
        onClick={() => {
          setLimit(limit + 8);
        }}
      >
        Load more ...
      </span> */}
    </>
  );
}
