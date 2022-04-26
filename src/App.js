import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import { access_admin_token } from "./config/authConfig";
import "./index.css";
import Account from "./page/admin/Account/Account";
import Category from "./page/admin/Category/Category";
import Home from "./page/admin/Home/Home";
import DetailOrder from "./page/admin/Order/DetailOrder";
import Order from "./page/admin/Order/Order";
import Product from "./page/admin/Products/Product";
import Promotion from "./page/admin/promotion/Promotion";
import NameServices from "./page/admin/Services/NameServices";
import Services from "./page/admin/Services/Services";
import Login from "./page/Auth/admin/Login";
import Confirm from "./page/Auth/client/Confirm";
import Register from "./page/Auth/client/Register";
import DetailProduct from "./page/client/Product/Details/DetailProduct";
import ListProducts from "./page/client/Product/ListProducts/ListProducts";
import ProfileUser from "./page/client/Profile/ProfileUser";
import Purchase from "./page/client/Purchase/Purchase";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListProducts />} />
        <Route path="/token=:id" element={<Confirm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchase/id_order:id" element={<Purchase />} />
        {/* <Route path="/order" element={<OrderDetail />} /> */}
        <Route
          path="/product/detail/id_product=:id"
          element={<DetailProduct />}
        />
        <Route path="/products/" element={<ListProducts />} />
        <Route path="/products/name=:name_product" element={<ListProducts />} />
        <Route path="/products/nam" element={<ListProducts gender={1} />} />
        <Route path="/products/nu" element={<ListProducts gender={2} />} />
        <Route path="/profile/" element={<ProfileUser />} />
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
          path="/adminstrator/name_services:order_id"
          element={access_admin_token ? <NameServices /> : <Login />}
        />
        <Route
          path="/adminstrator/name_services"
          element={access_admin_token ? <NameServices /> : <Login />}
        />
        <Route
          path="/adminstrator/orders"
          element={access_admin_token ? <Order /> : <Login />}
        />
        <Route
          path="/adminstrator/accounts"
          element={access_admin_token ? <Account /> : <Login />}
        />
        <Route
          path="/adminstrator/detail_order/:id"
          element={access_admin_token ? <DetailOrder /> : <Login />}
        />
        <Route
          path="/adminstrator/promotion"
          element={access_admin_token ? <Promotion /> : <Login />}
        />
        <Route
          path="/adminstrator/detail_order/:id"
          element={access_admin_token ? <DetailOrder /> : <Login />}
        />
        <Route
          path="/adminstrator/promotion"
          element={access_admin_token ? <Promotion /> : <Login />}
        />
      </Routes>
    </>
  );
}
