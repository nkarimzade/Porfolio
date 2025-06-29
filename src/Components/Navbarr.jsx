import { Link } from 'react-router-dom';

function Navbarr() {
  return (
    <div>
      <div className="navbar2">
        <ul>
          <li><Link to="/">about</Link></li>
          <li><Link to="/work">project</Link></li>
          <li><Link to="/experience">experience</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbarr