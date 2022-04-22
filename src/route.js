import React from "react";

const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"))
const AboutMePage = React.lazy(() => import("./pages/AboutMePage/AboutMePage"));
const ArtworkPage = React.lazy(() => import("./pages/ArtworkPage/ArtworkPage"));

const routes = [
    { path: "/about", name: "AboutMePage", element: AboutMePage },
    { path: "/artwork", name: "ArtworkPage", component: ArtworkPage },
    { path: "/", name: "HomePage", component: HomePage }
   
];