import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useRouter } from "./components/router/router";
import "./app.module.css";

function App(props) {
  const routing = useRouter(props);
  return (
    <Router>{routing}</Router>
  );
}

export default App;
