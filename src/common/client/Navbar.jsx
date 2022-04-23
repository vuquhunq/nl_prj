import React, { useEffect, useState } from "react";
import { Col, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import ModalCart from "../../components/client/Cart/modalCart";
import { UserToggle } from "../../components/client/Navbar/Toggle";
import ModalHandleSevice from "../../components/client/Service/modalHandleSevice";
import { access_token } from "../../config/authConfig";
import { linkData } from "../../constant/DirectClient";
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
    </Navbar>
  );
};
export default ClientNavbar;
