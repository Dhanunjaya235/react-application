import React from "react";

const myContext=React.createContext({
    isLogin:false,
    isLoggedIn:()=>{
    },
    logOut:()=>{
    }
});

export default myContext;



