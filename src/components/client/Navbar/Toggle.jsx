import {
  faCartArrowDown,
  faChevronDown,
  faChevronUp,
  faSignOut,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { access_token } from "../../../config/authConfig";
import ModalUserLogin from "../../../page/Auth/client/Login";
import AuthServices from "../../../service/AuthServices";
import "./style.css";

const DropMenu = ({ isDisplay }) => {
  return (
    <div
    id="dropdown"
      className="container position-absolute p-0"
      style={{
        display: isDisplay ? "block" : "none",
        minWidth: 300,
      }}
    >
      <div
        className="d-flex flex-column align-items-end justify-content-center gap-2"
        style={{
          borderRadius: 18,
        }}
      >
        <Button
          className="d-flex btn rounded-pill text-muted justify-content-end align-items-center bg-light shadow-lg gap-2 p-3"
          variant="btn"
          style={{
            minWidth: 40,
            height: 40,
          }}
          href="/profile"
        >
          <div className="d-flex">Thông tin người dùng</div>
          <FontAwesomeIcon icon={faUser} color="#F15E2C" />
        </Button>
        <Button
          className="d-flex rounded-pill justify-content-end align-items-center bg-light text-muted shadow-lg gap-2 px-2"
          onClick={() => {
            AuthServices.logout().then(() => window.location = '');
          }}
          variant="btn"
          style={{
            minWidth: 40,
            height: 40,
          }}
        >
          Đăng xuất
          <FontAwesomeIcon icon={faSignOut} color="#F15E2C" />
        </Button>
      </div>
    </div>
  );
};
const Toggle = ({ userInfo }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div
      className="user-toggle rounded-pill"
      onClick={() => setIsShow(!isShow)}
    >
      {userInfo ? userInfo.full_name : <Skeleton width={100} />}
      <FontAwesomeIcon
        icon={isShow ? faChevronUp : faChevronDown}
        color="#F15E2C"
      />
      <DropMenu isDisplay={isShow} />
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
      {/* <span
        onClick={showCart}
        className="d-flex flex-column position-absolute shadow-lg"
        style={{ bottom: -30, right: 20, zIndex: 5 }}
      >
        <FontAwesomeIcon size="xl" color="#f15e2c" icon={faCartArrowDown} />
      </span> */}
    </div>
  );
};
