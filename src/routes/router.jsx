import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCar from "../Pages/AddCar/AddCar";
import BrowseCars from "../Pages/BrowseCars/BrowseCars";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyListings from "../Pages/MyListings/MyListings";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        children: [
            {
                index:true,Component:Home
            },
            {
                path:"addCar",Component:AddCar
            },
            {
                path:"browseCars",Component:BrowseCars
            },
            {
                path:"myBookings",Component:MyBookings
            },
            {
                path:"mylistings",Component:MyListings
            },
            {
                path:"register",Component:Register
            },
            {
                path:"login",Component:Login
            }
        ]
    }
])

export default router;