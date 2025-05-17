
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  HelpCircle, 
  Users, 
  ShoppingCart, 
  Image, 
  Package, 
  FileText, 
  Truck, 
  Wallet
} from 'lucide-react';

const sidebarItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Info, label: 'About Us', path: '/about' },
  { icon: HelpCircle, label: 'General FAQ', path: '/faq' },
  { icon: Users, label: 'Private Buyers Guide', path: '/buyers-guide' },
  { icon: ShoppingCart, label: 'For Bulk Buyers', path: '/bulk-buyers' },
  { icon: FileText, label: 'For Sellers', path: '/sellers', active: true },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto flex-shrink-0 hidden md:block">
      <div className="p-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                item.active 
                  ? 'bg-gradient-to-r from-fyaril-blue to-fyaril-teal text-white font-medium' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
