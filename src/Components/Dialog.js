import * as React from "react";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";

export default function DetailsDialog({ forks, likes, stars, issue, readme }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        More details
      </Button>
      <Dialog open={open} onClose={handleClose}>
        Forks: {forks} Likes: {likes} Stars: {stars} Issue Count: {issue}{" "}
        README: {readme + "contents/README.md"}
      </Dialog>
    </div>
  );
}
