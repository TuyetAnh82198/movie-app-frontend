import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Page404 from "./pages/Page404";
import Page500 from "./pages/Page500";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/search", element: <Search /> },
      ],
    },
    { path: "/server-error", element: <Page500 /> },
    { path: "*", element: <Page404 /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
