import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { access_token } from "../../../config/authConfig";
import ModalUserLogin from "../../../page/Auth/client/Login";

const DropdownToogle = ({ show }) => {
  return <Container className="postion-absolute">
      <span>Đăng xuất</span>
  </Container>;
};
export const UserToggle = ({ userInfo }) => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <ModalUserLogin show={isShow} onHide={handleShow} />
      {access_token ? (
        <span className="postion-relative">{userInfo && userInfo.full_name}
        <DropdownToogle />
        </span>
      ) : (
        <Button onClick={handleShow} variant="btn btn-outline-none">
          Đăng xuất/đăng nhập
        </Button>
      )}
    </>
  );
};
