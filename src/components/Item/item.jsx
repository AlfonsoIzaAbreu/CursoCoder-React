import "./item.css";
import { Link } from "react-router-dom";

function Item({ producto }) {
  const { nombre, precio, id } = producto;
  return (
    <div className="item">
      <h2>{nombre}</h2>
      <hr />
      <p>${precio}</p>
      <Link to={`/Detalles/${id}`}>
        <button className="btn btn-secondary my-2">Ver Detalles</button>
      </Link>
    </div>
  );
}
export default Item;
