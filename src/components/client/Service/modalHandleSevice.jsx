import React, { useEffect, useState } from "react";
import {
  Form,
  Modal,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
} from "react-bootstrap";
import ServiceServices from "../../../service/ServiceServices";

export default function ModalHandleSevice({ show, isShow }) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    ServiceServices.getAllNameServices().then((res) => setServices(res));
  }, []);
  const [service, setService] = useState(0);
  const [dateService, setDateService] = useState("");
  const hanldeSubmitService = () => {
    const obj = {
      status: "0",
      date_create: Date.now(),
      booking_date: Date.now().toLocaleString(),
      id_user: 0,
      id_name_services: service,
    };
    console.log(obj);
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
    </Modal>
  );
}
