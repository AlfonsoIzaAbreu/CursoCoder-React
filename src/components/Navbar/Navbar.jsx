import CartWidgets from "../CartWidgets/CartWidgets";
import "./Navbar.css";
import logo from "../../assets/logo-patagonia.png";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>PROFILE</li>
        </ul>
        <CartWidgets />
      </nav>
    </>
  );
}

export default Navbar;
