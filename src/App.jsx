import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Results from "./Pages/Results";
import Gallery from "./Pages/Gallery";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/result" element={<Results />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}
