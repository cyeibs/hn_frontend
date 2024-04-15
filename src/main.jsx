import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./api/RTK/store";
import { router } from "./api/Router/BrowserRouter";
import QueryProvider from "./api/TanStack/Query";
import "./index.css";
import { theme } from "./shared/Fonts/Fonts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryProvider>
    </Provider>
  </React.StrictMode>
);
