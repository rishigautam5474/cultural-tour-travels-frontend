import {useState} from "react"
import "./NavbarStyle.css";
import { Menuitems } from "./Menuitems";
import {Link} from "react-router-dom"

function Navbar() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState({clicked : !state.clicked})
  }
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Cultural Trips</h1>

      <div className="menu_icons" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}><i className={item.icon}></i>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
