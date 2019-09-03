import React from "react";

import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Category from "../pages/Category";
import AddCategory from "../pages/AddCategory";
import EditCategory from "../pages/EditCategory";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/categories" component={Category} />
    <Route exact path="/categories/new" component={AddCategory} />
    <Route path="/categories/:id" component={EditCategory} />
  </Switch>
);

export default Routes;
