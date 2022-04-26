import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Navbar,
  ToastBody,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import ModalAdditionProduct from "../../../components/admin/Product/modalAdditionProduct";
import FileServices from "../../../service/FileServices";
import ProductServices from "../../../service/ProductServices";
import "./style.css";
const HeaderProduct = ({ setStatus }) => {
  const [isShowModalAddition, setIsShowModalAddition] = useState(false);
  const handleShowModalAddition = () => {
    setIsShowModalAddition(!isShowModalAddition);
  };
  const [file, setFile] = useState(null);
  useEffect(() => {
    file && setStatus("Đang xử lý file");
    file &&
      ProductServices.importFile(file).then((res) => {
        if (res === 200) {
          setStatus("Thành công");
          setFile(null);
        } else setStatus("Thất bại");
      });
  }, [file]);
  return (
    <>
      <Navbar
        sticky="top"
        bg="white"
        className="d-flex justify-content-between py-4"
      >
        <h3>Quản lý sản phẩm</h3>
        <input
          onChange={(e) => setFile(e.target.files)}
          type="file"
          className="custom-file-input"
        />
        <Button onClick={handleShowModalAddition}>Thêm sản phẩm</Button>
      </Navbar>
      <ModalAdditionProduct
        show={isShowModalAddition}
        setShow={handleShowModalAddition}
      />
    </>
  );
};

export default function Product() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    ProductServices.getAllProduct().then((res) => setProducts(res));
  }, []);
  return (
    <>
      <ToastContainer className="position-fixsed" position="bottom-end">
        <Toast
          show={status !== ""}
          delay={3000}
          onClose={() => setStatus("")}
          autohide
        >
          <ToastBody>{status}</ToastBody>
        </Toast>
      </ToastContainer>
      <AdminNavbar />
      <Container
        id="admin-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Sidebar active="products" />
        <Container fluid className="overflow-auto">
          <HeaderProduct setStatus={setStatus} />
          <table className="table table-bordered bg-white rounded  table-hover">
            <thead
              className="text-center sticky-top bg-white shadow-sm"
              style={{ top: 85 }}
            >
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Hình Ảnh</th>
                <th scope="col">Giá</th>
                <th scope="col">Tác Vụ</th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {products ? (
                products.map((product, index) => (
                  <tr key={index}>
                    <th className="text-center">{index + 1}</th>
                    <td>{product.name}</td>
                    <td className="text-center">
                      <img
                        src={FileServices.getIMG(
                          product.list_color[0] &&
                            product.list_color[0].list_image[0]
                            ? product.list_color[0].list_image[0]
                            : ""
                        )}
                        alt=""
                        style={{ width: "auto", height: 200 }}
                      />
                    </td>
                    <td>{product.money} VNĐ</td>
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
                ))
              ) : (
                <h1>Loading ...</h1>
              )}
            </tbody>
          </table>
        </Container>
      </Container>
    </>
  );
}
