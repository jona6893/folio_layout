import React from "react";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";

function Basket(props) {
  const [showForm, setShowForm] = useState(false);

  function getTotal() {
    let total = 0;
    props.cart.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  return (
    <section className="Basket ">
      <ul>
        {props.cart.map((item) => (
          <div key={item.id}>
            <li >{item.productdisplayname}</li>
            <li>Quantity: {item.amount}</li>
            <li>Price: {item.price} DKK</li>
            <button onClick={() => props.removeFromCart(item.id)}>X</button>
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
