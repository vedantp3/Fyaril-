
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 relative overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-fyaril-blue/10 to-fyaril-teal/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-fyaril-teal/10 to-purple-200/10 rounded-full filter blur-3xl"></div>
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
