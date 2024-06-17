import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Pokedex = () => {
  return (
    <main>
      <NavLink to="/">
        <Button sx={{ background: "transparent", margin: "0.7rem" }} variant="contained" startIcon={<KeyboardBackspaceIcon />}>Back</Button>
      </NavLink>
      <div className="tw-w-[50%] tw-mx-auto">

      </div>
    </main>
  );
};

export default Pokedex;
