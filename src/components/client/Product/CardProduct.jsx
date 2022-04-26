import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import FileServices from "../../../service/FileServices";
import ColorBox from "../../ColorBox";
import "./style.css";
export default function CardProduct({ product }) {
  const [colorProduct, setColorProduct] = useState(0);
  const handleLink = () => {
    window.location = `/product/detail/id_product=${product.id_product}`;
  };
  return (
    <Card bg="none" onClick={handleLink}>
      <Card.Header className="bg-none">
        <Card.Img
          src={FileServices.getIMG(
            product.list_color.length > 0
              ? product.list_color[colorProduct].list_image[0]
              : ""
          )}
        />
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-center">{product.name}</Card.Title>
        <Card.Subtitle>
          {product.discount < product.money ? (
            <span className="d-flex flex-column align-items-center">
              <span
                style={{
                  textDecoration: "line-through",
                  fontWeight: 500,
                  fontSize: "small",
                  color: "black",
                }}
              >
                {product.money.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <span
                className="d-flex gap-1"
                style={{ color: "#F15E12", fontWeight: 600 }}
              >
                {product.discount.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
                <span>({product.reduction}%)</span>
              </span>
            </span>
          ) : (
            product.discount.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })
          )}
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer className="bg-none">
        {/* <Card.ImgOverlay>
         <span>{product.reduction}</span>
        </Card.ImgOverlay> */}
        {product.list_color &&
          product.list_color.map((color, index) => (
            <ColorBox
              color={color}
              setColorProduct={setColorProduct}
              colorProduct={colorProduct}
              index={index}
              key={index}
            />
          ))}
      </Card.Footer>
    </Card>
  );
}
