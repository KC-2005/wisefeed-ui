
import React from 'react';
import Header from '@/components/Header';
import ProgressCard from '@/components/ProgressCard';
import ListsCard from '@/components/ListsCard';
import Illustration from '@/components/Illustration';

const dsaSheets = [
  { name: 'Google DSA Sheet', link: '#' },
  { name: 'Amazon DSA Sheet', link: '#' },
  { name: 'Flipkart DSA Sheet', link: '#' },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full max-w-7xl mx-auto px-6 py-10 md:px-10 lg:px-16">
      <Header />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <ProgressCard solved={75} total={200} />
          <ListsCard sheets={dsaSheets} />
        </div>
        
        <div className="hidden md:block">
          <Illustration />
        </div>
      </div>
    </div>
  );
};

export default Index;
