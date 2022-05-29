import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/body_components/Footer";
import Home from "./components/body_components/Home";
import About from "./components/body_components/About";
import Login from "./components/body_components/Login";
import Error404 from "./components/body_components/Error404";
import Header from "./components/body_components/Header";

const App = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Router>
        <Header className="header" />
        <Routes>
          <Route path="/" element={<Home className="home" />} />
          <Route path="/about" element={<About />} />
          <Route path="/login_register" element={<Login className="login" />} />
          <Route path="*" element={<Error404 className="error" />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
};

export default App;
