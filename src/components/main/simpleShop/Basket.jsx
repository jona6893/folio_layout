import React from "react";
import { useState, useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { TaxContexts } from "./contexts/TaxContexts";

function Basket(props) {
  const taxes = useContext(TaxContexts);
  const [showForm, setShowForm] = useState(false);

  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * (item.price + item.price * taxes);
    });
    return total;
  }

  return (
    <section className="Basket ">
      <ul>
        {props.cart.map((item) => (
          <div key={item.id}>
            <li>{item.productdisplayname}</li>
            <li>Quantity: {item.amount}</li>
            <li>Price: {item.price + item.price * taxes} DKK</li>
            <button onClick={() => props.dispatch({type:"REMOVE", payload: {id:item.id} })}>X</button>
          </div>
        ))}
      </ul>
      <h3>Total: {getTotal()} DKK</h3>
      {!showForm && <button onClick={() => setShowForm(true)}>Buy Now</button>}
      {showForm && <CheckoutForm cart={props.cart} />}
    </section>
  );
}

export default Basket;
