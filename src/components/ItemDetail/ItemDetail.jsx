import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../fetchdata";
import { Link } from "react-router-dom";
import "./ItemDetail.css";


function ItemDetail() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducto() {
      try {
        const response = await fetchData();
        const prod = response.find((p) => p.id === parseInt(id));
        setProducto(prod);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }

    fetchProducto();
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del producto...</p>;
  }

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const { nombre, descripcion, precio, stock } = producto;

  return (
    <div className="item-detail">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>Precio: ${precio}</p>
      <p>Stock disponible: {stock}</p>
      <Link to="/">
        <button className="btn btn-secondary my-2">Volver Al Inicio</button>
      </Link>
    </div>
  );
}

export default ItemDetail;
