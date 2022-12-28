// import { getByTestId } from "@testing-library/react";
import React, { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';
import SHeader from "./SHeader";
import SNavbar from "./SNavbar";
// import Logname from "./loginname";
 
 function DisplayAllComplain() {
    const [users, setUser] = useState([])
    const [userId, setuserId]=useState('');
   const [Name, setName]=useState('')
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
    fetch("https://localhost:7284/api/Complaint/Get").then((result) => {
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
         setdate(resp[0].datetime)
         setstatus(resp[0].Status)
         setreply(resp[0].Reply)
        })
    })
  }
  return (
    <div className='Contain'>
      <SNavbar/>
    <div className='Cont'>
    <div class='row'>
      <div class='col-2'>
      <SHeader/>
      </div>
      <div class='col-3'>
    <div >
        <br></br>
      <h1 style={{ textAlign: 'center' }}>Welcome To Complaint Department of CSB</h1>
      <table border="4" style={{marginLeft:'10%',color:'black',backgroundColor:'ButtonFace',border:'solid 3px'}}>
        <tbody>
      <tr >   
      <th scope='col'>Complain Id</th>       
          <th scope='col'>Name</th>
          <th scope='col'>Contact</th>
          <th scope='col'>Gmail Id</th>
          <th scope='col'>Account_No</th>
          <th scope='col'>Ipaddress</th>
          <th scope='col'>Complain Type</th>
          <th scope='col'>Complain Desc.</th>
          <th scope='col'>Status</th>
          <th scope='col'>DateTime</th>
          
                </tr>
                {
                users.map((item)=>
                
                    <tr > 
                    <th  scope='row'>{item.userId}</th>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.accountNumber}</td> 
                    <td>{item.iPaddress}</td>
                    {/* <td>{item.state}-{item.city}-{item.branch}</td> */}
                    <td>{item.typeOfComplaint}</td>
                    <td>{item.complaintDescription}</td>
                    <td>{item.status}</td>                   
                    <td>{item.datetime}</td>
                    </tr>
                    )
                }
    
      </tbody>
    </table>
  </div>
  </div>
  </div>
  </div></div>
);
}
         
 export default DisplayAllComplain;