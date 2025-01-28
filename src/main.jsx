import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AosProvider from "./Provider/AosProvider/AosProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Preloader from "./components/Preloader/Preloader";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Preloader />
    <QueryClientProvider client={queryClient}>
      <AosProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </AosProvider>
    </QueryClientProvider>
  </StrictMode>
);
