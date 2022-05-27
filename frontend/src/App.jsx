import "./styles/App.scss";

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'


import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header className="header" />
        <Routes>
          {/* {<Route path="/" element={<Home />} />}
          { <Route path="contact" element={<ContactHero />} />
          <Route path="login&register" element={<Login />} /> }
          {/* <Route path="activities" element={<Activities />} />
          <Route path="activities/:id" element={<ActivityDetails />} /> }
          <Route path="*" element={<h1>404...Page not found</h1>} /> */}
        </Routes>
      </BrowserRouter>
    
      <Main className="main" />
      <Footer className="footer" />
    </>
  );
};

export default App;
