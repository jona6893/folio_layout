import React from "react";
import { useState, useEffect } from "react";
import "./zalando.scss";

function Zalando() {
  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(10);
  const [options, setOptions] = useState([]);

  const url = "https://tdmwbheqhsnbtuazcowv.supabase.co/rest/v1/zalando?";
  const headers = {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkbXdiaGVxaHNuYnR1YXpjb3d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY1OTg3MjksImV4cCI6MTk4MjE3NDcyOX0.I9oj_wRPtT5fzGsC2_ws1LrIXVMVefl27vAYwiMbjK4",
    "Content-Type": "application/json",
    Prefer: "return=representation",
  };

  /* -----  Filter Product List ----- */

  const filterProducts = (value) => {
    console.log(value);
    setStart(() => 10);
    setProducts((old) => (old = options));

    setProducts((product) =>
      product.filter((item) => {
        if (value === item.brand) {
          if (item.brand == "Alle") {
            return item.brand;
          } else if (item.brand == value) {
            return item.brand == value;
          }
        } else if (value === item.category) {
          if (item.category == "Alle") {
            return item.category;
          } else if (item.category == value) {
            return item.category == value;
          }
        }
      })
    );

    console.log(products);
  };
  /* ----- Get API Data ----- */

  useEffect(() => {
    const options = {
      method: "GET",
      headers: headers,
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setProducts((old) => (old = data));
        setOptions((old) => (old = data));
        console.log("ran");
      });
  }, []);

  /* ----- Build Filter Buttons ----- */

  let brand = [];
  let category = [];

  options.forEach((e, i) => {
    brand.push(e.brand);
    category.push(e.category);
  });
  brand = [...new Set(brand)];
  category = [...new Set(category)];

  /* ----- Print HTML ----- */

  return (
    <section id="zalandoProducts">
      <nav id="menuOptions">
        <select
          defaultValue="Alle"
          onChange={(e) => {
            filterProducts(e.target.value);
          }}
        >
          <option value="Alle"> Alle</option>
          {category.sort().map((category) => (
            <option value={category}>{category}</option>
          ))}
        </select>

        <select
          defaultValue="Alle"
          onChange={(e) => {
            filterProducts(e.target.value);
          }}
        >
          <option value="Alle">Alle</option>
          {brand.sort().map((brand) => (
            <option value={brand}>{brand}</option>
          ))}
        </select>
      </nav>
      <div id="productGrid">
        {products
          .slice(0, start)
          .sort()
          .map((product) => (
            <article key={product.webScraperOrder} className="productCard">
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.price}</p>
            </article>
          ))}
      </div>
      <button onClick={() => setStart((old) => old + 10)}> click</button>
    </section>
  );
}

export default Zalando;
