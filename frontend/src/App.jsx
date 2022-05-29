import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/body_components/Footer";
import Home from "./components/body_components/Home";
import About from "./components/body_components/About";
import Login from "./components/body_components/Login";
import Error404 from "./components/body_components/Error404";
import Header from "./components/body_components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header className="header" />
        <Routes>
          <Route path="/" element={<Home className="home" />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login_register"
            element={<Login class="form-popup" />}
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </>
  );
};

export default App;
