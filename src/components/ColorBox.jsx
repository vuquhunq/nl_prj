import React from "react";

export default function ColorBox({ color, index, colorProduct, setColorProduct }) {
    console.log(color);
  return (
    <div
      onClick={() => setColorProduct(index ? index : color.id_color)}
      style={{
        width: 40,
        height: 40,
        backgroundColor: color.hex,
        boxShadow: "0 0 10px rgba(0,0,0,.4)",
        border: colorProduct === color.id_color ? "2px green solid" : "none",
      }}
    ></div>
  );
}
