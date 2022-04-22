import React, { useEffect, useState } from "react";
import { Form, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import ServiceServices from "../../../service/ServiceServices";

export default function ModalHandleSevice({ show, isShow }) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    ServiceServices.getAllNameServices().then((res) => setServices(res));
  }, []);
  return (
    <Modal size="lg" show={show} onHide={isShow}>
      <ModalHeader closeButton>
        <h3>Dịch vụ</h3>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Form.Group>
            <Form.Label>Tên dịch vụ</Form.Label>
            <Form.Select>
              <option value="0">Dịch vụ</option>
              {services &&
                services.map((service, index) => (
                  <option value={service.id_name_services} key={index}>
                    {service.name}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </ModalBody>
    </Modal>
  );
}
