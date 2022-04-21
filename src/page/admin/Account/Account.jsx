import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";

export default function Account() {
  return (
    <>
      <AdminNavbar />
      <Container
        id="admin-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar active="accounts" />
        <Container fluid>
          <div className="col-md-9 text-left" style={{ marginBottom: 30 }}>
            <h3>Quản Lý Tài Khoản</h3>
          </div>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Nhân Viên">
              <h1>hello</h1>
            </Tab>
            <Tab eventKey="profile" title="Tạo tài khoản">
              <h1>hello</h1>
            </Tab>
          </Tabs>
        </Container>
      </Container>
    </>
  );
}
