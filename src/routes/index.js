import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import NotFound from "../pages/NotFound";

export const routes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/item/:productId',
        element: SingleProduct
    },
    {
        path: '*',
        element: NotFound
    }
]