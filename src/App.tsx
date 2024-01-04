import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { RouterGuard } from 'react-router-guard';
import { GuardedRoute,GuardConfigProvider,GuardedRoutes } from 'react-router-guarded-routes';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import About from './components/about/about';
import PrivateRoute from './components/protected-routes';
import LoginRegister from './components/login-register/login-register';
import Notfound from './components/notfound/notfound';
import AllUsers from './components/all-users/all-users';
import useAuthenticationHook from './components/authentication-Hook';
function App() {
  let [isAuthenticated]=useAuthenticationHook();
  return (
    <div className="App">
        <Routes>
      <Route path="/" element={<LoginRegister/>}/>
      <Route path="/home" element={<PrivateRoute component={<Home/>}  ></PrivateRoute>} >
        <Route path='profile' element={<Profile/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='allusers' element={<AllUsers/>}></Route>
      </Route>
      <Route path='*' element={<Notfound/>}></Route>
      </Routes>
       
    </div>

  );
//   <GuardConfigProvider>
//   <GuardedRoutes>
//     <GuardedRoute path='/' element={<LoginRegister log={loginSuccess}/>}
//       ></GuardedRoute>
//     <GuardedRoute path='/home' element={<Home/>} meta={{requiresAuth:true}} canActivate={()=>isLogin}>

//     </GuardedRoute>
//   </GuardedRoutes>
// </GuardConfigProvider>

}

export default App;
