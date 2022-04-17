import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Form,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import CategoryService from "../../../service/CategoryService";
import ColorService from "../../../service/ColorService";
import GenderService from "../../../service/GenderService";
import ProductServices from "../../../service/ProductServices";
import SizeService from "../../../service/SizeService";
import ColorBox from "../../ColorBox";

export default function ModalAdditionProduct({ show, setShow }) {
  const nameProduct = useRef("");
  const priceProduct = useRef("");
  const descProduct = useRef("");
  const categoryProduct = useRef("");
  const genderProduct = useRef("");
  const quantityProduct = useRef("");
  const handleResetRef = () => {
    nameProduct.current.value = "";
    priceProduct.current.value = "";
    descProduct.current.value = "";
    categoryProduct.current.value = "";
    genderProduct.current.value = "";
    quantityProduct.current.value = "";

    setColorProduct(0);
    setIsAddition({ ...isAddition, basic: false, detail: false, data: {} });
  };
  //
  const [idProduct, setIdProduct] = useState(0);
  const [colorProduct, setColorProduct] = useState(0);
  const [sizeProduct, setSizeProduct] = useState(0);
  const [fileSelected, setFileSelected] = useState({});
  const [isUploadSuccess, setIsUploadSuccess] = useState(false);
  /////
  const [categories, setCategories] = useState([]);
  const [colories, setColories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [isAddition, setIsAddition] = useState({
    basic: false,
    detail: false,
    data: {},
  });

  //
  const handleSelectFile = (e) => {
    setFileSelected(e.target.files);
  };
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
    ProductServices.addDetailProduct(objProduct).then((res) => {
      if (res.status === 200) {
        setIsUploadSuccess(true);
        const detail = res.data;
        setIsAddition({
          ...isAddition,
          basic: true,
          detail: true,
          data: { ...isAddition.data, detail },
        });
      }
    });
  };
  const handleSizeAddition = () => {
    let obj = {};
    obj.quantity = parseInt(quantityProduct.current.value);
    obj.quantity_sold = 0;
    obj.id_product_detail = isAddition.data.detail.id_product_detail || 0;
    obj.id_size = parseInt(sizeProduct);
    ProductServices.addSizeQuantity(obj).then((res) => console.log(res));
  };
  useEffect(() => {
    CategoryService.getAllCategory().then((res) => setCategories(res));
    ColorService.getColor().then((res) => setColories(res));
    GenderService.getGender().then((res) => setGenders(res));
    SizeService.getSize().then((res) => setSizes(res));
  }, []);
  return (
    <Modal
      show={show}
      onHide={() => {
        setShow();
        handleResetRef();
      }}
    >
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
              <Button
                disabled={isAddition.basic}
                className="w-100"
                onClick={handleBasicAddition}
              >
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
                        <ColorBox
                          color={color}
                          colorProduct={colorProduct}
                          setColorProduct={setColorProduct}
                          key={index}
                        />
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
              <Form.Control
                type="file"
                onChange={handleSelectFile}
                multiple
                required
              />
              <Container fluid className="p-0 mt-3">
                <Button
                  disabled={isAddition.detail}
                  className="w-100"
                  onClick={handleDetailAddition}
                >
                  Thêm hình ảnh
                </Button>
              </Container>
            </Form.Group>
          )}
          {isAddition.detail && (
            <Form.Group className="d-flex text-nowrap align-items-center gap-3">
              <Form.Label>Thêm size:</Form.Label>
              <Form.Select onChange={(e) => setSizeProduct(e.target.value)}>
                <option value="0">Kích thước:</option>
                {sizes &&
                  sizes.map((size, index) => (
                    <option key={index} value={size.id_size}>
                      {size.size_number}
                    </option>
                  ))}
              </Form.Select>
              <Form.Control
                ref={quantityProduct}
                disabled={sizeProduct === 0}
                type="text"
              />
              <ButtonGroup>
                <Button onClick={handleSizeAddition}>Thêm số lượng</Button>
              </ButtonGroup>
            </Form.Group>
          )}
        </Form>
      </ModalBody>
    </Modal>
  );
}
