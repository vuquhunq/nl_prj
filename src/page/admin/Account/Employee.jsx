import React, { useEffect, useState } from "react";
import AdminServices from "../../../service/AdminServices";

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
                    <td>{account.name}</td>
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
