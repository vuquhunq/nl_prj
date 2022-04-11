import React, { useEffect, useState } from "react";
import { Col, Container, Form, Nav, Navbar } from "react-bootstrap";
import { UserToggle } from "../../components/client/Navbar/Toggle";
import ModalHandleSevice from "../../components/client/Service/modalHandleSevice";
import { access_token } from "../../config/authConfig";
import { linkData } from "../../constant/DirectClient";
import UserServices from "../../service/UserServices";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
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
  //
  const [isShowService, setIsShowService] = useState(false);
  //
  useEffect(() => {
    access_token &&
      UserServices.getInfoUser().then((res) => {
        setUserInfo(res);
      });
  }, []);
  //
  const handleShowService = () => {
    setIsShowService(!isShowService);
  };
  return (
    <Navbar sticky="top" bg="light">
      <Container
        fluid
        className="d-flex justify-content-start align-items-center"
      >
        <ModalHandleSevice show={isShowService} isShow={handleShowService} />
        <Col>
          <Container id="main--navbar" className="d-flex align-items-center">
            <Navbar.Brand>
              <h3>H.L.H</h3>
            </Navbar.Brand>
            <Nav>
              {linkData.map((link, index) => (
                <Nav.Link key={index} href={link.url}>
                  {link.name}
                </Nav.Link>
              ))}
              <Nav.Link onClick={handleShowService}>Dịch Vụ</Nav.Link>
            </Nav>
          </Container>
        </Col>
        <Col className="d-flex gap-4 justify-content-end align-items-center">
          <SearchBox />
          <UserToggle userInfo={userInfo} />
        </Col>
      </Container>
    </Navbar>
  );
};
export default ClientNavbar;
