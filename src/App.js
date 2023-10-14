import React from "react";
import { useState, Suspense } from "react";
import ButtonComponent from "./Components/Button";
import RepoResultsTable from "./Components/RepoResultsTable";
import BasicTextField from "./Components/Input";
import Loading from "./Components/Loading";
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {
  const [state, setState] = useState();
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
        <BasicTextField eventHandler={eventHandler} />
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
          <div>Awaiting search</div>
        )}
      </ErrorBoundary>
    </>
  );
}

export default App;
