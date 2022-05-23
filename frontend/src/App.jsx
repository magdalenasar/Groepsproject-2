import "./styles/App.scss";

import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header className="header" />
      <Main className="main" />
      <Footer className="footer" />
    </>
  );
};

export default App;
