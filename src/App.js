
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import Support from './components/Support/Support';
import MainLayout from './Layout/MainLayout/MainLayout';
import { productsAndCart } from './utilities/productsAndCart';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          loader: productsAndCart,
          element: <Shop></Shop>
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>
        },
        {
          path:"/orders",
          loader: productsAndCart,
          element: <Orders></Orders>
        },
        {
          path: "/review",
          element: <Review></Review>
        },
        {
          path: "/support",
          element: <Support></Support>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
