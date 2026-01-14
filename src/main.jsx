import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store.js";
import Home from "./Components/Home/Home.jsx";
import AboutUs from "./Components/ContactUs/ContactUs.jsx";
import OfficeContactForm from "./Components/OfficeContactForm/OfficeContactForm.jsx";
import OfficeListingPage from "./Components/OfficeSpacesList/OfficeListingPage.jsx";
import OfficeSpaceFremantle from "./Components/OfficeSpacesList/OfficeSpaceFremantle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // This is your App component that includes the Header, Footer, and nested Routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/syllabus",
      //   element: <Syllabus />,
      // },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <OfficeContactForm />,
      },
      {
        path: "/office-space/:id",
        element: <OfficeSpaceFremantle />,
      },
      // {
      //   path: "/signin",
      //   element: <SignIn />,
      // },
      // {
      //   path: "/signup",
      //   element: <SignUp />,
      // },
      // {
      //   path: "/forgot",
      //   element: <ForgotPassword />,
      // },
      // {
      //   path: "/study",
      //   element: <Chapters />,
      // },
      // {
      //   path: "/study/chapter/:id",
      //   element: <ChapterContent />,
      // },
      // {
      //   path: "/dashboard", // Dashboard route
      //   element: <Dashboard />,
      // },
      // {
      //   path: "/examRegister", //examRegister route
      //   element: <ExamRegister />,
      // },
      // {
      //   path: "/communication", // Communication route
      //   element: <Communication userProgram="Sagar Sah" />,
      // },
      // {
      //   path: "/exam-portal", // Communication route
      //   element: <ExamPortal />,
      // },
      // {
      //   path: "/coming-soon",
      //   element: <ComingSoon />, // Coming Soon page for features
      // },

      // //admin route
      // {
      //   path: "/",
      //   element: <AdminRoute />,
      //   children: [
      //     {
      //       path: "/admin/users",
      //       element: <EditUsers />,
      //     },
      //   ],
      // },
      // //private route
      // {
      //   path: "/",
      //   element: <PrivateRoute />,
      //   children: [
      //     {
      //       path: "/users/profile",
      //       element: <Profile />,
      //     },
      //   ],
      // },
      // {
      //   path: "*",
      //   element: <PageNotFound />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
