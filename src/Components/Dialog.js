import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Dialog } from "@mui/material";

export default function DetailsDialog({ forks, likes, stars, issue, readme }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleClickOpen}>
        More details
      </Button>
      <Dialog open={open} onClose={handleClickClose}>
        <Box sx={{ mx: "auto", height: 180, width: 600 }} align="justify">
          <Box sx={{ p: 1 }}>Forks: {forks}</Box>
          <Box sx={{ p: 1 }}>Likes: {likes} </Box>
          <Box sx={{ p: 1 }}>Stars: {stars}</Box>
          <Box sx={{ p: 1 }}>Issue Count: {issue}</Box>
          <Box sx={{ p: 1 }}>README: {readme + "contents/README.md"}</Box>
        </Box>
      </Dialog>
    </Box>
  );
}
