import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BottomNavigationBar from "./components/BottomNavigationBar/BottomNavigationBar";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import "../styles/global.css";
import BackgroundSwirl from "./components/Background/BackgroundSwirl";
import { useTypeUI } from "./hooks/typeUI";

function App() {
  const typeUI = useTypeUI();

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className="w-full h-screen"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -3,
        }}
      >
        <BackgroundSwirl />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
        }}
      >
        <div>{typeUI == 3 ? <Header /> : <BottomNavigationBar />}</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
