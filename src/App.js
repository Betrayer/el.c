import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Blog from './components/blog/Blog.js'
import './app.module.css'
import Services from "./components/services/Services";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Services />
      <Blog />
      {/* <Footer /> */}
    </>
  );
}

export default App;
