import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import { Home, Category, Cart } from "../pages/index";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { index: "/category:id", element: <Category /> },
    ],
  },
]);

export default router;
