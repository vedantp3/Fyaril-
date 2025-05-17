
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SellerDetailContent {
  [key: string]: {
    title: string;
    lastUpdated: string;
    author: string;
    content: React.ReactNode;
  };
}

const SellerDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const content: SellerDetailContent = {
    "start-selling": {
      title: "Start Selling with Fyaril",
      lastUpdated: "May 15, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <p>Getting started as a seller on Fyaril is easy! Follow these steps to begin your journey:</p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Step 1: Create your Seller Account</h3>
            <p>Register as a vendor through our simple registration process. You'll need to provide basic information about yourself or your business.</p>
            <Button className="mt-4 bg-fyaril-blue hover:bg-fyaril-darkblue">
              Register Now
            </Button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Step 2: Complete KYC Verification</h3>
            <p>We'll need to verify your identity to ensure trust and safety for all users on our platform. This process typically takes 1-2 business days.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Government-issued photo ID</li>
              <li>Proof of address</li>
              <li>Business documentation (for business accounts)</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Step 3: Set Up Your Seller Profile</h3>
            <p>Create an attractive and informative seller profile. This is your storefront on Fyaril and will help buyers trust your business.</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Add a professional profile picture or logo</li>
              <li>Write a compelling bio that highlights your expertise</li>
              <li>Showcase your relevant experience and credentials</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Step 4: List Your First Product</h3>
            <p>Start adding products to your inventory. High-quality images and detailed descriptions will help your products stand out.</p>
            <Button className="mt-4 bg-fyaril-teal hover:bg-fyaril-blue">
              Learn About Product Listing
            </Button>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Step 5: Set Up Payment Methods</h3>
            <p>Connect your preferred payment method to receive your earnings. We support multiple payment options for your convenience.</p>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="text-xl font-medium text-fyaril-blue mb-2">Need More Help?</h3>
            <p>Our seller support team is available 24/7 to help you with any questions or issues you might have.</p>
            <Button className="mt-4 bg-fyaril-blue hover:bg-fyaril-darkblue">
              Contact Support
            </Button>
          </div>
        </div>
      )
    },
    // Add more content entries for other pages as needed
  };
  
  const currentContent = slug ? content[slug] : null;
  
  if (!currentContent) {
    return (
      <MainLayout>
        <div className="container mx-auto text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="mb-6">The page you're looking for doesn't exist or has been moved.</p>
          <Link to="/sellers">
            <Button>Back to Seller Help Center</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/sellers" 
          className="flex items-center gap-2 text-fyaril-blue hover:underline mb-6"
        >
          <ArrowLeft size={16} />
          <span>Back to Seller Help Center</span>
        </Link>
        
        <article className="bg-white p-8 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold mb-6">{currentContent.title}</h1>
          
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-6 border-b">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Last updated: {currentContent.lastUpdated}</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{currentContent.author}</span>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {currentContent.content}
          </div>
        </article>
      </div>
    </MainLayout>
  );
};

export default SellerDetail;
