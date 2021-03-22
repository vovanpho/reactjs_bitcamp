import React from "react";

import HomePage from "./cmm/container/Home";
import SignUpPage from "./uss/container/SignUp";
import LoginPage from "./sec/container/Login";
import NotFound from "./notfound/container/NotFound";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/r/signup",
    exact: true,
    main: () => <SignUpPage />,
  },
  {
    path: "/r/login",
    exact: true,
    main: () => <LoginPage />,
  },
  {
    main: () => <NotFound />,
  },
];

export default routes;
