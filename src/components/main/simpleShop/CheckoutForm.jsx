import React from 'react'
import {useRef, useState} from "react"
import {insertOrder} from "./modules/db.js"

function CheckoutForm(props) {
    const theForm = useRef(null)
    const [payCompleted, setpayCompleted] = useState(false)

   async function submit(e){
        console.log(props.cart);
    e.preventDefault()
    console.log("submit")
    const response = await insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      address: theForm.current.elements.address.value,
      basket: [{price:4}, {price:34}] ,
    });
    if(response && response.length){
      setpayCompleted(true)
    }
}

    return (
      <>
      {payCompleted ? <p>Thanks</p> : (<form onSubmit={submit} ref={theForm}>
      <div className="form-control">
        <label htmlFor="form-name">Name</label>
        <input required type="text" name="name" id="form-name" />
      </div>
      <div className="form-control">
        <label htmlFor="form-email">E-mail</label>
        <input required type="email" name="email" id="form-email" />
      </div>
      <div className="form-control">
        <label htmlFor="form-address">Address</label>
        <textarea required name="address" id="form-address"></textarea>
      </div>
      <button>Pay</button>
    </form>)}
    </>
  );
}

export default CheckoutForm