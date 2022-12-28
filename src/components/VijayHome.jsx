import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Milestones from './Milestones';
import Portfolio from './Portfolio';
import ScrollToTop from './ScrollToTop';
import Services from './Services';
import Testimonials from './Testimonials';
import Video from './Video';
import { motion } from 'framer-motion';
import React from 'react';
import UHome from './UHome';

function VijayHome() {
  return (
    <motion.div initial="hidden" animate="show">
      
      <UHome />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Testimonials />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default VijayHome