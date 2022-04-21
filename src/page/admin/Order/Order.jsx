import { faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import BillService from "../../../service/BillService";

export default function Order() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    BillService.getBillService().then((res) => setOrder(res));
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
                    <th scope="col">Mã Đơn Hàng</th>
                    <th scope="col">Tên Khách Hàng</th>
                    <th scope="col">Tên Nhân Viên</th>
                    <th scope="col">Ngày Đặt Hàng</th>
                    <th scope="col">Tổng Tiền</th>
                    <th scope="col">Phương Thức Thanh Toán</th>
                    <th scope="col">Trạng Thái</th>
                    <th scope="col">Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Sản Phẩm 1</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                      <span className="badge rounded-pill alert-danger">
                        Tiền Mặt
                      </span>
                    </td>
                    <td>
                      <span className="badge btn-success">Đã Giao Hàng</span>
                    </td>
                    <td>
                      <Link to="/adminstrator/detail_order">
                        <FontAwesomeIcon
                          className="productlistView"
                          icon={faEye}
                        />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
