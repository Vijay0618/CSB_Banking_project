import React from 'react';
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import play from "../assets/play.png";
import Title from './Title';
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from '../animation';

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "LOAN",
      text: "Quantum of finance is fixed upto a maximum of 75% of 30 days average IBJA rate or 75% of the value of the gold ornaments as appraised by a bank approved appraiser, whichever is lower (on net weight). Agriculture Loans are subject to Scale of Finance fixed from time to time.",
      image: service1,
    },
    {
      type: "FD-DEPOSIT",
      text: "Minimum amount for opening account is Rs.100/-. Accounts may also be opened in odd sums.Deposits are accepted for periods of 7 days.Interest is paid quarterly at the full value of interest. The same is paid monthly at the discounted value of interest...You can also open your FD online.",
      image: service2,
    },
    {
      type: "Refer & Win 2.0",
      text: "Now CSB Mobile Banking users can refer their friends & family to the latest CSBMobile+ App. As your friend logs into CSB Mobile+ App and completes a transaction, you stand a chance to win exciting rewards.",
      image: service3,
    },
  ];
  return <Section id="services" ref={element}>
    <Title value="services" />
    <div className="services">
        {data.map(({type,text,image},index) => {
            return (
              <motion.div className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
              >
                  <div className="services__service__image">
                    <img src={image} alt="Service" />  
                  </div>
                  <div className="services__service__title">
                    <span>0{index + 1}</span>  
                    <h2>{type}</h2>
                  </div>
                  <p className="services__service__description">{text}</p>
                  <img src={play} alt="Readmore" />
              </motion.div>
            )
          })}
    </div>
  </Section>
}

const Section = styled.section`
min-height: 100vh;
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 100%;
  margin: 0 14rem;
  margin-top: 10rem;
  gap: 5rem;
  &__service {
    padding: 2rem;
    &:nth-of-type(2) {
      background-color: var(--primary-color);
      .services__service__title {
        span {
          color: #fff;
        }
      }
      .services__service__description {
        color: #fff;
      }
    }
    &__image {
      margin-bottom: 3rem;
    }
    &__title {
      span {
        color: var(--primary-color);
        font-weight: bolder;
      }
      h2 {
        font-size: 3rem;
        line-height: 2.5rem;
        margin-bottom: 5rem;
        color: var(--secondary-color);
      }
    }
    &__description {
      color: var(--primary-color);
      margin-bottom: 2rem;
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  .services {
    margin: 2rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 2rem;
  }
}
`;

export default Services