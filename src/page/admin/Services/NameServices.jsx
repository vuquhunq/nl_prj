import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import ServiceServices from "../../../service/ServiceServices";

export default function NameServices() {
  const [nameServices, setNameServices] = useState([]);
  // const [text, setText] = useState("");

  //   const handleAdd = (data) => {
  //     let text = {};
  //     text.name = data;
  //     ServiceServices.addCategory(text).then(() => window.location.reload());
  //   };

  useEffect(() => {
    ServiceServices.getAllNameServices().then((res) => setNameServices(res));
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
        <Sidebar active="name_services" />
        <Container fluid>
          <div className="col-md-9 text-left" style={{ marginBottom: 30 }}>
            <h3>Quản Lý Loại Dịch Vụ</h3>
          </div>

          <div className="row d-flex">
            <div className="col-md-12 col-lg-12 col-xl-6">
              <form method="post" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label
                    htmlFor="name"
                    style={{
                      fontWeight: "bold",
                      marginBottom: 10,
                      fontSize: 18,
                    }}
                  >
                    Tên Loại Sản Phẩm:
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="tendmuc"
                    name="tendmuc"
                    // value={text}
                    style={{ width: 500, marginBottom: 5 }}
                    // onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success mt-2"
                  name="btnLuu"
                  type="submit"
                  //   onClick={(e) => handleAdd(e.target.value)}
                >
                  Lưu
                </button>
              </form>
            </div>

            <div className="col-md-12 col-lg-12 col-xl-6">
              <table className="table table-bordered shadow-sm table-hover w-100">
                <thead>
                  <tr>
                    <th style={{ width: 80 }}>Mã Loại</th>
                    <th>Tên Loại Sản Phẩm</th>
                    <th style={{ width: 150 }}>Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {nameServices ? (
                    nameServices.map((item, index) => (
                      <tr key={item.id_name_services}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <a href="/">
                            <button
                              className="btn btn-warning"
                              style={{ marginRight: 20 }}
                            >
                              Sửa
                            </button>
                          </a>
                          <button
                            className="btn btn-danger"
                            // onClick={() => deleteConfirm(item.id_category)}
                          >
                            Xóa
                          </button>
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
