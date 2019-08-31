import React from "react";

import clsx from "clsx";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

export default function Main({ open }) {
  const classes = useStyles();

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <div className={classes.drawerHeader} />
      <Typography variant="h5">oiiiii</Typography>
    </main>
  );
}
