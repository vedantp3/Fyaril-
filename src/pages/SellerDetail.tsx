import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, Package, CreditCard, Truck, FileText, Users, Shield, Star, Award, Camera, Upload, Eye, Edit, UserCheck, Clock, Euro, Zap, Target, Globe, DollarSign, TrendingUp, BarChart3, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';


const sellerPages = {
  'start-selling': {
    title: 'Start Selling with Fyaril',
    content: (
      <div className="space-y-6">
        <div className="flex justify-center mb-8">
              <img 
                src="/uploads/_- visual selection.png"  
                alt="Fyaril Seller Registration Process"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
        
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <p className="text-gray-700 mb-6">
            Fyaril connects manufacturers and sellers in India with customers across Europe. Our platform enables businesses of all sizes to expand their reach and tap into new markets without the complexities usually associated with cross-border trade.
          </p>
          
          <h4 className="text-lg font-semibold mb-4">Three Simple Steps to Start Selling</h4>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-fyaril-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h5 className="font-semibold text-lg mb-2">Register as a Seller</h5>
              <p className="text-gray-600 text-sm">Apply to become a seller through our online application form.</p>
            </div>
            <div className="text-center">
              <div className="bg-fyaril-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h5 className="font-semibold text-lg mb-2">Complete KYC</h5>
              <p className="text-gray-600 text-sm">Verify your identity and business credentials through our KYC process.</p>
            </div>
            <div className="text-center">
              <div className="bg-fyaril-blue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h5 className="font-semibold text-lg mb-2">Create Your Listings</h5>
              <p className="text-gray-600 text-sm">Upload your products and start selling to customers across Europe.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">What You'll Need</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Business registration documents</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>PAN card and GST registration (for Indian sellers)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Bank account details for receiving payments</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Product information and images</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Pricing strategy for European market</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Benefits of Selling on Fyaril</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-fyaril-blue" />
                Access to European Markets
              </h4>
              <p className="text-gray-600 text-sm">Reach 748 million European consumers including 5.5 million South Asian origin consumers without needing a European business entity.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-fyaril-blue" />
                Simplified Compliance
              </h4>
              <p className="text-gray-600 text-sm">We handle European regulations and compliance requirements, making it easy for you to sell internationally.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-fyaril-blue" />
                Local Currency Payments
              </h4>
              <p className="text-gray-600 text-sm">Receive payments in your local currency with transparent exchange rates.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <Truck className="mr-2 h-5 w-5 text-fyaril-blue" />
                Logistics Support
              </h4>
              <p className="text-gray-600 text-sm">Get help with shipping, customs, and delivery logistics to ensure smooth fulfillment.</p>
            </div>
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
        
        <p className="text-gray-700">Choose the plan that best fits your business needs. All plans include access to the European market and Fyaril's seller tools.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-gray-600 text-sm mb-4">For small businesses</p>
              <div className="text-3xl font-bold">Free</div>
              <p className="text-gray-500 text-sm">+ 15% commission</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">List up to 50 products</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Basic analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Standard support</span>
              </li>
            </ul>
            
            <Button className="w-full bg-fyaril-blue hover:bg-fyaril-blue/80">Select Plan</Button>
          </div>
          
          {/* Standard Plan */}
          <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-fyaril-blue relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-fyaril-blue text-white px-4 py-1 rounded-full text-xs font-medium">MOST POPULAR</div>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-gray-600 text-sm mb-4">For growing businesses</p>
              <div className="text-3xl font-bold">€49<span className="text-lg font-normal">/month</span></div>
              <p className="text-gray-500 text-sm">+ 10% commission</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">List up to 500 products</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Priority support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Marketing tools</span>
              </li>
            </ul>
            
            <Button className="w-full bg-fyaril-blue hover:bg-fyaril-blue/80">Select Plan</Button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-600 text-sm mb-4">For established businesses</p>
              <div className="text-3xl font-bold">€199<span className="text-lg font-normal">/month</span></div>
              <p className="text-gray-500 text-sm">+ 5% commission</p>
            </div>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Unlimited products</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Advanced analytics + API access</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">24/7 dedicated support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Featured placement</span>
              </li>
            </ul>
            
            <Button className="w-full bg-fyaril-blue hover:bg-fyaril-blue/80">Select Plan</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Plan Features Comparison</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Basic</th>
                  <th className="text-center py-3 px-4">Standard</th>
                  <th className="text-center py-3 px-4">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4">Monthly Fee</td>
                  <td className="text-center py-3 px-4">Free</td>
                  <td className="text-center py-3 px-4">€49</td>
                  <td className="text-center py-3 px-4">€199</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Commission Rate</td>
                  <td className="text-center py-3 px-4">15%</td>
                  <td className="text-center py-3 px-4">10%</td>
                  <td className="text-center py-3 px-4">5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Product Listings</td>
                  <td className="text-center py-3 px-4">50</td>
                  <td className="text-center py-3 px-4">500</td>
                  <td className="text-center py-3 px-4">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Support Level</td>
                  <td className="text-center py-3 px-4">Standard</td>
                  <td className="text-center py-3 px-4">Priority</td>
                  <td className="text-center py-3 px-4">Dedicated</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Marketing Tools</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4">Standard</td>
                  <td className="text-center py-3 px-4">Premium</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Reporting & Analytics</td>
                  <td className="text-center py-3 px-4">Basic</td>
                  <td className="text-center py-3 px-4">Advanced</td>
                  <td className="text-center py-3 px-4">Premium + API</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Featured Placement</td>
                  <td className="text-center py-3 px-4">❌</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4">✅</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Badge Eligibility</td>
                  <td className="text-center py-3 px-4">Basic</td>
                  <td className="text-center py-3 px-4">All</td>
                  <td className="text-center py-3 px-4">All + Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
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
        
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Product Listing Guidelines</h3>
          <p className="text-gray-700 mb-6">Follow these guidelines to create effective product listings that will help maximize your sales on Fyaril.</p>
          
          <h4 className="text-lg font-semibold mb-4">Product Information Requirements</h4>
          
          <div className="space-y-4 mb-8">
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">A</div>
              <div>
                <h5 className="font-medium">Product Title</h5>
                <p className="text-gray-600 text-sm">Clear, descriptive title that includes key product information (80-100 characters).</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">B</div>
              <div>
                <h5 className="font-medium">Product Description</h5>
                <p className="text-gray-600 text-sm">Detailed description with features, benefits, usage, and specifications (min. 100 words recommended).</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">C</div>
              <div>
                <h5 className="font-medium">Product Categories</h5>
                <p className="text-gray-600 text-sm">Choose the most appropriate category and subcategories for your product.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">D</div>
              <div>
                <h5 className="font-medium">Variants</h5>
                <p className="text-gray-600 text-sm">Include all available options such as sizes, colors, materials, etc.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">$</div>
              <div>
                <h5 className="font-medium">Pricing</h5>
                <p className="text-gray-600 text-sm">Set competitive prices in your local currency (we'll handle conversion).</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Image Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">Image Requirements</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Minimum 1000 x 1000 pixels resolution</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Pure white background (RGB: 255, 255, 255)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Product should fill at least 85% of the frame</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>File format: JPG or PNG</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Maximum file size: 10MB per image</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Minimum 5 images per product</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3">Image Types to Include</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Main product image (front view)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Product from multiple angles</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Close-up details</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Size/dimension reference</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Lifestyle/in-use images</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Packaging (if relevant)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Inventory Management</h3>
          <p className="text-gray-700 mb-4">Maintain accurate inventory to avoid overselling and ensure customer satisfaction.</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">Inventory Settings</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Set initial stock quantities</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Configure low stock alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Update quantities regularly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Set backorder availability</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3">Lead Times</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-fyaril-blue" />
                  <span>Processing time (1-3 business days recommended)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-fyaril-blue" />
                  <span>Shipping time estimates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-fyaril-blue" />
                  <span>Out-of-stock handling preferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">European Compliance</h3>
          <p className="text-gray-700 mb-4">Ensure your products meet EU regulations for a smooth selling experience.</p>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">C</div>
              <div>
                <h5 className="font-medium">CE Marking</h5>
                <p className="text-gray-600 text-sm">Many products sold in the EU require CE marking to indicate compliance with health, safety, and environmental protection standards.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">E</div>
              <div>
                <h5 className="font-medium">Language Requirements</h5>
                <p className="text-gray-600 text-sm">Product information must be available in English. Additional European languages are encouraged.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">G</div>
              <div>
                <h5 className="font-medium">GDPR Compliance</h5>
                <p className="text-gray-600 text-sm">All customer data must be handled according to GDPR regulations.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Alert className="bg-yellow-50 border-yellow-200">
          <AlertCircle className="h-4 w-4 text-yellow-600" />
          <AlertTitle className="text-yellow-800">Important Note</AlertTitle>
          <AlertDescription className="text-yellow-700">
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
        
        <p className="text-gray-700">Learn how to manage orders efficiently and ship products to European customers through Fyaril.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Order Processing Workflow</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Order Notification</h4>
                <p className="text-gray-600">You'll receive an email and dashboard notification when a customer places an order. Orders also appear in your "New Orders" section of the Fyaril seller dashboard.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Order Confirmation</h4>
                <p className="text-gray-600">Review the order details and confirm that you can fulfill it within the promised timeframe. If there are any issues with inventory or fulfillment, contact Fyaril support immediately.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Packaging</h4>
                <p className="text-gray-600">Package the items securely according to Fyaril's packaging guidelines to ensure they arrive in perfect condition. Include the packing slip generated from your seller dashboard.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Shipping</h4>
                <p className="text-gray-600">Generate shipping labels through the Fyaril dashboard and arrange for pickup or drop-off according to your chosen shipping method.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Tracking & Updates</h4>
                <p className="text-gray-600">The tracking number is automatically shared with the customer. You can monitor shipment progress through your dashboard.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Shipping Options</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Package className="mr-2 h-5 w-5 text-fyaril-blue" />
                Domestic Shipping to Fyaril Warehouse
              </h4>
              <p className="text-gray-600 mb-3">For Standard and Basic plan sellers, ship your products to our warehouse in India.</p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                <li>Ship to our warehouse in Pune or Mumbai</li>
                <li>We handle international logistics, customs, and delivery to the customer</li>
                <li>Lower cost but longer delivery times (14-21 days)</li>
                <li>Ideal for non-urgent, non-perishable items</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <Globe className="mr-2 h-5 w-5 text-fyaril-blue" />
                Direct International Shipping
              </h4>
              <p className="text-gray-600 mb-3">For Premium plan sellers or those with the Exporter badge:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                <li>Ship directly to customers internationally</li>
                <li>Use our negotiated rates with international carriers</li>
                <li>Faster delivery times (7-10 days)</li>
                <li>Higher shipping costs</li>
                <li>You're responsible for export documentation</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-3 flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-fyaril-blue" />
                European Fulfillment
              </h4>
              <p className="text-gray-600 mb-3">For high-volume sellers with consistent sales:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                <li>Store inventory in our European warehouses</li>
                <li>Fastest delivery times (1-3 days within Europe)</li>
                <li>Higher storage fees but lower per-order shipping costs</li>
                <li>Contact your account manager to set up European fulfillment</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Customs & Documentation</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">Required Documentation</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-fyaril-blue" />
                  <span>Commercial invoice (generated from dashboard)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-fyaril-blue" />
                  <span>Packing List</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-fyaril-blue" />
                  <span>Certificate of Origin (if applicable)</span>
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-fyaril-blue" />
                  <span>Product Certifications (if applicable)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3">Customs Information</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-fyaril-blue" />
                  <span>All products must have HS codes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-fyaril-blue" />
                  <span>Accurate product descriptions required</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-fyaril-blue" />
                  <span>Declaration of value must match invoiced amount</span>
                </li>
                <li className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-fyaril-blue" />
                  <span>Some products may require special permits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Delivery Timeframes</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Shipping Method</th>
                  <th className="text-center py-3 px-4">Processing Time</th>
                  <th className="text-center py-3 px-4">Shipping Time</th>
                  <th className="text-center py-3 px-4">Total Delivery Time</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4">Warehouse Shipping</td>
                  <td className="text-center py-3 px-4">1-3 days</td>
                  <td className="text-center py-3 px-4">14-21 days</td>
                  <td className="text-center py-3 px-4">15-24 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Direct International</td>
                  <td className="text-center py-3 px-4">1-3 days</td>
                  <td className="text-center py-3 px-4">7-10 days</td>
                  <td className="text-center py-3 px-4">8-13 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">European Fulfillment</td>
                  <td className="text-center py-3 px-4">1 day</td>
                  <td className="text-center py-3 px-4">1-3 days</td>
                  <td className="text-center py-3 px-4">2-4 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Express Shipping</td>
                  <td className="text-center py-3 px-4">1 day</td>
                  <td className="text-center py-3 px-4">3-5 days</td>
                  <td className="text-center py-3 px-4">4-6 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  'payment': {
    title: 'Payment Withdrawal',
    content: (
      <div className="space-y-6">
        
        <p className="text-gray-700">Learn how payments work on Fyaril and how to withdraw your earnings to your bank account.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Payment Process</h3>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Customer Payment</h4>
                <p className="text-gray-600">When a customer places an order, they pay the full amount to Fyaril, including product price, shipping, and any applicable taxes.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Order Fulfillment</h4>
                <p className="text-gray-600">You ship the product to the customer (either directly or through our warehouse). The order status is updated to "Delivered" once the customer receives the product.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Settlement Period</h4>
                <p className="text-gray-600">After delivery confirmation and the return period has passed (typically 7 days), the payment enters the settlement process.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Payment Release</h4>
                <p className="text-gray-600">Fyaril releases your payment (product price minus commissions and fees) to your seller account balance.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-fyaril-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
              <div>
                <h4 className="font-medium text-lg mb-2">Withdraw Funds</h4>
                <p className="text-gray-600">You can withdraw available funds from your seller account to your registered bank account according to your chosen payment schedule.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Payment Schedule Options</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-3">Weekly</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Payments processed every Monday</li>
                <li>• Minimum withdrawal amount: ₹5,000</li>
                <li>• Available for all seller plans</li>
                <li>• Funds typically arrive in 2-3 business days</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-3">Bi-Weekly</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Payments processed on the 1st and 15th</li>
                <li>• Minimum withdrawal amount: ₹10,000</li>
                <li>• Available for all seller plans</li>
                <li>• Funds typically arrive in 2-3 business days</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-3">On Demand</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Request payment withdrawal anytime</li>
                <li>• Minimum withdrawal amount: ₹25,000</li>
                <li>• Available for Premium plan sellers only</li>
                <li>• Processing fee: 1% of withdrawal amount</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Setting Up Your Payment Account</h3>
          
          <Tabs defaultValue="indian" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="indian">Indian Bank Account</TabsTrigger>
              <TabsTrigger value="international">International Account</TabsTrigger>
            </TabsList>
            
            <TabsContent value="indian" className="space-y-4">
              <p className="text-gray-600 mb-4">For sellers with Indian bank accounts, please provide:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Account holder name (as per bank records)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Bank name and branch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Account number</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>IFSC code</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>PAN number</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>GST number (if applicable)</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600 mt-3">You'll need to verify your bank account by submitting a cancelled cheque or bank statement.</p>
            </TabsContent>
            
            <TabsContent value="international" className="space-y-4">
              <p className="text-gray-600 mb-4">For international sellers, we support payments in multiple currencies:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">Exchange Rates</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• We use mid-market exchange rates from recognized financial institutions</li>
                    <li>• Rates are updated daily</li>
                    <li>• Current exchange rates are visible in your dashboard</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-3">Currency Options</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Receive payments in INR (default for Indian sellers)</li>
                    <li>• Receive payments in EUR (requires EU bank account)</li>
                    <li>• Receive payments in USD (available for premium sellers)</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Fees & Deductions</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Fee Type</th>
                  <th className="text-center py-3 px-4">Basic Plan</th>
                  <th className="text-center py-3 px-4">Standard Plan</th>
                  <th className="text-center py-3 px-4">Premium Plan</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4">Commission</td>
                  <td className="text-center py-3 px-4">15%</td>
                  <td className="text-center py-3 px-4">10%</td>
                  <td className="text-center py-3 px-4">5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Payment Processing</td>
                  <td className="text-center py-3 px-4">3%</td>
                  <td className="text-center py-3 px-4">2.5%</td>
                  <td className="text-center py-3 px-4">2%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Currency Conversion</td>
                  <td className="text-center py-3 px-4">1.5%</td>
                  <td className="text-center py-3 px-4">1%</td>
                  <td className="text-center py-3 px-4">0.5%</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">On-Demand Withdrawal</td>
                  <td className="text-center py-3 px-4">N/A</td>
                  <td className="text-center py-3 px-4">N/A</td>
                  <td className="text-center py-3 px-4">1%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">Note: All fees are deducted automatically before funds are deposited into your seller account.</p>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Withdrawal Help</AlertTitle>
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
        
        <p className="text-gray-700">Find answers to commonly asked questions about selling on Fyaril.</p>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-lg font-semibold text-fyaril-blue mb-2">I want to sell my products in Europe. How can I sell on Fyaril?</h3>
            <p className="text-gray-700">As a first step, apply to become a seller. This will help we create a seller account for you. We will share login details to your registered email address if your credentials are valid. For next steps, you can follow instructions in your seller account.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-lg font-semibold text-fyaril-blue mb-2">How can selling on Fyaril help my Business?</h3>
            <p className="text-gray-700">In 2021, 3 out of 4 Europeans bought something on an e-commerce site. Seller on Fyaril can sell to 748 million European population which includes 5.5 million Indian and south Asian origin consumers. Fyaril opens up global opportunities, particularly entire European region as an additional market for your existing business with minimal effort from you.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-lg font-semibold text-fyaril-blue mb-2">Do I need European bank account or VAT number to sell on Fyaril?</h3>
            <p className="text-gray-700">No! It is not necessary to have a bank account or VAT number in Europe. You can become a supplier on Fyaril's Global marketplace with your Indian GST / PAN numbers. When you are ready for international expansion, we will help you to create a setup in Europe.</p>
            <p className="text-gray-700 mt-2">However, if you already have EU VAT number, you can be a seller on Fyaril as a European vendor with your European credentials.</p>
            <p className="text-gray-700 mt-2">You just need to receive orders -- pack goods -- handover package to the delivery partner.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-lg font-semibold text-fyaril-blue mb-2">We are already selling on an e-commerce marketplaces in India. Can I still sell on Fyaril?</h3>
            <p className="text-gray-700">Yes! In fact, you are a step closer to selling globally on Fyaril. Just apply for a vendor account, upload digital inventory through vendor panel and start receiving orders from Europe.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-lg font-semibold text-fyaril-blue mb-2">I own a brand and sell my products on e-commerce marketplaces in India and/or abroad. Can I sell on Fyaril?</h3>
            <p className="text-gray-700">Yes! In fact, Fyaril is created with a vision to take trusted Indian brands Global. You can start by signing up as B2C vendor and as your sales grow, you will be able to store goods in Europe for quick fulfillment. Fyaril is a fantastic platform to learn about new geography, customer preferences and grow in a risk & investment free manner.</p>
            <p className="text-gray-700 mt-2">Just apply for a vendor account. Complete KYC for a brand. You will receive Top Brand badge which will be displayed on your every product page.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-lg font-semibold text-fyaril-blue mb-2">What role does Fyaril play in B2B model?</h3>
            <p className="text-gray-700">Fyaril allows you to manage everything in one place, from customer requirement to order fulfillment. With the platform that's accessible and available to your and customers, Fyaril B2B e-commerce is a great choice to cross-sell and up-sell to existing buyers. With options for automated sales processes between businesses, suppliers and distributors, our e-commerce platform can help streamline your B2B operations and improve the customer experience.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-lg font-semibold text-fyaril-blue mb-2">Why is so much documentation required for KYC?</h3>
            <p className="text-gray-700">Documentation and KYC are essential compliance requirements for international trade. European customs and regulatory authorities require detailed documentation to ensure products meet safety standards, tax obligations are met, and trade regulations are followed. This protects both sellers and customers while ensuring smooth cross-border transactions.</p>
          </div>
        </div>
      </div>
    )
  },
    'register': {
    title: 'Register as a Vendor',
    content: (
      <div className="space-y-6">
        
        <p className="text-gray-700">Join thousands of vendors selling to European customers. Follow these steps to create your vendor account and start your global selling journey.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Registration Process</h3>
          
          <div className="relative pb-6">
            {/* Timeline */}
            <div className="absolute left-[30px] top-0 h-full w-1 bg-fyaril-teal/30"></div>
            
            {/* Steps */}
            <div className="space-y-8 relative">
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">1</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Basic Information</h4>
                  <p className="text-gray-600">Provide your business name, contact details, and primary business category. This initial step takes about 5 minutes to complete.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Business name and address</li>
                    <li>Contact person details</li>
                    <li>Phone and email verification</li>
                    <li>Primary product categories</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">2</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Document Upload</h4>
                  <p className="text-gray-600">Upload required business documents for verification. All documents should be clear and valid.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                    <li>Business registration certificate</li>
                    <li>PAN card (for Indian businesses)</li>
                    <li>GST registration (if applicable)</li>
                    <li>Bank account details</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">3</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Application Review</h4>
                  <p className="text-gray-600">Our team reviews your application within 2-3 business days. We may contact you for additional information if needed.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start relative">
                <div className="flex-shrink-0 w-[60px] h-[60px] rounded-full bg-fyaril-blue text-white flex items-center justify-center font-bold text-lg z-10">4</div>
                <div className="bg-fyaril-teal/10 p-4 rounded-lg flex-grow">
                  <h4 className="font-medium text-lg mb-2">Account Activation</h4>
                  <p className="text-gray-600">Once approved, you will receive your seller dashboard credentials and can start listing your products immediately.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Ready to Register?</AlertTitle>
          <AlertDescription>
            Start your vendor registration today and join the Fyaril marketplace to reach European customers.
          </AlertDescription>
          <Button className="mt-3 bg-fyaril-blue hover:bg-fyaril-blue/80">Start Registration</Button>
        </Alert>
      </div>
    )
  },
  'kyc': {
    title: 'Complete Seller KYC',
    content: (
      <div className="space-y-6">
        
        <p className="text-gray-700">Know Your Customer (KYC) verification is mandatory for all sellers on Fyaril. This ensures compliance with international trade regulations and builds trust with customers.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
          
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="individual">Individual/Proprietorship</TabsTrigger>
              <TabsTrigger value="company">Company/LLP</TabsTrigger>
              <TabsTrigger value="partnership">Partnership</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <UserCheck className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Identity Proof
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>PAN Card (mandatory)</li>
                    <li>Aadhaar Card</li>
                    <li>Passport</li>
                    <li>Driving License</li>
                  </ul>
                </div>
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Address Proof
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Utility Bill (last 3 months)</li>
                    <li>Bank Statement</li>
                    <li>Rental Agreement</li>
                    <li>Property Tax Receipt</li>
                  </ul>
                </div>
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Bank Details
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Cancelled Cheque</li>
                    <li>Bank Statement (last 3 months)</li>
                    <li>Account opening form</li>
                  </ul>
                </div>
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <Package className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Business Proof
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>GST Certificate (if applicable)</li>
                    <li>Trade License</li>
                    <li>Shop & Establishment License</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="company" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Company Documents
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Certificate of Incorporation</li>
                    <li>Memorandum of Association</li>
                    <li>Articles of Association</li>
                    <li>Board Resolution</li>
                  </ul>
                </div>
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Director Details
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Director's PAN Cards</li>
                    <li>Director's Aadhaar Cards</li>
                    <li>Director's Address Proof</li>
                    <li>Director Identification Number (DIN)</li>
                  </ul>
                </div>
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Compliance Documents
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>GST Registration Certificate</li>
                    <li>PAN Card of Company</li>
                    <li>TAN Certificate</li>
                    <li>IEC Code (for exporters)</li>
                  </ul>
                </div>
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Bank Account
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Current Account Details</li>
                    <li>Bank Statements (6 months)</li>
                    <li>Account Opening Form</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="partnership" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <FileText className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Partnership Documents
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Partnership Deed</li>
                    <li>Registration Certificate</li>
                    <li>PAN Card of Partnership</li>
                    <li>GST Registration</li>
                  </ul>
                </div>
                <div className="border border-fyaril-teal/30 rounded-lg p-4">
                  <h4 className="font-medium text-lg mb-2 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-fyaril-blue" />
                    Partner Details
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>All Partners' PAN Cards</li>
                    <li>All Partners' Aadhaar Cards</li>
                    <li>Address Proof of Partners</li>
                    <li>Partnership Capital Contribution</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">KYC Verification Process</h3>
          
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white px-3 py-1 rounded-full text-sm font-medium">Step 1</div>
              <div>
                <h4 className="font-medium text-lg">Document Upload</h4>
                <p className="text-gray-600">Upload clear, high-quality images of all required documents through your seller dashboard.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white px-3 py-1 rounded-full text-sm font-medium">Step 2</div>
              <div>
                <h4 className="font-medium text-lg">Initial Review</h4>
                <p className="text-gray-600">Our KYC team performs an initial review within 24-48 hours and may request additional documents.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white px-3 py-1 rounded-full text-sm font-medium">Step 3</div>
              <div>
                <h4 className="font-medium text-lg">Verification Call</h4>
                <p className="text-gray-600">A verification call will be scheduled to confirm business details and answer any questions.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white px-3 py-1 rounded-full text-sm font-medium">Step 4</div>
              <div>
                <h4 className="font-medium text-lg">Final Approval</h4>
                <p className="text-gray-600">Once verified, your KYC status will be updated and you can start selling with full features.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Document Guidelines</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2 text-green-700">✓ Do's</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use high-resolution images (min 1080px)</li>
                <li>Ensure all text is clearly readable</li>
                <li>Upload original documents</li>
                <li>Keep documents updated and valid</li>
                <li>Follow file format and size guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2 text-red-700">✗ Don'ts</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use blurry or pixelated images</li>
                <li>Include watermarks or logos</li>
                <li>Submit expired or invalid documents</li>
                <li>Alter or edit documents</li>
                <li>Upload incomplete forms</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>KYC Compliance</AlertTitle>
          <AlertDescription>
            Proper documentation ensures smooth verification and faster approval.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'edit-profile': { 
    title: 'Editing my vendor profile', 
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-800">
          Keep your vendor profile updated to achieve best sales performance and smooth communication.
        </p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4 text-fyaril-blue">Editing Vendor Profile from the Vendor Panel</h3>
          
          <div className="space-y-4 text-gray-700">
            <p>To edit your vendor profile, login with your login ID and password through the Seller Partner dropdown menu.</p>
            <p>In the top right corner you can see a little profile icon with a dropdown menu. Click on the profile icon and then select 'Edit Profile'.</p>
            
            <div className="my-6 text-center">
              <img 
                src="https://fyaril-live.s3.eu-central-1.amazonaws.com/images/Help+Center/image043.png" 
                alt="Profile icon with Edit Profile option in dropdown menu" 
                className="inline-block max-w-full md:max-w-lg rounded-lg shadow-md border" 
              />
              
              <p className="text-sm text-gray-500 mt-2">Accessing 'Edit Profile' from the vendor panel.</p>
              
            </div>
            
            <p>Once you come to the profile edit page, you can edit your information, such as your billing address, shipping address, account information and such.</p>
            <p>Once you make your edits click on <strong>SAVE</strong> so that your changes are saved to our servers.</p>
            
            <div className="my-6 text-center">
              <img 
                src="https://fyaril-live.s3.eu-central-1.amazonaws.com/images/Help+Center/image044.png" 
                alt="Vendor profile edit page with information fields and SAVE button" 
                className="inline-block max-w-full md:max-w-xl rounded-lg shadow-md border"
              />
            
              <p className="text-sm text-gray-500 mt-2">Saving changes on the profile edit page.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-fyaril-blue/10 border-l-4 border-fyaril-blue rounded-md">
          <h4 className="text-lg font-semibold mb-2 text-fyaril-blue">Have Questions?</h4>
          <p className="text-gray-700">
            If you have any additional queries don't hesitate to get in touch with us through{' '}
            <strong>My seller Message Center</strong>, or you can email us at{' '}
            <a href="mailto:sellers@fyaril.com" className="font-medium text-fyaril-blue hover:underline">
              sellers@fyaril.com
            </a>.
          </p>
        </div>
      </div>
    )
  },
  'complete-profile': {
    title: 'Complete seller profile',
    content: (
      <div className="space-y-6">
        
        <p className="text-gray-700">A complete seller profile is essential for success on Fyaril. It helps customers understand your business and builds trust in your brand.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Profile Completion Checklist</h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Business information and description</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Contact details and address</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Business documents and certificates</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-gray-700">Product categories and offerings</span>
            </div>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Profile Benefits</AlertTitle>
          <AlertDescription>
            Complete profiles get 3x more customer inquiries and higher search rankings.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'badges': {
    title: 'Vendor Badges',
    content: (
      <div className="space-y-6">
        
        <p className="text-gray-700">Vendor badges are special recognition symbols that appear on your profile and product listings. They help build customer trust and increase your visibility on the Fyaril marketplace.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Available Badges</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-medium text-lg">Verified Seller</h4>
              </div>
              <p className="text-gray-600 mb-2">Awarded after completing KYC verification and maintaining good standing for 30 days.</p>
              <div className="text-sm text-blue-600 font-medium">✓ KYC Complete</div>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h4 className="font-medium text-lg">Top Rated</h4>
              </div>
              <p className="text-gray-600 mb-2">For sellers with 4.5+ star rating and minimum 50 reviews.</p>
              <div className="text-sm text-yellow-600 font-medium">⭐ 4.5+ Rating</div>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Truck className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-medium text-lg">Fast Shipping</h4>
              </div>
              <p className="text-gray-600 mb-2">For sellers who consistently ship within 24 hours of order confirmation.</p>
              <div className="text-sm text-green-600 font-medium">🚚 Quick Dispatch</div>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-purple-100 p-2 rounded-full">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-medium text-lg">Premium Seller</h4>
              </div>
              <p className="text-gray-600 mb-2">Exclusive badge for sellers with premium subscription and excellent performance.</p>
              <div className="text-sm text-purple-600 font-medium">👑 Premium Member</div>
            </div>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Earn Badges</AlertTitle>
          <AlertDescription>
            Maintain excellent service standards to earn and keep your vendor badges.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'image-guidelines': {
    title: 'Image Guidelines',
    content: (
      <div className="space-y-6">
        
        <p className="text-gray-700">High-quality images are crucial for attracting customers and showcasing your products effectively. Follow these guidelines to ensure your images meet Fyaril standards.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Technical Requirements</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-2 flex items-center">
                <Camera className="mr-2 h-5 w-5 text-fyaril-blue" />
                Image Specifications
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Minimum resolution: 800x800 pixels</li>
                <li>Recommended: 1200x1200 pixels</li>
                <li>Format: JPG, PNG, WEBP</li>
                <li>Maximum file size: 5MB</li>
                <li>Aspect ratio: 1:1 (square) preferred</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-2 flex items-center">
                <Eye className="mr-2 h-5 w-5 text-fyaril-blue" />
                Quality Standards
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Sharp and well-focused images</li>
                <li>Good lighting conditions</li>
                <li>Clean, clutter-free background</li>
                <li>True-to-life colors</li>
                <li>Multiple angles for products</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Do's and Don'ts</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-2 text-green-700">✓ Do's</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use natural lighting when possible</li>
                <li>Show products from multiple angles</li>
                <li>Include size reference when relevant</li>
                <li>Keep backgrounds simple and clean</li>
                <li>Show products in use/context</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-2 text-red-700">✗ Don'ts</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Use blurry or pixelated images</li>
                <li>Include watermarks or logos</li>
                <li>Show damaged or defective products</li>
                <li>Use misleading filters or effects</li>
                <li>Include personal information in images</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Image Optimization</AlertTitle>
          <AlertDescription>
            High-quality images can increase your conversion rates by up to 40%. Invest time in creating great product photos.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'default': {
    title: 'Seller Help Center',
    content: (
      <div className="space-y-6">
        
        <p className="text-gray-700">Find answers to common questions and learn how to make the most of your seller account on Fyaril.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Popular Topics</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>How to register as a vendor</li>
            <li>Completing your KYC verification</li>
            <li>Editing your vendor profile</li>
            <li>Understanding vendor badges</li>
            <li>Image guidelines for product listings</li>
          </ul>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Need More Help?</AlertTitle>
          <AlertDescription>
            Contact our support team for personalized assistance.
          </AlertDescription>
          <Button className="mt-3 bg-fyaril-blue hover:bg-fyaril-blue/80">Contact Support</Button>
        </Alert>
      </div>
    )
  }
};


const SellerDetail = () => {
  const { slug } = useParams();
  const [pageContent, setPageContent] = useState(null);

  useEffect(() => {
    if (slug && sellerPages[slug]) {
      setPageContent(sellerPages[slug]);
    } else {
      
      setPageContent(sellerPages['default']);
    }
  }, [slug]);

  if (!pageContent) {
    return (
      <MainLayout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
            <p className="text-gray-600 mt-2">The requested page could not be found.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{pageContent.title}</h1>
          {pageContent.content}
        </div>
      </div>
    </MainLayout>
  );
};

export default SellerDetail;
