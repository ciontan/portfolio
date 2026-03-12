import { createBrowserRouter } from "react-router-dom";
import { Root } from "@/app/components/Root";
import { Home } from "@/app/components/Home";
import { Work } from "@/app/components/Work";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { CaseStudyPage } from "@/app/components/CaseStudyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "work/:slug", element: <CaseStudyPage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
