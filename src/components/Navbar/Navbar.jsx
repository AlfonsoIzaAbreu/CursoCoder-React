import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <p>
          <img src="../img/logo-patagonia.png" alt="Logo Patagonia" />
        </p>
        <ul>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>PROFILE</li>
        </ul>
        <p>Carrito</p>
      </nav>
    </>
  );
}

export default Navbar;
