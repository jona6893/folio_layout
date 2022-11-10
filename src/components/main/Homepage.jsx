import React from "react";

import "./Homepage.scss";
import { useState, useEffect } from "react";

function Homepage() {

  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(0);

  
  useEffect(() => {
    fetch("https://kea-alt-del.dk/t7/api/products?start=" + start, )
      .then((res) => res.json())
      .then((data) => {
        setProducts((old) => old.concat(data));
        console.log("ran");
      });
  }, [start]);
  console.log(products);

  return (
    <>
      {products.map(product => (
        <>
        <p>{product.productdisplayname}</p>
        <p>{product.price}</p></>
      ))}
      <button onClick={() => setStart((old) => old + 10)}> click</button>
    </>
  );
}

export default Homepage;
