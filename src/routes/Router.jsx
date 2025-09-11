import { createBrowserRouter } from "react-router-dom";
import { LazyComponents } from "./LazyComponents";
import AppLayout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>some thing went wrong</div>,
    children: [
      {
   path:"/",
        element: <LazyComponents path="/" />,
      },
      {
        path: "candy-shake",
        element: <LazyComponents path="/candy-shake" />,
      },
      {
        path: "affiliates",
        element: <LazyComponents path="/affiliates" />,
      },
      {
        path: "contact",
        element: <LazyComponents path="/contact" />,
      },
      {
        path: "order-page/:id",
        element: <LazyComponents path="/order-page/:id" />,
      },
      {
        path: "card",
        element: <LazyComponents path="/card" />,
      },
      {
        path: "checkout",
        element: <LazyComponents path="/checkout" />,
      },
      {
        path: "/category",
        element: <LazyComponents path="/category" />,
      },
      // Optional: catch-all for NotFound
      {
        path: "*",
        element: <LazyComponents path="*" />,
      },
    ],
  },
]);

export default router;
