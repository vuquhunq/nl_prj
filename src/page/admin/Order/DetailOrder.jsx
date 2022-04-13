import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import BillService from "../../../service/BillService";

export default function DetailOrder() {
  const [detail, setDetailOrder] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  console.log(path);

  const handleAccept = () => {
    let objectStatus = {
      status: "Xác Nhận",
      id_verifier: 1,
      id_bill: Number(path),
    };
    BillService.updateBillService(objectStatus).then((res) =>
      console.log(res.data)
    );
  };

  const handleCancel = () => {
    let objectStatus = {
      status: "Hủy",
      id_verifier: 1,
      id_bill: Number(path),
    };
    BillService.updateBillService(objectStatus).then((res) =>
      console.log(res.data)
    );
  };

  useEffect(() => {
    BillService.getAdminDetailBillService(path).then((res) =>
      setDetailOrder(res)
    );
  }, [path]);

  console.log(detail);

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
                    {detail !== {} ? (
                      detail?.list_product_details?.map((items, index) => (
                        <tr key={index}>
                          <td>
                            <div className="left">
                              <img
                                src={items.path}
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
                              {items.name}
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
                                backgroundColor: items.hex,
                              }}
                            ></div>
                          </td>
                          <td>{items.size}</td>
                          <td>{items.current_price} VND</td>
                          <td>{items.quantily}</td>
                          <td className="text-end">
                            {items.current_price * items.quantily}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <h1>Loading ...</h1>
                    )}

                    <tr>
                      <th colSpan={6}>
                        <article
                          className="float-end"
                          style={{ width: "300px" }}
                        >
                          <dl className="dlist d-flex justify-content-between">
                            <dt>Thành Tiền:</dt>
                            <span>{detail.total}</span>
                          </dl>
                          <dl className="dlist d-flex justify-content-between">
                            <dt
                              className="text-muted"
                              style={{
                                wordBreak: "break-word",
                              }}
                            >
                              Trạng thái Thanh toán:
                            </dt>
                            <span className="badge rounded-pill alert alert-success text-success">
                              {detail.method}
                            </span>
                          </dl>
                        </article>
                      </th>
                    </tr>
                  </tbody>
                </table>

                <div className="col-lg-3">
                  <div className="box d-flex shadow-sm bg-light ">
                    <button
                      className="btn mx-2 btn-success col-12"
                      onClick={handleAccept}
                    >
                      Xác Nhận
                    </button>
                    <button
                      className="btn btn-danger col-12"
                      onClick={handleCancel}
                    >
                      Hủy
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
