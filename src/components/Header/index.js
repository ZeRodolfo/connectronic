import React from "react";

import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge
} from "@material-ui/core";

import useStyles from "./styles";
import Sidebar from "../Sidebar";
import Main from "../Main";

export default function Header(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { sidebarItems } = props;

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: open })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
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

      <Sidebar open={open} onClick={handleDrawerClose} items={sidebarItems} />
      <Main open={open}>{props.children}</Main>
    </div>
  );
}
