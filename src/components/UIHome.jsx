import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import '../App.css'
import Milestones from './Milestones';
import Portfolio from './Portfolio';
import ScrollToTop from './ScrollToTop';
import Services from './Services';
import Testimonials from './Testimonials';
import Video from './Video';
import { motion } from 'framer-motion';
import React from 'react';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  )
}

export default App