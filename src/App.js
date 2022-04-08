import React from "react";
import Footer from "./common/client/Footer";
import ClientNavbar from "./common/client/Navbar";
import Home from "./page/client/Home/Home";

export default function App() {
  return (
    <>
      <ClientNavbar />
      <Home />
      <Footer />
    </>
  );
}
