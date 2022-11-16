import React from "react";
import { useContext } from "react";
import { TaxContexts } from "./contexts/TaxContexts";

export default function Product(props) {
  const taxes = useContext(TaxContexts);
  function add() {
    props.dispatch({
      type: "ADD",
      payload: props.data 
    });
  }

  return (
    <>
      <article className="Product">
        <h2>{props.data.productdisplayname}</h2>
        <p>{props.data.price + props.data.price*taxes}</p>
        <img
          src={`https://kea-alt-del.dk/t7/images/webp/640/${props.data.id}.webp`}
          alt={props.data.productdisplayname}
        />
        <button onClick={add}>Add to Basket</button>
      </article>
    </>
  );
}
