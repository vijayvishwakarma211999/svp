import { Navigate } from "react-router-dom";
import Login from "../Componenet/Pages/Login";
import SignUp from "../Componenet/Pages/SignUp/index ";
import LoginLayout from "../Layout/LoginLayout";
import { ROUTE_DEFINATION } from "../utils/constant/route.constant";

const PublicRoutes ={
    element:<LoginLayout/>,
    children:[
{
    path:ROUTE_DEFINATION.BASE,
   element:<Login/>
},
{
    path:ROUTE_DEFINATION.SIGN_UP,
   element:<SignUp/>
},
{
    path:"*",
    element:<Navigate to={ROUTE_DEFINATION.BASE}/>
}     
    ]
}
export default PublicRoutes