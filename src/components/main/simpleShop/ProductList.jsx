import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <main className="ProductsList ">
      {
  props.products.map((product) => (
    <Product  key={product.id} {...product} />
  ))
}
    </main>
  );
}


export default ProductList;
