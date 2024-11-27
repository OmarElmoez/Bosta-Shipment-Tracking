import {lazy} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import {Error, Home as HomePage, TrackingDetails} from '@/pages';
import {PageSuspense} from "@/components";

const MainLayout = lazy(() => import ('@/layout/main-layout/MainLayout'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageSuspense><MainLayout/></PageSuspense>,
    children: [
      {
        index: true,
        element: <PageSuspense><HomePage/></PageSuspense>
      },
      {
        path: 'tracking-details/:trackingNumber',
        element: <PageSuspense><TrackingDetails/></PageSuspense>
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  }
])

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes;