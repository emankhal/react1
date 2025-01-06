import { NavLink, Link } from "react-router-dom";
import style from './Navbar.module.css'
import '../App.css'

export default function Navbar() {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary text-capitalize fixed-top  ${style.navbar} `}>        <div className="container">
        <Link className="navbar-brand fs-3" to={"home"}>Start Framework</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " aria-current="page" to={"about"}>about</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"portifolio"}>portifolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"contact"}>contact</NavLink>
            </li>
          </ul>

        </div>
      </div>
      </nav>


    </div>
  )
}
