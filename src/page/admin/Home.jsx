import React from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../common/admin/Navbar";
import Sidebar from "../../common/admin/Sidebar";
import "./style.css";

export default function Home() {
  return (
    <>
      <AdminNavbar />
      <Container
        id="admin-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar active="dashboard" />
        <Container fluid>
          <h1>Home</h1>
        </Container>
      </Container>
    </>
  );
}
