import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Blog from './components/blog/Blog.js'
import Services from "./components/services/Services";
import MainBlog from "./components/mainBlog/MainBlog";
// import ExtendedMenu from "./components/extendedMenu/ExtendedMenu";
import './app.module.css'
import Main from "./components/main/Main";

function App() {
  // const routing = useRouter(props);
  return (
    // <Router>
    //   {routing}
    // </Router>
    <>
      {/* <Header /> */}
    {/* <ExtendedMenu /> */}
    <Main/>
      {/* <Services /> */}
      {/* <Blog /> */}
      {/* <MainBlog /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
