import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import UHeader from "./UHeader";
 
 function Complaintbyname() {
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
    const[datetime,setdate]=useState('');
    const [Status, setstatus]=useState('');
    const [Reply, setreply]=useState('');


 
 
   //Get Method
   useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("https://localhost:7284/api/Complaint/Getname/"+window.name).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
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
         setdate(resp[0].date)
         setstatus(resp[0].Status)
         setreply(resp[0].Reply)
    
        })
    })
  }
  const mystyle ={
    border: 'solid black 3px',
    float: "right",
    color: "white"
  }
  return (
    <div>
        <Navbar/>
         <div>
            <UHeader/>
           <div>
                <table  border="4" style={{marginLeft:'25%',color:'black',backgroundColor:'ButtonFace',border:'solid 3px'}}>
                <tr>
                       
                <th>ComplaintId</th> 
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Reply</th>
     
                     </tr>

                     {users.map((item)=>(
                         <tr>
                                <td>{item.userId}</td> 
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.typeOfComplaint}</td>
                                <td>{item.datetime}</td>
                                <td>{item.status}</td>
                                <td>{item.reply}</td>
                                

                             {/* <button className="btn btn-danger" onClick={()=>{FunRemove(item.userId)}}>Detete</button>
                             <button className="btn btn-danger" onClick={()=>{selectUser(item.userId)}}>Update</button> */}
     
                         </tr>
                         
                     )
                     )}
                    
             </table> </div>  
            
             
             </div> 
             </div>    
        
       );
     }
     
     export default Complaintbyname;