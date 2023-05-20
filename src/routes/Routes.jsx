import { createBrowserRouter } from "react-router-dom";
import { Home, Cart, Category } from "../pages/index";
import RootLayout from "./RootLayout/RootLayout";
import Error from "../components/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/cart", element: <Cart /> },
      { path: "/category/:id", element: <Category /> },
    ],
  },
]);

export default router;
