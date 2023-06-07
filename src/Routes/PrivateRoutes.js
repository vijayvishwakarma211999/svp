import Loadable from "react-loadable";
import MainLayout from "../Layout/MainLayout";
import { ROUTE_DEFINATION } from "../utils/constant/route.constant";
import { Navigate } from "react-router-dom";

const Home =Loadable({
loader:()=> import("../Componenet/Pages/Home"),
});
const PrivateRoutes ={
    element:<MainLayout/>,
    children:[
        {
            path:ROUTE_DEFINATION.BASE,
            title:ROUTE_DEFINATION.BASE,
            element:<Home/>,
        },
        {
            path: "*",
            title: "",
            element: <Navigate to={ROUTE_DEFINATION.HOME} />,
          }
    ],
};
export default PrivateRoutes;