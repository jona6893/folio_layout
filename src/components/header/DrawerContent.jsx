import React from "react";
import ListItemButton from "@mui/material/ListItemButton";

function DrawerContent(props) {
  return (
    <ul>
      {[
        "Fetch And Map",
        "Login Form",
        "Zalando Api",
        "Forms",
        "FormControlled",
      ].map((btn) => (
        <ListItemButton
          key={btn}
          onClick={() => {
            props.changePage(btn);
            props.setDrawer((old) => (old = false));
          }}
        >
          {btn}
        </ListItemButton>
      ))}
    </ul>
  );
}

export default DrawerContent;
