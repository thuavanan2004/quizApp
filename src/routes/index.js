import Home from "../pages/Home";
import Login from "../pages/Login";
import LayoutDefault from "../layout";
import Topic from "../pages/Topic";
import Answers from "../pages/Answers";
import PrivateRoutes from "../Component/PrivateRoutes";
import Register from "../pages/Register";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";
import Logout from "../pages/Logout";

export const routes = [
    {
    path: "/",
    element: <LayoutDefault/>,
    children:[ 
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "login",
            element: <Login/>
        },
        {
            path: "register",
            element: <Register/>
        },
        {
    
            element: <PrivateRoutes/>,
            children: [
                    {
                        path: "topic",
                        element: <Topic/>
                    },
                    {
                        path: "answers",
                        element: <Answers/>
                    },
                    {
                        path: "result/:id",
                        element: <Result/>
                    },
                    {
                        path: "quiz/:id",
                        element: <Quiz/>
                    },
                    {
                        path: "logout",
                        element: <Logout/>
                    }
            ]
        }
    ]
}]