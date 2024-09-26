

import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import SearchedBooks from './components/SearchedBooks';
import Cart from './components/Cart';
import Header from './components/Header';

const appRouter = createBrowserRouter([
  {
    
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cart",
    element:<Cart/> ,
  },

  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/",
        element: <SearchedBooks/>,
      },
      // Add other nested routes here
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}



export default App;
