import React from "react";

import clsx from "clsx";

import useStyles from "./styles";

export default function Main(props) {
  const classes = useStyles();
  const { open } = props;

  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      <div className={classes.drawerHeader} />
      <div>{props.children}</div>
    </main>
  );
}
