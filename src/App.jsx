import { useState } from "react";
import "./App.scss";
import Navbar from "./components/header/Navbar";
import Zalando from "./components/main/Zalando";
import Homepage from "./components/main/Homepage";
import SwitchLogin from "./components/login/SwitchLogin";
import Forms from "./components/main/Forms";
import FormControlled from "./components/main/FormControlled";
import SimpleShop from "./components/main/simpleShop/SimpleShop";
function App() {
  const [page, setPage] = useState("Homepage");

  function changePage(id) {
    setPage((oldpage) => (oldpage = id));
  }

  let component = <SimpleShop />;

  if (page === "Login Form") {
    component = <SwitchLogin />;
  } else if (page === "Fetch And Map") {
    component = <Homepage />;
  } else if (page === "Zalando Api") {
    component = <Zalando />;
  } else if (page === "Forms") {
    component = <Forms />;
  } else if (page === "FormControlled") {
    component = <FormControlled />;
  } else if (page === "SimpleShop") {
    component = <SimpleShop />;
  }

  return (
    <>
      <Navbar changePage={changePage} />
      {component}
    </>
  );
}

export default App;
