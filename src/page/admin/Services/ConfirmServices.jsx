import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../config/axiosConfig";

export const ConfirmServices = () => {
  const [services, setServices] = useState([]);
  console.log(services);

  useEffect(() => {
    // ServiceServices.getAllUncofirmService().then((res) => console.log(res));
    const getData = async () => {
      await axiosInstance
        .get("/services/get-confimred-all/")
        .then((res) => setServices(res.data));
    };
    getData();
  }, []);

  return (
    <div className="row my-4">
      <div className="col">
        <table className="table table-bordered bg-white rounded shadow-sm table-hover">
          <thead>
            <tr>
              <th scope="col">Mã Dịch Vụ</th>
              <th scope="col">Tên Khách Hàng</th>
              <th scope="col">Tên Dịch Vụ</th>
              <th scope="col">Ngày Đặt</th>
              <th scope="col">Ngày Đặt Lịch</th>
              <th scope="col">Trạng Thái</th>
            </tr>
          </thead>
          <tbody>
            {services ? (
              services.map((service, index) => (
                <tr key={service?.UserServices.id_services}>
                  <th scope="row">{index + 1}</th>
                  <td>{service?.UserServices.id_user}</td>
                  <td>{service?.Services.id_name_services}</td>
                  <td>
                    {new Date(service?.Services.date_create).toDateString()}
                  </td>
                  <td>
                    {new Date(service?.Services.booking_date).toDateString()}
                  </td>
                  <td>
                    <span className="badge btn-success">
                      {service?.Services.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <h1>Loading ...</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
