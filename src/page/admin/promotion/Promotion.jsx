<<<<<<< HEAD
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import AdminNavbar from "../../../common/admin/Navbar";
import Sidebar from "../../../common/admin/Sidebar";
import PromotionServices from "../../../service/PromotionServices";
import "../style.css";
import { ModalUpdatePromotion } from "./ModalUpdatePromotion";

const AddPromotion = () => {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [discount, setDiscount] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddPromotion = () => {
    let objPromotion = {
      name: name,
      detail: detail,
      reduction: discount,
    };

    PromotionServices.addPromotion(objPromotion).then(() =>
      window.location.reload()
    );
    handleClose();
  };

  return (
    <>
      <Button variant="primary float-end" onClick={handleShow}>
        Thêm Mới
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo Khuyến Mãi </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tên Sự Kiện</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                required
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nội Dung Sự Kiện</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => setDetail(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Giảm Giá</Form.Label>
              <Form.Control
                type="number"
                required
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddPromotion}>
            Lưu
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default function Promotion() {
  const [promotions, setPromotions] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [promotion, setPromotion] = useState("");

  const handelDelete = (slug) => {
    PromotionServices.deletePromotion(slug).then(() =>
      window.location.reload()
    );
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm(
      "Are you sure you want to delete your category?"
    );
    if (answer) {
      handelDelete(slug);
    }
  };

  const showUpdate = (promotion) => {
    setPromotion(promotion);
    setModalShow(true);
  };

  useEffect(() => {
    PromotionServices.getAllPromotion().then((res) => setPromotions(res));
  }, []);

=======
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
>>>>>>> 51045eb9a7d28290e2d6c8a36712aee27c120e5b
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

<<<<<<< HEAD
          <AddPromotion />
=======
          <button type="button" className="btn btn-primary float-end">
            <FontAwesomeIcon icon={faPlus} />
            Thêm mới
          </button>
>>>>>>> 51045eb9a7d28290e2d6c8a36712aee27c120e5b

          <div className="row my-5 w-100">
            <div className="col my-4">
              <table className="table table-bordered bg-white rounded shadow-sm table-hover table-data">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Tên Sự Kiện</th>
                    <th scope="col">Nội Dung Sự Kiện</th>
<<<<<<< HEAD
                    <th scope="col">Giảm Giá</th>
=======
                    <th scope="col">Ngày Bắt Đầu</th>
                    <th scope="col">Ngày Kết Thúc</th>
                    <th scope="col">Giảm Giá</th>
                    <th scope="col">Loại Sản Phẩm</th>
>>>>>>> 51045eb9a7d28290e2d6c8a36712aee27c120e5b
                    <th scope="col">Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
<<<<<<< HEAD
                  {promotions ? (
                    promotions.map((promotion, index) => (
                      <tr key={promotion.id_promotion}>
                        <th scope="row">{index + 1}</th>
                        <td>{promotion.name}</td>
                        <td>{promotion.detail}</td>
                        <td>{promotion.reduction}</td>
                        <td className="task">
                          <FontAwesomeIcon
                            style={{ color: "#ffc107" }}
                            icon={faPenToSquare}
                            onClick={() => showUpdate(promotion)}
                          />
                          <FontAwesomeIcon
                            style={{ color: "red" }}
                            icon={faTrashCan}
                            onClick={() =>
                              deleteConfirm(promotion.id_promotion)
                            }
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h1>Loading ...</h1>
                  )}
=======
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
>>>>>>> 51045eb9a7d28290e2d6c8a36712aee27c120e5b
                </tbody>
              </table>
            </div>
          </div>
<<<<<<< HEAD
          <ModalUpdatePromotion
            promotion={promotion}
            // name={name}
            // id_promotion={promotion}
            show={modalShow}
            hide={() => setModalShow(false)}
          />
=======
>>>>>>> 51045eb9a7d28290e2d6c8a36712aee27c120e5b
        </Container>
      </Container>
    </>
  );
}
