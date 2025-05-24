
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, ShoppingBag, CreditCard, Truck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const b2cPages = {
  'shopping-guide': {
    title: 'Shopping Guide',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Shopping Guide</h2>
        <p className="text-gray-700">Your complete guide to shopping on Fyaril - from browsing products to receiving your order.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">How to Shop on Fyaril</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-3 rounded-full">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Browse & Search</h4>
                <p className="text-gray-600 mb-2">Explore our extensive catalog of authentic Indian and South Asian products:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Use the search bar to find specific products</li>
                  <li>Browse by categories like Fashion, Electronics, Home & Garden</li>
                  <li>Filter by price, brand, ratings, and delivery options</li>
                  <li>Check product reviews and ratings from verified customers</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-3 rounded-full">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Add to Cart & Checkout</h4>
                <p className="text-gray-600 mb-2">Simple and secure checkout process:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Select product variations (size, color, quantity)</li>
                  <li>Add items to your shopping cart</li>
                  <li>Review your order and apply discount codes</li>
                  <li>Choose delivery address and payment method</li>
                  <li>Complete your purchase securely</li>
                </ul>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-fyaril-blue text-white p-3 rounded-full">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium text-lg mb-2">Track Your Order</h4>
                <p className="text-gray-600 mb-2">Stay updated on your order status:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Receive order confirmation via email</li>
                  <li>Track your package with real-time updates</li>
                  <li>Get delivery notifications and estimated arrival times</li>
                  <li>Access order history in your account dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Fashion & Beauty</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Traditional Indian clothing</li>
                <li>• Jewelry & accessories</li>
                <li>• Ayurvedic beauty products</li>
                <li>• Footwear & bags</li>
              </ul>
            </div>
            
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Home & Kitchen</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Cookware & utensils</li>
                <li>• Home décor items</li>
                <li>• Textiles & furnishings</li>
                <li>• Traditional handicrafts</li>
              </ul>
            </div>
            
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Food & Wellness</h4>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Spices & seasonings</li>
                <li>• Organic foods</li>
                <li>• Herbal supplements</li>
                <li>• Tea & beverages</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Alert className="bg-green-50 border-green-300">
          <ShoppingBag className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-800">Shopping Tip</AlertTitle>
          <AlertDescription className="text-green-700">
            Create an account to save your favorite items, track orders, and get personalized recommendations!
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'returns': {
    title: 'Returns & Refunds',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Returns & Refunds</h2>
        <p className="text-gray-700">Understanding our return policy and how to process returns for a hassle-free shopping experience.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Return Policy Overview</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">What Can Be Returned?</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Items in original condition with tags</li>
                <li>Unused products in original packaging</li>
                <li>Items returned within 30 days of delivery</li>
                <li>Products with proof of purchase</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">What Cannot Be Returned?</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Perishable food items</li>
                <li>Personal care items (opened)</li>
                <li>Custom or personalized products</li>
                <li>Items damaged by misuse</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">How to Return an Item</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-medium">Initiate Return Request</h4>
                <p className="text-gray-600">Log into your account and go to "My Orders" to request a return</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-medium">Select Return Reason</h4>
                <p className="text-gray-600">Choose the reason for return and provide additional details if needed</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-medium">Print Return Label</h4>
                <p className="text-gray-600">Download and print the prepaid return shipping label</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-medium">Package & Ship</h4>
                <p className="text-gray-600">Pack the item securely and drop it off at the designated shipping point</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Refund Processing</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-fyaril-teal/10">
                  <th className="border border-fyaril-teal/20 p-3 text-left">Payment Method</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Refund Time</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Processing Days</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Credit/Debit Card</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">5-10 business days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">After item received</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">PayPal</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">3-5 business days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">After item received</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Bank Transfer</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">7-14 business days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">After item received</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <Alert>
          <RotateCcw className="h-4 w-4" />
          <AlertTitle>Need Help with Returns?</AlertTitle>
          <AlertDescription>
            Contact our customer service team for assistance with your return or refund request.
          </AlertDescription>
          <Button className="mt-3 bg-fyaril-blue hover:bg-fyaril-blue/80">Contact Support</Button>
        </Alert>
      </div>
    )
  },
  'shipping': {
    title: 'Shipping Information',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Shipping Information</h2>
        <p className="text-gray-700">Everything you need to know about shipping options, delivery times, and costs across Europe.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Delivery Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">Standard Delivery</h4>
              <p className="text-gray-600 mb-2">5-10 business days</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Free for orders over €50</li>
                <li>• €4.99 for smaller orders</li>
                <li>• Tracked delivery</li>
                <li>• Signature required</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">Express Delivery</h4>
              <p className="text-gray-600 mb-2">2-4 business days</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• €9.99 flat rate</li>
                <li>• Priority handling</li>
                <li>• Real-time tracking</li>
                <li>• SMS notifications</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">Next Day Delivery</h4>
              <p className="text-gray-600 mb-2">1 business day</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• €19.99 flat rate</li>
                <li>• Available in major cities</li>
                <li>• Order before 2 PM</li>
                <li>• Premium tracking</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Delivery Coverage</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">European Union</h4>
              <p className="text-gray-600 mb-2">We deliver to all EU countries with standard delivery times:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Germany, France, Italy: 3-5 days</li>
                <li>• Spain, Netherlands, Belgium: 4-6 days</li>
                <li>• Nordic countries: 5-7 days</li>
                <li>• Eastern Europe: 6-8 days</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3">United Kingdom</h4>
              <p className="text-gray-600 mb-2">Post-Brexit shipping with customs handling:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 5-8 business days delivery</li>
                <li>• Customs fees may apply</li>
                <li>• VAT handled at delivery</li>
                <li>• Tracking throughout journey</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Shipping Costs by Region</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-fyaril-teal/10">
                  <th className="border border-fyaril-teal/20 p-3 text-left">Region</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Standard</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Express</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Free Shipping Threshold</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Germany, France, Netherlands</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€4.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€9.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€50</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Italy, Spain, Belgium</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€6.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€12.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€60</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Nordic Countries</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€8.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€15.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€75</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Eastern Europe</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€9.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€18.99</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <Alert className="bg-blue-50 border-blue-300">
          <Truck className="h-4 w-4 text-blue-500" />
          <AlertTitle className="text-blue-800">Track Your Package</AlertTitle>
          <AlertDescription className="text-blue-700">
            Once your order ships, you'll receive a tracking number via email to monitor your package's journey.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  'faq': {
    title: 'B2C FAQ',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">B2C Customer FAQ</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">How do I create an account?</h3>
            <p className="text-gray-700">Click "Sign Up" on the top right of our website. You can register with your email address or use social login options. Account creation is free and gives you access to order tracking, wishlist, and exclusive offers.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-700">We accept major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and digital wallets like Apple Pay and Google Pay. All payments are processed securely with SSL encryption.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Are the products authentic?</h3>
            <p className="text-gray-700">Yes, all products on Fyaril are sourced directly from verified manufacturers and authorized sellers in India. We maintain strict quality standards and verify all sellers before they can list products on our platform.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Can I modify or cancel my order?</h3>
            <p className="text-gray-700">You can modify or cancel your order within 2 hours of placing it. After that, the order enters processing and cannot be changed. Contact customer service immediately if you need to make changes.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Do you offer customer support?</h3>
            <p className="text-gray-700">Yes, our customer support team is available Monday-Friday, 9 AM-6 PM CET. You can reach us via live chat, email (support@fyaril.com), or phone. We also have a comprehensive help center with self-service options.</p>
          </div>
        </div>
      </div>
    )
  }
};

const B2CDetail = () => {
  const { slug } = useParams();
  
  // If no slug, show the main B2C landing content
  if (!slug) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-fyaril-blue">For B2C Buyers</h1>
            <div className="h-1 w-20 bg-fyaril-teal mt-2"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-700">Discover authentic Indian and South Asian products delivered directly to your doorstep across Europe.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
                <h3 className="text-xl font-semibold mb-4">Why Shop with Fyaril?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Authentic products from India</li>
                  <li>• Fast delivery across Europe</li>
                  <li>• Secure payment options</li>
                  <li>• 30-day return policy</li>
                  <li>• Customer support in multiple languages</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
                <h3 className="text-xl font-semibold mb-4">Popular Categories</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Fashion & Traditional Wear</li>
                  <li>• Spices & Food Products</li>
                  <li>• Home Décor & Handicrafts</li>
                  <li>• Beauty & Personal Care</li>
                  <li>• Electronics & Gadgets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  const pageData = b2cPages[slug as keyof typeof b2cPages];
  
  if (!pageData) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p>The requested B2C help page does not exist.</p>
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

export default B2CDetail;
