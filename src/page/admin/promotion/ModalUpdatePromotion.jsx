import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import PromotionServices from "../../../service/PromotionServices";

export const ModalUpdatePromotion = (props) => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    setName(props.promotion?.name);
    setContent(props.promotion?.detail);
    setDiscount(props.promotion?.reduction);
  }, [props]);

  const promotion = props.promotion;
  console.log(promotion);

  const handleUpdatePromotion = () => {
    let objPromotion = {
      reduction: discount,
      detail: content,
      name: name,
      id_promotion: promotion.id_promotion,
    };
    PromotionServices.updatePromotion(objPromotion).then(() =>
      window.location.reload()
    );
    props.hide();
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Cập nhật Khuyến Mãi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mã Khuyến Mãi:</Form.Label>
            <Form.Control
              type="text"
              disabled
              value={promotion?.id_promotion}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tên Sự Kiện:</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nội Dung Sự Kiện:</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Giảm Giá:</Form.Label>
            <Form.Control
              type="number"
              autoFocus
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleUpdatePromotion}>
          Lưu
        </Button>
        <Button variant="danger" onClick={props.hide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
