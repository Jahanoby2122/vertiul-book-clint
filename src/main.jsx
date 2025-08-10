import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import AuthProvider from "./Provider/AuthProvider";
import Loading from "./Pages/Loading";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Suspense fallback={<Loading></Loading>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
