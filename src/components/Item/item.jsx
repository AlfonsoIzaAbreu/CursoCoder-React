import "./item.css";

function Item({ producto }) {
  const { nombre, precio } = producto;
  return (
    <div className="item">
      <h2 >{nombre}</h2>
      <hr />
      <p >${precio}</p>
    </div>
  );
}
export default Item;
