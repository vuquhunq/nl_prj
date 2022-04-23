import React, { useRef } from "react";
import {
  Button, ButtonGroup, Form, Modal,
  ModalBody, ModalHeader
} from "react-bootstrap";
import AuthServices from "../../../service/AuthServices";
import "./style.css";

export default function ModalUserLogin({ show, onHide }) {
  const accountRef = useRef("");
  const passwordRef = useRef("");
  const handleLogin = () => {
    const obj = {};
    obj.account = accountRef.current.value;
    obj.password = passwordRef.current.value;
    AuthServices.userLogin(obj).then(() => window.location.reload());
  };
  return (
    <Modal id="login-form" show={show} onHide={onHide} centered>
      <ModalHeader closeButton>Đăng nhập</ModalHeader>
      <ModalBody>
        <Form
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleLogin();
            }
          }}
          onSubmit={handleLogin}
        >
          <Form.Group>
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control ref={accountRef} type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control ref={passwordRef} type="password" />
          </Form.Group>
        </Form>
      </ModalBody>
      <ButtonGroup className="p-3">
        <Button className="my-1" href="/register">Đăng ký</Button>
        <Button className="my-1" onClick={handleLogin} variant="success">
          Đăng nhập
        </Button>
      </ButtonGroup>
      {/* <a href="http://127.0.0.1:8000/login">Đăng nhập bằng googgle</a> */}
    </Modal>
  );
}
