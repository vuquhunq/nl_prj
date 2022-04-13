import {
  faBox,
  faComments,
  faCubes,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import "../style.css";

export default function Home() {
  const Button = ({ type }) => {
    return <button className={"btn_home " + type}>{type}</button>;
  };

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
          <div className="content_page">
            <div className="container-fluid px-4">
              <div className="col-md-9 text-left" style={{ marginBottom: 15 }}>
                <h3>Trang Chủ</h3>
              </div>

              <div className="row g-3 my-2">
                <div className="col-md-3">
                  <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">80</h3>
                      <p className="fs-5">Sản Phẩm</p>
                    </div>
                    <i
                      className="fs-3 text-white border rounded-circle p-2 "
                      style={{ backgroundColor: "#F15E2C" }}
                    >
                      <FontAwesomeIcon icon={faCubes} />
                    </i>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">150</h3>
                      <p className="fs-5">Đơn Hàng</p>
                    </div>
                    <i
                      className="fs-3 text-white border rounded-circle p-2 "
                      style={{ backgroundColor: "#F15E2C" }}
                    >
                      <FontAwesomeIcon icon={faTruckFast} />
                    </i>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">56</h3>
                      <p className="fs-5">Dịch Vụ</p>
                    </div>
                    <i
                      className="fs-3 text-white border rounded-circle p-2 "
                      style={{ backgroundColor: "#F15E2C" }}
                    >
                      <FontAwesomeIcon icon={faBox} />
                    </i>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="p-3 bg-white shadow-lg d-flex justify-content-around align-items-center rounded">
                    <div>
                      <h3 className="fs-2">32</h3>
                      <p className="fs-5">Bình Luận</p>
                    </div>
                    <i
                      className="fs-3 text-white border rounded-circle p-2 "
                      style={{ backgroundColor: "#F15E2C" }}
                    >
                      <FontAwesomeIcon icon={faComments} />
                    </i>
                  </div>
                </div>
              </div>

              <div className="row my-5">
                <h4 className="fs-4 mb-3 ms-3">Đơn Hàng Gần Đây</h4>
                <div className="col">
                  <table className="table bg-white rounded shadow-sm table-hover">
                    <thead>
                      <tr>
                        <th scope="col">Mã Đơn Hàng</th>
                        <th scope="col">Tên Khách Hàng</th>
                        <th scope="col">Ngày Đặt</th>
                        <th scope="col">Tổng Tiền</th>
                        <th scope="col">Trạng Thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                          <Button type="XacNhan" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                          <Button type="Huy" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>Larry the Bird</td>
                        <td>
                          <Button type="ChuaXacNhan" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
