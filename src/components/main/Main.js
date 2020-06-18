import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../header/Header";
import Services from "../services/Services";
import MainBlog from "../mainBlog/MainBlog";
import Footer from "../footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Services />
      <MainBlog />
      <Footer />
    </>
  );
};

export default withRouter(Main);
