import { ROUTE_DEFINATION } from "../utils/constant/route.constant";
import { Navigate } from "react-router-dom";
import MainLayout from "../Layout";
import Home from "../Componenet/Pages/Home";
import Profile from "../Componenet/Pages/Profile";
import About from "../Componenet/Pages/About";
import Contact from "../Componenet/Pages/Contact";
import Services from "../Componenet/Pages/Services";
import AddCategories from "../Componenet/Pages/admin/Add_Categories";
import AddProduct from "../Componenet/Pages/admin/Add_Product";

// const Home =Loadable({
// loader:()=> import("../Componenet/Pages/Home"),
// });
const AddCategoriesRoutes = {
  path: ROUTE_DEFINATION.ADD_CATEGORIES,
  title: ROUTE_DEFINATION.ADD_CATEGORIES,
  children: [
    {
      path: ROUTE_DEFINATION.ADD_CATEGORIES,
      title: ROUTE_DEFINATION.ADD_CATEGORIES,
      element: <AddCategories />,
    },
  ],
};
const AddProductRoutes = {
  path: ROUTE_DEFINATION.ADD_PRODUCT,
  title: ROUTE_DEFINATION.ADD_PRODUCT,
  children: [
    {
      path: ROUTE_DEFINATION.ADD_PRODUCT,
      title: ROUTE_DEFINATION.ADD_PRODUCT,
      element: <AddProduct />,
    },
  ],
};
const AboutRoutes = {
  path: ROUTE_DEFINATION.ABOUT,
  title: ROUTE_DEFINATION.ABOUT,
  children: [
    {
      path: ROUTE_DEFINATION.ABOUT,
      title: ROUTE_DEFINATION.ABOUT,
      element: <About />,
    },
  ],
};
const ServiesRoutes = {
  path: ROUTE_DEFINATION.SERVICE,
  title: ROUTE_DEFINATION.SERVICE,
  children: [
    {
      path: ROUTE_DEFINATION.SERVICE,
      title: ROUTE_DEFINATION.SERVICE,
      element: <Services />,
    },
  ],
};

const ContactRoutes = {
  path: ROUTE_DEFINATION.CONTACT,
  title: ROUTE_DEFINATION.CONTACT,
  children: [
    {
      path: ROUTE_DEFINATION.CONTACT,
      title: ROUTE_DEFINATION.CONTACT,
      element: <Contact />,
    },
  ],
};

const roleBasedRoutes = (role) => {
  const PrivateRoutes = {
    element: <MainLayout />,
    children: [
      {
        path: ROUTE_DEFINATION.BASE,
        title: ROUTE_DEFINATION.BASE,
        element: <Home />,
      },
      {
        path: ROUTE_DEFINATION.PROFILE,
        title: ROUTE_DEFINATION.PROFILE,
        element: <Profile />,
      },

      {
        path: "*",
        title: "",
        element: <Navigate to={ROUTE_DEFINATION.HOME} />,
      },
    ],
  };
  switch (role) {
    case "CUSTOMER":
      PrivateRoutes.children.push(AboutRoutes, ContactRoutes, ServiesRoutes);
      break;
    case "ADMIN":
      PrivateRoutes.children.push(AddProductRoutes, AddCategoriesRoutes);
      break;
  }
  return PrivateRoutes;
};
export default roleBasedRoutes;
