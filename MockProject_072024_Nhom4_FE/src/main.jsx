
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HOME_PATH, NEWS_PATH, HISTORY_PATH, } from "./contants/routers";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/client/children/home/Home";
import HistoryPage from './pages/client/HistoryPage';
import LayoutDefault from "./pages/client/layout/layout default/LayoutDefault";
import News from "./pages/client/children/news/News";
import Contact from "./pages/client/children/contact/Contact";
const router = createBrowserRouter([
  // UI user into here
  {
    path: HOME_PATH,
    element: <LayoutDefault />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: HISTORY_PATH,
        element: <HistoryPage/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: NEWS_PATH,
    element: <LayoutDefault />,
    children: [
      {
        path: "",
        element: <News />,
      },
    ],
    errorElement: <NotFound />,
  },
 
  // UI admin anđ staff into here
  // {
  // path: ADMIN_PATH,
  // element: <AdminPage />,
  // children: [
  //   // {
  //   //   path: ADMIN_PERSONAL_INFOR_PATH,
  //   //   element: <PersonalInfor/>
  //   // },
  //   {
  //     path: ADMIN_USER_LIST_PATH,
  //     element: <ErrorPage/>
  //   },]
  // }
  // UI admin anđ staff into here
  // {
  // path: ADMIN_STAFF,
  // element: <AdminPage />,
  // children: [
  //   // {
  //   //   path: ADMIN_PERSONAL_INFOR_PATH,
  //   //   element: <PersonalInfor/>
  //   // },
  //   {
  //     path: ADMIN_USER_LIST_PATH,
  //     element: <ErrorPage/>
  //   },]
  // }
]);
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
// (start:) npm run dev
