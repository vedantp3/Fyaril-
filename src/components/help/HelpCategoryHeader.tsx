
import React from 'react';

interface HelpCategoryHeaderProps {
  title: string;
  description?: string;
}

const HelpCategoryHeader: React.FC<HelpCategoryHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      {description && <p className="text-gray-500 mt-2 max-w-2xl mx-auto">{description}</p>}
      <div className="mt-4 w-20 h-1.5 bg-gradient-to-r from-fyaril-blue to-fyaril-teal rounded-full mx-auto"></div>
    </div>
  );
};

export default HelpCategoryHeader;
