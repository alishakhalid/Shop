import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllLipkit from "./AllLipkit";
import Home from "./Home";
import SingleProductPage from "./SingleProductPage";
import SkinCarePage from "./SkinCarePage";
import Login from "./Content/Login";
import AddProduct from "./Content/AddProduct";
import EditProduct from "./Content/EditProduct";

export default function Navigate() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/lipkit"} component={AllLipkit} />
        <Route exact path={"/lipkit/:id"} component={SingleProductPage} />
        <Route exact path={"/skin"} component={SkinCarePage} />
        <Route exact path={"/add"} component={AddProduct} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/edit"} component={EditProduct} />
      </Switch>
    </BrowserRouter>
  );
}
