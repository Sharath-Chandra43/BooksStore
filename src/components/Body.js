import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector to check user authentication
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  
  const navigate = useNavigate();

  


  const dispatch = useDispatch();
 

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid, email, displayName }));
      navigate('/'); // Redirect to the main content if user is logged in
    } else {
      // User is signed out
      dispatch(removeUser());
      navigate('/login');
    }
  });
}, []);

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;