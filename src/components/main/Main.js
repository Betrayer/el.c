import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Header from "../header/Header";
import Services from "../services/Services";
import MainBlog from "../mainBlog/MainBlog";
import Footer from "../footer/Footer";
import Contacts from "../contacts/Contacts";
import Form from "../form/Form.js";

const Main = (props) => {
  return (
    <>
      <Header />
      <Form env={props.env} />
      <Services /> 
       <MainBlog />
      <Contacts />
      <Footer />
    </>
  );
};
Main.propTypes = {
  env: PropTypes.object.isRequired,
};


export default withRouter(Main);
