import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";

export default function DetailOrder() {
  return (
    <>
      <AdminNavbar />
      <Container
        id="admin-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar active="detail_order" />
        <Container fluid>
          <div class="col-md-9 text-left">
            <h3>Chi Tiết Đơn Hàng</h3>
          </div>

          <Link to="/adminstrator/orders" className="btn btn-danger float-end">
            Trở về
          </Link>

          <div className="row d-flex" style={{ marginTop: 65 }}>
            <div className="col-md-12 col-lg-12 col-xl-12">
              <div className="row shadow p-3 mb-5 bg-white rounded ms-3">
                <table className=" table border table-lg table-order-detail">
                  <thead>
                    <tr>
                      <th>Tên Sản Phẩm</th>
                      <th>Màu Sắc</th>
                      <th>Size</th>
                      <th>Giá bán</th>
                      <th>Số Lượng</th>
                      <th className="text-end">Tổng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="left">
                          <img
                            src="https://th.bing.com/th/id/OIP.IwbWGr7qz8VmxzhHYNsh4QHaFA?pid=ImgDet&rs=1"
                            alt=""
                            style={{ width: "40px", height: "40px" }}
                            className="img-xs"
                          />
                        </div>
                        <p
                          className="info"
                          style={{
                            marginLeft: "10px",
                          }}
                        >
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Expedita
                        </p>
                      </td>
                      <td>
                        <div
                          style={{
                            margin: "1px auto",
                            width: "20px",
                            height: "20px",
                            borderStyle: "groove",
                            borderWidth: "thin",
                            borderColor: "gray",
                            backgroundColor: "red",
                          }}
                        ></div>
                      </td>
                      <td>35</td>
                      <td>100.000 VND</td>
                      <td>2</td>
                      <td className="text-end">100.000 VND</td>
                    </tr>

                    <tr>
                      <th colSpan={6}>
                        <article className="float-end">
                          <dl className="dlist">
                            <dt>Tổng Tiền: 200000</dt>
                          </dl>
                          <dl className="dlist">
                            <dt>Khuyến Mãi: 10000</dt>
                          </dl>
                          <dl className="dlist">
                            <dt>Thành Tiền: 190000</dt>
                          </dl>
                          <dl className="dlist">
                            <dt className="text-muted">
                              Trạng thái Thanh toán:
                              <span className="badge rounded-pill alert alert-success text-success">
                                Đẫ Thanh Toán
                              </span>
                            </dt>
                          </dl>
                        </article>
                      </th>
                    </tr>
                  </tbody>
                </table>

                <div className="col-lg-3">
                  <div className="box shadow-sm bg-light">
                    <button className="btn btn-success col-12">
                      Đã Giao Hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
