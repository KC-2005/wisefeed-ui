
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ProgressCardProps {
  solved: number;
  total: number;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ solved, total }) => {
  // Animation delay for staggered appearance
  const delay = 'delay-[200ms]';
  
  return (
    <div className="animate-fade-in opacity-0" style={{ animationDelay: '100ms' }}>
      <div className="bg-white rounded-xl p-4 card-shadow mb-2">
        <h2 className="text-lg font-semibold mb-3">Current Progress</h2>
        <div className={`bg-gray-50 rounded-lg p-3 flex justify-between items-center card-shadow-inner animate-scale opacity-0 ${delay}`}>
          <p className="font-medium text-sm text-dashboard-text">
            {solved} / {total} DSA questions solved
          </p>
          <div className="text-dashboard-accent animate-pulse-slow">
            <CheckCircle size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
