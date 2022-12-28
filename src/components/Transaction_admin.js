import React, { useState, useEffect } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import './complaint.css'
import THeader from "./THeader";
import BNavbar from "./BNavbar";
// import UpdateComplaint from "./UpdateComplaint";
 
 function Complaintbydept_trans() {
    const [users, setUser] = useState([])
    const [userId, setuserId]=useState('');
    const [Name, setName]=useState('');
    const [Phone, setPhone]=useState('');
    const [Email, setEmail]=useState('');
    const [TypeOfComplaint, setTypeofcomplaint]=useState('');
    const [IPaddress, setIPaddress]=useState('');
    const [State, setstates]=useState('');
    const [City, setcity]=useState('');
    const [Branch, setbranch]=useState('');
    const [ComplaintDescription, setdescription]=useState('');
    const [AccountNumber, setaccount]=useState('');
    const [Status, setstatus]=useState('');

    const [Reply, setreply]=useState('');


 
 
   //Get Method
   useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://localhost:7284/api/Complaint/Getdept/Transactions").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
         setuserId(resp[0].userId)
         setName(resp[0].Name)

         setUser(resp)
         setPhone(resp[0].Phone)
         setEmail(resp[0].emailAddress)
         setTypeofcomplaint(resp[0].TypeOfComplaint)
         setIPaddress(resp[0].IPaddress)
         setstates(resp[0].State)
         setcity(resp[0].City)
         setbranch(resp[0].Branch)
         setdescription(resp[0].ComplaintDescription)
         setaccount(resp[0].AccountNumber)
         setstatus(resp[0].Status)
         setreply(resp[0].Reply)
    
        })
    })
  }
  
  return (
         <div>
          <BNavbar/>
          <THeader/>
          <div className="text"> 
            <h1 >Welcome To Transactions Complaint Department</h1>   
            </div> 
            </div>

       );
     }
     
     export default Complaintbydept_trans;