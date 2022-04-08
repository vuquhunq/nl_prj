import React, { useRef } from "react";
import { Modal, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";
import AuthService from '../../../service/AuthServices'
export default function Login() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const handleLogin = () => {
    let obj = {}
    obj.account = usernameRef.current.value;
    obj.password = passwordRef.current.value;
    AuthService.login(obj)
  };
  return (
    <Modal show>
      <Modal.Header>Đăng nhập</Modal.Header>
      <Modal.Body>
        <FormGroup
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
        >
          <FormLabel>Tên đăng nhập</FormLabel>
          <FormControl ref={usernameRef} type="text" />
          <FormLabel>Mật khẩu</FormLabel>
          <FormControl ref={passwordRef} type="password" />
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
          <Button onClick={handleLogin}>Đăng nhập</Button>
      </Modal.Footer>
    </Modal>
  );
}
