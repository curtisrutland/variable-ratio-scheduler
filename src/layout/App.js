import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import TitleBar from "../components/TitleBar";
import InputForm from "../components/InputForm";
import { generateTargetList, roundAvg } from "../lib/generator";
import Results from "../components/Results";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch"
  },
  overflowContainer: {
    width: "100%",
    padding: 8,
    overflow: "auto"
  },
  spacer: {
    height: 16,
    width: "100%"
  }
});

export default function Page() {
  const classes = useStyles();
  const [state, setState] = useState(null);

  function handleGenerate({ min, max, count, target }) {
    const list = generateTargetList(count, target, min, max);
    console.debug(list);
    setState({ results: list, avg: roundAvg(list) });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TitleBar />
      <div className={classes.overflowContainer}>
        <InputForm onGenerate={handleGenerate} />
        <div className={classes.spacer} />
        {state == null ? null : (
          <Results results={state.results} avg={state.avg} />
        )}
      </div>
    </div>
  );
}
