
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ShoppingCart, Search, Package, CreditCard, Truck, CheckCircle, Info, MessageCircle } from 'lucide-react';

const HowToOrder = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Place an Order</h1>
          <p className="text-lg text-gray-600">Complete guide to ordering products on Fyaril marketplace</p>
        </div>

        <div className="space-y-8">
          {/* Order Process Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Order Process Overview</CardTitle>
              <CardDescription>Understanding the complete order workflow from start to finish</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium text-lg">Product Discovery</h4>
                    <p className="text-gray-600">Browse categories or use search to find products that meet your requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium text-lg">Submit Inquiry</h4>
                    <p className="text-gray-600">For B2B products, submit an inquiry with your specifications and requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium text-lg">Receive Quotation</h4>
                    <p className="text-gray-600">Get detailed pricing, delivery terms, and product specifications from the seller.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-medium text-lg">Negotiate & Confirm</h4>
                    <p className="text-gray-600">Discuss terms, quantities, and delivery dates directly with the seller.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h4 className="font-medium text-lg">Complete Payment</h4>
                    <p className="text-gray-600">Secure payment processing through our trusted payment gateway.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                  <div>
                    <h4 className="font-medium text-lg">Order Fulfillment</h4>
                    <p className="text-gray-600">Track your order from processing to delivery at your doorstep.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Different Order Types */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6 text-[#247e9d]" />
                  B2C Orders (Individual)
                </CardTitle>
                <CardDescription>For personal purchases and small quantities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Instant purchase for listed products</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Fixed pricing with immediate checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Standard shipping options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Consumer protection policies</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-6 w-6 text-[#247e9d]" />
                  B2B Orders (Business)
                </CardTitle>
                <CardDescription>For bulk purchases and business requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Custom quotations for bulk orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Negotiable pricing and terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Flexible payment options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Custom delivery arrangements</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step-by-Step B2B Order Guide */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed B2B Order Process</CardTitle>
              <CardDescription>Step-by-step guide for placing business orders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <Search className="h-5 w-5 text-[#247e9d]" />
                    Step 1: Find Your Product
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Use the search bar or browse categories</li>
                    <li>• Filter by location, price range, and specifications</li>
                    <li>• Review seller profiles and ratings</li>
                    <li>• Check product certifications and quality badges</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-[#247e9d]" />
                    Step 2: Submit Inquiry
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Click "Request Quote" or "Bulk Inquiry"</li>
                    <li>• Specify quantity requirements</li>
                    <li>• Add delivery address and preferred date</li>
                    <li>• Include any special requirements or customizations</li>
                    <li>• Submit your inquiry with contact details</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-[#247e9d]" />
                    Step 3: Review & Negotiate
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Receive detailed quotation from seller</li>
                    <li>• Review pricing, terms, and delivery schedule</li>
                    <li>• Negotiate if needed through our messaging system</li>
                    <li>• Request samples if quality verification is needed</li>
                    <li>• Finalize all terms before proceeding</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-3 flex items-center gap-2">
                    <Truck className="h-5 w-5 text-[#247e9d]" />
                    Step 4: Order Confirmation
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Receive proforma invoice (PI) from seller</li>
                    <li>• Verify all details including quantities and specifications</li>
                    <li>• Confirm payment terms and delivery schedule</li>
                    <li>• Complete payment through secure gateway</li>
                    <li>• Receive order confirmation and tracking details</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Order Tips & Best Practices</CardTitle>
              <CardDescription>Make your ordering experience smooth and successful</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3 text-green-700">✓ Do's</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Verify seller credentials and ratings</li>
                    <li>• Read product descriptions carefully</li>
                    <li>• Communicate clearly about requirements</li>
                    <li>• Keep all communication within the platform</li>
                    <li>• Review terms and conditions before ordering</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3 text-red-700">✗ Don'ts</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Don't share personal banking details</li>
                    <li>• Don't make payments outside the platform</li>
                    <li>• Don't skip reading seller policies</li>
                    <li>• Don't rush into large orders without samples</li>
                    <li>• Don't ignore delivery timeframes</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Alert className="bg-[#247e9d]/10 border-[#247e9d]">
            <Info className="h-4 w-4 text-[#247e9d]" />
            <AlertTitle>Need Help with Your Order?</AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-4">Our customer support team is available to assist you throughout the ordering process.</p>
              <Button className="bg-[#247e9d] hover:bg-[#247e9d]/80">
                Contact Support Team
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowToOrder;
