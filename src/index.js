import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { access_admin_token } from "./config/authConfig";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";
import Account from "./page/admin/Account/Account";
import Category from "./page/admin/Category/Category";
import Home from "./page/admin/Home/Home";
import Order from "./page/admin/Order/Order";
import Product from "./page/admin/Products/Product";
import Services from "./page/admin/Services/Services";
import Login from "./page/Auth/admin/Login";
import DetailProduct from "./page/client/Product/Details/DetailProduct";
import ListProducts from "./page/client/Product/ListProducts/ListProducts";
import "swiper/css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route
          path="/product/detail/id_product=:id"
          element={<DetailProduct />}
        />
        <Route path="/product/id_category=:id" element={<ListProducts />} />
        {/* Client */}

        {/* Admin */}
        <Route
          path="/adminstrator/"
          element={access_admin_token ? <Home /> : <Login />}
        />
        <Route
          path="/adminstrator/products"
          element={access_admin_token ? <Product /> : <Login />}
        />
        <Route
          path="/adminstrator/categories"
          element={access_admin_token ? <Category /> : <Login />}
        />
        <Route
          path="/adminstrator/services"
          element={access_admin_token ? <Services /> : <Login />}
        />
        <Route
          path="/adminstrator/orders"
          element={access_admin_token ? <Order /> : <Login />}
        />
        <Route
          path="/adminstrator/accounts"
          element={access_admin_token ? <Account /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
