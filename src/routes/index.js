import React from "react";

import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import RegisterCategory from "../pages/RegisterCategory";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/categories" component={Category} />
    <Route exact path="/categories/new" component={RegisterCategory} />
    <Route path="/categories/:id" component={RegisterCategory} />
  </Switch>
);

export default Routes;
