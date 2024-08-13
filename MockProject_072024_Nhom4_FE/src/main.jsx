
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HOME_PATH, NEWS_PATH, HISTORY_PATH, REQUEST_PATH, REQUEST_LIST_PATH, LIST_PATH, ADMIN_FEEDBACK_PATH } from "./contants/routers";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/client/children/home/Home";
import HistoryPage from './pages/client/HistoryPage';
import LayoutDefault from "./pages/client/layout/layout default/LayoutDefault";
import News from "./pages/client/children/news/News";
import Request from "./pages/client/children/request/form/Request";
import RequestList from "./pages/client/children/request/list/Requestlist";
import List from "./pages/client/children/list/list";
import Feedback from "./pages/client/children/Feedback/Feedback";
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
  {
    path: REQUEST_PATH,
    element: <LayoutDefault />,
    children: [
      {
        path: "",
        element: <Request />,
      },
    ],
    errorElement: <NotFound />,
  },
  {
    path: REQUEST_LIST_PATH,
    element: <RequestList />,
    errorElement: <NotFound />,
  },
 
 
  {
    path: LIST_PATH,
    element: <List />,
    errorElement: <NotFound />,
  },
  {
    path: ADMIN_FEEDBACK_PATH,
    element: <Feedback />,
    errorElement: <NotFound />,
  }
 
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
