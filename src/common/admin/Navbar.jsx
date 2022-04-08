import React from "react";
import { Button, Col, Container, Navbar } from "react-bootstrap";
import { access_admin, info_admin } from "../../config/authConfig";

const UserToggle = () => {
  if (access_admin) {
    return <div className="rounded-pill outline-secondary shadow-lg px-3 py-1">{info_admin && info_admin.account}</div>;
  } else
    return <Button variant="btn btn-outline-none">Đăng ký/đăng nhập</Button>;
};
const AdminNavbar = () => {
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
        </Col>
        <Col className="d-flex gap-4 justify-content-end align-items-center">
          <UserToggle />
        </Col>
      </Container>
    </Navbar>
  );
};
export default AdminNavbar;
