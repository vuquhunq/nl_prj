import React, { useState, useEffect } from "react";
import { Button, Container, Image } from "react-bootstrap";
import ClientNavbar from "../../../common/client/Navbar";
import PurchaseService from "../../../service/PurchaseService";
import "./style.css";

export default function Purchase() {
  const [link, setLink] = useState("");
  const handlePurchase = () => {
    const obj = {
      money: 500000,
      order_id: 2,
    };
    PurchaseService.createOrder(obj).then((res) => setLink(res));
    console.log(link);
  };
  useEffect(() => {
    link && window.open(link);
  }, [link]);
  return (
    <>
      <ClientNavbar />
      <Container id="purchase-wrapper">
        <Image src="https://picsum.photos/200" />
        <Button onClick={handlePurchase}>THANH TOÁN</Button>
      </Container>
    </>
  );
}
