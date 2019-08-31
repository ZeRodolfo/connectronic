import React, { Component } from "react";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge
} from "@material-ui/core";

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Painel
          </Typography>

          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 1 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
