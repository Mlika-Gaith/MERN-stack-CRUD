import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        React Crud Example
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/index" className="nav-link">
              Index
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
