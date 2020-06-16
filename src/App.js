import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Blog from './components/blog/Blog.js'
import Services from "./components/services/Services";
import MainBlog from "./components/mainBlog/MainBlog";
import ExtendedMenu from "./components/extendedMenu/ExtendedMenu";
import './app.module.css'

function App() {
  return (
    <>
    <ExtendedMenu />
      {/* <Header /> */}
      {/* <Services /> */}
      {/* <Blog /> */}
      <MainBlog />
      {/* <Footer /> */}
    </>
  );
}

export default App;
