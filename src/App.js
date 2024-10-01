import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import SearchedBooks from './components/SearchedBooks';
import Cart from './components/Cart';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userSlice';
import Header from './components/Header';
import Body from './components/Body';

function App() {
 

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        index: true,
        element: <MainContainer />,
      },
      {
        path: "/search",
        element: <SearchedBooks />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

export default App;