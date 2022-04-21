import React, { useRef } from "react";
import {
  Form,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import './style.css'
import AuthServices from "../../../service/AuthServices";

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
      <ModalFooter>
        <Button onClick={handleLogin} variant="success">
          Đăng nhập
        </Button>
      </ModalFooter>
    </Modal>
  );
}
