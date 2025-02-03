import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import OurServices from "../pages/OurServices/OurServices";
import ContactUs from "../pages/ContactUs/ContactUs";
import SignUp from "../pages/SignUp/SignUp";
import TermsCondition from "@/Shared/TermsCondition/TermsCondition";
import PrivacyPolicy from "@/Shared/PrivacyPolicy/PrivacyPolicy";
import DynamicPage from "@/Test/DynamicPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/services",
        element: <OurServices></OurServices>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      // {
      //   path: "/terms-conditions",
      //   element: <TermsCondition />,
      // },
      // {
      //   path: "/privacy-policy",
      //   element: <PrivacyPolicy />,
      // },
      {
        path: "/:page_slug",
        element: <DynamicPage />,
      },
    ],
  },
]);
