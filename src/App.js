import logo from "./logo.svg";
import "./App.css";
import Login from "./Componenet/Pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import PrivateRoutes from "./Routes/PrivateRoutes";
import PublicRoutes from "./Routes/PublicRoutes";
import { useSelector } from "react-redux";
import Axios from "axios";

function App() {
  const RouteComponent = ({ token }) => {
    if (token) {
      Axios.defaults.headers.common["Authorization"] = "Token" + token;
      return <Routes isLoggedIn={true} />;
    } else {
      return <Routes isLoggedIn={false} />;
    }
  };
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log(baseUrl,"_______________Baase")
  Axios.defaults.baseURL=baseUrl;
  const { token } = useSelector((state) => state?.login);

  return (
    <>
      <Router>
        <RouteComponent token={token} />
      </Router>
      {/* <Login/> */}
    </>
  );
}

export default App;
