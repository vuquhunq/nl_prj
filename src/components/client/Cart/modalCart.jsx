import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  FormSelect,
  Image,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "react-bootstrap";
import CartService from "../../../service/CartService";
import "./style.css";

export default function ModalCart({ show, isShow }) {
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    setCartProduct(CartService.getCart());
  }, [show]);
  return (
    <Modal id="cart-modal" show={show} onHide={isShow} size="xl" centered>
      <ModalHeader closeButton>GIỎ HÀNG</ModalHeader>
      {cartProduct.length > 0 ? (
        <ModalBody>
          <Row className="info-product">
            {cartProduct &&
              cartProduct.map((product, index) => {
                return <DetailProduct key={index} product={product} />;
              })}
          </Row>
        </ModalBody>
      ) : (
        <ModalBody
          className="d-flex justify-content-center align-items-center m-auto"
          style={{ height: 400, fontWeight: 700 }}
        >
          Không có sản phẩm trong giỏ hàng
        </ModalBody>
      )}

      <ModalFooter>
        {/* {total.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })} */}
        <Button variant="btn btn-outline-success">Đặt hàng</Button>
        <Button variant="ben btn-success">Thanh toán</Button>
      </ModalFooter>
    </Modal>
  );
}
const DetailPurchase = ({ product }) => {
  return (
    <Col
      className="d-flex align-items-center justify-content-between gap-2"
      md={4}
    >
      <span className="caculator-price d-flex align-items-center">
        {product.current_price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
        <span>x</span>
        {product.quantily}
      </span>
      <span className="total-price d-flex align-items-center">
        {(product.current_price * product.quantily).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </span>
    </Col>
  );
};
const DetailProduct = ({ product }) => {
  return (
    <>
      <Col
        className="info-item d-flex justify-content-between align-item-center flex-nowrap gap-1 grow-1"
        md={8}
      >
        <div className="d-flex gap-1">
          <Image src={product.img} height={100} width={100} />
          <span className="name-product d-flex align-items-center flex-nowrap overflow-auto">
            {product.name}
          </span>
        </div>
        <span className="d-flex align-items-center flex-nowrap overflow-auto">
          <FormSelect
            className="d-flex align-items-center"
            style={{ width: 100, height: 40 }}
          >
            <option>{product.size}</option>
          </FormSelect>
        </span>
      </Col>
      <DetailPurchase product={product} />
    </>
  );
};
