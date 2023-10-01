import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { request } from "@octokit/request";
import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";

const result = await request("GET /users/lukechaplin/repos");
let resultData = result.data;

function DetailsDialog({ forks, likes, stars, issue, readme }) {
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

const rows = resultData.map((repo) => ({
  id: repo.id,
  Repository: repo.name,
  Author: repo.owner.login,
  URL: repo.html_url,
  Forks: repo.forks_count,
  Likes: repo.watchers,
  Stars: repo.stargazers_count,
  Issue: repo.open_issues_count,
}));

const columns = [
  { field: "id", headerName: "Id", width: 150 },
  { field: "Repository", headerName: "Repository", width: 150 },
  { field: "Author", headerName: "Author", width: 150 },
  { field: "URL", headerName: "URL", width: 150 },
  {
    field: "Details",
    headerName: "Details",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <DetailsDialog
          forks={cellValues.row.Forks}
          likes={cellValues.row.Likes}
          stars={cellValues.row.Stars}
          issue={cellValues.row.Issue}
          readme={cellValues.row.URL}
        />
      );
    },
  },
];

export default function RepoResultsTable() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
