import React, { Fragment } from "react";

import { Grid, Paper } from "@material-ui/core";

import useStyles from "./styles";

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Paper className={classes.paperMain}>Construção</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paperMain}>Construção</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Construção</Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
