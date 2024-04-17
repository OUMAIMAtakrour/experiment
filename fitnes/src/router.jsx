import {createBrowserRouter} from "react-router-dom";
import SignUpPage from "./components/SignupPage";
import Home from "./Views/Home";
import Login from "./Views/Login";
import ProgressDetails from "./components/Progress";
const router = createBrowserRouter([

    {
        path:'/signup',
        element:<SignUpPage/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/progress/:id',
        element:<ProgressDetails/>
    },
   
 
   

])
export default router ;