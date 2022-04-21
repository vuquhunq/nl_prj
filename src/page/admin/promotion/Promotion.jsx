import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";

export default function Promotion() {
  return (
    <>
      <AdminNavbar />
      <Container
        id="admin-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar active="promotion" />
        <Container fluid>
          <div className="col-md-9 text-left" style={{ marginBottom: 10 }}>
            <h3>Danh Sách Khuyến Mãi</h3>
          </div>

          <button type="button" className="btn btn-primary float-end">
            <FontAwesomeIcon icon={faPlus} />
            Thêm mới
          </button>

          <div className="row my-5 w-100">
            <div className="col my-4">
              <table className="table table-bordered bg-white rounded shadow-sm table-hover table-data">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Tên Sự Kiện</th>
                    <th scope="col">Nội Dung Sự Kiện</th>
                    <th scope="col">Ngày Bắt Đầu</th>
                    <th scope="col">Ngày Kết Thúc</th>
                    <th scope="col">Giảm Giá</th>
                    <th scope="col">Loại Sản Phẩm</th>
                    <th scope="col">Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Ngày BlackFriday</td>
                    <td>dsfdf</td>
                    <td>fg</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>
                      <FontAwesomeIcon
                        className="productlistEdit"
                        icon={faPenToSquare}
                      />
                      <FontAwesomeIcon
                        className="productlistDel"
                        icon={faTrashCan}
                      />
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
