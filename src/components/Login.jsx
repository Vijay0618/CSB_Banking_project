 //import React from "react";
 //import ReactDOM from 'react-dom';
 import * as Components from './Components';
 import React,{useState} from 'react'
 import { firebase, auth } from './firebase';
 import "./styles.css";
import UINavbar from './UINavbar';
import { motion } from 'framer-motion';
import Footer from './Footer';
import swal from 'sweetalert';
 
// import { Link } from 'react-router-dom';
// import { BsWindow } from 'react-icons/bs';
 //import React, { Component } from 'react';
 


 function
  App(){

    const [Name,setName]=useState("");
    const [Age,setAge]=useState("");
    const [DOB,setDob]=useState("");
    const [Adhar,setAdhar]=useState("");
    const [Phone,setPhone]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");


    function 
    
    Save_details()
    {
        console.log({Name,Age,DOB,Adhar,Phone,Email,Password});
        let data={Name,Age,DOB,Adhar,Phone,Email,Password}
        
        fetch('https://localhost:7180/api/Registers',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
            swal("Successfull", "Thanks for register with CSB..!", "success");
        });
    }
  
    const [signIn, toggle] = React.useState(true);
     
      return(
        <div>
        <motion.div initial="hidden" animate="show">
        <div><UINavbar/>
          <Components.Container className='login'>
              
                  <Components.Form>
                      <Components.Title>Register</Components.Title>
                      <Components.Input type='text' value={Name} name='Name' onChange={(e)=>{setName(e.target.value)}} placeholder='Name' required/>
                      <Components.Input type='number' value={Age} name='Age' onChange={(e)=>{setAge(e.target.value)}}  placeholder='Age' required/>
                      <Components.Input type='date' value={DOB} name='DOB' onChange={(e)=>{setDob(e.target.value)}}  placeholder='DOB' required/>
                      <Components.Input type='text' value={Adhar} name='Adhar' onChange={(e)=>{setAdhar(e.target.value)}} placeholder='Adhar No.' required/>
                      <Components.Input type='text' value={Phone} name='Phone' onChange={(e)=>{setPhone(e.target.value)}} placeholder='Ph.No:(+91)' required/>
                      <Components.Input type='email' value={Email} name='Email' onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Email' required/>
                      <Components.Input type='password' value={Password} name='Password' onChange={(e)=>{setPassword(e.target.value)}}  placeholder='password'  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                      <Components.Button onClick={()=>Save_details(true)} >Sign Up</Components.Button>
                  </Components.Form>
              
              
          </Components.Container>
          </div>
          
          </motion.div>
          
          </div>
      )
 }
 export default App;