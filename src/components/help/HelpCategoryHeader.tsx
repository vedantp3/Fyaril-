
import React from 'react';

interface HelpCategoryHeaderProps {
  title: string;
  description?: string;
}

const HelpCategoryHeader: React.FC<HelpCategoryHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-10 animate-fade-in relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-fyaril-blue/10 to-fyaril-teal/20 rounded-full filter blur-3xl -z-10"></div>
      <h2 className="text-4xl font-bold bg-gradient-to-r from-fyaril-blue to-fyaril-teal bg-clip-text text-transparent">{title}</h2>
      {description && <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{description}</p>}
      <div className="mt-5 flex items-center justify-center">
        <div className="h-1.5 w-10 rounded-full bg-fyaril-blue"></div>
        <div className="h-1.5 w-20 mx-1 rounded-full bg-gradient-to-r from-fyaril-blue to-fyaril-teal"></div>
        <div className="h-1.5 w-10 rounded-full bg-fyaril-teal"></div>
      </div>
    </div>
  );
};

export default HelpCategoryHeader;
