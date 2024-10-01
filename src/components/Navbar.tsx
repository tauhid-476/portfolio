"use client";
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GlowingButtonProps {
  onClick: () => void;
  isOpen: boolean;
  direction: number;
}

type Page = 'home' | 'projects' | 'about';

const GlowingButton: React.FC<GlowingButtonProps> = ({ onClick, isOpen, direction }) => (
  <button
    onClick={onClick}
    className="p-2 md:p-4 rounded-full bg-purple-500 hover:bg-purple-600 transition-all duration-300 shadow-[0_0_10px_#ff8c00] hover:shadow-[0_0_20px_#ff8c00]"
  >
    {isOpen ? 
      (direction > 0 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />) :
      (direction > 0 ? <ChevronRight size={20} /> : <ChevronLeft size={20} />)
    }
  </button>
);

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: React.Dispatch<React.SetStateAction<Page>>;
  setDirection: React.Dispatch<React.SetStateAction<number>>;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, setDirection}) => {
  const navigate = (page: Page, dir: number): void => {
    if (currentPage === page) {
      setDirection(-dir);
      setCurrentPage('home');
    } else {
      setDirection(dir);
      setCurrentPage(page);
    }
  };

  return (
    <nav className="p-4 flex justify-center items-center relative border-b border-gray-900">
      
        <GlowingButton 
          onClick={() => navigate('projects', -1)} 
          isOpen={currentPage === 'projects'}
          direction={-1}
          
        />
     
      <h1 className="text-3xl md:text-5xl font-bold px-4 md:pb-2">Tauhid /</h1>
      
        <GlowingButton 
          onClick={() => navigate('about', 1)} 
          isOpen={currentPage === 'about'}
          direction={1}
        />
      
    </nav>
  );
};

export default Navbar;
