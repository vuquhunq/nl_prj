import React from "react";
import { Form } from "react-bootstrap";

export default function FileUpload({ setFiles }) {
  const handleChange = (e) => {
    setFiles(e.target.files);
  };
  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Control type="file" onChange={handleChange} multiple required />
    </Form.Group>
  );
}
