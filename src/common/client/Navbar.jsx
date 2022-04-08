import React from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import "./style.css";

const SearchBox = () => {
  return (
    <FormGroup className="position-relative">
      <FormLabel className="position-absolute">Hello</FormLabel>
      <FormControl className="rounded-pill" type="text" />
    </FormGroup>
  );
};
const UserToggle = () => {
  return <Button variant="btn btn-outline-none">Đăng xuất/đăng nhập</Button>;
};
const ClientNavbar = () => {
  return (
    <Navbar sticky="top" bg="light">
      <Container
        fluid
        className="d-flex justify-content-start align-items-center"
      >
        <Col className="d-flex gap-4">
          <Navbar.Brand>
            <h3>H.L.H</h3>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>Nam</Nav.Link>
            <Nav.Link>Nữ</Nav.Link>
          </Nav>
        </Col>
        <Col className="d-flex gap-4 justify-content-end align-items-center">
          <SearchBox />
          <UserToggle />
        </Col>
      </Container>
    </Navbar>
  );
};
export default ClientNavbar;
