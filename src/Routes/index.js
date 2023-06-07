import { useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";

// project import
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

// ==================================|| ROUTING RENDER ||================================== //

export default function Routes({isLoggedIn}) {
  const [currentRoutes, setCurrentRoutes] = useState([]);
  useEffect(() => {
    if (isLoggedIn) {
      setCurrentRoutes([PrivateRoutes]);
    } else {
      setCurrentRoutes([PublicRoutes]);
    } 
  }, [isLoggedIn]);

  return useRoutes(currentRoutes);
}
