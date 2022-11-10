import React from "react";
import {useState, useEffect} from "react"
import ProductList from "./ProductList";
import Basket from "./Basket"; 
import "./ShopStyle.scss"


function Shop() {
    const [products, setProducts] = useState([ ])

useEffect(()=> {

    async function getData() {
        const res = await fetch(
          "https://kea-alt-del.dk/t7/api/products"
        );
        const data = await res.json()
        setProducts(data)
    }
    getData();
}, [])
     
  return (
    <div className="Shop">
      <ProductList products={products}  />
      <Basket products={products} />
    </div>
  );
}

export default Shop;
