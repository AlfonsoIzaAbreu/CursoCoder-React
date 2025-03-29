import { useEffect } from "react";
import "./ItemListContainer.css";
import Item from "../Item/item.jsx";
import Loader from "../Loader/Loader.jsx";
import { useState } from "react";
import { fetchData } from "../../fetchdata.js";
import ItemCount from "../ItemCount/ItemCount.jsx";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState();

  useEffect(() => {
    fetchData()
      .then((response) => {
        setProductos(response);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="item-list-container">
      {" "}
      {productos.map((el) => {
        return (
          <div key={el.id} className="item">
            <Item producto={el} />
            <ItemCount stock={el.stock} productName={el.nombre} />
          </div>
        );
      })}{" "}
    </div>
  );
}
export default ItemListContainer;
