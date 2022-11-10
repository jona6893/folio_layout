import React from "react";
import { useRef, useState } from "react";

function Forms() {
  const formEl = useRef(null);
  const [emailMsg, setEmailMsg] = useState("Type your Email");
  function test(e) {
    e.preventDefault();
    if (formEl.current.elements.email.value.includes(".")) {
        setEmailMsg("Email Approved")
    } else {
      setEmailMsg("Please provide a valid e-mail");
    }
  }
  return (
    <form ref={formEl} onSubmit={test}>
      <label htmlFor="">
        <input type="email" name="email" required />
      </label>
      <p>{emailMsg}</p>
      <button>Submit</button>
    </form>
  );
}

export default Forms;
