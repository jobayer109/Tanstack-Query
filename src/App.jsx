import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import FetchRQ from "./components/pages/FetchRQ";
import Home from "./components/pages/Home";
import NotFound from "./components/UI/NotFound";
import SinglePost from "./components/UI/SinglePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "rq/:id",
        element: <SinglePost />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
