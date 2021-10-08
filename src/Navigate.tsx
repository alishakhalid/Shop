import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllLipkit from "./AllLipkit";
import Home from "./Home";
import SingleProductPage from "./SingleProductPage";
import SkinCarePage from "./SkinCarePage";
import MyForm from "./Content/MyForm";
import AddProduct from "./Content/AddProduct";

export default function Navigate() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/lipkit"} component={AllLipkit} />
        <Route exact path={"/lipkit/:id"} component={SingleProductPage} />
        <Route exact path={"/skin"} component={SkinCarePage} />
        <Route exact path={"/add"} component={AddProduct} />
        <Route exact path={"/registrate"} component={MyForm} />
      </Switch>
    </BrowserRouter>
  );
}
