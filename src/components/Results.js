import React from "react";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import createExcelFile from "../lib/excel";

const useStyles = makeStyles({
  root: {
    width: 400,
    maxWidth: "95%",
    margin: "0 auto"
  },
  table: {
    width: "100%"
  },
  spacer: {
    flexGrow: 1
  },
  icon: {
    marginRight: "-12px"
  }
});

export default function Results({ results, avg }) {
  const classes = useStyles();

  function handleSave() {
    createExcelFile(results, avg);
  }

  return (
    <Paper className={classes.root} elevation={5}>
    <Toolbar>
      <Typography variant="h6">VR {avg}</Typography>
      <span className={classes.spacer}/>
      <IconButton className={classes.icon} onClick={handleSave}>
        <SaveIcon />
      </IconButton>
    </Toolbar>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Ratio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell align="right">{r}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
