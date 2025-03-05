
import React from 'react';

const Illustration: React.FC = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-end animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
      {/* Floating elements */}
      <div className="floating-item top-16 right-12 w-5 h-5 bg-red-400 rounded-md" style={{ animationDelay: '0.5s' }}></div>
      <div className="floating-item top-32 right-24 w-6 h-6 bg-indigo-400 rounded-md" style={{ animationDelay: '1.5s' }}></div>
      <div className="floating-item top-20 right-36 text-red-500 font-bold text-xl" style={{ animationDelay: '2s' }}>×</div>
      
      {/* Person studying */}
      <div className="relative animate-float" style={{ animationDelay: '1s' }}>
        {/* Chair */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-3 bg-gray-300 rounded-full"></div>
        
        {/* Person */}
        <div className="relative mb-10">
          {/* Table/Desk surface with shadow */}
          <div className="absolute bottom-[-18px] left-[-24px] w-[110px] h-3 bg-gray-200 rounded-md"></div>
          
          {/* Body */}
          <div className="w-16 h-24 flex flex-col items-center">
            {/* Head */}
            <div className="w-8 h-10 bg-[#F5D0C5] rounded-full relative overflow-hidden">
              {/* Hair */}
              <div className="absolute top-0 w-full h-6 bg-black rounded-t-full"></div>
              <div className="absolute bottom-0 w-full h-4 bg-black"></div>
            </div>
            
            {/* Body */}
            <div className="w-14 h-16 bg-indigo-500 rounded-md relative">
              {/* Arms */}
              <div className="absolute top-4 right-[-8px] w-4 h-10 bg-indigo-500 rounded-md"></div>
              
              {/* Laptop */}
              <div className="absolute top-10 left-[-8px] w-10 h-8 bg-gray-700 rounded-sm transform rotate-12"></div>
            </div>
            
            {/* Legs */}
            <div className="w-10 h-8 bg-black rounded-md"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom line */}
      <div className="w-[50%] h-px bg-gray-300 mt-3"></div>
      
      {/* Signature */}
      <p className="text-xs text-dashboard-muted/70 mt-2">made with love by [Team Name]</p>
    </div>
  );
};

export default Illustration;
