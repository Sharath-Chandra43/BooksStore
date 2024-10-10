
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import SearchedBooks from './components/SearchedBooks';
import Cart from './components/Cart';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Books from './components/Books';
import ErrorPage from './components/ErrorPage';

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
      {
        path: "/books/:bookid",
        element: <Books />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
    errorElement:<ErrorPage />
  },
  {
    path: "/login",
    element: <Login />,
  },
  
]);

export default App;