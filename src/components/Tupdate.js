import React, { useState, useEffect } from "react";
import ANavbar from "./ANavbar";
import BNavbar from "./BNavbar";
import * as Components from './Components';
import Header from "./Header";
import THeader from "./THeader";
 
 function TUpdateComplaint() {
  //  const [users, setUser] = useState([])
    const [userId, setuserId]=useState('');
   const [Name, setName]=useState("Sahil")
    const [Phone, setPhone]=useState('987654321');
    const [Email, setEmail]=useState('syedsahil@811');
    const [TypeOfComplaint, setTypeofcomplaint]=useState('Any');
    const [IPaddress, setIPaddress]=useState('65432');
    const [State, setstates]=useState('Maharsatra');
    const [City, setcity]=useState('mumbai');
    const [Branch, setbranch]=useState('ulhasnagar');
    const [ComplaintDescription, setdescription]=useState('qa');
    const [AccountNumber, setaccount]=useState('1234');
    const[date,setdate]=useState('');
    const [Status, setstatus]=useState('');
    const [Reply, setreply]=useState('');

    function updateUser()
     {
        let item={userId,Name,Phone,Email,TypeOfComplaint,IPaddress,State,Branch,City,ComplaintDescription,AccountNumber,Status,Reply}
        // let item={userId,Status,Reply}
        // console.warn("item",item)
         fetch('https://localhost:7284/api/Complaint/Put/'+userId,
         {
             method:'PUT', 
         headers: {
             'Accept':'application/json',
             'Content-Type': 'application/json' },
             body:JSON.stringify(item)
     }).then((result)=>{
 
             result.json().then((resp)=>{
                 console.warn(resp)
             })
         })
         setuserId('')
         setstatus('')
         setreply('')
     }
     
     

  return (
         <div>
            <BNavbar/>
             <div>
                <THeader/>
             <Components.Container className='login'>
          <h1>UpdateComplaint</h1>  

          <Components.Input type="text" name="userid" value={userId} placeholder="Enter ComplaintID" onChange={(e)=>setuserId(e.target.value)}/>

          <Components.Input type="text" name="Status" value={Status} placeholder="Enter Status"onChange={(e)=>setstatus(e.target.value)}/>
        
         
          <Components.Input type="text" name="Reply" value={Reply} placeholder="Enter Reply"onChange={(e)=>setreply(e.target.value)}/>

        <Components.Button onClick={()=>updateUser()}>Submit</Components.Button>
        
           </Components.Container>
        </div>


            
             </div> 
                 
                 
            
             
            
        
        
       );
     }
     
     export default TUpdateComplaint;