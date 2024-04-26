import Login from "./pages/login/login";
import "./App.scss";
import Register from "./pages/register/register";
import NavBar from "./components/navBar/navBar";

import { createBrowserRouter, Navigate, Outlet, Route, RouterProvider } from "react-router-dom";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/rightBar";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";




function App() {

    /* currentUser is a temporary variale we will be get it from databases   */
  const currentUser = true; 

  const ProtectedRoute = ({children}) => {
    if (!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }


  const Layout = () => {
    return (
      <div className="theme">
        <NavBar />
        <div style={{display:"flex"}}>
            <LeftBar/>
            <div style={{flex:6}}>
                  <Outlet/>
            </div>
            <RightBar/>
        </div>


      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path:"/",
      element: 
              <ProtectedRoute>
                    <Layout/>
              </ProtectedRoute>,

              children:[
                        {
                            path: "/Home",
                            element: <Home />
                        },
                        {
                            path: "/profile/:id",
                            element : <Profile />

                        },
              ]
      
    },
    {
      path: "/login",
      element: <Login />,
    },
  
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>

);
}

export default App;
