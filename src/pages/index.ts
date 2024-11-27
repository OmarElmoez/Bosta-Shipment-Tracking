import {lazy} from "react";

const Home = lazy(() => import("./home/Home"));
const TrackingDetails = lazy(() => import("./tracking-details/TrackingDetails"));
const Error = lazy(() => import('./Error.tsx'))
export {
  Home,
  TrackingDetails,
  Error,
}