import { AddIcCall, Dashboard, Info, InsertEmoticon, MiscellaneousServices } from "@mui/icons-material";
import { ROUTE_DEFINATION } from "../../../utils/constant/route.constant";

const MenueList =[
    {
        icon:<Dashboard/>,
        value:"Dashboard",
        path:ROUTE_DEFINATION.BASE,
    },
    {
        icon:<InsertEmoticon/>,
        value:"Profile",
        path:ROUTE_DEFINATION.PROFILE,
    },
    {
        icon:<Info/>,
        value:"About",
        path:ROUTE_DEFINATION.ABOUT,
    },
    {
        icon:<MiscellaneousServices/>,
        value:"Service",
        path:ROUTE_DEFINATION.SERVICE,
    },
    {
        icon:<AddIcCall/>,
        value:"Contact",
        path:ROUTE_DEFINATION.CONTACT,
    },
    

];
  
export default MenueList