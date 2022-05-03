import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Confirm() {
  const { id } = useParams();
  useEffect(()=>{
      localStorage.setItem('access_token', id)
      window.location = '/'
  },[id])
  return (
    <Modal show centered>
      <Modal.Header>XÁC THỰC THÔNG TIN</Modal.Header>
      <Modal.Body>Đang chuyển trang</Modal.Body>
    </Modal>
  );
}
