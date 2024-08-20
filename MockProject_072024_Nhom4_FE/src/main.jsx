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
  BODYGUARD_PATH,
  BODYGUARD_PROFILE_PATH,
  BODYGUARD_WORKING_SCHEDULE_PATH,
  BODYGUARD_TRAINING_SCHEDULE_PATH,
  REQUEST_PATH, 
  REQUEST_LIST_PATH,
  FEEDBACK,
  BODYGUARD_TIME_KEEPING_PATH,
  BODYGUARD_DL_TIME_KEEPING_PATH,
  PROFILE_PATH,
  ADMIN_PATH,
  ADMIN_ACCOUNT,
  CONTRACT_ADMIN,
} from "./contants/routers";

import NotFound from "./pages/error/NotFound";
import Home from "./pages/client/children/home/Home";
import HistoryPage from "./pages/client/HistoryPage";
import LayoutDefault from "./pages/client/layout/layout default/LayoutDefault";
import News from "./pages/client/children/news/News";

import DetailNews from "./pages/client/children/detail news/DetailNews";
import Feedback from "./pages/client/children/feedback/Feedback";
import Contact from "./pages/client/children/contact/Contact";
import Profile from "./pages/bodyguard/children/profile/Profile";
import LayoutDefaultBodyGuard from "./pages/bodyguard/layout/LayoutDefaultBodyGuard";
import Signup from "./pages/signup/Signup";
import LoginBodyGuard from "./pages/bodyGuard_v1/Login/Login";
import Service from "./pages/client/children/service/Service";
import ServiceDetail from "./pages/client/children/service/serviceDetail/ServiceDetail";
import Login from "./pages/login/loginform";
import Request from "./pages/client/children/request/form/Request";
// import Feedback from "./pages/client/children/feedback/Feedback";
import RequestList from "./pages/client/children/request/list/Requestlist";
// <<<<<<< HEAD

// =======
import WorkingSchedule from "./pages/bodyguard/children/workingSchedule/WorkingSchedule";
import TrainingSchedule from "./pages/bodyguard/children/trainingSchedule/TrainingSchedule";
import TimeKeeping from "./pages/bodyguard/children/timeKeeping/timeKeeping";
import DetailTimeKeeping from "./pages/bodyguard/children/timeKeeping/detailTimeKeep/DetailTimeKeep";
import UserProfile from "./pages/client/children/profile/Profile";
import AdminLayout from "./pages/Admin/layout/LayoutAdminPage";
import Content from "./pages/Admin/children/AccountManage/AccountManage";
import Contract from "./pages/Admin/children/Contract/Contract";
// const router = createBrowserRouter([
// >>>>>>> c0e129fd8d3848b8adeb09d9a54b6278d1bb5b9f


const router = createBrowserRouter([
  // UI user into here
  {
    path: SIGNIN_PATH,
    element: <Login />,
  },
  // UI user into here
  {
    path: SIGNUP_PATH,
    element: <Signup />,
  },

  // UI bodyguard
  {
    path: BODYGUARD_PATH,
    element: <LayoutDefaultBodyGuard />,
    children: [
      {
        path: BODYGUARD_PROFILE_PATH,
        element: <Profile />,
      },
      {
        path: BODYGUARD_WORKING_SCHEDULE_PATH,
        element: <WorkingSchedule/>
      }, 
      {
        path: BODYGUARD_TRAINING_SCHEDULE_PATH,
        element: <TrainingSchedule/>
      },{

        path: BODYGUARD_TIME_KEEPING_PATH,
        element: <TimeKeeping/>
      },
      {
        path: BODYGUARD_DL_TIME_KEEPING_PATH,
        element: <DetailTimeKeeping/>
      }
    ],
    errorElement: <NotFound />,
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
        element: <Contact />,
      },
      {
        path: SERVICE_PATH,
        element: <Service />,
      },
      {
        path: SERVICE_DETAIL_PATH,
        element: <ServiceDetail />,
      },
      {
        path: FEEDBACK,
        element: <Feedback/>,
      },
      {
        path: PROFILE_PATH,
        element: <UserProfile/>,
      }
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

  //UI Admin
  {
    path: ADMIN_PATH,
    element: <AdminLayout />,
    children: [
      {
        path: ADMIN_ACCOUNT,
        element: <Content />,
      },
      {
        path: CONTRACT_ADMIN,
        element: <Contract />,
      }
     
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
    element: <LoginBodyGuard />,
  },
]);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
// (start:) npm run dev
