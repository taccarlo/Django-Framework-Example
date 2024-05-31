import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './views/Home/Home';
import ListPage from './views/List/List';
import RootLayout from './views/Root/Root';
import './App.css';
const router = createBrowserRouter([

  {
      path:'/',
      element:<RootLayout />,
      errorElement:<ErrorPage />,
      children:[
        {path: '/', element:<HomePage/>},
        {path: '/list',element:<ListPage/>},
        {path: '/list/:dateFrom', element:<ListPage/>}
      ]
   }
]);


export default function App() {
  return <RouterProvider router={router}/>
}

function ErrorPage() {
  return <h2>Error Page</h2>;
}