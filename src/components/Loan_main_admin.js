import React, { useState, useEffect } from "react";
import ANavbar from "./ANavbar";
import Header from "./Header";
import './complaint.css';
import UpdateComplaint from "./UpdateComplaint";
 
 function Complaintbydepts() {
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
    fetch("https://localhost:7284/api/Complaint/Getdept/loan").then((result) => {
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
            <ANavbar/>
          <Header/>
        <div>
            <table border="4" style={{marginLeft:'10%',color:'black',backgroundColor:'ButtonFace',border:'solid 3px'}}>
            <tr>
                       
                <th>ComplaintId</th> 
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Type</th>
                <th>Ipaddress</th>
                <th>state</th>
                <th>City</th>
                <th>Branch</th>
                <th>Description</th>
                <th>Acc.No</th>
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
                                <td>{item.iPaddress}</td>
                                <td>{item.state}</td>
                                <td>{item.city}</td>
                                <td>{item.branch}</td>
                                <td>{item.complaintDescription}</td>
                                <td>{item.accountNumber}</td> 
                                <td>{item.datetime}</td>
                                <td>{item.status}</td>
                                <td>{item.reply}</td>
                        </tr> 
                     )
                    )}
             </table> 
        </div>  
            
             
             
    </div> 
                 
                 
            
             
            
        
        
       );
     }
     
     export default Complaintbydepts;