import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import NewsList from "../../pages/NewsList/NewsList";
import NewsPage from "../../pages/NewsPage/NewsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <NewsList />,
      },
      {
        path: "item",
        element: <NewsPage />,
      },
    ],
  },
]);
