import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ToastContainer,
  Toast
} from "react-bootstrap";
import { infoUser } from "../../../config/authConfig";
import ServiceServices from "../../../service/ServiceServices";

export default function ModalHandleSevice({ show, isShow }) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    ServiceServices.getAllNameServices().then((res) => setServices(res));
  }, []);
  const [service, setService] = useState(0);
  const [isSuccess, setIsSuccess] = useState("");
  const [dateService, setDateService] = useState("");
  const hanldeSubmitService = () => {
    const obj = {
      status: "Chua",
      date_create: Date.now(),
      booking_date: dateService,
      id_user: infoUser.id_user,
      id_name_services: service,
    };
    ServiceServices.addService(obj).then((res) => setIsSuccess(res));
  };
  return (
    <Modal size="md" show={show} onHide={isShow}>
      <ModalHeader closeButton>
        <h3>Dịch vụ</h3>
      </ModalHeader>
      <ModalBody>
        <Form className="d-flex justify-content-center align-items-stretch gap-3">
          <Form.Group>
            <Form.Label>Tên dịch vụ</Form.Label>
            <Form.Select onChange={(e) => setService(e.target.value)}>
              <option value="0">Dịch vụ</option>
              {services &&
                services.map((service, index) => (
                  <option value={service.id_name_services} key={index}>
                    {service.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ngày đăng ký dịch vụ</Form.Label>
            <Form.Control
              onChange={(e) => setDateService(e.target.value)}
              type="date"
            />
          </Form.Group>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={hanldeSubmitService}>ĐĂNG KÝ DỊCH VỤ</Button>
      </ModalFooter>
      <ToastContainer>
        <Toast show={isSuccess !== ''} onHide={()=>setIsSuccess('')} delay={1000} autohide>
          <Toast.Body>{isSuccess}</Toast.Body>
        </Toast>
      </ToastContainer>
    </Modal>
  );
}
