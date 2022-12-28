import React, { useState } from 'react';
import loadmore from "../assets/loadmore.png";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from '../animation';

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "CEO",
      name: "C.VR. Rajendran",
      review:
      "This is to inform you that the bank's board in its meeting held on January 8, 2022, considered and accepted the request of CVR Rajendran to take early retirement from the position, to take care of his health under the advice of his physicians, the bank said."
    },
    {
      designation: "Achievements",
      name: "CSB",
      review:
      "In 1972 it came out of its traditional bastion and opened its first branch in Chembur, Mumbai. “A Class” Scheduled Bank status was attained by the Banking the year 1975 and it entered the field of International Banking in the same year."
    },
    {
      designation: "Guidelines",
      name: "RBI",
      review:
      "RBI Guidelines means any guideline, circular, notification, regulation, requirement or other restriction or any decision or determination relating to taxation, monetary union, capital adequacy norms and other prudential norms on income recognition, asset classification and provisioning pertaining to advances by banks."
    },
  ];
  return (
    <Section ref={element}>
      <div className="container">
        <motion.div className="testimonials"
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        >
          {
            testimonials.map(({ designation, name, review}, index)=> {
              return (
                <div className={`testimonial ${selected === index ? "active" : "hidden"}`} key={index}>
                  <div className="image">
                    <div className="circle2">
                      <img src={loadmore} alt="Loadmore" />
                    </div>
                  </div>
                  <div className="title-container">
                    <span className="designation">
                      {designation}
                    </span>
                    <h3 className='title'>{name}</h3>
                  </div>
                  <p className="description">{review}</p>
                </div>
              );
            })
          }
        </motion.div>
        <motion.div className="controls"
        variants={testimonialsAnimations}
        animate={controls}
        transition={{
          delay: 0.03,
          type: "tween",
          duration: 0.8,
        }}
        >
        <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}>
        </button>
        <button
            className={selected === 1 ? "active" : ""}
            onClick={() => {
              setSelected(1);
            }}>
        </button>
        <button
            className={selected === 2 ? "active" : ""}
            onClick={() => {
              setSelected(2);
            }}>
        </button>
        </motion.div>
      </div>
    </Section>
  )
}

const Section = styled.section`
overflow: hidden;

.container {
  min-height: 100vh;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .testimonials {
    display: flex;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    width: 30%;
    .testimonial {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .image {
        position: relative;
        .circle2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10rem;
          width: 10rem;
          border-radius: 10rem;
          background-color: #8860e6b0;
        }
      }
    }
    .hidden {
      display: none;
    }
    color: #fff;
    .designation {
      height: 8rem;
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button {
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: var(--secondary-color);
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active {
      background-color: transparent;
      border: 0.1rem solid var(--secondary-color);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .background {
    display: none;
  }
  .container {
    padding: 4rem 0;
    .testimonials {
      width: 80%;
      .testimonial {
        .description {
          height: 18rem;
        }
      }
    }
  }
}
`;

export default Testimonials