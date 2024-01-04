import React, { FC, useEffect, useState } from 'react';
import './all-users.css';
import axios from 'axios'
import { resolve } from 'path';
interface AllUsersProps {}

const AllUsers: FC<AllUsersProps> = () =>{
  let user1={
    "username": "dhanu",
    "email": "dhanu@gmail.com",
    "password": "Dhanu123@",
    "confirmpassword": "Dhanu123@",
    "id": 8
  }
  const [allUser,setUser]=useState([]);
  let allUsers:any;
  useEffect(()=>{
        axios.get('http://localhost:3000/registeredUsers/').then(resolve=>{
          allUsers=resolve.data;
          setUser(allUsers)
          console.log(allUsers);
        })
        .catch(error=>console.log(error))
  },[])
  // let usersList=[];
  // allUsers.array.forEach((element:{}) => {
  //   let u:{}=element;
  //   usersList.push(Object.entries(element).map(([key, value]) => (<p key={key}>
  //     {key}: {value}</p>
  //     )))
  // });
  return(
    <div className="all-users" data-testid="AllUsers">
      <h1>All the registered users</h1>
    {
      allUser.map((user:any)=>
      <div className='userlist'>
        <p><span>UserName : </span>{user.username}</p>
        <p><span>User-Email : </span>{user.email}</p>
      </div>)
      //  Object.entries(allUser).map(([key, value]) => (<p key={key}>
      //    {key}: {value}</p>
      //    ))
    }
  </div>
  )
}

export default AllUsers;
