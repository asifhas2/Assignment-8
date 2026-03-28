import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import AllAplication from "../Pages/AllAplication";
import Installation from "../Pages/Installation";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
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
       
    ]
  },
]);