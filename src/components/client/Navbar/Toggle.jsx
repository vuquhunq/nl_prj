import { useState } from "react";
import { Button } from "react-bootstrap";
import { access_token } from "../../../config/authConfig";
import ModalUserLogin from "../../../page/Auth/client/Login";
import { ReactComponent as ChervDownIcon } from "../../../assets/chervDown.svg";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Toggle = ({ userInfo }) => {
  return (
    <div className="user-toggle rounded-pill">
      {userInfo && userInfo.full_name} <ChervDownIcon />
    </div>
  );
};
export const UserToggle = ({ userInfo, showCart }) => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="d-flex positon-relative">
      <ModalUserLogin show={isShow} onHide={handleShow} />
      {access_token ? (
        <Toggle userInfo={userInfo} />
      ) : (
        <Button onClick={handleShow} variant="btn btn-outline-none">
          Đăng ký/Đăng nhập
        </Button>
      )}
      <span
        onClick={showCart}
        className="d-flex flex-column position-absolute shadow-lg"
        style={{ bottom: -30, right: 20, zIndex: 5 }}
      >
        <FontAwesomeIcon size="xl" color="#f15e2c" icon={faCartArrowDown} />
      </span>
    </div>
  );
};
