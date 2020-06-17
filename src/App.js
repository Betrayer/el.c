import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Blog from "./components/blog/Blog.js";
import Services from "./components/services/Services";
import css from "./app.module.css";

function App() {
  // const routing = useRouter(props);
  return (
    // <Router>
    //   {routing}
    // </Router>
    <>
      <Header />
      <Services />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
