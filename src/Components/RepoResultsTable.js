import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { request } from "@octokit/request";

const result = await request("GET /users/lukechaplin/repos");

let result2 = result.data;
console.log(result2);

const rows = result2.map((repo) => ({
  id: repo.id,
  Repository: repo.name,
  Author: repo.owner.login,
  URL: repo.html_url,
}));

const columns = [
  { field: "id", headerName: "Id", width: 150 },
  { field: "Repository", headerName: "Repository", width: 150 },
  { field: "Author", headerName: "Author", width: 150 },
  { field: "URL", headerName: "URL", width: 150 },
];

export default function RepoResultsTable() {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
