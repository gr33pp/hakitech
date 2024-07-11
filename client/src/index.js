import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@/components/components.scss";

import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import IndexLayout from "./layout/Landing";
import { FeaturesPage, LandingPage } from "./pages/landing";
import Auth from "./pages/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "features",
        element: <FeaturesPage />,
      },
      // {
      //   path: "contact",
      //   element: <></>,
      // },
      {
        path: "login",
        element: <Auth type={"login"} />,
      },
      {
        path: "signup",
        element: <Auth type={"signup"} />,
      },
      {
        path: "reset",
        element: <Auth type={"reset"} />,
      },
    ],
  },
  {
    path: "dashboard",
  },
  { path: "*", element: <div>404</div> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
