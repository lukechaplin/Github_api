import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function BasicTextField() {
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
        id="outlined-basic"
        label="Enter github username here"
        variant="outlined"
      />
    </Box>
  );
}
