import React from "react";
import { BrowserRouter } from "react-router-dom";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";

import Header from "./components/Header/index";
import Routes from "./routes";

import { MuiThemeProvider } from "@material-ui/core/styles";

import { theme } from "./styles/global";

function App() {
  const sidebarItems = [
    {
      name: "Dashboard",
      route: "/",
      icon: <DashboardIcon />
    },
    {
      name: "Lista",
      route: "/categories",
      icon: <ListIcon />
    }
  ];

  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <Header sidebarItems={sidebarItems}>
          <Routes />
        </Header>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
