import React, { useRef, useState } from "react";
import { Form, FormGroup, Modal } from "react-bootstrap";
import ClientNavbar from "../../../common/client/Navbar";
import AuthServices from "../../../service/AuthServices";
import "./style.css";

export default function Register() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const repasswordRef = useRef("");
  const addressRef = useRef("");
  const dobRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const fullnameRef = useRef("");
  const handleRegister = () => {
    const obj = {
      id_permission: 3,
      password: passwordRef.current.value,
      account: usernameRef.current.value,
      info: {
        address: addressRef.current.value,
        dob: dobRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        full_name: fullnameRef.current.value,
      },
    };
    AuthServices.userRegister(obj).then((res) => {
      if (res === 200) window.location = "/";
    });
  };
  return (
    <>
      <ClientNavbar />
      <Modal show id="modal-register" centered>
        <Modal.Header>Đăng ký khách hàng</Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleRegister}
            onKeyDown={(e) => e.key === "Enter" && handleRegister()}
          >
            <Form.Group>
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control required ref={usernameRef} type="text" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control required ref={passwordRef} type="password" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <Form.Control required ref={repasswordRef} type="password" />
            </Form.Group>
            <FormGroup>
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control required ref={fullnameRef} />
            </FormGroup>
            <Form.Group>
              <Form.Label>Địa chỉ </Form.Label>
              <Form.Control required ref={addressRef} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Năm sinh</Form.Label>
              <Form.Control required ref={dobRef} type="date" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control required ref={phoneRef} maxLength="10" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control required ref={emailRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
