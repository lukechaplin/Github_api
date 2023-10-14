import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function BasicTextField({ eventHandler }) {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={eventHandler}
        id="outlined-basic"
        label="Enter github username here"
        variant="outlined"
      />
    </Box>
  );
}
