import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import DetailsDialog from "./Dialog";

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
      <DataGrid columns={columns} />
    </div>
  );
}
