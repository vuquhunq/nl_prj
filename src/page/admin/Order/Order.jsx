import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import BillService from "../../../service/BillService";

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    BillService.getAdminBillService().then((res) => setOrders(res));
  }, []);

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
          <div className="col-md-9 text-left">
            <h3>Danh Sách Đơn Hàng</h3>
          </div>

          <div className="row my-4">
            <div className="col">
              <table className="table table-bordered bg-white rounded shadow-sm table-hover">
                <thead>
                  <tr>
                    <th scope="col">Mã ĐH</th>
                    <th scope="col">Tên Khách Hàng</th>
                    <th scope="col">Tên Nhân Viên</th>
                    <th scope="col">Ngày Đặt Hàng</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col">Tổng Tiền</th>
                    <th scope="col">Phương Thức Thanh Toán</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {orders ? (
                    orders.map((order, index) => (
                      <tr key={index}>
                        <th scope="row">{order.id_bill}</th>
                        <td>{order.name_user}</td>
                        <td>{order.name_admin}</td>
                        <td>{new Date(order.date_create).toDateString()}</td>
                        <td>{order.address}</td>
                        <td>{order.total} VNĐ</td>
                        <td>
                          <span className="badge rounded-pill alert-danger">
                            {order.method}
                          </span>
                        </td>
                        <td>
                          <span className="badge btn-success">
                            {order.status}
                          </span>
                        </td>
                        <td>
                          <Link
                            to={`/adminstrator/detail_order/${order.id_bill}`}
                          >
                            <FontAwesomeIcon
                              style={{ color: "green" }}
                              icon={faEye}
                            />
                          </Link>
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
