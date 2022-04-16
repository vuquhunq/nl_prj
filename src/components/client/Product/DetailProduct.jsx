import {
  faChevronDown,
  faChevronUp,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import ColorBox from "../../ColorBox";

const DetailContent = ({
  product,
  rate,
  isColor,
  setColor,
  isSize,
  setSize,
  isQuantity,
  setQuantity,
}) => {
  //
  //

  return (
    <Container fluid>
      <Col className="name-product">
        <h2>{product ? product.name : <Skeleton count={2} />}</h2>
      </Col>
      <Col className="py-2">
        <span>
          <FontAwesomeIcon icon={faStar} color="#f15e2c" />({rate})
        </span>
      </Col>
      <Col className="money-product py-2">
        <h4>
          {product ? (
            product.money.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })
          ) : (
            <Skeleton />
          )}
        </h4>
      </Col>
      <Col className="desc-product">
        {product ? product.detail : <Skeleton count={6} />}
      </Col>
      <Col className="color-product">
        {product &&
          product.list_color.map((color, index) => (
            <span key={index} onClick={() => setColor(index)}>
              <ColorBox
                color={color}
                index={index}
                colorProduct={isColor}
                setColorProduct={setColor}
              />
            </span>
          ))}
      </Col>
      <Col>
        <Form.Group className="size_quantity-product">
          <Form.Select onChange={(e) => setSize(e.target.value)}>
            <option>Size</option>
            {product &&
              product.list_color[isColor].list_size.map((size, index) => (
                <option key={index} value={index}>
                  {size.size_number}
                </option>
              ))}
          </Form.Select>
          <InputGroup className="quantity-input">
            <Form.Label>Số lượng:</Form.Label>
            <Form.Control
              disabled
              type="text"
              value={isQuantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <span className="number-control">
              <FontAwesomeIcon
                onClick={() => setQuantity(isQuantity + 1)}
                icon={faChevronUp}
                color="#f15e2c"
              />
              <FontAwesomeIcon
                onClick={() => setQuantity(isQuantity - 1)}
                icon={faChevronDown}
                color="#f15e2c"
              />
            </span>
          </InputGroup>
        </Form.Group>
      </Col>
      <Col className="quantity-product">
        {product &&
        product.list_color[isColor].list_size[isSize].SizeQuantity.quantity >
          0 ? (
          <>
            <span>Còn</span>
            {product ? (
              product.list_color[isColor].list_size[isSize].SizeQuantity
                .quantity
            ) : (
              <Skeleton />
            )}
            <span>sản phẩm</span>
          </>
        ) : (
          "Hết hàng"
        )}
      </Col>
    </Container>
  );
};

export default DetailContent;
