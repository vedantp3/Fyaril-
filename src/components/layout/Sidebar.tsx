import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Info, 
  HelpCircle, 
  Users, 
  ShoppingCart, 
  Package, 
  FileText, 
  Truck, 
  Wallet,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const userTypes = [
  {
    type: 'buyers',
    label: 'For Buyers',
    path: '/buyers',
    icon: ShoppingCart,
    items: [
      { label: 'Getting Started', path: '/buyers/getting-started' },
      { label: 'How to Order', path: '/buyers/how-to-order' },
      { label: 'Payment Methods', path: '/buyers/payment' },
      { label: 'Shipping Info', path: '/buyers/shipping' },
      { label: 'Returns & Refunds', path: '/buyers/returns' },
      { label: 'Buyer FAQ', path: '/buyers/faq' },
    ]
  },
  {
    type: 'sellers',
    label: 'For Sellers',
    path: '/sellers',
    icon: Package,
    items: [
      { label: 'Start Selling with Fyaril', path: '/sellers/start-selling' },
      { label: 'Seller Plans', path: '/sellers/plans' },
      { label: 'Product Listing', path: '/sellers/product-listing' },
      { label: 'Order Processing & Shipping', path: '/sellers/order-processing' },
      { label: 'Payment Withdrawal', path: '/sellers/payment' },
      { label: 'Seller General FAQ', path: '/sellers/faq' },
    ]
  },
  {
    type: 'b2b',
    label: 'For B2B Buyers',
    path: '/b2b',
    icon: Users,
    items: [
      { label: 'Bulk Purchase Process', path: '/b2b/bulk-purchase' },
      { label: 'Business Account Setup', path: '/b2b/account-setup' },
      { label: 'Payment Options', path: '/b2b/payment' },
      { label: 'B2B FAQ', path: '/b2b/faq' },
    ]
  },
  {
    type: 'b2c',
    label: 'For B2C Buyers',
    path: '/b2c',
    icon: ShoppingCart,
    items: [
      { label: 'Shopping Guide', path: '/b2c/shopping-guide' },
      { label: 'Returns & Refunds', path: '/b2c/returns' },
      { label: 'Shipping Information', path: '/b2c/shipping' },
      { label: 'B2C FAQ', path: '/b2c/faq' },
    ]
  },
  {
    type: 'partners',
    label: 'For Partners',
    path: '/partners',
    icon: Wallet,
    items: [
      { label: 'Partnership Programs', path: '/partners/programs' },
      { label: 'Affiliate Marketing', path: '/partners/affiliate' },
      { label: 'Integration APIs', path: '/partners/api' },
      { label: 'Partners FAQ', path: '/partners/faq' },
    ]
  }
];

const generalItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Info, label: 'About Us', path: '/about' },
  { icon: HelpCircle, label: 'General FAQ', path: '/faq' },
];

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Track expanded sections manually
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  
  // Determine which user type section is currently in view
  const activeUserType = userTypes.find(type => 
    currentPath === type.path || currentPath.startsWith(`${type.path}/`)
  );
  
  // If a user is on a subpage, ensure that section is expanded
  React.useEffect(() => {
    if (activeUserType && !expandedSections.includes(activeUserType.type)) {
      setExpandedSections(prev => [...prev, activeUserType.type]);
    }
  }, [activeUserType, expandedSections]);
  
  // Toggle section expansion
  const toggleSection = (type: string) => {
    setExpandedSections(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };
  
  return (
    <aside className="w-64 bg-white border-r border-fyaril-teal/20 h-[calc(100vh-64px)] overflow-y-auto flex-shrink-0 hidden md:block">
      <div className="p-4">
        {/* General navigation section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
            General
          </h3>
          <div className="space-y-1">
            {generalItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  currentPath === item.path 
                    ? "bg-fyaril-blue text-white font-medium" 
                    : "text-gray-700 hover:bg-fyaril-teal/20"
                )}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
        
        {/* User types navigation */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">
            User Types
          </h3>
          <div className="space-y-1">
            {userTypes.map((type) => (
              <React.Fragment key={type.type}>
                <div className="flex flex-col">
                  <button 
                    onClick={() => toggleSection(type.type)}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors w-full",
                      (currentPath === type.path || currentPath.startsWith(`${type.path}/`))
                        ? "bg-gradient-to-r from-fyaril-blue to-fyaril-teal text-white font-medium" 
                        : "text-gray-700 hover:bg-fyaril-teal/20"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <type.icon size={20} />
                      <span>{type.label}</span>
                    </div>
                    {expandedSections.includes(type.type) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                  
                  {/* Show sub-items if this section is expanded */}
                  {expandedSections.includes(type.type) && (
                    <div className="pl-10 space-y-1 mt-1 mb-2">
                      {type.items.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={cn(
                            "block text-sm py-1.5 px-3 rounded-md transition-colors",
                            currentPath === subItem.path
                              ? "bg-fyaril-teal/30 text-fyaril-blue font-medium" 
                              : "text-gray-600 hover:bg-fyaril-teal/20"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
