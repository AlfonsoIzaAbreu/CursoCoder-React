import { useEffect } from "react";
import "./ItemListContainer.css";
import Item from "../Item/item";
import productos from "../../productos.js";
import Loader from "../Loader/Loader.jsx";
import { useState } from "react";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="item-list-container">
      {" "}
      {productos.map((el) => {
        return <Item key={el.id} producto={el} />;
      })}{" "}
    </div>
  );
}
export default ItemListContainer;
