import React from "react";
import { useState, useEffect } from "react";
import ProductList from "./ProductList";
import Basket from "./Basket";
import "./ShopStyle.scss";

function SimpleShop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function addTocart(data) {
    if (cart.find((entry) => entry.id === data.id)) {
      setCart((oldcart) =>
        oldcart.map((entry) => {
          if (entry.id !== data.id) {
            return entry;
          } else {
            const copy = { ...entry };
            copy.amount = copy.amount + 1;
            return copy;
          }
        })
      );
    } else {
      setCart((oldcart) => oldcart.concat({ ...data, amount: 1 }));
    }
  }

  function removeFromCart (id ) {
    setCart((oldCart) => {
      const subtracted = oldCart.map(item =>{
        if(item.id === id) {
          return {...item, amount:item.amount-1}
        } return item
      })
      const filtered = subtracted.filter(item => item.amount>0)
      return filtered
    })
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
      console.log(data)
    }
    getData();
  }, []);

  return (
    <div className="Shop">
      <ProductList products={products} addTocart={addTocart} />
      <Basket removeFromCart={removeFromCart} products={products} cart={cart} />
    </div>
  );
}

export default SimpleShop;
