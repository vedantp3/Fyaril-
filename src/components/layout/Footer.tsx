
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-fyaril-darkblue to-fyaril-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="mb-2">Level 8, Building 23</p>
            <p className="mb-2">Tech Business Park</p>
            <p className="mb-2">support@fyaril.com</p>
            <p>+1 555-123-4567</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Fyaril</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Press Room</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Business Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Wholesale Pricing</a></li>
              <li><a href="#" className="hover:underline">For Retailers</a></li>
              <li><a href="#" className="hover:underline">No Minimum Order</a></li>
              <li><a href="#" className="hover:underline">For Traders</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Policy</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Security Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Return Policy</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Fyaril All, Inc. All Rights Reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-fyaril-lightblue transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-fyaril-lightblue transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="hover:text-fyaril-lightblue transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.7 3H4.3A1.3 1.3 0 003 4.3v15.4A1.3 1.3 0 004.3 21h15.4a1.3 1.3 0 001.3-1.3V4.3A1.3 1.3 0 0019.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 11-.002-3.096 1.548 1.548 0 01.002 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
