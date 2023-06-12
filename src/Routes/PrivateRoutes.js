import { ROUTE_DEFINATION } from "../utils/constant/route.constant";
import { Navigate } from "react-router-dom";
import MainLayout from "../Layout";
import Home from "../Componenet/Pages/Home";
import Profile from "../Componenet/Pages/Profile";
import About from "../Componenet/Pages/About";
import Contact from "../Componenet/Pages/Contact";
import Services from "../Componenet/Pages/Services";
import AddCategories from "../Componenet/Pages/Add_Categories";

// const Home =Loadable({
// loader:()=> import("../Componenet/Pages/Home"),
// });
const PrivateRoutes ={
    element:<MainLayout/>,
    children:[
        {
            path:ROUTE_DEFINATION.BASE,
            title:ROUTE_DEFINATION.BASE,
            element:<Home/>,
        },
        {
            path:ROUTE_DEFINATION.PROFILE,
            title:ROUTE_DEFINATION.PROFILE,
            element:<Profile/>,
        },
        {
            path:ROUTE_DEFINATION.SERVICE,
            title:ROUTE_DEFINATION.SERVICE,
            element:<Services/>,
        },
        {
            path:ROUTE_DEFINATION.ABOUT,
            title:ROUTE_DEFINATION.ABOUT,
            element:<About/>,
        },
        {
            path:ROUTE_DEFINATION.CONTACT,
            title:ROUTE_DEFINATION.CONTACT,
            element:<Contact/>,
        },
        {
            path:ROUTE_DEFINATION.ADD_CATEGORIES,
            title:ROUTE_DEFINATION.ADD_CATEGORIES,
            element:<AddCategories/>,
        },

        {
            path: "*",
            title: "",
            element: <Navigate to={ROUTE_DEFINATION.HOME} />,
          }
    ],
};
export default PrivateRoutes;