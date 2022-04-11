import { useState } from "react";
import { Button } from "react-bootstrap";
import { access_token } from "../../../config/authConfig";
import ModalUserLogin from "../../../page/Auth/client/Login";
import {ReactComponent as ChervDownIcon} from '../../../assets/chervDown.svg'
import './style.css'

const Toggle = ({ userInfo }) => {
  return (
   <div className="user-toggle rounded-pill">
       {userInfo && userInfo.full_name} <ChervDownIcon />
   </div>
  );
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
        <Toggle userInfo={userInfo} />
      ) : (
        <Button onClick={handleShow} variant="btn btn-outline-none">
          Đăng xuất/đăng nhập
        </Button>
      )}
    </>
  );
};
