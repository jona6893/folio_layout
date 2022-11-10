import React from "react";

function Basket(props) {
  return (
    <section className="Basket ">
      <ul>
        {props.cart.map((item) => (
          <>
            <li>{item.productdisplayname}</li>
            <li>{"Quantity: "}{item.amount}</li>
          </>
        ))}
      </ul>
      <button>Buy Now</button>
    </section>
  );
}

export default Basket;
