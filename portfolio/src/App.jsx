import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Publications from "./pages/Publications";
import Projects from "./pages/Projects";
import CV from "./pages/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<CV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}