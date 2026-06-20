import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import Logo1 from "../assests/Logo1.png"
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <img
            src={Logo1}
            alt="Medicare Logo"
            className="logo-img"
          />
          <span className="fw-bold">Medicare</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>

          </ul>

          <button className="btn btn-dark rounded-pill px-4">
            Contact Us
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;