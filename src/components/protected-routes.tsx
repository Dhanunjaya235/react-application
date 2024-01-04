import  React, { Component, useContext } from  "react";
import {  Navigate } from  "react-router-dom";
import { ReactNode } from "react";
import useAuthenticationHook from "./authentication-Hook";
interface PrivateRouteProps{
        component: ReactNode,
        
}
const  PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
        let condition=useAuthenticationHook();
        console.log(condition)
        let token=localStorage.getItem('username');
        console.log(token);
        console.log(condition && token)
    return  condition && token  ? (<>{props.component}</>) : 
        (<Navigate  to="/"  />);
};
export  default  PrivateRoute;