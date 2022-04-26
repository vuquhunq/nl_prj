import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import CategoryService from "../../../service/CategoryService";
import PromotionServices from "../../../service/PromotionServices";

export const ModalUpdateCategory = (props) => {
  const [name, setName] = useState("");
  const [promotions, setPromotions] = useState([]);
  const [promotionIndex, setPromotionIndex] = useState(0);
  console.log(promotions);
  useEffect(() => {
    setName(props.item?.name);
    PromotionServices.getAllPromotion().then((res) => setPromotions(res));
  }, [props]);

  const item = props.item;
  const handleUpdate = () => {
    let objCategory = {};
    objCategory.name = name;
    if (promotionIndex > 0) objCategory.id_promotion = promotionIndex;
    objCategory.id_category = item.id_category;
    CategoryService.updateCategory(objCategory).then(() =>
      window.location.reload()
    );
    props.onHide();
  };

  const handleDeletePromotion = () => {
    let objCategory = {
      name: name,
      id_promotion: null,
      id_category: item.id_category,
    };
    CategoryService.updateCategory(objCategory).then(() =>
      window.location.reload()
    );
    props.onHide();
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
          Cập nhật Loại Sản Phẩm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "auto" }}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mã Loại Sản Phẩm:</Form.Label>
            <Form.Control type="text" disabled value={item?.id_category} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tên Loại Sản Phẩm:</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Loại Khuyến Mãi:</Form.Label>
            <div className="d-flex align-iems-center flex-nowrap gap-3 ">
              <Form.Select onChange={(e) => setPromotionIndex(e.target.value)}>
                {promotions ? (
                  promotions.map((item) => (
                    <option key={item?.id_promotion} value={item?.id_promotion}>
                      {item?.name}
                    </option>
                  ))
                ) : (
                  <h1>Loading ...</h1>
                )}
              </Form.Select>
              <Button onClick={handleDeletePromotion}>Xóa</Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleUpdate}>
          Lưu
        </Button>
        <Button variant="danger" onClick={props.onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
