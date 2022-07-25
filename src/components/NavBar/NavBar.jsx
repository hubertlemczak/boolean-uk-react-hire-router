import './NavBar.scss';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <header className="nav-bar">
      <h1>Hire Your Team</h1>
      <nav className="nav-bar-nav">
        <ul className="nav-bar-links">
          <li className="nav-bar-link">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="nav-bar-link">Contact</li>
          <li className="nav-bar-link">Something</li>
        </ul>
      </nav>
    </header>
  );
}
