import ReactDOM from "react-dom/client";
import "./styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HOME_PATH,
  NEWS_PATH,
  HISTORY_PATH,
  DETAIL_NEWS_PATH,
  ADMIN_FEEDBACK_PATH,
  CONTACT,
  SERVICE_PATH,
  SERVICE_DETAIL_PATH,
  SIGNIN_PATH,
  SIGNUP_PATH,
} from "./contants/routers";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/client/children/home/Home";
import HistoryPage from "./pages/client/HistoryPage";
import LayoutDefault from "./pages/client/layout/layout default/LayoutDefault";
import News from "./pages/client/children/news/News";
import DetailNews from "./pages/client/children/detail news/DetailNews";
import Feedback from "./pages/client/children/Feedback/Feedback";
import Contact from "./pages/client/children/contact/Contact"
import LoginBodyGuard from "./pages/bodyGuard_v1/Login/Login"
import Service from "./pages/client/children/service/Service";
import ServiceDetail from "./pages/client/children/service/serviceDetail/ServiceDetail";
import Login from "./pages/login/loginform";
const router = createBrowserRouter([
  // UI user into here
  {
    path: SIGNIN_PATH,
    element: <Login/>

  },
  // route home
  {
    path: HOME_PATH,
    element: <LayoutDefault />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: HISTORY_PATH,
        element: <HistoryPage />,
      },
      {
        path: CONTACT,
        element: <Contact/>,
      },
      {
        path: SERVICE_PATH,
        element: <Service/>,
      },
      {
        path: SERVICE_DETAIL_PATH,
        element: <ServiceDetail/>
      },
    ],
    errorElement: <NotFound />,
  },
  // route news
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
  // route detail news
  {
    path: DETAIL_NEWS_PATH,
    element: <LayoutDefault />,
    children: [
      {
        path: "",
        element: <DetailNews />,
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
  {
    path: ADMIN_FEEDBACK_PATH,
    element: <Feedback />,
    errorElement: <NotFound />,
  },


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
  // /////////////////////////////////////VIEWS BODYGUARD //////////
  {
    path: "/bodyguard/auth/login",
    element: <LoginBodyGuard/>
  }
]);




const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
// (start:) npm run dev
