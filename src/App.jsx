import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./components/Skill/Skill";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import "../styles/global.css";
import BackgroundSwirl from "./components/Background/BackgroundSwirl";

function App() {
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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
