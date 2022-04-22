import React, { useRef } from "react";
import { Container, Form } from "react-bootstrap";
import ClientNavbar from "../../../common/client/Navbar";

export default function Register() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  console.log(usernameRef, passwordRef);
  return (
    <>
      <ClientNavbar />
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Tên đăng nhập</Form.Label>
            <Form.Control />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mật khẩu</Form.Label>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
