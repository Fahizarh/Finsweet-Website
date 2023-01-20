import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";
import "../../index.css"

const Navigation = () => {
  return (
    <nav>
      <div className="navigation container">
        <h1>FinSweet</h1>
        <div className="nav__links">
          <Link to="/" className="nav__link">Home</Link>
          <Link to="/" className="nav__link">About us</Link>
          <Link to="/" className="nav__link">Features</Link>
          <Link to="/" className="nav__link">Pricing</Link>
          <Link to="/" className="nav__link">FAQ</Link>
          <Link to="/" className="nav__link">Blog</Link>
          <Link to="/" className="nav__link">Contact us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;