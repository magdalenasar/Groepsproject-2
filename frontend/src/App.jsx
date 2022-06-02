import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/body_components/Footer";
import Home from "./components/body_components/Home";
import About from "./components/body_components/About";
import Login from "./components/body_components/Login";
import Register from "./components/body_components/Register";
import Categoryview from "./components/body_components/Categoryview";
import Userview from "./components/body_components/Userview";
import Error404 from "./components/body_components/Error404";
import Header from "./components/body_components/Header";
import Activity from "./components/combined_components/Activity";
import Activities from "./components/combined_components/Activities";
import Add from "./components/combined_components/Add";

const App = props => {
  const { className } = props;
  return (
    <div className={className}>
      <Router>
        <Header className="header" />
        <Routes>
          <Route path="/" element={<Home className="home" />} />
          <Route path="/about" element={<About className="about" />} />
          <Route path="/login" element={<Login className="login" />} />
          <Route path="/register" element={<Register className="register" />} />
          <Route path="/activity_detail" element={<Activity className="activity_detail" />} />
          <Route path="/activities" element={<Activities className="activities" />} />
          <Route path="/add" element={<Add className="add" />} />
          <Route path="/categoryview" element={<Categoryview className="categoryview" />} />
          <Route path="/userview" element={<Userview className="userview" />} />
          <Route path="*" element={<Error404 className="error" />} />
        </Routes>
        <Footer className="footer" />
      </Router>
    </div>
  );
};

export default App;
