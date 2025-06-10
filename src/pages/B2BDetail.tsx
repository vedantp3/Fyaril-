
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Users, ShoppingCart, TrendingUp, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const b2bPages = {
  'bulk-purchase': {
    title: 'Bulk Purchase Process',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Bulk Purchase Process</h2>
        <p className="text-gray-700">Streamline your bulk purchasing with Fyaril's comprehensive B2B solutions designed for businesses of all sizes.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">How Bulk Purchasing Works</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-fyaril-blue text-white p-2 rounded-full">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Create Business Account</h4>
                  <p className="text-gray-600">Register your business with complete documentation for bulk purchasing privileges.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-fyaril-blue text-white p-2 rounded-full">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Request Quotations</h4>
                  <p className="text-gray-600">Submit detailed requirements and receive competitive quotes from verified suppliers.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="bg-fyaril-blue text-white p-2 rounded-full">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Negotiate Terms</h4>
                  <p className="text-gray-600">Negotiate pricing, delivery schedules, and payment terms directly with suppliers.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-fyaril-blue text-white p-2 rounded-full">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Global Fulfillment</h4>
                  <p className="text-gray-600">Enjoy seamless logistics and delivery across Europe with our partner networks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Minimum Order Requirements</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-fyaril-teal/10">
                  <th className="border border-fyaril-teal/20 p-3 text-left">Product Category</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Minimum Order Value</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Minimum Quantity</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Bulk Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Electronics</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€500</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">10 units</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">5-15%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Textiles</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€300</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">50 pieces</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">10-25%</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Home & Garden</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€200</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">25 units</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">8-20%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Food & Beverages</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€150</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">100 units</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">5-12%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Ready to Start Bulk Purchasing?</AlertTitle>
          <AlertDescription>
            Contact our B2B team to set up your business account and start accessing wholesale prices.
          </AlertDescription>
          <Button className="mt-3 bg-fyaril-blue hover:bg-fyaril-blue/80">Contact B2B Team</Button>
        </Alert>
      </div>
    )
  },
  'account-setup': {
    title: 'Business Account Setup',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Business Account Setup</h2>
        <p className="text-gray-700">Set up your business account to access exclusive B2B features, wholesale pricing, and dedicated support.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Required Documentation</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">Business Registration</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Certificate of Incorporation</li>
                <li>Business Registration Number</li>
                <li>VAT Registration Certificate</li>
                <li>Company Articles of Association </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-3">Financial Documents</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Bank Account Details</li>
                <li>Credit References</li>
                <li>Financial Statements (Last 2 years)</li>
                <li>Trade References</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Account Verification Process</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-medium">Submit Application</h4>
                <p className="text-gray-600">Complete the online application form with business details</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-medium">Document Verification</h4>
                <p className="text-gray-600">Our team verifies all submitted documents (2-3 business days)</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-medium">Credit Assessment</h4>
                <p className="text-gray-600">Credit limit determination based on business profile</p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-medium">Account Activation</h4>
                <p className="text-gray-600">Access to B2B portal and exclusive features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'payment': {
    title: 'B2B Payment Options',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">B2B Payment Options</h2>
        <p className="text-gray-700">Flexible payment solutions designed for business customers with extended credit terms and multiple payment methods.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold mb-4">Credit Terms</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Net 30 payment terms</li>
              <li>• Net 60 for established customers</li>
              <li>• Early payment discounts available</li>
              <li>• Flexible credit limits</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Bank transfers (SEPA)</li>
              <li>• Corporate credit cards</li>
              <li>• Letters of credit</li>
              <li>• Purchase orders</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold mb-4">Invoicing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Consolidated monthly invoicing</li>
              <li>• Custom PO matching</li>
              <li>• Digital invoice delivery</li>
              <li>• Tax-compliant documentation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  'faq': {
    title: 'B2B FAQ',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">B2B Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">What are the minimum order quantities for B2B purchases?</h3>
            <p className="text-gray-700">Minimum order quantities vary by product category and supplier. Generally, MOQs range from 10-100 units depending on the product type. Contact our B2B team for specific requirements.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">How do I get wholesale pricing?</h3>
            <p className="text-gray-700">Wholesale pricing is automatically applied to your B2B account once verified. Prices are tiered based on order volume, with additional discounts for larger quantities.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Can I customize products for my business?</h3>
            <p className="text-gray-700">Yes, many of our suppliers offer customization services including private labeling, custom packaging, and product modifications. Contact suppliers directly through the platform to discuss requirements.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">What are the delivery times for bulk orders?</h3>
            <p className="text-gray-700">Delivery times vary based on product availability and order size. Standard bulk orders typically take 5-10 business days for delivery within Europe, with expedited options available.</p>
          </div>
        </div>
      </div>
    )
  }
};

const B2BDetail = () => {
  const { slug } = useParams();
  
  // If no slug, show the main B2B landing content
  if (!slug) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-fyaril-blue">For B2B Buyers</h1>
            <div className="h-1 w-20 bg-fyaril-teal mt-2"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-700">Discover wholesale opportunities and bulk purchasing solutions tailored for businesses across Europe.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
                <h3 className="text-xl font-semibold mb-4">Why Choose Fyaril for B2B?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Competitive wholesale pricing</li>
                  <li>• Verified suppliers from India</li>
                  <li>• Flexible payment terms</li>
                  <li>• Dedicated account management</li>
                  <li>• Custom product solutions</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
                <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Electronics & Technology</li>
                  <li>• Textiles & Apparel</li>
                  <li>• Home & Garden</li>
                  <li>• Industrial Equipment</li>
                  <li>• Food & Beverages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  const pageData = b2bPages[slug as keyof typeof b2bPages];
  
  if (!pageData) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p>The requested B2B help page does not exist.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-fyaril-blue">{pageData.title}</h1>
          <div className="h-1 w-20 bg-fyaril-teal mt-2"></div>
        </div>
        
        {pageData.content}
      </div>
    </MainLayout>
  );
};

export default B2BDetail;
