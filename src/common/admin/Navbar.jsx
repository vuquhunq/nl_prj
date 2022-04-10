import React, { useEffect, useState } from "react";
import { Button, Col, Container, Navbar } from "react-bootstrap";
import { access_token } from "../../config/authConfig";
import AdminServices from "../../service/AdminServices";

const UserToggle = ({ info }) => {
  if (access_token) {
    return (
      <div className="rounded-pill outline-secondary shadow-lg px-3 py-1">
        {info}
      </div>
    );
  } else
    return <Button variant="btn btn-outline-none">Đăng ký/đăng nhập</Button>;
};
const AdminNavbar = () => {
  const [infoAdmin, setInfoAdmin] = useState();
  useEffect(() => {
    AdminServices.getAdminInfo().then((res) => setInfoAdmin(res));
  }, []);

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
          <UserToggle info={infoAdmin && infoAdmin.full_name} />
        </Col>
      </Container>
    </Navbar>
  );
};
export default AdminNavbar;
