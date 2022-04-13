import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";

export default function Services() {
  const [services, setServices] = useState();

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

          <div className="row my-4">
            <div className="col">
              <table className="table table-bordered bg-white rounded shadow-sm table-hover">
                <thead>
                  <tr>
                    <th scope="col">Mã Dịch Vụ</th>
                    <th scope="col">Tên Khách Hàng</th>
                    <th scope="col">Tên Dịch Vụ</th>
                    <th scope="col">Ngày Đặt</th>
                    <th scope="col">Ngày Đặt Lịch</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {services ? (
                    services.map((service, index) => (
                      <tr key={index}>
                        <th scope="row">{service.id_services}</th>
                        <td>{service.id_user}</td>
                        <td>{service.id_name_services}</td>
                        <td>{new Date(service.date_create).toDateString()}</td>
                        <td>{service.booking_date}</td>
                        <td>
                          <span className="badge btn-success">
                            {service.status}
                          </span>
                        </td>
                        <td>
                          <FontAwesomeIcon
                            className="productlistView"
                            icon={faEye}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h1>Loading ...</h1>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
