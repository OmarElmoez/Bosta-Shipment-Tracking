import {lazy} from "react";

const Home = lazy(() => import("./home/Home"));
const TrackingDetails = lazy(() => import("./tracking-details/TrackingDetails"));

export {
  Home,
  TrackingDetails,
}