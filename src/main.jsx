import {} from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Shop from './pages/shop/Shop.jsx';
import Pages from './pages/Pages.jsx';
import Contact from './pages/Contact.jsx';
import CategoryPage from './pages/category/CategoryPage.jsx';
import Search from './pages/search/Search.jsx';
import SingleProduct from './pages/shop/productDetails/SingleProduct.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import PaymentSuccess from './components/PaymentSuccess.jsx';
import DashboardLayout from './pages/dashboard/DashboardLayout.jsx';
import PrivateRoute from './routers/PrivateRoute.jsx';
import UserDMain from './pages/dashboard/user/dashboard/UserDMain.jsx';
import UserOrders from './pages/dashboard/user/UserOrders.jsx';
import OrderDetails from './pages/dashboard/user/OrderDetails.jsx'
import UserPayments from './pages/dashboard/user/UserPayments.jsx';
import UserReviews from './pages/dashboard/user/UserReviews.jsx';
import UserProfile from './pages/dashboard/user/UserProfile.jsx';
import AdminDMain from "./pages/dashboard/admin/dashboard/AdminDMain";
import AddProduct from "./pages/dashboard/admin/addProduct/AddProduct";
import ManageProduct from "./pages/dashboard/admin/manageProduct/ManageProduct";
import UpdateProduct from "./pages/dashboard/admin/manageProduct/UpdateProduct";
import ManageUser from "./pages/dashboard/admin/users/ManageUser";
import ManageOrders from "./pages/dashboard/admin/manageOrders/ManageOrders";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/pages', element: <Pages /> },
      { path: '/contact', element: <Contact /> },
      { path: '/categories/:categoryName', element: <CategoryPage /> },
      { path: '/search', element: <Search /> },
      { path: '/shop/:id', element: <SingleProduct /> },
      { path: '/success', element: <PaymentSuccess /> },
      { path: '/orders/:orderId', element: <OrderDetails/>},
    ],
  },

  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },

  // Dashboard routes starts here
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ), // Todo Task: user Private Route
    children: [
      // user routes
      { path: '', element: <UserDMain/> },
      { path: 'orders', element: <UserOrders/> },
      { path: 'payments', element: <UserPayments/>},
      { path: 'profile', element: <UserProfile /> },
      { path: 'reviews', element: <UserReviews /> },

      // Admin routes (strictly by Admin), Todo: Private Routes with  role field
      {
        path: 'admin',
        element: (
          <PrivateRoute role="admin">
            <AdminDMain />
          </PrivateRoute>
        ),
      },

      {
        path: 'add-product',
        element: (
          <PrivateRoute role="admin">
            <AddProduct />
          </PrivateRoute>
        ),
      },

      {
        path: 'manage-products',
        element: (
          <PrivateRoute role="admin">
            <ManageProduct />
          </PrivateRoute>
        ),
      },

      {
        path: 'update-product/:id',
        element: (
          <PrivateRoute role="admin">
            <UpdateProduct />
          </PrivateRoute>
        ),
      },

      {
        path: 'users',
        element: (
          <PrivateRoute role="admin">
            <ManageUser />
          </PrivateRoute>
        ),
      },

      {
        path: 'manage-orders',
        element: (
          <PrivateRoute role="admin">
            <ManageOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
