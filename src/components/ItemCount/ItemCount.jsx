import { useState } from "react";
import "./ItemCount.css";

    

function ItemCount(props) {

const [Counter, setCounter] = useState(0);

function operador(operacion) {
    if (operacion === "+") {
        if (Counter < props.stock)
        setCounter(Counter + 1);
    } else {
        if (Counter > 0)
        setCounter(Counter - 1);
    }    }

    function addToCart() {
        console.log(` vas a agregar ${Counter} ${props.productName} al carrito`);
        setCounter(0);
    }

  return (
    <>
    <h3>{props.productName}</h3>
      <div className="item-count">  
        <button onClick={() => operador("-")} className="btn btn-primary">
          -
        </button>
        <p>{Counter}</p>
        <button onClick={() => operador("+")} className="btn btn-primary">
          +
        </button>
      </div>
      <div className="cart-button">
      <button className="addToCart" onClick={()=> addToCart()}>Agregar al Carrito</button>
      </div>
    </>
  );
}

export default ItemCount;
