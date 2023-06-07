import logo from './logo.svg';
import './App.css';
import Login from './Componenet/Pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import PrivateRoutes from './Routes/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';

function App() {

  const RouteComponent =({LoggedIn})=>{
    if(LoggedIn){
      return <Routes  isLoggedIn={true}/>
    }
    else{
return <Routes  isLoggedIn={false}/>
    }
  }
  return (
    <>
    <Router>
  <RouteComponent LoggedIn={false}/>
    </Router>
{/* <Login/> */}
    </>
  );
}

export default App;
