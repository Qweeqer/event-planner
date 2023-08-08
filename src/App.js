import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import EditPage from "./pages/EditPage/EditPage";
import Loader from "./components/Loader/Loader";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "/events/:eventId",
            element: (
              <Suspense fallback={<Loader />}>
                <DetailsPage />
              </Suspense>
            ),
          },
          {
            path: "/create",
            element: (
              <Suspense fallback={<Loader />}>
                <CreatePage />
              </Suspense>
            ),
          },
          {
            path: "/events/:eventId/edit",
            element: (
              <Suspense fallback={<Loader />}>
                <EditPage />
              </Suspense>
            ),
          },
          {
            path: "/*",
            element: <Navigate to="/" replace />,
          },
        ],
      },
    ],
    {
      basename: "/event-planner",
    }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
