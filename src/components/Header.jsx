import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-light">
      <div className="container py-4">
        <h1 className="display-2">Taj Mahal</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Overview
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/history">
                History
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/architecture">
                Architecture
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
