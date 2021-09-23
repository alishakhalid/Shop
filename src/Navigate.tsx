import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllLipkit from "./AllLipkit";
import Home from "./Home";
import SingleProductPage from "./SingleProductPage";
import SkinCarePage from "./SkinCarePage";

export default function Navigate() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/product"} component={AllLipkit} />
        <Route exact path={"/product/:id"} component={SingleProductPage} />
        <Route exact path={"/skin"} component={SkinCarePage} />
      </Switch>
    </BrowserRouter>
  );
}
