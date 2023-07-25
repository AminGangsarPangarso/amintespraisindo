import BottomNav from './Layout/bottomNav.jsx'

import Login from "./component/Login";
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
    {
      path: "login",
      element: <Login />,
    },
    {
      path:'/beranda',
      element:<BottomNav/>,
      
    }
    
  ]);
  export default  router