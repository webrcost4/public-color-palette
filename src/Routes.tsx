import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from './app/App';
import Themes from './app/Themes';
import NotFound from './app/Errors/404';
import Navigation from './Components/Navigation';



export default function Routes() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
        },
        {
            path: '/themes',
            element: <Themes />
        },
        {
            path: '/*',
            element: <NotFound />
        }
    ]);

    return (
        <>
            <Navigation />
            <RouterProvider router={router} />
        </>
    );
}
