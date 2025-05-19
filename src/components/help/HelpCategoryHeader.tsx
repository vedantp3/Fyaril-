
import React from 'react';

interface HelpCategoryHeaderProps {
  title: string;
  description?: string;
  userType?: 'sellers' | 'b2b' | 'b2c' | 'partners' | 'general';
}

const HelpCategoryHeader: React.FC<HelpCategoryHeaderProps> = ({ 
  title, 
  description,
  userType = 'general'
}) => {
  const gradientClasses = {
    sellers: "from-fyaril-blue to-fyaril-teal",
    b2b: "from-fyaril-blue to-cyan-500",
    b2c: "from-fyaril-blue to-blue-400",
    partners: "from-fyaril-blue to-indigo-500",
    general: "from-fyaril-blue to-fyaril-teal",
  };
  
  const backgroundClasses = {
    sellers: "from-fyaril-blue/10 to-fyaril-teal/20",
    b2b: "from-fyaril-blue/10 to-cyan-500/20",
    b2c: "from-fyaril-blue/10 to-blue-400/20",
    partners: "from-fyaril-blue/10 to-indigo-500/20",
    general: "from-fyaril-blue/10 to-fyaril-teal/20",
  };
  
  return (
    <div className="text-center mb-10 animate-fade-in relative">
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r ${backgroundClasses[userType]} rounded-full filter blur-3xl -z-10`}></div>
      <h2 className={`text-4xl font-bold bg-gradient-to-r ${gradientClasses[userType]} bg-clip-text text-transparent`}>{title}</h2>
      {description && <p className="text-gray-600 mt-3 max-w-2xl mx-auto">{description}</p>}
      <div className="mt-5 flex items-center justify-center">
        <div className={`h-1.5 w-10 rounded-full bg-fyaril-blue`}></div>
        <div className={`h-1.5 w-20 mx-1 rounded-full bg-gradient-to-r ${gradientClasses[userType]}`}></div>
        <div className={`h-1.5 w-10 rounded-full bg-fyaril-teal`}></div>
      </div>
    </div>
  );
};

export default HelpCategoryHeader;
