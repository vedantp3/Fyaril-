
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { User, Search, ShoppingCart, CheckCircle, ArrowRight, Info } from 'lucide-react';

const GettingStarted = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Getting Started as a Buyer</h1>
          <p className="text-lg text-gray-600">Learn how to start your buying journey on Fyaril marketplace</p>
        </div>

        <div className="space-y-8">
          {/* Welcome Section */}
          <Card>
            <CardHeader>
              <CardTitle>Welcome to Fyaril</CardTitle>
              <CardDescription>Your gateway to quality products from trusted sellers across Europe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Fyaril is Europe's leading B2B and B2C marketplace connecting buyers with verified sellers. 
                Whether you're looking for bulk purchases for your business or individual products for personal use, 
                we've got you covered.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-[#247e9d]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#247e9d] mb-2">10,000+</div>
                  <div className="text-sm text-gray-600">Products Available</div>
                </div>
                <div className="text-center p-4 bg-[#247e9d]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#247e9d] mb-2">500+</div>
                  <div className="text-sm text-gray-600">Verified Sellers</div>
                </div>
                <div className="text-center p-4 bg-[#247e9d]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#247e9d] mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step by Step Guide */}
          <Card>
            <CardHeader>
              <CardTitle>3 Simple Steps to Start Buying</CardTitle>
              <CardDescription>Follow these easy steps to make your first purchase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d] text-white rounded-full mx-auto flex items-center justify-center mb-4 text-xl font-bold">1</div>
                  <div className="flex flex-col items-center">
                    <User className="h-8 w-8 text-[#247e9d] mb-2" />
                    <h3 className="font-semibold mb-2">Create Account</h3>
                    <p className="text-gray-600 text-sm">Sign up for free on www.fyaril.com. Go to ACCOUNTS and Register with your email.</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d] text-white rounded-full mx-auto flex items-center justify-center mb-4 text-xl font-bold">2</div>
                  <div className="flex flex-col items-center">
                    <Search className="h-8 w-8 text-[#247e9d] mb-2" />
                    <h3 className="font-semibold mb-2">Browse & Search</h3>
                    <p className="text-gray-600 text-sm">Use our powerful search to find products. Filter by category, price, and location.</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d] text-white rounded-full mx-auto flex items-center justify-center mb-4 text-xl font-bold">3</div>
                  <div className="flex flex-col items-center">
                    <ShoppingCart className="h-8 w-8 text-[#247e9d] mb-2" />
                    <h3 className="font-semibold mb-2">Place Order</h3>
                    <p className="text-gray-600 text-sm">Add items to cart, review your order, and proceed to secure checkout.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Benefits */}
          <Card>
            <CardHeader>
              <CardTitle>Why Create an Account?</CardTitle>
              <CardDescription>Unlock exclusive benefits with your free Fyaril account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Access to B2B wholesale pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Bulk order discounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Order history and tracking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Wishlist and favorites</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Priority customer support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Exclusive deals and offers</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Faster checkout process</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Direct communication with sellers</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Alert className="bg-[#247e9d]/10 border-[#247e9d]">
            <Info className="h-4 w-4 text-[#247e9d]" />
            <AlertTitle>Ready to Get Started?</AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-4">Now that you know the basics, explore our other buyer guides to learn more about ordering, payments, and shipping.</p>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="border-[#247e9d] text-[#247e9d]">
                  How to Order
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-[#247e9d] text-[#247e9d]">
                  Payment Methods
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-[#247e9d] text-[#247e9d]">
                  Shipping Info
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </MainLayout>
  );
};

export default GettingStarted;
