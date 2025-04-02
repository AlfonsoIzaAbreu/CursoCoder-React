import "./ItemDetail.css";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  const [showCount, setShowCount] = useState(true);

  function onAdd() {
    setShowCount(false);
  }

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {showCount ? (
        <ItemCount stock={product.stock} productName={product.name} onAdd={onAdd} />
      ) : (
        <button className="btn btn-primary">Ir al carrito</button>
      )}
    </div>
  );
}
export default ItemDetail;