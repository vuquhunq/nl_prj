import {
  faChevronCircleDown,
  faChevronCircleUp,
  faChevronDown,
  faChevronUp,
  faRemove,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import VNPayLogo from "../../../assets/vnpay.png";
import ClientNavbar from "../../../common/client/Navbar";
import { access_token, cartDetail, infoUser } from "../../../config/authConfig";
import BillService from "../../../service/BillService";
import PurchaseService from "../../../service/PurchaseService";
import UserServices from "../../../service/UserServices";
import "./style.css";

export default function Purchase() {
  const [isShow, setIsShow] = useState(false);
  const [carts, setCarts] = useState(cartDetail || []);
  useEffect(() => {
    localStorage.setItem("cart-detail", JSON.stringify(carts));
  }, [carts]);
  const total = carts
    ? carts.reduce((a, b) => a + b.current_price * b.quantily, 0)
    : 0;
  const handleRemoveItem = (id) => {
    const newList = carts && carts.filter((e) => e.id_size_quantity !== id);
    carts && setCarts(newList);
  };
  const handleQuantity = (id, count) => {
    const newArr = carts.map((cart) => {
      if (cart.id_size_quantity === id) {
        return {
          ...cart,
          quantily: cart.quantily + count,
        };
      } else return { ...cart };
    });
    setCarts(newArr);
  };
  return (
    <>
      <ClientNavbar />
      <Container id="purchase-wrapper">
        <div className="detail-product">
          {carts ? (
            carts.length > 0 ? (
              carts.map((cart, index) => (
                <div className="product-detail" key={index}>
                  <Image
                    src={cart.img}
                    alt="Product Image"
                    style={{ width: 200, height: 200 }}
                  />
                  <div className="detail-content">
                    <div className="container">
                      <div className="content-name">
                        {cart.name}
                        <FontAwesomeIcon
                          onClick={() =>
                            handleRemoveItem(cart.id_size_quantity)
                          }
                          icon={faRemove}
                        />
                      </div>
                      <div className="content-price">
                        {cart.current_price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </div>
                      <div
                        className="content-price d-flex flex-column"
                        style={{ fontWeight: 700 }}
                        k
                      >
                        <span className="d-flex gap-1">
                          <span style={{ fontWeight: 600, color: "black" }}>
                            Kích cỡ:
                          </span>
                          <span>{cart.size}</span>
                        </span>
                        <span className="d-flex align-items-center flex-nowrap gap-1">
                          <span style={{ fontWeight: 600, color: "black" }}>
                            Số lượng:
                          </span>
                          <span className="d-flex flex-nowrap align-items-center gap-2">
                            {cart.quantily}
                            <span className="d-flex flex-column justify-content-center align-items-center">
                              <FontAwesomeIcon
                                onClick={() =>
                                  handleQuantity(cart.id_size_quantity, 1)
                                }
                                icon={faChevronUp}
                              />
                              <FontAwesomeIcon
                                onClick={() =>
                                 { handleQuantity(cart.id_size_quantity, -1)
                                  cart.quantily <=1 && handleRemoveItem(cart.id_size_quantity)}
                                }
                                icon={faChevronDown}
                              />
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <Container
                fluid
                className="d-flex justify-content-center"
                style={{ height: "100%", alignItems: "center" }}
              >
                Không có sản phẩm trong giỏ hàng
              </Container>
            )
          ) : (
            <Container>Không có sản phẩm trong giỏ hàng</Container>
          )}
        </div>
        <div className="detail-purchase">
          <div className="container sticky-top" style={{ top: 120 }}>
            <div className="title-purchase">ĐƠN HÀNG</div>
            <div className="content-purchase">
              {carts &&
                carts.map((cart, index) => (
                  <div className="content-item" key={index}>
                    <span>
                      <span>
                        {cart.current_price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </span>
                      x<span>{cart.quantily}</span>
                    </span>
                    <span>
                      {(cart.current_price * cart.quantily).toLocaleString(
                        "it-IT",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      )}
                    </span>
                  </div>
                ))}
            </div>
            <div className="total-puchase">
              <div className="content-item">
                <span>TẠM TÍNH</span>
                <span>
                  {total.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </div>
            </div>
            <div className="toggle-purchase">
              <Button
                variant="btn"
                className="purchase-button"
                disabled={!access_token}
                onClick={() => setIsShow(true)}
              >
                THANH TOÁN
              </Button>
            </div>
          </div>
        </div>
        {access_token && (
          <ModalSubmitPurchase
            total={total}
            isShow={isShow}
            setIsShow={setIsShow}
          />
        )}
      </Container>
    </>
  );
}

const ModalSubmitPurchase = ({ total, isShow, setIsShow }) => {
  const [userInfo, setUserInfo] = useState({
    address: "",
    dob: "",
    phone: "",
    email: "",
    full_name: "",
  });
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isPurchase, setIsPurchase] = useState(false);
  useEffect(() => {
    setFullName(userInfo.full_name);
    setPhone(userInfo.phone);
    setAddress(userInfo.address);
  }, [userInfo.address, userInfo.phone, userInfo.email, userInfo.full_name]);
  useEffect(() => {
    access_token && UserServices.getInfoUser().then((res) => setUserInfo(res));
  }, []);
  const [link, setLink] = useState("");
  const handlePurchase = () => {
    const obj = {
      order_id: Date.now(),
      money: total,
    };
    PurchaseService.createOrder(obj).then((res) => setLink(res));
  };
  useEffect(() => {
    if (link !== "") {
      window.location.href = link;
    }
  }, [link]);
  const { id } = useParams();
  const [isSuccess, setIsSuccess] = useState('')
  useEffect(() => {
    const obj = {
      address: address,
      method: "Payment",
      total: total,
      date_create: Date.now(),
      status: "Đang chờ xử lý",
      id_user: infoUser.id_user,
      list_bill_detail: cartDetail,
    };
    id &&
      BillService.addBillService(obj).then((res) => {
        localStorage.removeItem("cart-detail");
        if(res=200) setIsSuccess('Thanh toán thành công')
      });
  }, [id]);
  const handleOrder = () => {
    const obj = {
      address: address,
      method: "COD",
      total: total,
      date_create: Date.now(),
      status: "Đang chơ xử lý",
      id_user: infoUser.id_user,
      list_bill_detail: cartDetail,
    };
    BillService.addBillService(obj).then((res) => {
      if (res === 200) {
        window.location = "/";
      }
    });
  };
  return (
    <Modal show={isShow} onHide={() => setIsShow(false)} centered size="xl">
      <Modal.Header closeButton>PHƯƠNG THỨC THANH TOÁN</Modal.Header>
      <Modal.Body>
        <Row>
          <Col>
            <h4>THÔNG TIN CÁ NHÂN</h4>
            <Form>
              <Form.Group>
                <Form.Label>HỌ VÀ TÊN</Form.Label>
                <Form.Control
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>SỐ ĐIỆN THOẠI</Form.Label>
                <Form.Control
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>ĐỊA CHỈ</Form.Label>
                <Form.Control
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              </Form.Group>
            </Form>
            <Container className="p-0 my-4">
              <h4>PHƯƠNG THỨC THANH TOÁN</h4>
              <Form>
                <div
                  key={`default-radio`}
                  className="mb-3 d-flex flex-column gap-3"
                >
                  <span className="d-flex align-items-center justify-content-between">
                    <Form.Check
                      label="Thanh toán bằng VNPay"
                      name="payment"
                      type="radio"
                      id={`default-radio-1`}
                      onClick={() => setIsPurchase(true)}
                    />
                    <div style={{ height: 20 }}>
                      <img
                        src={VNPayLogo}
                        alt="Logo"
                        style={{ height: "100%", width: "auto" }}
                      />
                    </div>
                  </span>
                  <span className="d-flex align-items-center justify-content-between">
                    <Form.Check
                      label="Thanh toán trực tiếp khi giao hàng"
                      name="payment"
                      type="radio"
                      id={`default-radio-2`}
                      onClick={() => setIsPurchase(false)}
                    />
                    <img
                      src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/icon_COD.svg"
                      alt="cod"
                    />
                  </span>
                </div>
              </Form>
            </Container>
          </Col>
          <Col>
            <div className="detail-purchase">
              <div className="container sticky-top" style={{ top: 120 }}>
                <div className="title-purchase">ĐƠN HÀNG</div>
                <div className="content-purcshase">
                  {cartDetail &&
                    cartDetail.map((cart, index) => (
                      <div
                        className="d-flex justify-content-start gap-2 mb-2"
                        style={{ height: 70 }}
                        key={index}
                      >
                        <div
                          className="d-flex overflow-hidden"
                          style={{ height: "100%", maxWidth: 100 }}
                        >
                          <img
                            src={cart.img}
                            className="img-fluid rounded"
                            alt="Hình sản phẩm"
                          />
                        </div>
                        <div className="span d-flex flex-column justify-content-between w-100">
                          <span style={{ fontWeight: 600, fontSize: "large" }}>
                            {cart.name}
                          </span>
                          <div className="content-item d-flex flex-nowrap">
                            <span>
                              <span>
                                {cart.current_price.toLocaleString("it-IT", {
                                  style: "currency",
                                  currency: "VND",
                                })}
                              </span>
                              x<span>{cart.quantily}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div className="total-puchase">
                  <div className="content-item">
                    <span>TẠM TÍNH</span>
                    <span>
                      {total.toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </div>
                </div>
                <div className="toggle-purchase">
                  <Button
                    variant="btn"
                    className="purchase-button"
                    onClick={isPurchase ? handlePurchase : handleOrder}
                  >
                    {isPurchase ? "THANH TOÁN" : "ĐẶT HÀNG"}
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="overflow-auto">
          <Col></Col>
          <Col></Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
