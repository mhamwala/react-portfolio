import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
// pages for this kit
import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/react-portfolio" render={props => <Index {...props} />} />
          path="/landing-page"
        />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
