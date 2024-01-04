import  { FC, useEffect, useState } from 'react';
import './login-register.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

interface LoginRegisterProps {
  
}

const LoginRegister: FC<LoginRegisterProps> = (props) => {

  const userData={
    username:'',
    email:'',
    password:'',
    confirmpassword:''
  }
  const errorsData={
    usernameError:'',
    emailError:'',
    passwordError:'',
    confirmpasswordError:''
  }
  const [isLogin, setIslogin] = useState(false);
  const [formdata,setFormData]=useState(userData);
  const[erros,setErros]=useState(errorsData);
  const setValues=(e:any)=>{
    const {name,value}=e.target;
    setFormData({...formdata,[name]:value});
  }
  let allUsers:any;

  useEffect(()=>{
      axios.get('http://localhost:3000/registeredUsers').then(resolve=>{
        console.log(resolve.data)
        allUsers=resolve.data;
        console.log(allUsers)
      })
      .catch(error=>console.log(error))
  })
  const onSubmission=(e:any)=>{
    e.preventDefault();
    let uservalid=false,passvalid=false,conpassvalid=false;
    console.log(formdata);
    let username:string=formdata.username;
    let email=formdata.email;
    let password:string=formdata.password;
    let confirmpassword:string=formdata.confirmpassword;
    let n = username.charAt(0);
    let nm = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let sp = username.match(/\s/g);
    let sc = username.match(/[^A-z ^0-9]/g);
    let l = (/[A-Z]/g).test(password);
    let s = (/[a-z]/g).test(password);
    let d = (/[0-9]/g).test(password);
    let space = password.match(/\s/g);
    let spchars = password.match(/[^A-z ^0-9]/g);
    if(nm.includes(n) || sp!==null || sc !== null ){
      errorsData.usernameError="Username cannot start with number and can not contain spaces and special characters";
      
    }
    else{
      errorsData.usernameError="";
      uservalid=true
    }
    if(l && s && d && space == null && spchars != null && password.length >= 8){
      errorsData.passwordError="";
      passvalid=true
    }
    else{
      errorsData.passwordError="Password must contain a Capital and small letter,number,special character";
      
    }
    if(password !== confirmpassword){
        errorsData.confirmpasswordError="Both passwords are not matching";
        
    }
    else{
      errorsData.confirmpasswordError="";
      conpassvalid=true
    }
    for(let user of allUsers){
      if(username === user.username){
        errorsData.usernameError+="User Already Exists";
        uservalid=false;
      }
    }
    setErros(errorsData);
   if(errorsData.usernameError==='' && errorsData.passwordError === '' && errorsData.confirmpasswordError===''){
    setFormData({...formdata,username:"",email:'',password:'',confirmpassword:''});
   }
   if(uservalid && passvalid && conpassvalid){
    axios.post(' http://localhost:3000/registeredUsers',formdata)
    .then(resolve=>{
     console.log(resolve.data)
    })
    .catch(error=>{
     console.log(error)
    })
   }
  }
  const navigate = useNavigate();
  let usernameValid = false;
  let passwordValid = false;
  const usernameSpan = useRef<HTMLSpanElement>(null);
  const passwordSpan = useRef<HTMLSpanElement>(null);
  const confirmPasswordSpan=useRef<HTMLSpanElement>(null);
  const loginPageRef = useRef<HTMLFormElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const loginTitleRef=useRef<HTMLDivElement>(null);
  const signupTitleRef=useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef=useRef<HTMLInputElement>(null);
  const loginPage = () => {
    if (loginPageRef.current && loginTitleRef.current) {
      loginPageRef.current.style.marginLeft = "0%";
      loginTitleRef.current.style.marginLeft="0%"
    }
  }

  const signupPage = () => {
    if (loginPageRef.current && loginTitleRef.current) {
      loginPageRef.current.style.marginLeft = "-50%";
      loginTitleRef.current.style.marginLeft="-50%"
    }
  }
  const userNameValidation = () => {
    let name: string = usernameRef.current?.value!;
    let firstchar = name.charAt(0);
    let nm = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let sp = name.match(/\s/g);
    let sc = name.match(/[^A-z ^0-9]/g);
    if (nm.includes(firstchar)) {
      if (usernameSpan.current) {
        usernameSpan.current.innerHTML = "Username Don't start with numbers"
      }
      usernameValid=false
    }
    else if (sp !== null) {
      if (usernameSpan.current) {
        usernameSpan.current.innerHTML = "Username Dont have spaces in it"
      }
      usernameValid=false
    }
    else if (sc !== null) {
      if (usernameSpan.current) {
        usernameSpan.current.innerHTML = "Username Dont have special characters in it in it"
      }
      usernameValid=true;
    }
    else if (sc === null) {
      if (usernameSpan.current) {
        usernameSpan.current.innerHTML = ""
      }
      usernameValid = true;

    }
    else if (sp === null) {
      if (usernameSpan.current) {
        usernameSpan.current.innerHTML = ""
      }
      usernameValid = true
    }
    else {
      console.log("h")
      usernameValid = true
    }
  }

  const passwordValidattion = () => {
    let password: string = passwordRef.current?.value!;
    let l = (/[A-Z]/g).test(password);
    let s = (/[a-z]/g).test(password);
    let d = (/[0-9]/g).test(password);
    let sp = password.match(/\s/g);
    let sc = password.match(/[^A-z ^0-9]/g);
    if (l && s && d && sp == null && sc != null && password.length >= 8) {
      if(passwordSpan.current){
        passwordSpan.current.innerHTML="Password matched requirement";
        passwordValid=true
      }
    }
  else {
    if(passwordSpan.current){
      passwordSpan.current.innerHTML="Password must contain a Capital and small letter,number,special character";
    }
  }
  }
  const tryLogin = (e: any) => {
    e.preventDefault();
    let isRegistered=false;
    if(usernameValid && passwordValid){
    for(let user of allUsers){
      
        if (usernameRef.current?.value! === user.username) {
          if(passwordRef.current?.value! === user.password){
          window.alert("Login Successfull");
          isRegistered=true;
          setIslogin(true);
          localStorage.setItem('username',usernameRef.current?.value!);
          navigate('/home', { replace: true });
        }
          else {
            window.alert("Invalid Password");
            isRegistered=true
          }
      }
      
    }
    if(!isRegistered){
      window.alert("User is not registered Yet... Sign Up now to Login")
    }
  }
  }
  function togglePasswordVisibility() {

    if(passwordRef.current){
      if(passwordRef.current.type==="password"){
        passwordRef.current.type="text";
      }
      else{
        passwordRef.current.type="password"
      }
    }
  }
  return (<div className="wrapper">
    <div className="title-text">
      <div className="title login" ref={loginTitleRef} >
        Login Form
      </div>
      <div className="title signup" >
        Signup Form
      </div>
    </div>
    <div className="form-container">
      <div className="slide-controls">
        <input type="radio" name="slide" id="login" defaultChecked />
        <input type="radio" name="slide" id="signup" />
        <label htmlFor="login" className="slide login" onClick={loginPage}>Login</label>
        <label htmlFor="signup" className="slide signup" onClick={signupPage}>Signup</label>
        <div className="slider-tab"></div>
      </div>
      <div className="form-inner">
        <form onSubmit={tryLogin} className="login" ref={loginPageRef}>
          <div className="field">
            <input type="text" placeholder="Username"  ref={usernameRef} onChange={userNameValidation} required />
          </div>
          <span ref={usernameSpan}></span>
          <div className="field">
            <input type="password" placeholder="Password" ref={passwordRef} onChange={passwordValidattion} required />
          </div>
          <input type="checkbox" onClick={togglePasswordVisibility}/>ShowPassword<br></br>
          <span ref={passwordSpan}></span>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login" />
          </div>
        </form>
        <form onSubmit={onSubmission} className="signup">
          <div className='field'>
            <input type="text" placeholder='Enter Your Username' value={formdata.username} name='username' onChange={(e)=>setValues(e)} required></input>
          </div>
          {erros.usernameError && <span>{erros.usernameError}</span>}
          <div className="field">
            <input type="email" placeholder="Email Address" value={formdata.email} name='email' onChange={(e)=>setValues(e)} required />
          </div>
          
          <div className="field">
            <input type="password" placeholder="Password" value={formdata.password} name='password' onChange={(e)=>setValues(e)}  required />
          </div>
          {erros.passwordError && <span>{erros.passwordError}</span>}
          <div className="field">
            <input type="password" placeholder="Confirm password" value={formdata.confirmpassword} name='confirmpassword' onChange={(e)=>setValues(e)} required />
          </div>
          {erros.confirmpasswordError && <span>{erros.confirmpasswordError}</span>}
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Signup" />
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
export default LoginRegister;
