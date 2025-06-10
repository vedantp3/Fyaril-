
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  const breadcrumbLabels: Record<string, string> = {
    'sellers': 'For Sellers',
    'b2b': 'For B2B Buyers',
    'b2c': 'For B2C Buyers',
    'partners': 'For Partners',
    'faq': 'FAQ',
    'about': 'About Us',
    'start-selling': 'Start Selling',
    'plans': 'Seller Plans',
    'product-listing': 'Product Listing',
    'order-processing': 'Order Processing',
    'payment': 'Payment',
    // Add more mappings as needed
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-fyaril-teal/10 via-white to-fyaril-accent/10">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 relative overflow-hidden">
          {/* Navigation breadcrumbs */}
          {pathSegments.length > 0 && (
            <div className="mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Home className="h-4 w-4" />
                      <span className="sr-only">Home</span>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  
                  {pathSegments.map((segment, index) => {
                    const isLast = index === pathSegments.length - 1;
                    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
                    const label = breadcrumbLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
                    
                    return (
                      <React.Fragment key={path}>
                        <BreadcrumbItem>
                          {isLast ? (
                            <BreadcrumbPage>{label}</BreadcrumbPage>
                          ) : (
                            <BreadcrumbLink href={path}>{label}</BreadcrumbLink>
                          )}
                        </BreadcrumbItem>
                        {!isLast && <BreadcrumbSeparator />}
                      </React.Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          )}
          
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-fyaril-blue/10 to-fyaril-teal/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-fyaril-teal/10 to-fyaril-accent/10 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
