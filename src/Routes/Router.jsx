import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Error from "../Pages/Error/Error";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateProduct from "../Pages/MyCart/UpdateProduct";
import DetailsPage from "../Pages/Home/DetailsPage/DetailsPage";
import AddCart from "../Pages/Home/DetailsPage/AddCart";
import DetailButton from "../Pages/Home/DetailsPage/DetailButton";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/product/',
                element: <AddProduct></AddProduct>,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
               
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/cart')
            },
            {
                path: '/update/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({params}) => fetch(`http://localhost:5000/cart/${params.id}`)
            },
           
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/details/:id',
                element: <DetailsPage></DetailsPage>,
                loader: ()=> fetch('/cart.json')
            },
            {
                path: '/addCart/:id',
                element: <AddCart></AddCart>
            },
            {
                path: '/detailBtn/:id',
                element: <DetailButton></DetailButton>,
                loader: ()=> fetch('/cart.json')
            }
             
        ]
    }
]);

export default router;