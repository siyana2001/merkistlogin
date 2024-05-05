import React from 'react';

import Home from './Home';
import Dashboardcontainer from './Dashboardcontainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Log } from './login/Log';
import LoginForm from './login/LoginForm';
import Account from './login/Account';




export default function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Log/>}/>
    <Route path="/sign" element={<LoginForm/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/log' element={<Log/>} />
    <Route path='/home' element={<Home/>}/>



    <Route path='/dashboard' element={<Dashboardcontainer/>}/>











        
   {/* <Route path="/" element={<Log/>}/>
   <Route path="/sign" element={<LoginForm/>}/>

   <Route path='/account' element={<Account/>} />
   <Route path='/log' element={<Log/>} /> */}

  </Routes>
  </BrowserRouter>
    </>
  )
}
