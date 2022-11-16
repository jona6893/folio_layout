import React from "react";
import { useState, useEffect, useReducer } from "react";
import ProductList from "./ProductList";
import Basket from "./Basket";
import "./ShopStyle.scss";
import { TaxProvider } from "./contexts/TaxContexts";
import { reducer } from "./reducers/cartReducer";

function SimpleShop() {
  const [products, setProducts] = useState([]);
  const initialState = [];

  const [cart, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    }
    getData();
  }, []);

  return (
    <div className="Shop">
      <TaxProvider>
        <ProductList products={products} dispatch={dispatch} />
        <Basket dispatch={dispatch} products={products} cart={cart} />
      </TaxProvider>
    </div>
  );
}

export default SimpleShop;
