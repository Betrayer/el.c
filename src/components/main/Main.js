import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../header/Header";
import Services from "../services/Services";
import MainBlog from "../mainBlog/MainBlog";
import Footer from "../footer/Footer";
import Contacts from "../contacts/Contacts";

const Main = () => {
  return (
    <>
      <Header />
      <Services />
      <MainBlog />
      <Contacts />
      <Footer />
    </>
  );
};

export default withRouter(Main);
