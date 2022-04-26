import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import AdminServices from "../../../service/AdminServices";

// const DisplayInfoAccount = ({ id }) => {
//   // console.log(id);
//   const [info, setInfo] = useState();

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   // const emp = id.employee;
//   // console.log(emp);
//   useEffect(() => {
//     AdminServices.getAdminInfo().then((res) => setInfo(res));
//   }, []);

//   return (
//     <>
//       <FontAwesomeIcon
//         className="productlistView"
//         icon={faEye}
//         onClick={handleShow}
//       />

//       <Modal show={show} onHide={handleClose} animation={false} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Thông Tin Tài Khoản</Modal.Title>
//         </Modal.Header>
//         <Modal.Body style={{ height: "auto" }}>
//           <Form>
//             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//               <Form.Label>Mã tài khoản:</Form.Label>
//               <Form.Control type="text" disabled value={id?.id_info} />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Tên tài khoản:</Form.Label>
//               <Form.Control
//                 type="text"
//                 autoFocus
//                 // value={name}
//                 // onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Số điện thoại:</Form.Label>
//               <Form.Control
//                 type="text"
//                 autoFocus
//                 // value={content}
//                 // onChange={(e) => setContent(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Email:</Form.Label>
//               <Form.Control
//                 type="number"
//                 autoFocus
//                 // value={discount}
//                 // onChange={(e) => setDiscount(e.target.value)}
//               />
//             </Form.Group>
//             <Form.Group
//               className="mb-3"
//               controlId="exampleForm.ControlTextarea1"
//             >
//               <Form.Label>Địa chỉ:</Form.Label>
//               <Form.Control
//                 type="number"
//                 autoFocus
//                 // value={discount}
//                 // onChange={(e) => setDiscount(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" onClick={handleClose}>
//             Đóng
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

export const Employee = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    AdminServices.getAllAdmin().then((res) => setAccounts(res));
  }, []);

  return (
    <>
      <div className="row my-4">
        <div className="col">
          <table className="table table-bordered bg-white rounded shadow-sm table-hover">
            <thead>
              <tr>
                <th scope="col">Mã</th>
                <th scope="col">Tài khoản</th>
                <th scope="col">Tên người dùng</th>
                <th scope="col">Chức vụ</th>
              </tr>
            </thead>
            <tbody>
              {accounts ? (
                accounts.map((account, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{account.account}</td>
                    <td>{account.full_name}</td>
                    <td>sdf</td>
                    {/* <td>
                      <DisplayInfoAccount id={index + 1} />
                    </td> */}
                  </tr>
                ))
              ) : (
                <h1>Loading ...</h1>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
