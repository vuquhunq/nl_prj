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

          <AddPromotion />

          <div className="row my-5 w-100">
            <div className="col my-4">
              <table className="table table-bordered bg-white rounded shadow-sm table-hover table-data">
                <thead>
                  <tr>
                    <th scope="col">Mã</th>
                    <th scope="col">Tên Sự Kiện</th>
                    <th scope="col">Nội Dung Sự Kiện</th>
                    <th scope="col">Giảm Giá</th>
                    <th scope="col">Tác Vụ</th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>
              </table>
            </div>
          </div>
          <ModalUpdatePromotion
            promotion={promotion}
            // name={name}
            // id_promotion={promotion}
            show={modalShow}
            hide={() => setModalShow(false)}
          />
        </Container>
      </Container>
    </>
  );
}
