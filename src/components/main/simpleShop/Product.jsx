import React from 'react'

export default function Product(props) {
  return (
    <>
      <article className="Product">
        <h2>{props.productdisplayname}</h2>
        <p>{props.price}</p>
        <img
          src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`}
          alt={props.productdisplayname}
        />
        <button>Add to Basket</button>
      </article>
    </>
  );
}
