import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Project from './components/Project';
import Skill from './components/Skill';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/educations" element={<Education />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skill />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
