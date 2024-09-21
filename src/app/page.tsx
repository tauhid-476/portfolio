"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import About from '@/components/Routes/About';
import Projects from '@/components/Routes/Projects';
import Home from '@/components/Routes/Home';
import FooterCard from '@/components/Footer';

type Page = 'home' | 'projects' | 'about';

const PortfolioLayout: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [direction, setDirection] = useState<number>(0);

  const pageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5,
  };

  
  return (
    <div className="flex flex-col bg-black text-white min-h-screen">
      <Navbar
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        setDirection={setDirection} 
      />

      {/* Main content area with dynamic height */}
      <div className="flex-1 flex justify-center w-full overflow-y-auto">
        <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={pageTransition}
              className="absolute w-full"
            >
              {currentPage === 'home' && (
                <div className="p-4 bg-black min-h-screen">
                  <Home />
                </div>
              )}
              {currentPage === 'projects' && (
                <div className="p-4 h-full overflow-auto">
                  <Projects />
                </div>
              )}
              {currentPage === 'about' && (
                <div className="p-4 h-full overflow-auto">
                  <About />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
    </div>
  );
};

export default PortfolioLayout;
