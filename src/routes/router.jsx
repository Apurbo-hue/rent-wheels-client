import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import MainLayouts from "../Layouts/MainLayouts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddCar from "../Pages/AddCar/AddCar";
import BrowseCars from "../Pages/BrowseCars/BrowseCars";
import MyBookings from "../Pages/MyBookings/MyBookings";
import MyListings from "../Pages/MyListings/MyListings";
import PrivateRouter from "../../Contexts/PrivateRouter";
import CarDetails from "../Pages/CarDetails/CarDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayouts,
        children: [
            {
                index: true, loader: () => fetch('http://localhost:3000/featuredCars'), Component: Home
            },
            {
                path: "addCar", element: <PrivateRouter><AddCar></AddCar></PrivateRouter>
            },
            {
                path: "browseCars",loader:()=>fetch('http://localhost:3000/cars'), Component: BrowseCars
            },
            {
                path: "carDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`),
                element:<PrivateRouter><CarDetails></CarDetails></PrivateRouter>
            },
            {
                path: "myBookings", Component: MyBookings
            },
            {
                path: "mylistings", element:<PrivateRouter><MyListings></MyListings></PrivateRouter>
            },
            {
                path: "register", Component: Register
            },
            {
                path: "login", Component: Login
            }
        ]
    }
])

export default router;