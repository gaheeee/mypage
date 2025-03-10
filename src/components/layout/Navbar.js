import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">Portfolio</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link >About Me</Link>
          <Link >Skills</Link>
          <Link >Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar; 