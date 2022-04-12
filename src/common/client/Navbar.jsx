import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Form,
  FormSelect,
  Image,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
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
        <Modal show size="xl">
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
