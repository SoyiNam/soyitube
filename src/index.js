import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Videos from "./pages/Videos";
import VideosDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideosDetail /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
