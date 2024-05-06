import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { UserProvider } from './Context/useAuth';

function App() {


  return (
    <>
      <UserProvider>
        <Navbar/>
        <Outlet/>
        <ToastContainer/>
      </UserProvider>
    </>
  );
}

export default App;
