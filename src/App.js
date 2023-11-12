import React from "react";
import { useState, Suspense } from "react";
import ButtonComponent from "./Components/Button";
import RepoResultsTable from "./Components/RepoResultsTable";
import BasicTextField from "./Components/Input";
import Loading from "./Components/Loading";
import ErrorBoundary from "./Components/ErrorBoundary";
import Box from "@mui/material/Box";
import { blue } from "@mui/material/colors";

function App() {
  const [state, setState] = useState(null);
  const [URL, setURL] = useState();

  async function eventHandler(e) {
    setURL(e.target.value);
  }

  async function onPress() {
    const result = await fetch(`https://api.github.com/users/${URL}/repos`);
    let resultData = await result.json();
    setState(resultData);
  }

  return (
    <>
      <ErrorBoundary>
        <Box sx={{ bgcolor: blue[50] }}>
          <h1 align="center">Github repo finder</h1>
          <BasicTextField autofocus={true} eventHandler={eventHandler} />
          <ButtonComponent
            onPress={() => {
              onPress();
            }}
          />
          {state ? (
            <Suspense fallback={<Loading />}>
              <RepoResultsTable state={state} />
            </Suspense>
          ) : (
            <Box align="center" sx={{ mx: "auto", p: 2 }}>
              Awaiting search
            </Box>
          )}
        </Box>
      </ErrorBoundary>
    </>
  );
}

export default App;
