
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HelpCategoryHeader from '@/components/help/HelpCategoryHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  RotateCcw, 
  Shield, 
  Search,
  Info,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  User,
  Package
} from 'lucide-react';

const BuyersHelp = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <HelpCategoryHeader 
          title="For Buyers" 
          description="Everything you need to know about buying on Fyaril - from browsing products to completing your purchase."
          userType="b2c"
        />
        
        <div className="space-y-8">
          {/* Quick Start Guide */}
          <Card className="border-[#247e9d]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-6 w-6 text-[#247e9d]" />
                Quick Start Guide
              </CardTitle>
              <CardDescription>
                Follow these simple steps to start shopping on Fyaril
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <User className="h-8 w-8 text-[#247e9d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit www.fyaril.com</h3>
                  <p className="text-gray-600 text-sm">Go to ACCOUNTS and Register</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Search className="h-8 w-8 text-[#247e9d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Browse Products</h3>
                  <p className="text-gray-600 text-sm">Search and discover quality products</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <ShoppingCart className="h-8 w-8 text-[#247e9d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Place Order</h3>
                  <p className="text-gray-600 text-sm">Add to cart and complete purchase</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6 text-[#247e9d]" />
                Registration Process
              </CardTitle>
              <CardDescription>
                Create your account to access B2B products
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-[#247e9d]/5 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Register for a free account</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium mb-2">Benefits of Registration</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Access to B2B pricing
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Bulk order discounts
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Priority customer support
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Order tracking and history
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Required Information</h4>
                      <ul className="space-y-1 text-gray-600">
                        <li>Business name and address</li>
                        <li>Contact person details</li>
                        <li>Tax identification number</li>
                        <li>Business registration documents</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Alert className="bg-blue-50 border-blue-200">
                  <Info className="h-4 w-4 text-blue-600" />
                  <AlertTitle className="text-blue-800">Once registered</AlertTitle>
                  <AlertDescription className="text-blue-700">
                    You can login to your account and access B2B products. Choose the product you wish to request quotation for, Select bulk enquiry through "I", Provide all enquiries such as Buying, Delivery date, address and add message to the manufacturer. Click on Submit Request.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Order Process Flow */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-6 w-6 text-[#247e9d]" />
                How Orders Work
              </CardTitle>
              <CardDescription>
                Understanding the complete order fulfillment process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Order Processing Steps</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">You submit enquiry</h4>
                        <p className="text-gray-600 text-sm">Submit your product requirements and specifications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Receive our offer and our Customer welcomes your enquiry</h4>
                        <p className="text-gray-600 text-sm">Get detailed quotation with pricing and delivery terms</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Reply with quotation date of delivery</h4>
                        <p className="text-gray-600 text-sm">Confirm your requirements and expected delivery timeline</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Confirm LH Quantity Qty vs Investment Effort Relation Order Security</h4>
                        <p className="text-gray-600 text-sm">Finalize quantity, payment terms and delivery schedule</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                      <div>
                        <h4 className="font-medium">Contact LH Po Company from unit required Supplier</h4>
                        <p className="text-gray-600 text-sm">Direct communication with supplier for order finalization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                      <div>
                        <h4 className="font-medium">Contact a PI, No Company from unit required Supplier</h4>
                        <p className="text-gray-600 text-sm">Receive proforma invoice and order confirmation</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">7</div>
                      <div>
                        <h4 className="font-medium">If there is a need for samples then purchase a sample to get Product specification</h4>
                        <p className="text-gray-600 text-sm">Quality check through sample approval process</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800">Quality Assurance</AlertTitle>
                  <AlertDescription className="text-green-700">
                    The Fyaril team will get in touch with you as soon as possible to ensure smooth order processing and delivery.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Search className="h-6 w-6 text-[#247e9d]" />
                </div>
                <CardTitle className="text-lg">Easy Browsing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Search and filter products by category, price, and specifications</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-2">
                  <CreditCard className="h-6 w-6 text-[#247e9d]" />
                </div>
                <CardTitle className="text-lg">Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Multiple payment options with secure transaction processing</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Truck className="h-6 w-6 text-[#247e9d]" />
                </div>
                <CardTitle className="text-lg">Fast Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Reliable shipping across Europe with tracking capabilities</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-2">
                  <Shield className="h-6 w-6 text-[#247e9d]" />
                </div>
                <CardTitle className="text-lg">Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">Verified sellers and quality-assured products from trusted sources</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Support */}
          <Card className="bg-gradient-to-r from-[#247e9d] to-[#247e9d]/80 text-white">
            <CardHeader>
              <CardTitle className="text-center">Need Help with Your Purchase?</CardTitle>
              <CardDescription className="text-center text-white/80">
                Our customer support team is ready to assist you with any questions
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="bg-white text-[#247e9d] hover:bg-gray-100">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default BuyersHelp;
