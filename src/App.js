import React from 'react'
import {Route, Routes } from 'react-router-dom';
import {Home}  from './components/Home';
import  {ConnectCall}  from './components/ConnectCall';
import  {InitiateCall}  from './components/InitiateCall';



function App() {
  return (
      <Routes>
          <Route index path="/"  element={<Home/>}></Route>
          <Route path="/connectCall" element={<ConnectCall/>}></Route>
          <Route path="/initiateCall" element={<InitiateCall/>}></Route>
      </Routes>  
  )
}

export default App;
