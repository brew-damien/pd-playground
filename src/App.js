import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Card from './components/Card';
import CardFlip from './components/CardFlip';
import AnimatedCard from './components/AnimatedCard';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar label="Log in" />
              <Hero />
              <About label1="About Me" label2="Contact" />
              <CardFlip />
              <Card />
              <AnimatedCard />
              <Portfolio />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
