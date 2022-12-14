import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./screens/main";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Wallet from "./screens/wallet/index.js";
import Marker from "./screens/marker/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/marker",
    element: <Marker />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
