import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function TitleBar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit">
          {process.env.REACT_APP_PAGE_TITLE}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
