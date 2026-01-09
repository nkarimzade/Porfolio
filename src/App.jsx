import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experince from './Pages/Experience';
import Project from "./Pages/Project"
import Mobile from "./Pages/Mobile"
import './App.css';
import Not from './Components/Not';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project/>} />
            <Route path="/experience" element={<Experince />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="*" element={<Not/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
