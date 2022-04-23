import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup, Image, Modal, Row, Table
} from "react-bootstrap";
import ClientNavbar from "../../../common/client/Navbar";
import BillService from "../../../service/BillService";
import UserServices from "../../../service/UserServices";
import "./style.css";
export default function ProfileUser() {
  ////////
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  // const []
  //
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    address: "",
    dob: "",
    phone: "",
  });
  const [historyPurchase, setHistoryPurchase] = useState([]);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const [detailOrder, setDetailOrder] = useState(0);
  const [showDetailOrder, setShowDetailOrder] = useState(false);
  //
  const passwordRef = useRef("");
  const newPasswordRef = useRef("");
  const rePasswordRef = useRef("");

  const handleHideOrder = () => {
    setShowDetailOrder(!showDetailOrder);
  };
  const handleShowDetailOrder = (props) => {
    if (props > 0) {
      setDetailOrder(props);
    }
    setShowDetailOrder(true);
  };
  useEffect(() => {
    UserServices.getInfoUser().then((res) => setProfile(res));
    BillService.getBillService().then((res) => setHistoryPurchase(res));
  }, []);
  useEffect(() => {
    setFullName(profile.full_name);
    setEmail(profile.email);
    setAddress(profile.address);
    setPhone(profile.phone);
    setDob(profile.dob);
  }, [
    profile.full_name,
    profile.email,
    profile.address,
    profile.phone,
    profile.dob,
  ]);
  const handleUpdateProfile = () => {
    const obj = {
      address: address,
      dob: dob,
      phone: phone,
      email: email,
      full_name: fullName,
    };
    UserServices.updateProfileUser(obj);
  };
  const handleUpdatePassword = () => {
    const obj = {
      password: newPasswordRef.current.value,
      password_old: passwordRef.current.value,
    };
    UserServices.updatePasswordUser(obj);
  };
  return (
    <>
      <ClientNavbar />
      <Container
        id="client-content"
        fluid
        className="d-flex"
        style={{ height: "calc(100vh - 60px)" }}
      >
        <Container className="py-3 overflow-auto">
          <Row>
            <Col>
              <h3 className="text-center">Thông tin cá nhân</h3>
              <Form
                className="d-flex flex-column gap-2"
                onSubmit={handleUpdateProfile}
              >
                <Form.Group>
                  <Form.Label>Họ và tên:</Form.Label>
                  <Form.Control
                    placeholder={
                      Object.keys(profile).length > 0 ? profile.full_name : ""
                    }
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    placeholder={
                      Object.keys(profile).length > 0 ? profile.email : ""
                    }
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Số điện thoại:</Form.Label>
                  <Form.Control
                    placeholder={
                      Object.keys(profile).length > 0 ? profile.phone : ""
                    }
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Số điện thoại:</Form.Label>
                  <Form.Control
                    placeholder={
                      Object.keys(profile).length > 0 ? profile.address : ""
                    }
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Ngày sinh:</Form.Label>
                  <Form.Control
                    placeholder={
                      Object.keys(profile).length > 0 ? profile.dob : ""
                    }
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </Form.Group>
                <FormGroup className="d-flex gap-2 my-2">
                  <Button
                    className="d-flex w-100 text-center"
                    variant="btn btn-outline-secondary"
                    onClick={() => setIsUpdatePassword(!isUpdatePassword)}
                  >
                    Đổi mật khẩu
                  </Button>
                  <Button
                    className="d-flex w-100"
                    variant="btn btn-outline-primary"
                    onClick={handleUpdateProfile}
                  >
                    Cập nhật thông tin
                  </Button>
                </FormGroup>
              </Form>
              {isUpdatePassword ? (
                <Form className={`d-flex flex-column gap-2 `}>
                  <h4 className="text-center">Cập nhật mật khẩu</h4>
                  <Form.Group>
                    <Form.Label>Nhập mật khẩu cũ:</Form.Label>
                    <Form.Control ref={passwordRef} type="password" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nhập mật khẩu mới:</Form.Label>
                    <Form.Control ref={newPasswordRef} type="password" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nhập lại mật khẩu:</Form.Label>
                    <Form.Control ref={rePasswordRef} type="password" />
                  </Form.Group>
                  <Button onClick={handleUpdatePassword}>
                    Cập nhật mật khẩu
                  </Button>
                </Form>
              ) : (
                <></>
              )}
            </Col>
            <Col>
              <h4 className="text-center">Thông tin đơn hàng</h4>
              <DetailOrder
                order={historyPurchase}
                handleShowDetailOrder={handleShowDetailOrder}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <ModalDetailOrder
        show={showDetailOrder}
        onHide={handleHideOrder}
        detailOrder={detailOrder}
      />
    </>
  );
}

const ModalDetailOrder = ({ show, onHide, detailOrder }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    detailOrder > 0 &&
      BillService.getUserDetailBill(detailOrder).then((res) =>
        setDetails(res)
      );
  }, [detailOrder]);
  console.log(details);
  return (
    <Modal centered show={show} onHide={onHide} size="lg">
      <Modal.Body>
        <Modal.Title className="text-center">
          Thông tin đơn đặt hàng
        </Modal.Title>
        <Table>
          <thead>
            <tr className="text-center">
              <td>Hình sản phẩm</td>
              <td>Tên sản phấm</td>
              <td>Màu</td>
              <td>Đơn giá</td>
              <td>Số lượng</td>
              <td>Tổng tiền</td>
            </tr>
          </thead>
          <tbody>
            {Object.keys(details).length > 0 &&
              details.list_product_details.map((detail, index) => (
                <tr
                  style={{ verticalAlign: "middle", textAlign: "center" }}
                  key={index}
                >
                  <td className="text-center">
                    <Image
                      className="rounded"
                      src={detail.path}
                      alt="Hình ảnh sản phẩm"
                      width={50}
                      height={50}
                    />
                  </td>
                  <td>{detail.name}</td>
                  <td>
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 0.4,
                        backgroundColor: detail.hex,
                      }}
                    ></div>
                  </td>
                  <td>
                    {detail.current_price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td>{detail.quantily}</td>
                  <td>
                    {(detail.current_price * detail.quantily).toLocaleString(
                      "its-IT",
                      {
                        style: "currency",
                        currency: "VND",
                      }
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};
const DetailOrder = ({ order, handleShowDetailOrder }) => {
  return (
    <Container id="detail-order" className="d-flex flex-column gap-2">
      {order.length > 0 ? (
        order.map((props, index) => {
          return (
            <Container
              fluid
              className="detail-items d-flex justify-content-between"
              onClick={() => handleShowDetailOrder(props.id_bill)}
              key={index}
            >
              <span>{props.date_create}</span>
              <span>{props.address}</span>
              <span>{props.method}</span>
              <span>
                {props.total.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              <span>{props.status}</span>
            </Container>
          );
        })
      ) : (
        <p>Không có thông đơn hàng</p>
      )}
    </Container>
  );
};
