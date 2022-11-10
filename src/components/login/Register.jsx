import React from "react";
import "./Login.scss";
import Button from "@mui/material/Button";
import { MdAccountCircle } from "react-icons/md";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
function Register(props) {
  return (
    <section>
      <MdAccountCircle />
      <h3>Sign in</h3>
      <Box
        className="formfield"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="names">
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Username" variant="outlined" />
        </div>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />

        <FormControlLabel
          control={<Checkbox />}
          label="I want to receive inspiration, marketing promotions and updates via email."
        />
        <Button variant="contained">Sign In</Button>
      </Box>
      <div className="aLinksRegi">
        <a href="#" onClick={() => props.changeLogin(true)}>
          Already have an account? Sign in
        </a>
      </div>
    </section>
  );
}

export default Register;
