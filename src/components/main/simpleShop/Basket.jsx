import React from "react";

function Basket(props) {

    function getTotal () {
        let total = 0
        props.cart.forEach(item =>{
            total += item.amount * item.price
        })
        return total
    }

  return (
    <section className="Basket ">
      <ul>
        {props.cart.map((item) => (
          <>
            <li>{item.productdisplayname}</li>
            <li>Quantity: {item.amount}</li>
            <li>Price: {item.price} DKK</li>
          </>
        ))}
      </ul>
      <h3>Total: {getTotal()} DKK</h3>
      <button>Buy Now</button>
    </section>
  );
}

export default Basket;
