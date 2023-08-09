import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";

import HomePage from "../pages/HomePage/HomePage";
import CreatePage from "../pages/CreatePage/CreatePage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import EditPage from "../pages/EditPage/EditPage";

export const AppRouter = () => {
  return createBrowserRouter(
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
            path: "*",
            element: <Navigate to="/" replace />,
          },
        ],
      },
    ],
    {
      basename: "/event-planner",
    }
  );
};
