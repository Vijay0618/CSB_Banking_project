import React from 'react';
import './App.css';
import { Authenticate } from './components/Authenticate';
// import Blog from 'components/Blog';
// import Contact from 'components/Contact';
// import Footer from 'components/Footer';
// import Home from './components/Home';
import Login from './components/Login';
// import Milestones from 'components/Milestones';
// import Portfolio from 'components/Portfolio';
// import ScrollToTop from 'components/ScrollToTop';
import Services from './components/Services';
// import Testimonials from 'components/Testimonials';
// import UHome from 'components/UHome';
import UIHome from './components/UIHome';
// import Video from 'components/Video';
// import VijayHome from 'components/VijayHome';
// import { motion } from 'framer-motion';
// import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import VijayHome from './components/VijayHome';
import Chat from './components/Chat';
// import Chat from 'components/Chat';
//import Card from './Card';
import Trylog from './components/Trylogin';
import Contact from './components/Contact';
import Complaint from './components/Complaint_form';
import Header from './components/Header';
import DisplayAllComplain from './components/Superadmin';
import Complaintbydept from './components/Loan_admin';
import Complaintbydept_trans from './components/Transaction_admin';
import Complaintbydept_pay from './components/Payment_admin';
import Complaintbyname from './components/userStatus';
import UpdateComplaint from './components/UpdateComplaint';
import Complaintbydepts from './components/Loan_main_admin';
import Complaintbydepts_trans from './components/Transaction_admin_main';
import Complaintbydepts_pay from './components/Payment_main_admin';
import FaqApp from './components/FAQuestion';
import Complaintbydepts_super from './components/Superadmin_loan';
import Complaintbydepts_superT from './components/Superadmin_Trans';
import Complaintbydepts_superP from './components/Superadmin_Pay';
import TUpdateComplaint from './components/Tupdate';
import PUpdateComplaint from './components/PUpdate';
import SUpdateComplaint from './components/SUpdate';
import ProtectedRoute from './Services/ProtectedRoute';
import UserComplaintbyname from './components/Userdash';



function App() {
  return (
    <div>
      <Chat/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<VijayHome/>}/>
          <Route exact path="/Uhome" element={<VijayHome/>}/>
          <Route exact path="/login" element={<Trylog/>}/>
          <Route exact path="/Services" element={<Services/>}/>
          <Route exact path="/home" element={<UIHome/>}/>
          <Route exact path="/auth" element={<Authenticate />}/>
          {/* <Route exact path="/payment" element={<Card />}/> */}
          <Route exact path="/register" element={<Login />}/>
          <Route exact path="/complaint" element={<Complaint />}/>
          
          <Route exact path="/getall" element={<DisplayAllComplain />}/>
          <Route exact path="/getbyloan" element={<Complaintbydept />}/>
          <Route exact path="/getbyTrans" element={<Complaintbydept_trans />}/>
          <Route exact path="/getbypay" element={<Complaintbydept_pay />}/>
          <Route exact path="/getbyname" element={<Complaintbyname />}/>
          <Route exact path="/updateLoan" element={<UpdateComplaint />}/>
          <Route exact path="/Main_loan" element={<Complaintbydepts />}/>
          <Route exact path="/Main_Trans" element={<Complaintbydepts_trans />}/>
          <Route exact path="/Main_Pay" element={<Complaintbydepts_pay />}/>
          <Route exact path="/Faq-qsns" element={<FaqApp />}/>
          <Route exact path="/Admin_loan" element={<Complaintbydepts_super />}/>
          <Route exact path="/Admin_Trans" element={<Complaintbydepts_superT />}/>
          <Route exact path="/Admin_Pay" element={<Complaintbydepts_superP />}/>
          <Route exact path="/UpdateTrans" element={<TUpdateComplaint />}/>
          <Route exact path="/UpdatePay" element={<PUpdateComplaint />}/>
          <Route exact path="/UpdateSuper" element={<SUpdateComplaint />}/>
          <Route exact path="/Ugetbyname" element={<UserComplaintbyname />}/>
        </Routes>
      </BrowserRouter>
      </div>
  );
}
export default App;
