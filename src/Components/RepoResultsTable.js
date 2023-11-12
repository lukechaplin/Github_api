import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DetailsDialog from "./Dialog";

export default function RepoResultsTable({ state }) {
  const rows = state.map((row) => ({
    id: row.id,
    Repository: row.name,
    Author: row.owner.login,
    URL: row.html_url,
    Forks: row.forks_count,
    Likes: row.watchers,
    Stars: row.stargazers_count,
    Issue: row.open_issues_count,
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
  return (
    <>
      {" "}
      <Box sx={{ mx: "auto", p: 10 }}>
        <DataGrid columns={columns} rows={rows} />
      </Box>
    </>
  );
}
