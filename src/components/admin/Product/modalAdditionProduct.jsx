import React, { useEffect, useRef, useState } from "react";
import { Button, Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import CategoryService from "../../../service/CategoryService";
import ColorService from "../../../service/ColorService";
import GenderService from "../../../service/GenderService";
import ProductServices from "../../../service/ProductServices";

export default function ModalAdditionProduct({ show, setShow }) {
  const nameProduct = useRef("");
  const priceProduct = useRef("");
  const descProduct = useRef("");
  const categoryProduct = useRef("");
  const genderProduct = useRef("");
  //
  const [idProduct, setIdProduct] = useState(0);
  const [colorProduct, setColorProduct] = useState(0);
  const [fileSelected, setFileSelected] = useState({});

  /////
  const [categories, setCategories] = useState([]);
  const [colories, setColories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [isAddition, setIsAddition] = useState({ basic: false, data: {} });

  //
  console.log(idProduct);
  console.log(colorProduct);

  const handleSelectFile = (e) => {
    setFileSelected(e.target.files)
  }
  const handleBasicAddition = () => {
    let objProduct = {};
    objProduct.name = nameProduct.current.value;
    objProduct.money = priceProduct.current.value;
    objProduct.detail = descProduct.current.value;
    objProduct.id_category = categoryProduct.current.value;
    objProduct.id_gender = genderProduct.current.value;

    ProductServices.addBasicProduct(objProduct).then((res) => {
      setIsAddition({ ...isAddition, basic: true, data: res });
      setIdProduct(res.id_product);
    });
  };
  const handleDetailAddition = () => {
    let objProduct = {};
    objProduct.id_product = idProduct;
    objProduct.id_color = colorProduct;
    objProduct.file = fileSelected;
    ProductServices.addDetailProduct(objProduct)
    console.log(objProduct);
  };
  useEffect(() => {
    CategoryService.getAllCategory().then((res) => setCategories(res));
    ColorService.getColor().then((res) => setColories(res));
    GenderService.getGender().then((res) => setGenders(res));
  }, []);

  return (
    <Modal show={show} onHide={setShow}>
      <ModalHeader closeButton>Thêm sản phẩm</ModalHeader>
      <ModalBody>
        <Form className="d-flex flex-column gap-3">
          <Form.Group>
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              required
              disabled={isAddition.basic}
              ref={nameProduct}
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Giá</Form.Label>
            <Form.Control
              required
              disabled={isAddition.basic}
              ref={priceProduct}
              type="text"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              required
              disabled={isAddition.basic}
              ref={descProduct}
              as="textarea"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Loại sản phẩm</Form.Label>
            <div className="d-flex gap-2">
              <Form.Select disabled={isAddition.basic} ref={categoryProduct}>
                <option value={0}>Loại sản phẩm</option>
                {categories &&
                  categories.map((item, index) => (
                    <option key={index} value={item.id_category}>
                      {item.name}
                    </option>
                  ))}
              </Form.Select>
              <Form.Select disabled={isAddition.basic} ref={genderProduct}>
                <option value={0}>Giới tính:</option>
                {genders &&
                  genders.map((item, index) => (
                    <option key={index} value={item.id_gender}>
                      {item.name}
                    </option>
                  ))}
              </Form.Select>
            </div>
            <Form.Group className="mt-3 text-center">
              <Button className="w-100" onClick={handleBasicAddition}>
                Thêm thông tin căn bản
              </Button>
            </Form.Group>
          </Form.Group>
          {isAddition.basic && (
            <Form.Group>
              <div className="container p-0">
                <Form.Label>Màu: </Form.Label>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    {colories &&
                      colories.map((color, index) => (
                        <div
                          className="color-box"
                          key={index}
                          onClick={() => setColorProduct(color.id_color)}
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: color.hex,
                            boxShadow: "0 0 10px rgba(0,0,0,.4)",
                            border:
                              colorProduct === color.id_color
                                ? "2px green solid"
                                : "none",
                          }}
                        ></div>
                      ))}
                  </div>
                  <Button>+</Button>
                </div>
              </div>
            </Form.Group>
          )}
          {colorProduct > 0 && (
            <Form.Group>
             <Form.Label>Thêm hình ảnh: </Form.Label>
             <Form.Control type="file" onChange={handleSelectFile} multiple required />
            </Form.Group>
          )}
          <Button onClick={handleDetailAddition}>Thêm hình ảnh</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
