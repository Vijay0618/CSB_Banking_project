import React, { useState } from "react";
import "./FaqStyle.css";
import FaqHeader from "./FAQHeader";
import FAQ from "./FAQ.js";

export default function FaqApp() {
  const [faqs, setFaqs] = useState([
    {
      question: "If I am an individual and hold an CSB Bank Current A/c as well as an CSB Bank Savings Account/ Credit Card/ Demat Account, can I link these relationships to the same Internet Banking User ID?",
      answer:
        "Yes, if you are an individual and hold an CSB Bank Current A/c in your own name, you can link the same to your CSB Bank Savings Account/ Credit Card/ Demat Account under the same User ID.",
      open: true
    },
    {
      question: "Can I know the status on credit card payments?",
      answer: "Yes, there is an option called View Last Credit received in Internet Banking Account, which will help you with this requirement of yours.",
      open: false
    },
    {
      question:
        "How can I activate my user ID?",
      answer: "If you have opened an account recently, you will find your Internet Banking User ID/ Password in the Welcome Kit provided to you at the time of Account opening.",
      open: false
    },
    {
      question:
        "Can I have only one User ID for all CSB Bank relationships?",
      answer: "Yes, you can link all your CSB Bank accounts and Credit Cards and Demat Accounts to one Internet Banking User ID. However there are certain rules for linking joint accounts.To link 2 accounts to one User ID, it is mandatory that the Date of Birth, Name and communication address are identical in both the accounts.Incase of joint accounts, the primary account holder details should match with the CSB Bank Account to which it is being linked to.",
      open: false
    },
    {
      question:
        "What do I need to view/enable my various CSB Bank relationships on www.csbbank.com?",
      answer: "To enable your CSB Bank relationships online, you need to have an CSB Bank Internet Banking User ID and Password.",
      open: false
    },
    {
      question:
        "If I need any further Account related information, how do I get such details?",
      answer: "You may call our Customer Care between 7:00 a.m. and 9:00 p.m. from your registered mobile number.To know the local Customer Care numbers.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <FaqHeader />
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
