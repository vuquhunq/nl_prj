import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import ServiceServices from "../../../service/ServiceServices";

export default function NameServices() {
  const [nameServices, setNameServices] = useState([]);
  const [text, setText] = useState("");
  const [item, setItem] = useState();
  const [update, setUpdate] = useState(false);

  const handleAddServices = () => {
    ServiceServices.addNameServices({ name: text }).then(() =>
      window.location.reload()
    );
  };

  const handelDelete = (slug) => {
    ServiceServices.deleteCategory(slug).then(() => window.location.reload());
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      "Are you sure you want to delete your category?"
    );
    if (answer) {
      handelDelete(slug);
    }
  };

  const handleSaveNameServices = () => {
    ServiceServices.updateNameServices({
      name: item.name,
      id_name_services: item.id_name_services,
    }).then(() => window.location.reload());
  };

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
                    Tên Loại Dịch Vụ:
                  </label>
                  <input
                    required={true}
                    type="text"
                    className="form-control"
                    id="tendmuc"
                    name="tendmuc"
                    value={text}
                    style={{ width: 500, marginBottom: 5 }}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success mt-2"
                  name="btnLuu"
                  type="submit"
                  onClick={handleAddServices}
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
                    <th>Tên Loại Dịch Vụ</th>
                    <th style={{ width: 150 }}>Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {nameServices ? (
                    nameServices.map((item, index) => (
                      <tr key={item.id_name_services}>
                        <td>{index + 1}</td>
                        <td>
                          {update === true ? (
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => setItem(e.target.value)}
                            />
                          ) : (
                            item.name
                          )}
                        </td>
                        <td>
                          {update === true ? (
                            <button
                              className="btn btn-warning"
                              style={{ marginRight: 20 }}
                              onClick={handleSaveNameServices}
                            >
                              Lưu
                            </button>
                          ) : (
                            <button
                              className="btn btn-warning"
                              style={{ marginRight: 20 }}
                              onClick={() => {
                                setItem(item);
                                setUpdate(true);
                              }}
                            >
                              Sửa
                            </button>
                          )}

                          <button
                            className="btn btn-danger"
                            onClick={() => deleteConfirm(item.id_name_services)}
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
