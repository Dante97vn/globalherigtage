//Nhap mô-dun(thư viện) hoạt động React
import React from "react";
import ReactDom from "react-dom/client";

//Import Library router
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Import css
import "./index.css";

//Import các component sử dụng
import Home from "./Pages/homePage.js";
import Monuments from "./Pages/monuments.js";
import Gallery from "./Pages/gallery.js";
import Feedback from "./Pages/feedback.js";
import Contact from "./Pages/contact.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Aboutus from "./components/aboutus.js";
import Ticker from "./components/ticker.js";
import ScrollToTopButton from "./components/scrolluptotop.js";
import SitemapButton from "./components/siteMapbutton.js";
//Định nghĩa router trước khi dùng
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "monuments", element: <Monuments /> },
        { path: "gallery", element: <Gallery /> },
        { path: "feedback", element: <Feedback /> },
        { path: "contact", element: <Contact /> },
        { path: "aboutus", element: <Aboutus /> },
      ],
    },
  ],
  { basename: "/globalherigtage" } // Adjust to your repo name
);
function Layout() {
  return (
    <div>
      <Header />
      <Ticker />
      <SitemapButton />
      <ScrollToTopButton />
      <Outlet />{" "}
      {/* Outlet dùng để hiển thị component tương ứng với từng route */}
      {/* Nút scroll lên đầu */}
      <Footer />
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

//React v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

//React before 18
//React.render(<App />);
