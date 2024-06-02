import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./componetes/Layout/Main";
import Shop from "./componetes/shop/Shop";
import Order from "./componetes/Order/Order";
import InvenTory from "./componetes/InvenTory/InvenTory";
import About from "./componetes/About/About";
import ProductAndCartLoder from "./componetes/loders/ProductAndCartLoder";
import SignUp from "./componetes/SignUp/SignUp";
import SignIn from "./componetes/SignIn/SignIn";
import Shipping from "./componetes/Shipping/Shipping";
import PrivateRoute from "./routes/PrivateRoute";

function App (){
 const router = createBrowserRouter([
 {
 path:'/',
 element:<Main></Main>,
 children: [
{
  path:'/',
  element:<Shop></Shop>
},
{
  path:'order',
  loader:ProductAndCartLoder,
  element:<Order></Order>
},
{
  path:'inventory',
  element:<PrivateRoute><InvenTory></InvenTory></PrivateRoute>
},
{
  path:'shipping',
  element:<PrivateRoute><Shipping></Shipping></PrivateRoute>
},
{
  path:'about',
  element:<About></About>
},
{
  path:'signin',
  element:<SignIn></SignIn>
},

{
  path:'signup',
  element:<SignUp></SignUp>
}
]
}
  ])
  return (
    <div>
<RouterProvider router={router}></RouterProvider>
    </div>
  )
}
export default App;

