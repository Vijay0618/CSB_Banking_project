import React, { useState } from 'react';
import { Logo } from './Logo';
import Navbar from './Navbar';
import { Notif } from './Notif';
import swal from 'sweetalert';

export const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
   
    function 
    
    _details()
    {
        console.log({username,password});
        let data={username,password}
        
        
        fetch('https://localhost:7298/api/Registers/Login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((response) => response.json())
        .then((result) => {
          if(result.message === 'Login Successfully'){
            swal("Welcome", "To Csb", "success");
			      window.location.href='/getall'
            sessionStorage.setItem('LoginData',username);
			// this.props.history.push("/Dashboard");
           //nav("/Dashboard");
            // window.location.href="/Dashboard
		  }
      else if(username==="Admin" && password==="admin"){
        window.location.href='/getall'
        swal("Welcome", "To Main Dashboard", "success");
      }
      else if(username==="Loan" && password==="admin@1"){
        window.location.href='/getbyloan'
        swal("Welcome", "To Loan Dashboard", "success");
        }
        else if(username==="Transaction" && password==="admin@2"){
          window.location.href='/getbyTrans'
          swal("Welcome", "To Transaction Dashboard", "success");
          }
          else if(username==="Payment" && password==="admin@3"){
            window.location.href='/getbypay'
            swal("Welcome", "To Payment Dashboard", "success");
            }
          else{
            swal("Oops", "Bad credentials", "warning");
          }
        });
    }
    const onSubmitHandler = (event) => {
      event.preventDefault();
      props.loginHandler(username, password);
    }
  
    const onChangeUsername = (event) => {
      setUsername(event.target.value);
    }
  
    const onChangePassword = (event) => {
      setPassword(event.target.value);
    }
  
    return (
      <div><Navbar/>
      <div className="login-page">
        <div id="login">
          <Logo />
          <Notif message={props.notif.message} style={props.notif.style} />
          <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" autoComplete="off" onChange={onChangeUsername}  value={username} type="text" />
            <label htmlFor="password">Password</label>
            <input id="password" autoComplete="off" onChange={onChangePassword} value={password} type="password" />
            <button type="submit" className="btn" onClick={()=>_details(true)}>Login</button>
          </form>
        </div>
      </div>
      </div>
    )
}
