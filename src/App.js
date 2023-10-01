import * as React from "react";
import RepoResultsTable from "./Components/RepoResultsTable";
import BasicTextField from "./Components/Input";
import { request } from "@octokit/request";

const result = await request("GET /users/lukechaplin/repos");
let resultData = result.data;

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

function App() {
  const [state, setState] = React.useState();
  return (
    <>
      <BasicTextField />
      <RepoResultsTable rows={rows} />
    </>
  );
}

export default App;
