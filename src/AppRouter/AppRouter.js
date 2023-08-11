import React, { Suspense, lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CreatePage = lazy(() => import("../pages/CreatePage/CreatePage"));
const DetailsPage = lazy(() => import("../pages/DetailsPage/DetailsPage"));
const EditPage = lazy(() => import("../pages/EditPage/EditPage"));

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
