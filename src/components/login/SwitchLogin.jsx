import React from 'react'
import Login from './Login'
import Register from './Register'
import { useState } from "react";

function SwitchLogin() {
    const [login, setLogin] = useState(true);

    function changeLogin(buttonClick) {
      setLogin((old) => (old = buttonClick));
      console.log(login);
    }


  return (
    <>
      {login ? (
        <Login changeLogin={changeLogin} />
      ) : (
        <Register changeLogin={changeLogin} />
      )}
    </>
  );
}

export default SwitchLogin
