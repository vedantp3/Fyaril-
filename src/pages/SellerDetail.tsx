import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle, Package, CreditCard, Truck, FileText, Users, Shield, Star, Award, Camera, Upload, Eye, Edit, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Content for different seller pages
const sellerPages = {
  'register': {
    title: 'Register as a Vendor',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Register as a Vendor on Fyaril</h2>
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
        <h2 className="text-2xl font-bold">Complete Seller KYC</h2>
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
    title: 'Edit my vendor Profile',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Edit Your Vendor Profile</h2>
        <p className="text-gray-700">Keep your vendor profile updated to maintain credibility and attract more customers. A complete profile helps build trust with buyers.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Profile Sections</h3>
          
          <div className="space-y-4">
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-2 flex items-center">
                <Edit className="mr-2 h-5 w-5 text-fyaril-blue" />
                Business Information
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Business name and description</li>
                <li>Contact details</li>
                <li>Business address</li>
                <li>Operating hours</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-2 flex items-center">
                <Camera className="mr-2 h-5 w-5 text-fyaril-blue" />
                Visual Elements
              </h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                <li>Profile logo/image</li>
                <li>Cover banner</li>
                <li>Product showcase images</li>
                <li>Company certificates</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Alert className="bg-fyaril-blue/10 border-fyaril-blue">
          <AlertCircle className="h-4 w-4 text-fyaril-blue" />
          <AlertTitle>Profile Optimization</AlertTitle>
          <AlertDescription>
            A complete profile increases your visibility and helps customers trust your business.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'complete-profile': {
    title: 'Complete seller profile',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Complete Your Seller Profile</h2>
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
  'vendor-badges': {
    title: 'Vendor Badges',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Vendor Badges</h2>
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
        <h2 className="text-2xl font-bold">Image Guidelines</h2>
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
        <h2 className="text-2xl font-bold">Welcome to the Seller Help Center</h2>
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
      // Default content for /sellers route without slug or unknown slug
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
