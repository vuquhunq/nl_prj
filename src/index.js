import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/admin/Home/Home";
import { access_admin } from "./config/authConfig";
import Login from "./page/Auth/admin/Login";
import Product from "./page/admin/Products/Product";
import Category from "./page/admin/Category/Category";
import Services from "./page/admin/Services/Services";
import Order from "./page/admin/Order/Order";
import Account from "./page/admin/Account/Account";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/adminstrator/"
          element={access_admin ? <Home /> : <Login />}
        />
        <Route
          path="/adminstrator/products"
          element={access_admin ? <Product /> : <Login />}
        />
        <Route
          path="/adminstrator/categories"
          element={access_admin ? <Category /> : <Login />}
        />
        <Route
          path="/adminstrator/services"
          element={access_admin ? <Services /> : <Login />}
        />
        <Route
          path="/adminstrator/orders"
          element={access_admin ? <Order /> : <Login />}
        />
        <Route
          path="/adminstrator/accounts"
          element={access_admin ? <Account /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
