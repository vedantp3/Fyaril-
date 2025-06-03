
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-fyaril-blue py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-white text-2xl font-bold">Fyaril Help Center</h1>
          </Link>
        </div>
        
        <div className="relative w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search for help..." 
              className="pl-10 pr-4 py-2 rounded-full border-none bg-white/90 text-gray-800 w-full focus:ring-2 focus:ring-white/50 focus:outline-none" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
