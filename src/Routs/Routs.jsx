import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import AllAplication from "../Pages/AllAplication";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import Error from "../Components/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Error></Error>,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'/apps',
            Component:AllAplication,
        },
        {
            path:'/installation',
            Component:Installation,
        },
        {
            path:'/apps/:id',
            Component:AppDetails,
            errorElement:<p>kamon aso</p>
        },
       
    ]
  },
]);