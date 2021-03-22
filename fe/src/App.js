import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./router-config";

import Header from "./cmm/container/Header";
import Footer from "./cmm/container/Footer";

const showRoute = (routes) => {
  let xhmtl = null;
  if (routes.length > 0) {
    xhmtl = routes.map((route, index) => {
      return (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.main}
        />
      );
    });
  }
  return <Switch>{xhmtl}</Switch>;
};

const App = () => {
  return (
    <Router>
      <Header />
      {showRoute(routes)}
      <Footer />
    </Router>
  );
};

export default App;
