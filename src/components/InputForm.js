import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  card: {
    width: 400,
    maxWidth: "95%",
    margin: "0 auto"
  },
  form: {
    width: "100%",
    padding: 8,
    display: "flex",
    flexFlow: "column nowrap",
    alignContent: "stretch"
  },
  row: {
    display: "flex",
    justifyContent: "stretch",
    marginTop: 8,
    marginBottom: 8
  },
  number: {
    flexGrow: 1,
    marginLeft: "4px !important",
    marginRight: "4px !important"
  },
  actions: {
    justifyContent: "center"
  }
});

function validate({ min, max, count, target }) {
  if (min >= max) return false;
  if (min < 1 || max < 1) return false;
  if (count < 2) return false;
  if (target < 1) return false;
  return true;
}

function NumberInput({ label, defaultValue, onChange, className = "" }) {
  const [val, setVal] = useState(defaultValue);
  function handleChange(e) {
    let newVal = parseInt(e.target.value);
    if (isNaN(newVal)) {
      onChange(0);
      setVal("");
    } else {
      onChange(newVal);
      setVal(newVal);
    }
  }
  return (
    <TextField
      className={className}
      label={label}
      value={val}
      onChange={handleChange}
      type="number"
      variant="outlined"
      InputLabelProps={{
        shrink: true
      }}
    />
  );
}

export default function InputForm({ onGenerate }) {
  const [state, setState] = useState({
    target: 10,
    min: 5,
    max: 15,
    count: 20,
    enabled: true
  });
  const classes = useStyles();

  function handleChange(prop) {
    return function(val) {
      const newState = { ...state, [prop]: val };
      newState.enabled = validate(newState);
      setState(newState);
    };
  }

  function handleGenerate() {
    onGenerate(state);
  }
  return (
    <Card className={classes.card} elevation={5}>
      <CardContent>
        <form noValidate autoComplete="off" className={classes.form}>
          <div className={classes.row}>
            <NumberInput
              label="Target VR"
              defaultValue={state.target}
              onChange={handleChange("target")}
              className={classes.number}
            />
            <NumberInput
              label="Amount to Generate"
              defaultValue={state.count}
              onChange={handleChange("count")}
              className={classes.number}
            />
          </div>
          <div className={classes.row}>
            <NumberInput
              label="Min Ratio"
              defaultValue={state.min}
              onChange={handleChange("min")}
              className={classes.number}
            />
            <NumberInput
              label="Max Ratio"
              defaultValue={state.max}
              onChange={handleChange("max")}
              className={classes.number}
            />
          </div>
        </form>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" disabled={!state.enabled} onClick={handleGenerate}>
          Generate
        </Button>
      </CardActions>
    </Card>
  );
}
