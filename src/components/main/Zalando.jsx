import React from "react";
import { useState, useEffect } from "react";
import "./zalando.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Zalando() {
  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(10);
  const [options, setOptions] = useState([]);
  const [currentBrand, setCurrentBrand] = useState(false, "Alle");
  const [currentCategory, setCurrentCategory] = useState([false, "Alle"]);

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

  const filterProducts = (value, brandORcate) => {
    setProducts((old) => (old = options));


    if (currentBrand[0] === true && brandORcate === "category") {
      console.log("Brand is selected and now category");
      setProducts((old) => (old = options));
      setProducts((product) =>
        product.filter((item) => {
          if (value == "Alle") {
            return item.brand == currentBrand[1]; 
          }
          return item.brand == currentBrand[1] && item.category == value;
        })
      );
      console.log(products)
    } else if (currentCategory[0] === true && brandORcate === "brand") {
      console.log("category is selected and now brand");
      setProducts((old) => (old = options));
      setProducts((product) =>
        product.filter((item) => {
          if(value == "Alle"){
            return item.category == currentCategory[1];
          }
            return item.category == currentCategory[1] && item.brand == value;
        })
      );

    } else if (currentCategory[0] === false && brandORcate === "brand") {
      console.log("Category is not selected");
      setProducts((product) =>
        product.filter((item) => {
          if (value == "Alle") {
            return item.brand;
          } else {
            return item.brand == value;
          }
        })
      );
    } else /* if (currentCategory[0] === false && brandORcate === "category") */ {
      console.log("Brand is not selected");
      setProducts((product) =>
        product.filter((item) => {
          if (value == "Alle") {
            return item.category;
          } else {
            return item.category == value;
          }
        })
      );
    } 

    /*setStart(() => 10);
      setProducts((old) => (old = options));

      setProducts((product) =>
        product.filter((item) => {
          if (brandORcate == "brand") {
            if (value == "Alle") {
              console.log(value + "   this is the Alle Value");
              return item.brand;
            } else if (item.brand == value) {
              return item.brand == value;
            }
          } else if (brandORcate == "category") {
            if (value == "Alle") {
              console.log("category");
              return item.category;
            } else if (item.category == value) {
              return item.category == value;
            }
          }
        })
      ); */
    console.log(products, value);
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
    if (e.brand === null) {
    }
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
            {
              if (e.target.value == "Alle") {
                setCurrentCategory(() => [false, "Alle"]);
              } else {
                setCurrentCategory(() => [true, e.target.value]);
              }
            }
            filterProducts(e.target.value, "category");
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
            if (e.target.value == "Alle") {
              setCurrentBrand(() => [false, "Alle"]);
            } else {
              setCurrentBrand(() => [true, e.target.value]);
            }
            filterProducts(e.target.value, "brand");
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
              <img src={product.image || <Skeleton />} alt="" />
              <h3>{product.name || <Skeleton />}</h3>
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
