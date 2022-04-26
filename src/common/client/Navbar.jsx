import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
  OffcanvasBody,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import ModalCart from "../../components/client/Cart/modalCart";
import { UserToggle } from "../../components/client/Navbar/Toggle";
import ModalHandleSevice from "../../components/client/Service/modalHandleSevice";
import { access_token, cartDetail } from "../../config/authConfig";
import { linkData } from "../../constant/DirectClient";
import ServiceServices from "../../service/ServiceServices";
import UserServices from "../../service/UserServices";
import "./style.css";

const SearchBox = () => {
  return (
    <Form>
      <Form.Group className="navbar-search position-relative">
        <Form.Label>
          <SearchIcon />
        </Form.Label>
        <Form.Control className="rounded-pill" type="text" />
      </Form.Group>
    </Form>
  );
};

const ClientNavbar = () => {
  const [userInfo, setUserInfo] = useState();
  const [isShowService, setIsShowService] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);

  useEffect(() => {
    access_token &&
      UserServices.getInfoUser().then((res) => {
        setUserInfo(res);
      });
  }, []);
  const handleShowService = () => {
    setIsShowService(!isShowService);
  };
  const handleShowCart = () => {
    setIsShowCart(!isShowCart);
  };
  return (
    <Navbar sticky="top" bg="light">
      <Container
        fluid
        className="d-flex justify-content-start align-items-center"
      >
        <ModalCart show={isShowCart} isShow={handleShowCart} />
        <ModalHandleSevice show={isShowService} isShow={handleShowService} />
        <Col>
          <Container id="main--navbar" className="d-flex align-items-center">
            <Navbar.Brand>
              <Link to="/" style={{ textDecoration: "none" }}>
                <h3>H.L.H</h3>
              </Link>
            </Navbar.Brand>
            <Nav>
              {linkData.map((link, index) => (
                <Nav.Link
                  style={{ color: "#F15E12" }}
                  key={index}
                  href={link.url}
                >
                  {link.name}
                </Nav.Link>
              ))}
              <Nav.Link onClick={handleShowService}>Dịch Vụ</Nav.Link>
            </Nav>
          </Container>
        </Col>
        <Col className="d-flex gap-4 justify-content-end align-items-center">
          <SearchBox />
          <UserToggle
            userInfo={userInfo}
            showCart={() => setIsShowCart(!isShowCart)}
          />
        </Col>
      </Container>
      <Container
        fluid
        onClick={() => setIsShowCart(!isShowCart)}
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "center",
          position: "fixed",
          width: 50,
          height: 100,
          top: 200,
          right: 0,
          backgroundColor: "black",
          color: "orange",
        }}
      >
        <div
          className="d-flex rounded-circle justify-content-center align-items-center"
          style={{
            position: "absolute",
            width: 15,
            height: 15,
            top: 50,
            left: 5,
            fontSize: "small",
            backgroundColor: "orangered",
            color: "black",
          }}
        >
          {cartDetail ? cartDetail.length : 0}
        </div>
        <FontAwesomeIcon icon={faCartShopping} />
      </Container>
      {access_token ? (
        <Container
          fluid
          onClick={() => setIsShowCart(!isShowCart)}
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            position: "fixed",
            width: 50,
            height: 100,
            top: 300,
            right: 0,
            backgroundColor: "orangered",
            color: "black",
          }}
        >
          <div
            className="d-flex rounded-circle justify-content-center align-items-center"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              top: 50,
              left: 5,
              fontSize: "small",
              backgroundColor: "black",
              color: "orangered",
            }}
          >
            {cartDetail ? cartDetail.length : 0}
          </div>
          <FontAwesomeIcon icon={faCartShopping} />
        </Container>
      ) : (
        <></>
      )}

      <OffcanvasCart isShowCart={isShowCart} setIsShowCart={setIsShowCart} />
      {access_token && <OffCanvasService />}
    </Navbar>
  );
};
const OffcanvasCart = ({ isShowCart, setIsShowCart }) => {
  const total = cartDetail
    ? cartDetail.reduce((a, b) => a + b.current_price * b.quantily, 0)
    : 0;
  return (
    <Offcanvas
      show={isShowCart}
      onHide={() => setIsShowCart(false)}
      placement="end"
    >
      <Offcanvas.Header style={{ fontWeight: 600, fontSize: "large" }}>
        GIỎ HÀNG
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div>
          {cartDetail ? (
            cartDetail.length > 0 ? (
              cartDetail.map((cart, index) => (
                <div
                  className="d-flex justify-content-start gap-2 mb-2"
                  style={{ height: 70 }}
                  key={index}
                >
                  <div
                    className="d-flex overflow-hidden"
                    style={{ height: "100%", maxWidth: 100 }}
                  >
                    <img
                      src={cart.img}
                      className="img-fluid rounded"
                      alt="Hình sản phẩm"
                    />
                  </div>
                  <div className="span d-flex flex-column justify-content-between w-100">
                    <span style={{ fontWeight: 600, fontSize: "large" }}>
                      {cart.name}
                    </span>
                    <div className="content-item d-flex flex-nowrap">
                      <span>
                        <span>
                          {cart.current_price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                        x<span>{cart.quantily}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Container>Không có sản phẩm nào trong giỏ hàng</Container>
            )
          ) : (
            <Container>Không có sản phẩm nào trong giỏ hàng</Container>
          )}
        </div>
      </Offcanvas.Body>
      <div className="total-puchase m-3">
        <div className="content-item">
          <span style={{ color: "black", fontWeight: 600 }}>TỔNG CỘNG</span>
          <span>
            {total.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </span>
        </div>
      </div>
      <Button
        className="m-3"
        onClick={() => (window.location = "/purchase")}
        style={{
          height: 50,
          color: "black",
          backgroundColor: "orangered",
          fontSize: "larger",
        }}
      >
        Xem giỏ hàng
      </Button>
    </Offcanvas>
  );
};
const OffCanvasService = () => {
  const [serviceDetail, setServiceDetail] = useState([]);
  useEffect(() => {
    ServiceServices.getAllUserService().then((res) => setServiceDetail(res));
  }, []);
  console.log(serviceDetail);
  return (
    <Offcanvas >
      <OffcanvasBody>
        {}
      </OffcanvasBody>
    </Offcanvas>
  );
};
export default ClientNavbar;
