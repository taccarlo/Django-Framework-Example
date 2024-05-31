import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './views/Home/Home';
import ListPage from './views/List/List';
import './App.css';
const router = createBrowserRouter([
  {path:'/', element:<HomePage/>},
  {path:'/list', element:<ListPage/>}
]);

export default function App() {
  return <>
  <nav className="navbar navbar-light">
    <div className="container">
      <RouterProvider router={router} />
      </div>
      </nav></>;
}
