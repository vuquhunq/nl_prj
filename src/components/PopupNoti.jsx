import React from "react";
import { Toast, ToastBody, ToastContainer } from "react-bootstrap";

export default function PopupNoti({ status, setStatus }) {
  return (
    <ToastContainer className="position-fixed" position="bottom-end">
      <Toast
        show={status !== ""}
        delay={1000}
        onClose={() => setStatus("")}
        autohide
      >
        <ToastBody>{status}</ToastBody>
      </Toast>
    </ToastContainer>
  );
}
