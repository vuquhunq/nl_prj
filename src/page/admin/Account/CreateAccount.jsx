import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../config/axiosConfig";
import AdminServices from "../../../service/AdminServices";

export const CreateAccount = () => {
  const [role, setRole] = useState([]);

  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [address, setAddress] = useState("");

  const [addEmployee, setAddEmployee] = useState([]);

  const handelAddAccount = (e) => {
    e.preventDefault();
    let info = {
      address,
      dob: "2022-03-28",
      phone,
      email,
      full_name: name,
    };
    const newInfo = {
      id_permission: position,
      password,
      account,
      info,
    };
    console.log(newInfo);
    AdminServices.createAccountAdmin(newInfo)
      .then(() => setAddEmployee([...addEmployee, newInfo]))
      .then(() => window.location.reload());
  };

  useEffect(() => {
    const getRole = async () => {
      await axiosInstance
        .get("permission")
        .then((res) => setRole(res.data))
        .catch((err) => console.log(err));
    };
    getRole();
  }, []);

  return (
    <div className="mt-2" style={{ marginLeft: 100, marginRight: 100 }}>
      <form className="userUpdateForm my-4">
        <div className="form-group">
          <label htmlFor="txtNhanvien">Họ và Tên </label>
          <input
            type="text"
            className="form-control"
            name="txtname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="txtChucVu">Tên Tài Khoản </label>
          <input
            type="text"
            className="form-control"
            name="account"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        <div className="form-group ">
          <label htmlFor="txtDiachi">Số Điện Thoại </label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="txtpass">Mật Khẩu </label>
          <input
            type="password"
            className="form-control"
            name="pass"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="txtSodt">Email </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Chức Vụ </label>
          <select
            className="form-select"
            name="position"
            onChange={(e) => setPosition(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Choose a role option
            </option>
            {role &&
              role.map((item) => (
                <option value={item.id_permission} key={item.id_permission}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="txtpass">Địa Chỉ </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div
          className="d-flex align-content-center flex-wrap"
          style={{ marginTop: 100 }}
        >
          <button
            type="submit"
            className="btn btn-success mx-3"
            name="btnLuu"
            onClick={(e) => handelAddAccount(e)}
          >
            Lưu
          </button>
          <button className="btn btn-info mx-3" name="btnTroVe">
            Trở về
          </button>
        </div>
      </form>
    </div>
  );
};
