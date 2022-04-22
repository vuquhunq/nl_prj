import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import ClientNavbar from "../../../common/client/Navbar";
import "./style.css";

export default function Purchase() {
  const handlePurchase = () => {
    const obj = {
      money: 500000,
      order_id: 1
    }
    PurchaseService
  }
  return (
    <>
      <ClientNavbar />
      <Container id="purchase-wrapper">
        <Image src="https://picsum.photos/200" />
        <Button>THANH TOÁN</Button>
      </Container>
    </>
  );
}
