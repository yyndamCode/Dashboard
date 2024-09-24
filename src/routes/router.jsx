import { createBrowserRouter } from "react-router-dom";
import Error from "./../ui/Error";
import { VuexyLayout } from "../Layouts/VuexyLayout";
import { Home } from './../pages/Home/Home';

export const router = createBrowserRouter([
  {
    element: <VuexyLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
