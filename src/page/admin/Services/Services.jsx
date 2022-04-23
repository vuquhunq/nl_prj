import React from "react";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import { ConfirmServices } from "./ConfirmServices";
import { UnconfirmServices } from "./UnconfirmServices";

export default function Services() {
  return (
    <>
      <AdminNavbar />
      <Container
        id="admin-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar active="services" />
        <Container fluid>
          <div className="col-md-9 text-left">
            <h3>Dịch Vụ</h3>
          </div>

          <Tabs
            defaultActiveKey="unconfirmServices"
            transition={false}
            id="noanim-tab-example"
            className="mb-3 justify-content-end"
          >
            <Tab eventKey="unconfirmServices" title="Chưa Xác Nhận">
              <UnconfirmServices />
            </Tab>
            <Tab eventKey="confirmServices" title="Xác Nhận">
              <ConfirmServices />
            </Tab>
          </Tabs>
        </Container>
      </Container>
    </>
  );
}
