import React from "react";
import {
  Col,
  FormSelect,
  Image,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "react-bootstrap";

export default function ModalCart({ cartDetail, show, isShow }) {
  console.log(cartDetail);
  return (
    <Modal show={show} onHide={isShow} size="xl">
      <ModalHeader closeButton>GIỎ HÀNG</ModalHeader>
      <ModalBody>
        <Row>
          <Col md={8}>
            <h4>Chi tiết giỏ hàng</h4>
          </Col>
          <Col md={4}>
            <h4>Thanh toán</h4>
          </Col>
        </Row>
        <Row className="info-product">
          <Col
            className="d-flex justify-content-between align-item-center flex-nowrap gap-1 grow-1"
            md={8}
          >
            <div className="d-flex gap-1">
              <Image src="https://picsum.photos/50" />
              <span className="d-flex align-items-center flex-nowrap overflow-auto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </div>
            <span className="d-flex align-items-center flex-nowrap overflow-auto">
              <FormSelect
                className="d-flex align-items-center"
                style={{ width: 100, height: 40 }}
              >
                <option>Size</option>
              </FormSelect>
            </span>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-between gap-2"
            md={4}
          >
            <span className="d-flex align-items-center">x3</span>
            <span className="d-flex align-items-center">300.000 VND</span>
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
}
