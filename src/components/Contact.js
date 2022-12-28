import React,{useState} from 'react';
import styled from "styled-components";

import Title from './Title';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from '../animation';

function Contact() {
  const [Name,setName]=useState("");
  const [Email,setEmail]=useState("");
  const [Message,setMessage]=useState("");
  function 
    
    Contact_details()
    {
        console.log({Name,Email,Message});
        let data={Name,Email,Message}
        
        fetch('https://localhost:7289/api/Contacts',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
            alert(result);
        });
        setName('');
        setEmail('');
        setMessage('');
    }
  const [element, controls] = useScroll();
  return (
    <Section id="contact" ref={element}>
      <Title value="contact" />
      <motion.div className="contact"
      variants={contactAnimation}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
        <div id='con' className="contact__title">
          <p>Stay in touch with me </p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Welcome to CSB</h4>
            <p>
              If you have any questions simply use the following contact details.
            </p>
            <p>
            <b>CSB Phone Banking</b><br></br>
            For banking queries and transactions, call 7 days a week.
            </p>
            <div>
              <p>
                <strong>Address:</strong>Head Office, CSB Bhavan, P.O Box No. 502, St. Mary’s College Road,Thrissur - 680 020,Kerala, India.
              </p>
              <p>
                <strong>Email:</strong>  customercare@csb.co.in
              </p>
              <p>
                <strong>Website:</strong>www.csb.co.in
              </p>
            </div>
          </div>
          <div className="contact__data__form">
            <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} placeholder='name' />
            <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' />
            <textarea placeholder='message' value={Message} onChange={(e)=>{setMessage(e.target.value)}} ></textarea>
            <button onClick={() => Contact_details(true)} >Send Message</button>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
.contact {
  color: var(--primary-color);
  margin: 0 18rem;
  &__title {
    margin: 6rem 0 2rem 0;
    p {
      text-transform: uppercase;
      color: var(--primary-color);
    }
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
    }
  }
  &__data {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    &__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h4 {
        font-size: 1.5rem;
      }
      p {
        text-align: justify;
        margin-top: 20px;
      }
      div {
        p {
          strong {
            text-transform: uppercase;
          }
        }
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      input,
      textarea {
        text-transform: uppercase;
        border: none;
        border-bottom: 0.1rem solid var(--secondary-color);
        width: 100%;
        color: var(--secondary-color);
        padding-bottom: 0.7rem;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: var(--secondary-color);
        }
      }
      textarea {
        width: 100%;
        height: 50%;
        resize: none;
      }
      button {
        width: 100%;
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
        height: 3rem;
        color: var(--secondary-color);
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          background-color: var(--secondary-color);
          color: #fff;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .contact {
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__data {
      grid-template-columns: 1fr;
      margin: 0;
      p {
        text-align: left;
      }
      &__form {
        button {
          height: 6rem;
        }
      }
    }
  }
}
`;

export default Contact