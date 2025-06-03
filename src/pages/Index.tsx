import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  User, 
  HelpCircle, 
  FileText, 
  Phone,
  ChevronRight
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fyaril-blue to-fyaril-blue/80 py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Welcome to Fyaril Help Center
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Find answers to your questions and learn how to get the most out of your Fyaril experience
          </p>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full py-4 px-6 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-fyaril-blue hover:bg-fyaril-blue/80 text-white p-3 rounded-full transition-colors">
              <HelpCircle size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How can we help you?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/buyers" className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-fyaril-blue/10 group-hover:bg-fyaril-blue rounded-full mx-auto flex items-center justify-center mb-4 transition-all duration-300">
                <ShoppingCart className="text-fyaril-blue group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-fyaril-blue transition-colors">For Buyers</h3>
              <p className="text-gray-600 mb-4">Find help with purchases, returns, and account management</p>
              <span className="text-fyaril-blue flex items-center justify-center gap-1 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ChevronRight size={16} />
              </span>
            </Link>
            
            <Link to="/sellers" className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-fyaril-blue/10 group-hover:bg-fyaril-blue rounded-full mx-auto flex items-center justify-center mb-4 transition-all duration-300">
                <User className="text-fyaril-blue group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-fyaril-blue transition-colors">For Sellers</h3>
              <p className="text-gray-600 mb-4">Everything you need to start and grow your business on Fyaril</p>
              <span className="text-fyaril-blue flex items-center justify-center gap-1 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ChevronRight size={16} />
              </span>
            </Link>
            
            <Link to="/faq" className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-fyaril-blue/10 group-hover:bg-fyaril-blue rounded-full mx-auto flex items-center justify-center mb-4 transition-all duration-300">
                <FileText className="text-fyaril-blue group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-fyaril-blue transition-colors">General FAQ</h3>
              <p className="text-gray-600 mb-4">Answers to commonly asked questions about using Fyaril</p>
              <span className="text-fyaril-blue flex items-center justify-center gap-1 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ChevronRight size={16} />
              </span>
            </Link>
            
            <Link to="/contact" className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center group hover:scale-105">
              <div className="w-16 h-16 bg-fyaril-blue/10 group-hover:bg-fyaril-blue rounded-full mx-auto flex items-center justify-center mb-4 transition-all duration-300">
                <Phone className="text-fyaril-blue group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-fyaril-blue transition-colors">Contact Support</h3>
              <p className="text-gray-600 mb-4">Get in touch with our customer support team</p>
              <span className="text-fyaril-blue flex items-center justify-center gap-1 font-medium group-hover:translate-x-1 transition-transform">
                Learn More <ChevronRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Help Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <h3 className="font-medium text-lg mb-2 group-hover:text-fyaril-blue transition-colors">How to create an account</h3>
              <p className="text-gray-600 text-sm">Step-by-step guide to setting up your Fyaril account</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <h3 className="font-medium text-lg mb-2 group-hover:text-fyaril-blue transition-colors">Return policy</h3>
              <p className="text-gray-600 text-sm">Learn about our customer-friendly return process</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <h3 className="font-medium text-lg mb-2 group-hover:text-fyaril-blue transition-colors">Shipping information</h3>
              <p className="text-gray-600 text-sm">Details about shipping methods, costs and timelines</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <h3 className="font-medium text-lg mb-2 group-hover:text-fyaril-blue transition-colors">Payment methods</h3>
              <p className="text-gray-600 text-sm">View all accepted payment options on Fyaril</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <h3 className="font-medium text-lg mb-2 group-hover:text-fyaril-blue transition-colors">Seller verification</h3>
              <p className="text-gray-600 text-sm">Understanding the seller verification process</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group">
              <h3 className="font-medium text-lg mb-2 group-hover:text-fyaril-blue transition-colors">Product listing guidelines</h3>
              <p className="text-gray-600 text-sm">Best practices for listing your products</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-fyaril-blue hover:bg-fyaril-blue/80">
              View All Help Topics
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-fyaril-blue py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Our support team is here to help you with any questions or issues you may have.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-fyaril-blue hover:bg-gray-100">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Fyaril</h3>
            <p className="text-gray-400">Your trusted marketplace for quality products and services.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Help Center</h3>
            <ul className="space-y-2">
              <li><Link to="/buyers" className="text-gray-400 hover:text-white">For Buyers</Link></li>
              <li><Link to="/sellers" className="text-gray-400 hover:text-white">For Sellers</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Legal</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 Fyaril. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
