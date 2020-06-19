import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog.js";
import Form from "./components/form/Form";
import PropTypes from "prop-types";

import "./app.module.css";

function App(props) {
  return (
    <>
      {/* <Header /> */}
      <Blog />
      <Form env={props.env} />
      {/* <Footer /> */}
    </>
  );
}
App.propTypes = {
  env: PropTypes.object.isRequired,
};

export default App;
