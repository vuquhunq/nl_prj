import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ClientNavbar from "../../../common/client/Navbar";
import { cartDetail } from "../../../config/authConfig";
// import PurchaseService from "../../../service/PurchaseService";
import "./style.css";

export default function Purchase() {
  const { id_order } = useParams();
  console.log(id_order);
  const total = cartDetail.reduce(
    (a, b) => a + b.current_price * b.quantily,
    0
  );
  const handlePurchase = () => {
    const obj = {
      address: "string",
      method: "string",
      total: 0,
      date_create: "2022-04-22",
      status: "string",
      id_user: 0,
      list_bill_detail: [
        {
          id_size_quantity: 0,
          id_product_detail: 0,
          current_price: 0,
          quantily: 0,
          id_product: 0,
        },
      ],
    };
    console.log(obj);
  };
  console.log(total);
  return (
    <>
      <ClientNavbar />
      <Container id="purchase-wrapper">
        <div className="detail-product">
          {cartDetail ? (
            cartDetail.map((cart, index) => (
              <div className="product-detail" key={index}>
                <img
                  src={cart.img}
                  alt="Product Image"
                  style={{ width: 200, height: 200 }}
                />
                <div className="detail-content">
                  <div className="container">
                    <div className="content-name">{cart.name}</div>
                    <div className="content-price">
                      {cart.current_price.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </div>
                  </div>
                  {/* <div className="container toggle-product">
                    <Form>
                      <Form.Group className="select-product">
                        <Form.Label>Kích cỡ</Form.Label>
                        <Form.Select>
                          <option value="">{cart.size}</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="select-product">
                        <Form.Label>Số lượng</Form.Label>
                        <Form.Select>
                          <option value="">{cart.quantily}</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </div> */}
                </div>
              </div>
            ))
          ) : (
            <Container>Không có sản phẩm trong giỏ hàng</Container>
          )}
        </div>
        <div className="detail-purchase">
          <div className="container sticky-top" style={{ top: 120 }}>
            <div className="title-purchase">ĐƠN HÀNG</div>
            <div className="content-purchase">
              {cartDetail &&
                cartDetail.map((cart, index) => (
                  <div className="content-item" key={index}>
                    <span>
                      <span>
                        {cart.current_price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                      x<span>{cart.quantily}</span>
                    </span>
                    <span>
                      {(cart.current_price * cart.quantily).toLocaleString(
                        "it-IT",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      )}
                    </span>
                  </div>
                ))}
            </div>
            <div className="total-puchase">
              <div className="content-item">
                <span>TẠM TÍNH</span>
                <span>
                  {total.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
            </div>
            <div className="toggle-purchase">
              <Button
                variant="btn"
                className="purchase-button"
                onClick={handlePurchase}
              >
                THANH TOÁN
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
