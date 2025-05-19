
import React from 'react';
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
  Wallet
} from 'lucide-react';
import { cn } from '@/lib/utils';

const userTypes = [
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
    icon: ShoppingCart,
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
    icon: Users,
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
  
  // Determine which user type section is active
  const activeUserType = userTypes.find(type => 
    currentPath === type.path || currentPath.startsWith(`${type.path}/`)
  );
  
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
                <Link 
                  to={type.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                    (currentPath === type.path || currentPath.startsWith(`${type.path}/`))
                      ? "bg-gradient-to-r from-fyaril-blue to-fyaril-teal text-white font-medium" 
                      : "text-gray-700 hover:bg-fyaril-teal/20"
                  )}
                >
                  <type.icon size={20} />
                  <span>{type.label}</span>
                </Link>
                
                {/* Show sub-items if this user type is active */}
                {activeUserType?.type === type.type && (
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
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
