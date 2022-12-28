import React,{useState} from "react";
import {useEffect} from 'react'
import axios from 'axios'
import * as Components from './Components';
import { InputGroup, FormControl, Form } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import swal from 'sweetalert'

function Complaint() {
    const [userId, setuserId]=useState(Math.floor(Math.random() * 1000000000) + 1);
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
    const date = new Date();
    const [ip, setIP] = useState('');
    const [datetime, setDateTime]=useState(date);
    

    
    
    function
    Complaint_details()
    {

        console.log({userId,Name,Phone,Email,TypeOfComplaint,IPaddress,State,Branch,City,ComplaintDescription,datetime,AccountNumber,Status,Reply});
        let data={userId,Name,Phone,Email,TypeOfComplaint,IPaddress,State,Branch,City,ComplaintDescription,datetime,AccountNumber,Status,Reply}
        
        fetch('https://localhost:7284/api/Complaint/Post',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
            swal("Successfull", "You will get Update soon..!", "success");
        });
        setuserId('')
        setName('')
        setPhone('')
        setEmail('')
        setIPaddress('')
        setTypeofcomplaint('')
        setstates('')
        setcity('')
        setbranch('')
        setDateTime('')
        setdescription('')
        setaccount('')
        setstatus('')
        setreply('')

    }

    
// function GetIP() {
//     //creating IP state
//     const [ip, setIP] = useState('');
  
    //creating function to load ip address from the API
    const getData = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      console.log(res.data);
      setIP(res.data.IPv4)
    }
    
    useEffect( () => {
      //passing getData method to the lifecycle method
      getData()
  
    }, [])
    

    return(
         
          <div><Navbar/>
          <Components.Container className='login'>
            <Components.Form>
           <h1>Complaint-Form</h1>  
           
          <div type="number" name="userid" value={userId} placeholder="Enter ComplaintId" onChange={(e)=>setuserId(e.target.value)} />
          
          <Components.Input type="text" name="Name" value={Name} placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} />
          
          <Components.Input type="text" name="Number" value={Phone} placeholder="Enter Number" onChange={(e)=>setPhone(e.target.value)} />
          
          <Components.Input type="email" name="Email" value={Email} placeholder="Enter EmailAddress" onChange={(e)=>setEmail(e.target.value)} />
          
          <Components.Input type="text" name="Ipaddress" value={ip} placeholder="Enter Ipaddress" onChange={(e)=>setIPaddress(e.target.value)} />

          <div type="text" name="Type OF Complaint" value={TypeOfComplaint} placeholder="Enter Complaint"onChange={(e)=>setTypeofcomplaint(e.target.value)} />
          <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"></InputGroup.Text>                                
                                <FormControl type="text" name="Type OF Complaint" value={TypeOfComplaint} placeholder="Select Subject"
                                onChange={(e)=>setTypeofcomplaint(e.target.value)}                              
                                >
                                </FormControl>
                            <Form.Select type="text" name="Type OF Complaint" value={TypeOfComplaint} placeholder="Enter Complaint"
                                onChange={(e)=>setTypeofcomplaint(e.target.value)} required>
                                <option>none</option>
                                <option>Loan</option>
                                <option>Transactions</option>
                                <option>Payment</option>                           

                            </Form.Select>  </InputGroup>
          
          
          
          <Components.Input type="text" name="state" value={State} placeholder="Enter state" onChange={(e)=>setstates(e.target.value)} />
         
          <Components.Input type="text" name="City" value={City} placeholder="Enter city"onChange={(e)=>setcity(e.target.value)} />
        
          <Components.Input type="text" name="Branch" value={Branch} placeholder="Enter Branch"onChange={(e)=>setbranch(e.target.value)} />

          <div type="date" name="datetime" value={datetime} placeholder="date"onChange={(e)=>setDateTime(e.target.value)}/>
          
          <Components.Input type="text" name="Complaint" value={ComplaintDescription} placeholder="Enter Complaint"onChange={(e)=>setdescription(e.target.value)} />   
          
          <Components.Input type="text" name="AccountNumber" value={AccountNumber} placeholder="Enter AccountNumber"onChange={(e)=>setaccount(e.target.value)} />
          
        {/* //Change to div */}
          <div type="text" name="Status" value={Status} placeholder="Enter Status"onChange={(e)=>setstatus(e.target.value)}/>       
          
          <div type="text" name="Reply" value={Reply} placeholder="Enter Reply"onChange={(e)=>setreply(e.target.value)}/>

          <br></br>
            <Components.Button onClick={()=>Complaint_details(true)}>Save</Components.Button>
            </Components.Form>
        </Components.Container>
        <Footer/>
        </div>
        

    )
}
export default Complaint;