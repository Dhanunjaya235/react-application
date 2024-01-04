import React, { FC } from 'react';
import './home.css';
import { Outlet, useNavigate } from 'react-router';
interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate=useNavigate();
  const logOut=()=>{
    console.log(localStorage.getItem('username'));
    localStorage.removeItem('username');
    console.log(localStorage.getItem('username'));
    navigate('/',{replace:true});
  }
  return(
    <>
    <div className="home" data-testid="Home">
    <nav>
      <ul>
        <li><a  onClick={()=>navigate('/home/about')}>About</a></li>
        <li><a  onClick={()=>navigate('/home/profile/')}>Profile</a></li>
        <li><a >Concepts</a></li>
        <li><a >KeyConcepts</a></li>
        <li> <a onClick={()=>navigate('/home/allusers')}>AllUsers</a> </li>
        <li><a onClick={logOut}> LogOut</a> </li>
      </ul>
    </nav>
    
  </div>
  <div>
    <Outlet/>
  </div>
  </>
  )
}

export default Home;
