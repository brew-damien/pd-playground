import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        } />
        <Route path="/about" element={
          <>
            <About />
          </>
        } />
        <Route path="/portfolio" element={
          <>
            <Portfolio />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Contact />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
