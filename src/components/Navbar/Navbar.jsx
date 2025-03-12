import CartWidgets from "../CartWidgets/CartWidgets";
import "./Navbar.css";


function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <img src="https://i.pinimg.com/736x/a7/22/0d/a7220d4a3fcfe5012b5f93d398daa52e.jpg" alt="LogoPatagonia" />
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
