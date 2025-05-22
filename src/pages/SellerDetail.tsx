import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { ArrowLeft, Calendar, Clock, User, Check, AlertCircle } from 'lucide-react';
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
    "plans": {
      title: "Seller Plans",
      lastUpdated: "May 18, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <p>Fyaril offers different plans to cater to sellers at various stages of their business. Each plan is designed to help you grow your business on our platform.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-fyaril-blue/20">
              <div className="bg-gradient-to-r from-fyaril-blue to-fyaril-teal p-4 text-white">
                <h3 className="text-xl font-bold text-center">Basic Plan</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">Free</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>List up to 50 products</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>5% Commission fee</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Basic seller support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Standard visibility in search</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-fyaril-blue hover:bg-fyaril-darkblue">Get Started</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-fyaril-blue/20 transform scale-105">
              <div className="bg-gradient-to-r from-fyaril-blue to-fyaril-darkblue p-4 text-white">
                <h3 className="text-xl font-bold text-center">Standard Plan</h3>
                <p className="text-xs text-center text-white/80 mt-1">Most Popular</p>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>List up to 500 products</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>3% Commission fee</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Priority seller support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Enhanced visibility in search</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Promotional tools</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-fyaril-blue hover:bg-fyaril-darkblue">Subscribe Now</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-fyaril-blue/20">
              <div className="bg-gradient-to-r from-fyaril-teal to-fyaril-blue p-4 text-white">
                <h3 className="text-xl font-bold text-center">Premium Plan</h3>
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Unlimited products</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>2% Commission fee</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Top visibility in search</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="w-full bg-fyaril-teal hover:bg-fyaril-blue text-fyaril-blue hover:text-white">Contact Sales</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-8">
            <h3 className="text-xl font-medium mb-4">Plan Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maximum Products</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Commission Fee</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Customer Support</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Standard</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Priority</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Dedicated</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <h3 className="text-xl font-medium text-fyaril-blue mb-2">Have Questions About Pricing?</h3>
            <p>Our team is ready to help you choose the best plan for your business needs.</p>
            <Button className="mt-4 bg-fyaril-blue hover:bg-fyaril-darkblue">
              Contact Sales Team
            </Button>
          </div>
        </div>
      )
    },
    "kyc": {
      title: "Complete Seller KYC",
      lastUpdated: "May 16, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700">For selling on Fyaril, all sellers must complete basic KYC (Know Your Customer) and receive Fyaril's verified badge.</p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Uploading KYC Documents through Vendor Panel</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="ml-2">
                To upload KYC documents through the vendor panel, login with your login ID and password through the Seller Partner dropdown menu.
              </li>
              <li className="ml-2">
                Click on the 'My Seller' dropdown menu and make your way to the 'KYC & Certification' tab.
              </li>
              <li className="ml-2">
                Here you can see different tabs for different kinds of certifications. Click on the tab of which you wish to apply for the respective badge. In order to receive the badge, you will need to upload a series of documents.
              </li>
              <li className="ml-2">
                Click on the 'Choose File' button to upload a file from your desktop. Once you have uploaded all the necessary documents click on save.
              </li>
            </ol>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-lg font-medium text-yellow-800">Important Notes</h4>
                <ul className="list-disc list-inside mt-2 space-y-2 text-yellow-800">
                  <li>All vendors must complete the Verified KYC. By default for all vendors, order fulfillment is done by Fyaril.</li>
                  <li>Incomplete KYC will result in delay in order processing and potentially cancellation of orders.</li>
                  <li>Completing the 'Exporter' tab is mandatory if the order fulfillment is done by the vendor. This can be done by uploading all the documents from Exporter tab.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Need Additional Help?</h3>
            <p>If you have any additional queries, don't hesitate to get in touch with us through:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>My seller > Message Center, or you can email us on sellers@fyaril.com.</li>
              <li>You can find more information about KYC Types and purpose for each badge on our website.</li>
            </ul>
          </div>
          
          <div className="mt-6 p-5 rounded-lg bg-fyaril-teal/10 border border-fyaril-teal/30">
            <h3 className="text-xl font-medium text-fyaril-blue mb-3">Was the information found helpful?</h3>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-fyaril-blue text-fyaril-blue hover:bg-fyaril-blue hover:text-white">
                Yes
              </Button>
              <Button variant="outline" className="border-fyaril-blue text-fyaril-blue hover:bg-fyaril-blue hover:text-white">
                No
              </Button>
            </div>
          </div>
        </div>
      )
    },
    "edit-profile": {
      title: "Edit My Vendor Profile",
      lastUpdated: "May 14, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <p>Keep your vendor profile updated to achieve best sales performance and smooth communication.</p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Editing Vendor Profile from the Vendor Panel</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="ml-2">
                To edit your vendor profile, login with your login ID and password through the Seller Partner dropdown menu.
              </li>
              <li className="ml-2">
                In the top right corner you can see a little profile icon with a dropdown menu. Click on the profile icon and then select 'Edit Profile'.
              </li>
              <li className="ml-2">
                <div className="mt-2 mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile Edit Menu" 
                    className="rounded-lg border border-gray-200 max-w-full h-auto"
                    style={{ maxHeight: "200px" }}
                  />
                </div>
              </li>
              <li className="ml-2">
                Once you come to the profile edit page, you can edit your information, such as your billing address, shipping address, account information and such.
              </li>
              <li className="ml-2">
                Once you make your edits click on SAVE so that your changes are saved to our servers.
              </li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Profile Edit Screenshot</h3>
            <div className="mt-2">
              <img 
                src="/placeholder.svg" 
                alt="Profile Edit Page" 
                className="rounded-lg border border-gray-200 max-w-full h-auto"
                style={{ maxHeight: "300px" }}
              />
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Need Additional Help?</h3>
            <p>If you have any additional queries don't hesitate to get in touch with us through:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>My seller > Message Center, or you can email us on sellers@fyaril.com.</li>
            </ul>
          </div>
        </div>
      )
    },
    "complete-profile": {
      title: "Complete Seller Profile",
      lastUpdated: "May 12, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <p>Seller profile has important information for selling your products globally. Ensure profile is complete for the best selling experience.</p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Editing/Updating My seller Profile from vendor panel</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="ml-2">
                To edit your seller profile from the vendor panel, login with your login ID and password through the Seller Partner dropdown menu.
              </li>
              <li className="ml-2">
                Click on the 'My Seller' dropdown menu and make your way to 'My User Profile'.
              </li>
              <li className="ml-2">
                <div className="mt-2 mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="User Profile Menu" 
                    className="rounded-lg border border-gray-200 max-w-full h-auto"
                    style={{ maxHeight: "200px" }}
                  />
                </div>
              </li>
              <li className="ml-2">
                In the seller profile, you will see numerous different tabs:
                <div className="mt-2 mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Profile Tabs" 
                    className="rounded-lg border border-gray-200 max-w-full h-auto"
                    style={{ maxHeight: "200px" }}
                  />
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Check the General tab</h3>
            <p>All details must be correctly filled:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li className="ml-2">Connect with stripe - Connect your stripe account for automatic direct payouts to your bank.</li>
              <li className="ml-2">If you have Business/Large then connect with Fyaril/B2B or Fyaril/B2C accounts.</li>
              <li className="ml-2">If you have verified legal/large then connect with Fyaril/Trade Private Limited account.</li>
              <li className="ml-2">Business Document - all documents required by the government for running a foreign trade and payroll.</li>
              <li className="ml-2">Signature – soft copy of signature for use on invoices.</li>
              <li className="ml-2">Bank details – used for payouts and invoices.</li>
              <li className="ml-2">Billing address details such as registered office address and phone number where your invoices will be printed up from.</li>
              <li className="ml-2">Logo - kindly upload your Logo as this would be printed on the invoice and displayed on your presentation.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Fill in return terms and conditions</h3>
            <p>These terms are seen by the customers and agreed before completing order for your products.</p>
            <p>Return policy terms and conditions related to products and company policies. FOR EXAMPLE: the offer return and/or exchange within the first 14 days of your purchases if 14 days have passed since your purchase you will not be offered a refund and/or exchange of any kind.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Need Additional Help?</h3>
            <p>Once you make the changes click on SAVE.</p>
            <p>If you have any additional queries don't hesitate to get in touch with us through:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>My seller > Message Center, or you can email us on sellers@fyaril.com.</li>
            </ul>
          </div>
        </div>
      )
    },
    "badges": {
      title: "Vendor Badges",
      lastUpdated: "May 10, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">What is a badge? Why do I need it for my business?</h3>
            <p>Vendor badges are the visual representation of what verification you've completed on the platform. These badges make your store and products more trustworthy for customers. Each badge helps to increase trust and certifies that you are genuine vendor on our platform. These badges are very important for building your reputation.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Where are the badges displayed on your website?</h3>
            <p>Badges will be visible on your vendor profile and on the product detail pages where your products are displayed. These are important brand differentiators and marks of trust that you have the right verification in your store and your products are checked by Fyaril.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 border">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S.No</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badge</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badge</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">1</td>
                  <td className="px-6 py-4 whitespace-nowrap">Verified</td>
                  <td className="px-6 py-4">All sellers on Fyaril must have verified badge.</td>
                  <td className="px-6 py-4 whitespace-nowrap">Verified Badge</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">2</td>
                  <td className="px-6 py-4 whitespace-nowrap">Business</td>
                  <td className="px-6 py-4">This badge indicates your store has customers using business accounts.</td>
                  <td className="px-6 py-4 whitespace-nowrap">Business</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">3</td>
                  <td className="px-6 py-4 whitespace-nowrap">Brand</td>
                  <td className="px-6 py-4">You are a brand! Get verified badge on Fyaril.</td>
                  <td className="px-6 py-4 whitespace-nowrap">Top Brand</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">4</td>
                  <td className="px-6 py-4 whitespace-nowrap">Green Certification</td>
                  <td className="px-6 py-4">You have a range of your products with no harmful materials and products through your vendor verification.</td>
                  <td className="px-6 py-4 whitespace-nowrap">Green Verified</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-6">
            <h3 className="text-xl font-medium mb-4">Getting the Verified Badge</h3>
            <p>These are the documents required for getting the verified badge:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Business Registration - Upload a copy of the business registration from your company name as it appears on the business registration document. This document should have the complete company name, management information, ownership, structure, business address (must be physical address, not postal box), registration date, registration number and the name/s of the owner/s and the date of issue.</li>
              <li>Business VAT Registration - Upload a copy of the sales tax registration of your business when it is applicable in your jurisdiction. The sales tax number must be valid. Your business must be registered for the state/province where you will be making your sales from.</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Uploading Documents</h3>
            <p>To upload documents, follow these steps:</p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Login to your vendor account by passing the partner button, you need to submit the application in order to get your badge.</li>
              <li>Upload your documents in the future after you have made the login.</li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Need Additional Help?</h3>
            <p>If you have any additional queries don't hesitate to get in touch with us through:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>My seller > Message Center, or you can email us on sellers@fyaril.com.</li>
            </ul>
          </div>
        </div>
      )
    },
    "product-listing": {
      title: "Product Listing",
      lastUpdated: "May 9, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Uploading Products via Excel on Fyaril.com</h3>
            <p>This guide will help you through the process of efficiently uploading multiple products to your seller account using a pre-designed Excel file. To reduce the data entry time, please download and use the sample Excel file.</p>
            
            <div className="aspect-w-16 aspect-h-9 mt-6 mb-6">
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">Video Tutorial Placeholder</p>
              </div>
            </div>
            
            <h4 className="text-lg font-medium mt-6 mb-3">Step-by-Step Instructions:</h4>
            <ol className="list-decimal list-inside space-y-4">
              <li className="ml-2">
                Log in to the Fyaril Portal using your login ID and password. Click on the Administrator tab on the top.
              </li>
              <li className="ml-2">
                Hover over Import/Export. Select the product template dropdown from the administrative dropdown, here is what it looks like and how to select it.
              </li>
              <li className="ml-2">
                Click Excel Template. On the import/export page, what I need to do if you are a first-time store administrator? You need to select the first option on the administrative portal; this is labeled "PRODUCT A"-"Product Template". From here you need to click download.
              </li>
              <li className="ml-2">
                Once the file downloads to your computer, you can open the file with Excel. Check the required fields for your categories.
              </li>
              <li className="ml-2">
                Input the Data using Excel. Enter all the information from your products here. Template and guide are provided in the Excel sheet.
              </li>
              <li className="ml-2">
                Save and Close the Excel file after completing from your computer/device.
              </li>
              <li className="ml-2">
                Go to Import and click on the PRODUCT icon. This is located in the same area where I kept the PRODUCT A Template.
              </li>
              <li className="ml-2">
                Browse to the file you have saved locally. Click it, and uploading from your computer.
              </li>
            </ol>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Important Tips for Product Listings</h3>
            <ul className="list-disc list-inside space-y-2">
              <li className="ml-2">Use high-quality images with proper lighting.</li>
              <li className="ml-2">Write detailed descriptions that highlight key features.</li>
              <li className="ml-2">Set competitive prices based on market research.</li>
              <li className="ml-2">Choose appropriate categories for better visibility.</li>
              <li className="ml-2">Include all relevant specifications in your listing.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-medium text-fyaril-blue mb-3">Please note</h3>
            <p>Many products can face issues on Fyaril if they have a stolen <a href="#" className="text-fyaril-blue underline">Product Approval</a>. The Excel import option won't make or break your inventory, upload or individual product listings. It is available as a seller feature to quickly process batches of the merchandise. This is standard quality control step.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Need More Help?</h3>
            <p>If you encounter any difficulties please points out the upload process.</p>
            <p>You can also contact our support team through sellers@fyaril.com.</p>
          </div>
        </div>
      )
    },
    "payment": {
      title: "Payment Withdrawal",
      lastUpdated: "May 8, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <p>To conduct a payment withdrawal as a vendor, follow the steps listed below:</p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Step-by-Step Payment Withdrawal Process</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="ml-2">
                Log in to My Vendor account.
              </li>
              <li className="ml-2">
                Go to My Seller > Accounting. Here you will be able to see transaction details, and this is also where you can apply to withdraw payments.
                <div className="mt-3 mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Accounting Section" 
                    className="rounded-lg border border-gray-200 max-w-full h-auto"
                    style={{ maxHeight: "250px" }}
                  />
                </div>
              </li>
              <li className="ml-2">
                Before you apply for the payment withdrawal, ensure the amount you have chosen to withdraw. This amount must match the bank amount in fields related to Fyaril sales invoice. If the amount does not match exactly, your withdrawal request cannot be processed.
              </li>
              <li className="ml-2">
                Once your withdrawal request is placed, the payment will be credited to your bank account as soon as the order becomes qualified for payout.
              </li>
            </ol>
          </div>
          
          <div className="bg-fyaril-teal/10 p-6 rounded-xl border border-fyaril-teal/30">
            <div className="flex">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-green-500" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">Account Requirements</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>To ensure smooth processing of your payment withdrawal, make sure your account has:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Completed KYC verification</li>
                    <li>Valid bank account details</li>
                    <li>Active stripe connection (for automatic transfers)</li>
                    <li>No ongoing disputes or issues with pending orders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Need Additional Help?</h3>
            <p>If you have any additional queries don't hesitate to get in touch with us through:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>My seller > Message Center, or you can email us on sellers@fyaril.com.</li>
            </ul>
          </div>
          
          <div className="mt-6 p-5 rounded-lg bg-fyaril-teal/10 border border-fyaril-teal/30">
            <h3 className="text-xl font-medium text-fyaril-blue mb-3">Was the information found helpful?</h3>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-fyaril-blue text-fyaril-blue hover:bg-fyaril-blue hover:text-white">
                Yes
              </Button>
              <Button variant="outline" className="border-fyaril-blue text-fyaril-blue hover:bg-fyaril-blue hover:text-white">
                No
              </Button>
            </div>
          </div>
        </div>
      )
    },
    "contact-admin": {
      title: "Contact Fyaril Administrator",
      lastUpdated: "May 7, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-6">
          <p>Use specific communication channels to ensure relevant information is shared as quickly as possible with the right people.</p>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Contacting Administrators as a Vendor</h3>
            <ol className="list-decimal list-inside space-y-4">
              <li className="ml-2">
                To contact administrators as a vendor, login with your login ID and password through the Seller Partner dropdown menu.
              </li>
              <li className="ml-2">
                Click on the 'My Seller' dropdown menu and make your way to the Message Center.
                <div className="mt-3 mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Message Center Navigation" 
                    className="rounded-lg border border-gray-200 max-w-full h-auto"
                    style={{ maxHeight: "200px" }}
                  />
                </div>
              </li>
              <li className="ml-2">
                On the right of this page you should find a button. This will take you to the 'Contact Administrator' page.
                <div className="mt-3 mb-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Administrator Button" 
                    className="rounded-lg border border-gray-200 max-w-full h-auto"
                    style={{ maxHeight: "200px" }}
                  />
                </div>
              </li>
              <li className="ml-2">
                Once on this page, fill in the subject matter you wish to discuss and your detailed message in the box below:
                <div className="mt-3 mb-4 p-4 bg-white rounded-lg border border-gray-300">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact administrator</label>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject:</label>
                    <div className="border border-gray-300 rounded h-8"></div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your message is (not required):</label>
                    <div className="border border-gray-300 rounded h-24"></div>
                  </div>
                </div>
              </li>
              <li className="ml-2">
                Click on the SEND button once you have finished filling all the sections of the page. This will send your message to the Fyaril team and we will get back to you as soon as possible.
              </li>
            </ol>
          </div>
          
          <div className="bg-fyaril-blue/10 p-6 rounded-xl border border-fyaril-blue/20">
            <h3 className="text-lg font-medium text-fyaril-blue mb-3">Contact Methods</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-fyaril-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="ml-3 text-sm">
                  <p className="text-gray-700 font-medium">Email Support</p>
                  <p className="text-gray-600">Send us an email at sellers@fyaril.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-fyaril-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 text-sm">
                  <p className="text-gray-700 font-medium">Help Center</p>
                  <p className="text-gray-600">Browse our extensive knowledge base</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 text-fyaril-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3 text-sm">
                  <p className="text-gray-700 font-medium">Message Center</p>
                  <p className="text-gray-600">Send messages directly through your seller account</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-4">Need Additional Help?</h3>
            <p>If you have any additional queries don't hesitate to get in touch with us through:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>My seller > Message Center, or you can email us on sellers@fyaril.com.</li>
            </ul>
          </div>
        </div>
      )
    },
    "faq": {
      title: "Seller General FAQ",
      lastUpdated: "May 5, 2025",
      author: "Fyaril Support Team",
      content: (
        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-medium mb-6">Frequently Asked Questions</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-lg text-fyaril-blue">I want to sell my products on Fyaril. How can I sell on Fyaril?</h4>
                <p className="mt-2 text-gray-700">
                  As a first step, apply to become a seller. This will help us create a unique account for you. You will then receive an email with login credentials and a password reset link. Log into your Fyaril account, fill out your information in your vendor profile, and apply for seller verification.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-fyaril-blue">How can I verify my Fyaril Seller Business Account?</h4>
                <p className="mt-2 text-gray-700">
                  After applying for a seller account, your account will go through our partnership review. After your Fyaril seller account is approved, you'll receive an email letting you know that your account is active and good to go. This will redirect you to your vendor panel, where you can begin working with us!
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-fyaril-blue">Do I need a bank account to place orders on Fyaril?</h4>
                <p className="mt-2 text-gray-700">
                  Yes, it is not mandatory to have a bank account to set up a basic account on Fyaril. For selling products, however, you can't sell anything on Fyaril without a proper vendor verification with your payment details.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-fyaril-blue">We are already selling on an ecommerce marketplace in India. Can I still sell on Fyaril?</h4>
                <p className="mt-2 text-gray-700">
                  Yes! You can use a step-by-step listing guide on Fyaril. Just apply for the vendor account, upload a catalog of products and you're good to go!
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-fyaril-blue">I own a brand and sell my products on an ecommerce marketplace in India which doesn't. Can I still sell on Fyaril?</h4>
                <p className="mt-2 text-gray-700">
                  Yes! In fact Fyaril is created specifically to serve named Indian brands. Fyaril has been by starting to work with the known Indian companies that sell products both online and offline. Fyaril is a platform to sell online both domestic and global markets and gives you more business than expected.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg text-fyaril-blue">How soon can I sell after setting up my Seller Account?</h4>
                <p className="mt-2 text-gray-700">
                  Fyaril allows you to manage everything in one place. After customer approves the order, fulfillment begins the same day and you can direct all your sales related queries to one person through the system. The platform is designed to give you the best possible selling experience.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-fyaril-blue px-6 py-4">
              <h3 className="text-xl font-bold text-white">Have more questions?</h3>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 mb-4">
                If you couldn't find the answer to your question, our support team is here to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-fyaril-blue hover:bg-fyaril-darkblue">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-fyaril-blue text-fyaril-blue hover:bg-fyaril-blue hover:text-white">
                  Browse Knowledge Base
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    },
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
