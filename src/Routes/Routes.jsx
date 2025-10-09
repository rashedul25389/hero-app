import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home/Home';
import Roots from '../Roots/Roots';
import ErrorPage1 from '../Pages/ErrorPages/ErrorPage1';
import Installation from '../Pages/Installation';
import AllApps from '../Pages/AllApps';
import AppDetails from '../Pages/AppDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots />,
        errorElement: <ErrorPage1 />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/allapps',
                element: <AllApps />,
            },
            {
                path: '/installation',
                element: <Installation />,
            },
            {
                path: '/appdetails',
                element: <AppDetails />,
            },
        ],
    },
]);
export default router;
