
import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full mb-12 animate-fade-in">
      <h1 className="text-4xl font-bold font-display tracking-tight">
        DASHBOARD
      </h1>
      <div className="flex items-center space-x-6">
        <a 
          href="#" 
          className="text-dashboard-text/80 text-sm hover:text-dashboard-text transition-colors duration-300"
        >
          about
        </a>
        <button className="text-dashboard-text p-1 rounded-md hover:bg-black/5 transition-all">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
