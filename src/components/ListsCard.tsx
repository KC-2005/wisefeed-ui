
import React from 'react';
import { FileText } from 'lucide-react';

interface DSASheet {
  name: string;
  link: string;
}

interface ListsCardProps {
  sheets: DSASheet[];
}

const ListsCard: React.FC<ListsCardProps> = ({ sheets }) => {
  return (
    <div className="animate-fade-in opacity-0" style={{ animationDelay: '250ms' }}>
      <div className="bg-white rounded-xl p-4 card-shadow">
        <h2 className="text-lg font-semibold mb-3">Available Lists</h2>
        <ul className="space-y-3">
          {sheets.map((sheet, index) => (
            <li 
              key={index} 
              className="animate-slide-in opacity-0 flex justify-between items-center"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <div className="flex items-center">
                <span className="text-dashboard-muted mr-2">•</span>
                <span className="text-sm mr-2">{sheet.name}</span>
                <a href={sheet.link} className="text-rose-500 hover:text-rose-600 transition-colors">
                  <FileText size={16} />
                </a>
              </div>
              <button className="practice-button">
                practice
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListsCard;
