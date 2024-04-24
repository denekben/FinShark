import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  );
}

export default App;
