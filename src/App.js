import React from "react";
import { BrowserRouter } from "react-router-dom";

import DashboardIcon from "@material-ui/icons/Dashboard";
import ListIcon from "@material-ui/icons/List";

import Header from "./components/Header/index";

function App() {
  const sidebarItems = [
    {
      name: "Dashboard",
      route: "/dashboard",
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
      <Header sidebarItems={sidebarItems} />
    </BrowserRouter>
  );
}

export default App;
