
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import Login from './components/Login';
import SearchedBooks from './components/SearchedBooks';
import Cart from './components/Cart';

import MainContainer from './components/MainContainer';

const appRouter=createBrowserRouter([
  {
      path:'/',
      element:<Body/>,
      children:[
        {
          path:'/',
          element:<MainContainer />
        }
        ,
        {
          path:'/search',
          element:<SearchedBooks />
        },
        {
          path:'/cart',
          element:<Cart />
        }
      ]
  },
  
])


function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={appRouter} />
    </div>
  );
}



export default App;
