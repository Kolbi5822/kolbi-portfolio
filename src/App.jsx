import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/Navbar.css';

function Page({ color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: '100vw',
        height: '100vh',
        paddingTop: 'var(--navbar-height)',
      }}
    />
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="kolbi-portfolio/" element={<Page color="#4281A4" />} />
        <Route path="kolbi-portfolio/page2" element={<Page color="#48A9A6" />} />
        <Route path="kolbi-portfolio/page3" element={<Page color="#E4DFDA" />} />
        <Route path="kolbi-portfolio/page4" element={<Page color="#D4B483" />} />
        <Route path="kolbi-portfolio/page5" element={<Page color="#C1666B" />} />
      </Routes>
    </Router>
  );
}

export default App;
