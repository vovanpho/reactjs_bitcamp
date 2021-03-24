import React from "react";

import HomePage from "./cmm/container/Home";
import SignUpPage from "./uss/container/SignUp";
import LoginPage from "./sec/container/Login";
import NotFound from "./notfound/container/NotFound";
import Introduction from "./intro/container/Introduction";
import BLog from "./blog/container/Blog";
import Direction from "./direc/container/Direction";
import Curriculum from "./curric/container/Curriculum";
import Employment from "./employment/container/Employment";
import Support from "./employment/container/Support";
import Recruitment from "./employment/container/Recruitment";
import Overseas from "./employment/container/Overseas";
import Startup from "./employment/container/Startup";
import Mentoring from "./mentoring/container/Mentoring";
import Find from "./mentoring/container/Find";
import Contact from "./contact/container/Contact";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/intro",
    exact: false,
    main: () => <Introduction />,
  },
  {
    path: "/direction",
    exact: false,
    main: () => <Direction />,
  },
  {
    path: "/curriculum",
    exact: false,
    main: () => <Curriculum />,
  },
  {
    path: "/employ",
    exact: false,
    main: () => <Employment />,
  },
  {
    path: "/support",
    exact: false,
    main: () => <Support />,
  },
  {
    path: "/recruitment",
    exact: false,
    main: () => <Recruitment />,
  },
  {
    path: "/overseas",
    exact: false,
    main: () => <Overseas />,
  },
  {
    path: "/startup",
    exact: false,
    main: () => <Startup />,
  },
  {
    path: "/blog",
    exact: false,
    main: () => <BLog />,
  },
  {
    path: "/mentoring",
    exact: false,
    main: () => <Mentoring />,
  },
  {
    path: "/find",
    exact: false,
    main: () => <Find />,
  },
  {
    path: "/contact",
    exact: false,
    main: () => <Contact />,
  },
  {
    path: "/signup",
    exact: false,
    main: () => <SignUpPage />,
  },
  {
    path: "/login",
    exact: false,
    main: () => <LoginPage />,
  },
  {
    main: () => <NotFound />,
  },
];

export default routes;
