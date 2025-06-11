import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import Worktwo from './Pages/Worktwo';
import './App.css';
import Navbarr from './Components/Navbarr';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Navbarr />

        <div className="content">
          <br />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/worktwo" element={<Worktwo />} />
            <Route path="/blog" element={<Blog />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
