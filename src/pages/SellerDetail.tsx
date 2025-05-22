
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Content for different seller pages
const sellerPages = {
  'start-selling': {
    title: 'Start Selling with Fyaril',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Getting Started</h2>
        <p>Fyaril connects manufacturers and sellers in India with customers across Europe. Our platform enables businesses of all sizes to expand their reach and tap into new markets without the complexities usually associated with cross-border trade.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Three Simple Steps to Start Selling</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <div className="w-10 h-10 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">1</div>
              <h4 className="font-medium text-lg mb-2">Register as a Seller</h4>
              <p className="text-gray-600">Apply to become a seller through our online application form.</p>
            </div>
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <div className="w-10 h-10 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">2</div>
              <h4 className="font-medium text-lg mb-2">Complete KYC</h4>
              <p className="text-gray-600">Verify your identity and business credentials through our KYC process.</p>
            </div>
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <div className="w-10 h-10 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">3</div>
              <h4 className="font-medium text-lg mb-2">Create Your Listings</h4>
              <p className="text-gray-600">Upload your products and start selling to customers across Europe.</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mt-8">What You'll Need</h2>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <ul className="list-disc pl-5 space-y-2">
            <li>Business registration documents</li>
            <li>PAN card and GST registration (for Indian sellers)</li>
            <li>Bank account details for receiving payments</li>
            <li>Product information and images</li>
            <li>Pricing strategy for European market</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mt-8">Benefits of Selling on Fyaril</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold mb-3">Access to European Markets</h3>
            <p>Reach 748 million European consumers including 5.5 million South Asian origin consumers without needing a European business entity.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold mb-3">Simplified Compliance</h3>
            <p>We handle European regulations and compliance requirements, making it easy for you to sell internationally.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold mb-3">Local Currency Payments</h3>
            <p>Receive payments in your local currency with transparent exchange rates.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold mb-3">Logistics Support</h3>
            <p>Get help with shipping, customs, and delivery logistics to ensure smooth fulfillment.</p>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Ready to get started?</AlertTitle>
          <AlertDescription>
            Apply to become a seller today and start expanding your business globally with Fyaril.
          </AlertDescription>
          <Button className="mt-3 bg-fyaril-blue hover:bg-fyaril-blue/80">Apply Now</Button>
        </Alert>
      </div>
    )
  },
  'plans': {
    title: 'Seller Plans',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Seller Plans</h2>
        <p className="text-gray-700">Choose the plan that best fits your business needs. All plans include access to the European market and Fyaril's seller tools.</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md border border-fyaril-teal/30 overflow-hidden">
            <div className="bg-fyaril-teal/20 p-4 text-center">
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="text-sm text-gray-600">For small businesses</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">Free</span>
                <p className="text-sm text-gray-500">+ 15% commission</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  List up to 50 products
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Basic analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Standard support
                </li>
              </ul>
              <Button className="w-full bg-fyaril-blue hover:bg-fyaril-blue/80">Select Plan</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg border-2 border-fyaril-blue overflow-hidden transform scale-105">
            <div className="bg-fyaril-blue text-white p-4 text-center">
              <div className="inline-block bg-white text-fyaril-blue text-xs font-bold uppercase px-3 py-1 rounded-full mb-2">Most Popular</div>
              <h3 className="text-xl font-bold">Standard</h3>
              <p className="text-sm">For growing businesses</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">€49</span>
                <span className="text-gray-500">/month</span>
                <p className="text-sm text-gray-500">+ 10% commission</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  List up to 500 products
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Priority support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Marketing tools
                </li>
              </ul>
              <Button className="w-full bg-fyaril-blue hover:bg-fyaril-blue/80">Select Plan</Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-fyaril-teal/30 overflow-hidden">
            <div className="bg-fyaril-teal/20 p-4 text-center">
              <h3 className="text-xl font-bold">Premium</h3>
              <p className="text-sm text-gray-600">For established businesses</p>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold">€199</span>
                <span className="text-gray-500">/month</span>
                <p className="text-sm text-gray-500">+ 5% commission</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Unlimited products
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Advanced analytics + API access
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  24/7 dedicated support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  Featured placement
                </li>
              </ul>
              <Button className="w-full bg-fyaril-blue hover:bg-fyaril-blue/80">Select Plan</Button>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Plan Features Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-fyaril-teal/10">
                  <th className="border border-fyaril-teal/20 p-3 text-left">Feature</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Basic</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Standard</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Monthly Fee</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Free</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€49</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€199</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Commission Rate</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">15%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">10%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">5%</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Product Listings</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">50</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">500</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Unlimited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Support Level</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Standard</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Priority</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Dedicated</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Marketing Tools</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Limited</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Standard</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Premium</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Reporting & Analytics</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Basic</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Advanced</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Premium + API</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Featured Placement</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">❌</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Limited</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">✅</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Badge Eligibility</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">Basic</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">All</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">All + Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <Alert className="mt-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Need help deciding?</AlertTitle>
          <AlertDescription>
            Contact our sales team for a consultation to find the best plan for your business needs.
          </AlertDescription>
          <Button className="mt-3 bg-fyaril-blue hover:bg-fyaril-blue/80">Contact Sales</Button>
        </Alert>
      </div>
    )
  },
  'product-listing': {
    title: 'Product Listing',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Product Listing Guidelines</h2>
        <p className="text-gray-700">Follow these guidelines to create effective product listings that will help maximize your sales on Fyaril.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Product Information Requirements</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3z"></path>
                  <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Product Title</h4>
                <p className="text-gray-600">Clear, descriptive title that includes key product information (80-100 characters).</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Product Description</h4>
                <p className="text-gray-600">Detailed description with features, benefits, usage, and specifications (min. 300 words recommended).</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Product Categories</h4>
                <p className="text-gray-600">Choose the most appropriate category and subcategories for your product.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Variants</h4>
                <p className="text-gray-600">Include all available options such as sizes, colors, materials, etc.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                  <line x1="7" y1="7" x2="7.01" y2="7"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Pricing</h4>
                <p className="text-gray-600">Set competitive prices in your local currency (we'll handle conversion).</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Image Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2">Image Requirements</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Minimum 1000 x 1000 pixels resolution</li>
                <li>Pure white background (RGB: 255, 255, 255)</li>
                <li>Product should fill at least 85% of the frame</li>
                <li>File format: JPG or PNG</li>
                <li>Maximum file size: 10MB per image</li>
                <li>Minimum 5 images per product</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Image Types to Include</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Main product image (front view)</li>
                <li>Product from multiple angles</li>
                <li>Close-up details</li>
                <li>Size/dimension reference</li>
                <li>Lifestyle/in-use images</li>
                <li>Packaging (if relevant)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Inventory Management</h3>
          <p className="mb-4">Maintain accurate inventory to avoid overselling and ensure customer satisfaction.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2">Inventory Settings</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Set initial stock quantities</li>
                <li>Configure low stock alerts</li>
                <li>Update quantities regularly</li>
                <li>Set backorder availability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Lead Times</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Processing time (1-3 business days recommended)</li>
                <li>Shipping time estimates</li>
                <li>Out-of-stock handling preferences</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">European Compliance</h3>
          <p className="mb-4">Ensure your products meet EU regulations for a smooth selling experience:</p>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">CE Marking</h4>
                <p className="text-gray-600">Many products sold in the EU require CE marking to indicate compliance with health, safety, and environmental protection standards.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">Language Requirements</h4>
                <p className="text-gray-600">Product information must be available in English. Additional European languages are encouraged.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-lg">GDPR Compliance</h4>
                <p className="text-gray-600">All customer data must be handled according to GDPR regulations.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Alert className="bg-amber-50 border-amber-300">
          <AlertCircle className="h-4 w-4 text-amber-500" />
          <AlertTitle className="text-amber-800">Important Note</AlertTitle>
          <AlertDescription className="text-amber-700">
            Fyaril reviews all product listings before they go live. This process typically takes 1-2 business days.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'order-processing': {
    title: 'Order Processing & Shipping',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Order Processing & Shipping</h2>
        <p className="text-gray-700">Learn how to manage orders efficiently and ship products to European customers through Fyaril.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Order Processing Workflow</h3>
          
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-8 top-0 h-full w-1 bg-fyaril-teal/30"></div>
            
            {/* Steps */}
            <div className="space-y-8 relative">
              <div className="flex gap-4 items-start relative">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-xl z-10">1</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Order Notification</h4>
                  <p className="text-gray-600">You'll receive an email and dashboard notification when a customer places an order. Orders also appear in your "New Orders" section of the Fyaril seller dashboard.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start relative">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-xl z-10">2</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Order Confirmation</h4>
                  <p className="text-gray-600">Review the order details and confirm that you can fulfill it within the promised timeframe. If there are any issues with inventory or fulfillment, contact Fyaril support immediately.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start relative">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-xl z-10">3</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Packaging</h4>
                  <p className="text-gray-600">Package the items securely according to Fyaril's <a href="/sellers/packaging" className="text-fyaril-blue hover:underline">packaging guidelines</a> to ensure they arrive in perfect condition. Include the packing slip generated from your seller dashboard.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start relative">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-xl z-10">4</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Shipping</h4>
                  <p className="text-gray-600">Generate shipping labels through the Fyaril dashboard and arrange for pickup or drop-off according to your chosen shipping method.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start relative">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-xl z-10">5</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Tracking & Updates</h4>
                  <p className="text-gray-600">The tracking number is automatically shared with the customer. You can monitor shipment progress through your dashboard.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Shipping Options</h3>
          
          <div className="space-y-6">
            <div className="border border-fyaril-teal/30 rounded-lg overflow-hidden">
              <div className="bg-fyaril-teal/10 p-4">
                <h4 className="font-medium text-lg">Domestic Shipping to Fyaril Warehouse</h4>
              </div>
              <div className="p-4">
                <p className="mb-3">For Standard and Basic plan sellers, ship your products to our warehouse in India:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Ship to our warehouse in Pune or Mumbai</li>
                  <li>We handle international logistics, customs, and delivery to the customer</li>
                  <li>Lower cost but longer delivery times (14-21 days)</li>
                  <li>Ideal for non-urgent, non-perishable items</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg overflow-hidden">
              <div className="bg-fyaril-teal/10 p-4">
                <h4 className="font-medium text-lg">Direct International Shipping</h4>
              </div>
              <div className="p-4">
                <p className="mb-3">For Premium plan sellers or those with the Exporter badge:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Ship directly to customers internationally</li>
                  <li>Use our negotiated rates with international carriers</li>
                  <li>Faster delivery times (7-10 days)</li>
                  <li>Higher shipping costs</li>
                  <li>You're responsible for export documentation</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg overflow-hidden">
              <div className="bg-fyaril-teal/10 p-4">
                <h4 className="font-medium text-lg">European Fulfillment</h4>
              </div>
              <div className="p-4">
                <p className="mb-3">For high-volume sellers with consistent sales:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Store inventory in our European warehouses</li>
                  <li>Fastest delivery times (1-3 days within Europe)</li>
                  <li>Higher storage fees but lower per-order shipping costs</li>
                  <li>Contact your account manager to set up European fulfillment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Customs & Documentation</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2">Required Documentation</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Commercial Invoice (generated from dashboard)</li>
                <li>Packing List</li>
                <li>Certificate of Origin (if applicable)</li>
                <li>Product Certifications (if applicable)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2">Customs Information</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>All products must have HS codes</li>
                <li>Accurate product descriptions required</li>
                <li>Declaration of value must match invoiced amount</li>
                <li>Some products may require special permits</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Delivery Timeframes</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-fyaril-teal/10">
                  <th className="border border-fyaril-teal/20 p-3 text-left">Shipping Method</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Processing Time</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Shipping Time</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Total Delivery Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Warehouse Shipping</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1-3 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">14-21 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">15-24 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Direct International</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1-3 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">7-10 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">8-13 days</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">European Fulfillment</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1 day</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1-3 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">2-4 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Express Shipping</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1 day</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">3-5 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">4-6 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Need assistance?</AlertTitle>
          <AlertDescription>
            Our logistics team is available to help with any shipping or customs questions. Contact us through the seller dashboard.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'payment': {
    title: 'Payment Withdrawal',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Payment Withdrawal</h2>
        <p className="text-gray-700">Learn how payments work on Fyaril and how to withdraw your earnings to your bank account.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Payment Process</h3>
          
          <div className="relative pb-6">
            {/* Timeline */}
            <div className="absolute left-[30px] top-0 h-full w-1 bg-fyaril-teal/30"></div>
            
            {/* Steps */}
            <div className="space-y-8 relative">
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">1</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Customer Payment</h4>
                  <p className="text-gray-600">When a customer places an order, they pay the full amount to Fyaril, including product price, shipping, and any applicable taxes.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">2</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Order Fulfillment</h4>
                  <p className="text-gray-600">You ship the product to the customer (either directly or through our warehouse). The order status is updated to "Delivered" once the customer receives the product.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">3</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Settlement Period</h4>
                  <p className="text-gray-600">After delivery confirmation and the return period has passed (typically 7 days), the payment enters the settlement process.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">4</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Payment Release</h4>
                  <p className="text-gray-600">Fyaril releases your payment (product price minus commissions and fees) to your seller account balance.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">5</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Withdraw Funds</h4>
                  <p className="text-gray-600">You can withdraw available funds from your seller account to your registered bank account according to your chosen payment schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Payment Schedule Options</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-fyaril-teal/30 rounded-lg overflow-hidden">
              <div className="bg-fyaril-teal/10 p-4">
                <h4 className="font-medium text-lg">Weekly</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Payments processed every Monday</li>
                  <li>Minimum withdrawal amount: ₹5,000</li>
                  <li>Available for all seller plans</li>
                  <li>Funds typically arrive in 2-3 business days</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg overflow-hidden">
              <div className="bg-fyaril-teal/10 p-4">
                <h4 className="font-medium text-lg">Bi-Weekly</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Payments processed on the 1st and 15th</li>
                  <li>Minimum withdrawal amount: ₹10,000</li>
                  <li>Available for all seller plans</li>
                  <li>Funds typically arrive in 2-3 business days</li>
                </ul>
              </div>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg overflow-hidden">
              <div className="bg-fyaril-teal/10 p-4">
                <h4 className="font-medium text-lg">On Demand</h4>
              </div>
              <div className="p-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Request payment withdrawal anytime</li>
                  <li>Minimum withdrawal amount: ₹25,000</li>
                  <li>Available for Premium plan sellers only</li>
                  <li>Processing fee: 1% of withdrawal amount</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Setting Up Your Payment Account</h3>
          
          <Tabs defaultValue="indian" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="indian">Indian Bank Account</TabsTrigger>
              <TabsTrigger value="international">International Account</TabsTrigger>
            </TabsList>
            <TabsContent value="indian" className="space-y-4">
              <p className="text-gray-700">For sellers with Indian bank accounts, please provide:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Account holder name (as per bank records)</li>
                <li>Bank name and branch</li>
                <li>Account number</li>
                <li>IFSC code</li>
                <li>PAN number</li>
                <li>GST number (if applicable)</li>
              </ul>
              <p className="text-gray-700 mt-4">You'll need to verify your bank account by submitting a canceled cheque or bank statement.</p>
            </TabsContent>
            <TabsContent value="international" className="space-y-4">
              <p className="text-gray-700">For sellers with international bank accounts, please provide:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Account holder name (as per bank records)</li>
                <li>Bank name and address</li>
                <li>Account number/IBAN</li>
                <li>SWIFT/BIC code</li>
                <li>Routing number (if applicable)</li>
                <li>Tax ID or business registration number</li>
              </ul>
              <p className="text-gray-700 mt-4">Additional verification may be required for international accounts. Contact Fyaril support for assistance.</p>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Currency Conversion</h3>
          
          <div className="space-y-4">
            <p className="text-gray-700">Fyaril handles currency conversion between Euro (customer payment) and your local currency (seller payout):</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-fyaril-teal/30 rounded-lg p-4">
                <h4 className="font-medium text-lg mb-2">Exchange Rates</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>We use mid-market exchange rates from recognized financial institutions</li>
                  <li>Rates are updated daily</li>
                  <li>Current exchange rates are visible in your dashboard</li>
                </ul>
              </div>
              <div className="border border-fyaril-teal/30 rounded-lg p-4">
                <h4 className="font-medium text-lg mb-2">Currency Options</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Receive payments in INR (default for Indian sellers)</li>
                  <li>Receive payments in EUR (requires EU bank account)</li>
                  <li>Receive payments in USD (available for premium sellers)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20 mt-8">
          <h3 className="text-xl font-semibold mb-4">Fees & Deductions</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-fyaril-teal/10">
                  <th className="border border-fyaril-teal/20 p-3 text-left">Fee Type</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Basic Plan</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Standard Plan</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Premium Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Commission</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">15%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">10%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">5%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Payment Processing</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">2%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1.5%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1%</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Currency Conversion</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1.5%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">0.5%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">On-Demand Withdrawal</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">N/A</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">N/A</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">1%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-gray-600">Note: All fees are deducted automatically before funds are deposited into your seller account.</p>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle className="text-fyaril-blue">Withdrawal Help</AlertTitle>
          <AlertDescription>
            Need help with payment withdrawals? Contact our finance team at payments@fyaril.com or through your seller dashboard.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'faq': {
    title: 'Seller General FAQ',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Seller FAQ</h2>
        <p className="text-gray-700">Find answers to commonly asked questions about selling on Fyaril.</p>
        
        <div className="space-y-4 mt-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">I want to sell my products in Europe. How can I sell on Fyaril?</h3>
            <p className="text-gray-700">
              As a first step, apply to become a seller. This will help us create a seller account for you. We will share login details to your registered email address if your credentials are valid. For next steps, you can follow instructions in your account.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">How can selling on Fyaril help my Business?</h3>
            <p className="text-gray-700">
              In 2021, 3 out of 4 Europeans bought something on an e-commerce site. Seller on Fyaril can sell to 748 million European population which includes 5.5 million Indian and south Asian origin consumers. Fyaril opens up global opportunities, particularly entire European region as an additional market for your existing business with minimal effort from you.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Do I need European bank account or VAT number to sell on Fyaril?</h3>
            <p className="text-gray-700">
              No! It is not necessary to have a bank account or VAT number in Europe. You can become a supplier on Fyaril's Global marketplace with your Indian GST / PAN numbers. When you are ready for international expansion, we will help you to create a setup in Europe.
            </p>
            <p className="text-gray-700 mt-2">
              However, if you already have EU VAT number, you can be a seller on Fyaril as a European vendor with your European credentials.
            </p>
            <p className="text-gray-700 mt-2">
              You just need to receive order – pack goods – handover package to the delivery partner.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">We are already selling on an e-commerce marketplaces in India. Can I still sell on Fyaril?</h3>
            <p className="text-gray-700">
              Yes! In fact, you are a step closer to selling globally on Fyaril. Just apply for a vendor account, upload digital inventory through vendor panel and start receiving orders from Europe.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">I own a brand and sell my products on e-commerce marketplaces in India and/or abroad. Can I sell on Fyaril?</h3>
            <p className="text-gray-700">
              Yes! In fact, Fyaril is created with a vision to take trusted Indian brands Global. You can start by signing up as B2C vendor and as your sales grow, you will be able to store goods in Europe for quick fulfilment. Fyaril is a fantastic platform to learn about new geography, customer preferences and grow in a risk & investment free manner.
            </p>
            <p className="text-gray-700 mt-2">
              Just apply for a vendor account, Complete KYC for a brand. You will receive Top Brand badge which will be displayed on your every product page.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">What role does Fyaril play in B2B model?</h3>
            <p className="text-gray-700">
              Fyaril allows you to manage everything in one place, from customer requirement to order fulfillment. With the platform that's accessible and available to your audience/customers, Fyaril B2B ecommerce is a great chance to cross-sell and up-sell to existing buyers. With options for automated sales processes between businesses, suppliers and distributors, our ecommerce platform can help streamline your B2B operations and improve the customer experience.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Why is so much documentation required for KYC?</h3>
            <p className="text-gray-700">
              We have to follow compliances for export in India and abroad. Also we need to check all the details if its available with the vendor to ensure smooth flow for business.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Does Fyaril market products under Vendors Brand or it sells under the name of FYARIL?</h3>
            <p className="text-gray-700">
              We cater to all kind of product module like white label, private label, wholesale and branded products. So the brand name and packing all depends on the kind of product usually we do not change Vendor name or branding. Marketing and sale is done with Vendor name /brand. We do add our Merchandising along with it.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Once vendors take subscription plans how fast will they start receiving orders?</h3>
            <p className="text-gray-700">
              This depends on the plan the vendor has subscribed for as the activity is planned according to it. Though we don't commit any time line for orders but it all depends on factors such as type of product, Targeted regions, demand for the product etc.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">In case if the product is returned (internationally) who will bear the shipping cost?</h3>
            <p className="text-gray-700">
              Fyaril does not allow returns on B2B orders unless there is a manufacturing defect. Fyaril coordinates discussions between buyer and seller in case of an issue in delivery.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Returns: What happens if a customer returns an item?</h3>
            <p className="text-gray-700">
              Our goal is to minimise returns and maximise profits for you. To achieve, we discourage returning goods to India as this may not be cost effective solution unless value of shipment is large enough to justify administration needed. To ease life of vendor on returns, we offer return credits to each vendor depending on the credit rating or 10% of monthly sales whichever is lower after first 6 months on the platform.
            </p>
            <p className="text-gray-700 mt-2">
              Once you have reached return rate beyond credit limit then, some correction in sales approach may be needed. This means, we will have review returned products along with the vendor to find ways to reduce return rate, customers with highest return rate will be restricted and Fyaril will offer free storage of returned goods for 30 - 60 days in Europe. You only pay for repackaging if needed. You will have opportunity to sell your goods during this time.
            </p>
            <p className="text-gray-700 mt-2">
              After free storage period is over, you will a choice either to start paying for the storage or decide to recycle the item or import back to India. For defective items received by the customers, Fyaril will charge a fee to recycle the item.
            </p>
            <p className="text-gray-700 mt-2">
              Sellers should upload terms and conditions for their store on Fyaril seller profile. During the checkout process customers explicitly need to agree to seller's terms and conditions. Sellers can mention store's return policy in terms and conditions.
            </p>
          </div>
          
          {/* More FAQs can be added here */}
        </div>
      </div>
    )
  }
};

const SellerDetail = () => {
  const { slug } = useParams();
  const pageData = sellerPages[slug as keyof typeof sellerPages];
  
  if (!pageData) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p>The requested seller help page does not exist.</p>
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

export default SellerDetail;
