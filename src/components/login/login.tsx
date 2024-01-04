import React, { FC, useRef, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router';
import myContext from '../authrization-context';
import PrivateRoute from '../protected-routes';
interface LoginProps { 
  log:()=>void
}

const Login: FC<LoginProps> = (props) => {
  const [isloggedIn,setIsLoggedIn]=useState(false);
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const tryLogin = (e:any) => {
    console.log(usernameRef.current?.value)
    console.log(passwordRef.current?.value)
    if (e.target.username.value === "cognine" && e.target.password.value === "12345") {
      window.alert("Login Successfull");
      props.log();
      navigate('/home',{replace:true});
      setIsLoggedIn(true)
    }
    else {
      window.alert("Invalid Credentials")
      setIsLoggedIn(false)
    }
  }
  return (
    <div className="login" data-testid="Login">
      <div className='heading'>
        <h1 >Login Here</h1>
        
      <form onSubmit={tryLogin}>
        <p> <input type="text" placeholder='Enter your UserName' name='username'></input> </p>
        <p> <input type="password" placeholder='Enter your password' name='password'></input> </p>
        <button type='submit'>Login</button>
      </form>
      </div>
      
    </div>
  )
}

export default Login;
