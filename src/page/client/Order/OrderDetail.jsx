import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ClientNavbar from "../../../common/client/Navbar";
import UserServices from "../../../service/UserServices";

export default function OrderDetail() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    address: "",
    dob: "",
    phone: "",
  });
  useEffect(() => {
    UserServices.getInfoUser().then((res) => setProfile(res));
  }, []);
  return (
    <>
      <ClientNavbar />
      
    </>
  );
}
