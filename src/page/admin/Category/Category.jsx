import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { Button, Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import CategoryService from "../../../service/CategoryService";
import { ModalUpdateCategory } from "./ModalUpdateCategory";
=======
import { Container } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import CategoryService from "../../../service/CategoryService";
>>>>>>> b4f7513 (backup)

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [text, setText] = useState("");
<<<<<<< HEAD
  const [modalShow, setModalShow] = useState(false);
  const [item, setItem] = useState("");

  const handleAdd = () => {
    CategoryService.addCategory({ name: text }).then(() =>
      window.location.reload()
    );
  };

  const handelDelete = (slug) => {
    CategoryService.deleteCategory(slug).then(() => window.location.reload());
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      "Are you sure you want to delete your category?"
    );
    if (answer) {
      handelDelete(slug);
    }
  };

  const showUpdate = (item) => {
    setItem(item);
    setModalShow(true);
  };
=======
>>>>>>> b4f7513 (backup)

  useEffect(() => {
    CategoryService.getAllCategory().then((res) => setCategories(res));
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
        <Sidebar active="categories" />
        <Container fluid>
          <div className="col-md-9 text-left" style={{ marginBottom: 30 }}>
            <h3>Quản Lý Loại Sản Phẩm</h3>
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
                    value={text}
                    style={{ width: 500, marginBottom: 5 }}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success mt-2"
                  name="btnLuu"
                  type="submit"
<<<<<<< HEAD
                  onClick={handleAdd}
=======
                  // onClick={handleAdd}
>>>>>>> b4f7513 (backup)
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
<<<<<<< HEAD
                    <th>Tên Khuyến Mãi</th>
=======
>>>>>>> b4f7513 (backup)
                    <th style={{ width: 150 }}>Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
                  {categories &&
                    categories.map((item, index) => (
                      <tr key={item.id_category}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
<<<<<<< HEAD
                        <td>{item.id_promotion}</td>
                        {console.log(item)}
                        <td>
                          <Button
                            className="btn btn-warning"
                            style={{ marginRight: 20 }}
                            onClick={() => showUpdate(item)}
                          >
                            Sửa
                          </Button>

                          <Button
                            className="btn btn-danger"
                            onClick={() => deleteConfirm(item.id_category)}
                          >
                            Xóa
                          </Button>
=======
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
>>>>>>> b4f7513 (backup)
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
<<<<<<< HEAD
          <ModalUpdateCategory
            item={item}
            // name={name}
            // id_promotion={promotion}
            show={modalShow}
            hide={() => setModalShow(false)}
          />
=======
>>>>>>> b4f7513 (backup)
        </Container>
      </Container>
    </>
  );
}
