import React, { useState } from 'react';
import { firebase, auth } from './firebase';
import * as Components from './Components';
//import Navbar from './Navbar';
import UINavbar from './UINavbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import swal from 'sweetalert';


const Trylog = () => {
	// Inputs
	const [Phone,setPhone]=useState('');
	const [otp, setotp] = useState('');
	const [show, setshow] = useState(false);
	const [final, setfinal] = useState('');
    
    const [Name,setName]=useState("");
    const [Age,setAge]=useState("22");
    const [DOB,setDob]=useState("2000-01-01");
    const [Adhar,setAdhar]=useState("1111");
    const [Email,setEmail]=useState("vijay@gmail.com");
    const [Password,setPassword]=useState("");

	sessionStorage.setItem('LoginData',Name)
	window.name=Name;
	function click(){
	
		Login_details();
	}
	function
  Login_details()
    {
        console.log({Name,Age,DOB,Adhar,Phone,Email,Password});
        let data={Name,Age,DOB,Adhar,Phone,Email,Password}

        fetch('https://localhost:7180/api/Registers/Login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((response) => response.json())
        .then((result) => {
          if(result.message === 'Login Successfully'){
            swal("Successfull", "Welcome to CSB", "success");
			signin();
			// this.props.history.push("/Dashboard");
           //nav("/Dashboard");
            // window.location.href="/Dashboard"
          }
		  else if(result.message === 'Check Number'){
			swal("Oops", "Cheack Number", "warning");
		  }
          else {
			swal("Oops", "Wrong Credentials", "warning");
           }
        });
    }
	// Sent OTP
	const signin = () => {

		if (Phone === "" || Phone.length < 10) return;

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(Phone, verify).then((result) => {
			setfinal(result);
			swal("OTP", "Otp send to +91xxxxxxxx", "success");
			setshow(true);
		})
			.catch((err) => {
				swal("Oops", "Somthing is wrong", "warning");
				window.location.reload()
			});
	}
	// Validate OTP
	const ValidateOtp = () => {
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
            window.location.href='/home'
		}).catch((err) => {
			swal("Oops", "Wrong Otp", "warning");
		})
	}
	return (
		
		<div><UINavbar/>	
		<Components.Container className='login'>
		<div>
		 	
		<div>
			<center>
			
				<h1>Login</h1>  
        <p><label></label></p>
        <Components.Input type="text" name="Name" value={Name} placeholder="Enter Name:" onChange={(e)=>setName(e.target.value)}/>
        <p><label></label></p>
        <Components.Input type="password" name="Password" value={Password} placeholder="Enter Password:"onChange={(e)=>setPassword(e.target.value)}/>
         
		<p><label></label></p>
        <Components.Input type="text" name="number" value={Phone} placeholder="Enter Ph.No:"onChange={(e)=>setPhone(e.target.value)}/>

		<div style={{ display: !show ? "block" : "none" }}>
					
					<br /><br />
					<div id="recaptcha-container"></div>
					
				</div>
				<div style={{ display: show ? "block" : "none" }}>
					<input type="text" placeholder={"Enter your OTP"}
						onChange={(e) => { setotp(e.target.value) }}></input>
					<br /><br />
					<Components.Button onClick={ValidateOtp}>Verify</Components.Button>
				</div>

        <br></br>
          <Components.Button onClick={()=>Login_details()}>Sign In</Components.Button>
		  
      

			</center>

		</div>
		</div>
		</Components.Container>
		
		<Footer/>
		</div>
		
		
	);
}

export default Trylog;