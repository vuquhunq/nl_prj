import React from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";

export default function Order() {
  return (
    <>
      <AdminNavbar />
      <Container
        id="admin-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar active="orders" />
        <Container fluid>
          <h1>Order</h1>
        </Container>
      </Container>
    </>
  );
}
