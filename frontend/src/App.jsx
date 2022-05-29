import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Error404 from "./components/Error404";
import Header from "./components/Header";

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
