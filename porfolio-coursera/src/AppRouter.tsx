import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import RootLayout from "./layouts/RootLayout";
import Loader from "./components/custom/Loader";

const queryClient = new QueryClient();
const LazyHome = React.lazy(() => import("@/pages/Home"));
const LazyProjects = React.lazy(() => import("@/pages/Projects"));
const LazyContact = React.lazy(() => import("@/pages/Contact"));

export const AppRouter = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RootLayout>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route
                path="/home"
                element={
                  <Suspense fallback={<Loader />}>
                    <LazyHome />
                  </Suspense>
                }
              />
              <Route
                path="/projects"
                element={
                  <Suspense fallback={<Loader />}>
                    <LazyProjects />
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loader />}>
                    <LazyContact />
                  </Suspense>
                }
              />
            </Routes>
          </Suspense>
        </RootLayout>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
