import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Research from './pages/Research';
import Education from './pages/Education';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* Place Navbar here so it shows on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/research" element={<Research />} />
        <Route path="/education" element={<Education />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
