
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { RotateCcw, Package, Clock, CheckCircle, AlertCircle, CreditCard, Shield, ArrowRight } from 'lucide-react';

const Returns = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Returns & Refunds</h1>
          <p className="text-lg text-gray-600">Our customer-friendly return policy ensures your satisfaction</p>
        </div>

        <div className="space-y-8">
          {/* Return Policy Overview */}
          <Card className="border-[#247e9d]/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="h-6 w-6 text-[#247e9d]" />
                Return Policy Overview
              </CardTitle>
              <CardDescription>
                We want you to be completely satisfied with your purchase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-[#247e9d]" />
                  </div>
                  <h3 className="font-semibold mb-2">30-Day Return Window</h3>
                  <p className="text-gray-600 text-sm">Return most items within 30 days of delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <CreditCard className="h-8 w-8 text-[#247e9d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Full Refund</h3>
                  <p className="text-gray-600 text-sm">Get your money back for eligible returns</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#247e9d]/10 rounded-full mx-auto flex items-center justify-center mb-4">
                    <Package className="h-8 w-8 text-[#247e9d]" />
                  </div>
                  <h3 className="font-semibold mb-2">Free Return Shipping</h3>
                  <p className="text-gray-600 text-sm">We cover return shipping costs for defective items</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Return Eligibility */}
          <Card>
            <CardHeader>
              <CardTitle>What Can Be Returned?</CardTitle>
              <CardDescription>Understanding which items are eligible for return</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3 text-green-700 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Returnable Items
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Items in original condition and packaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Unused products with all accessories</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Items returned within 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Defective or damaged products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Items not as described</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>Electronics with original seals intact</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-3 text-red-700 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Non-Returnable Items
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Personalized or customized products</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Perishable goods (food, flowers)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Hygiene products (cosmetics, underwear)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Digital downloads and software</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Items damaged by misuse</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                      <span>Gift cards and vouchers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Return */}
          <Card>
            <CardHeader>
              <CardTitle>How to Return an Item</CardTitle>
              <CardDescription>Step-by-step guide to returning your purchase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Return Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                      <div>
                        <h4 className="font-medium">Initiate Return Request</h4>
                        <p className="text-gray-600 text-sm">Log into your account and go to "My Orders" to start a return request</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                      <div>
                        <h4 className="font-medium">Select Return Reason</h4>
                        <p className="text-gray-600 text-sm">Choose the reason for return (defective, wrong item, changed mind, etc.)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h4 className="font-medium">Print Return Label</h4>
                        <p className="text-gray-600 text-sm">Download and print the prepaid return shipping label</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                      <div>
                        <h4 className="font-medium">Package the Item</h4>
                        <p className="text-gray-600 text-sm">Pack the item securely in original packaging with all accessories</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                      <div>
                        <h4 className="font-medium">Ship the Return</h4>
                        <p className="text-gray-600 text-sm">Drop off at designated carrier location or schedule pickup</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-[#247e9d] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                      <div>
                        <h4 className="font-medium">Receive Refund</h4>
                        <p className="text-gray-600 text-sm">Get your refund within 5-7 business days after we receive the item</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund Information */}
          <Card>
            <CardHeader>
              <CardTitle>Refund Information</CardTitle>
              <CardDescription>How and when you'll receive your refund</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-lg mb-3">Refund Methods</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-[#247e9d]" />
                        <span>Original payment method (preferred)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-[#247e9d]" />
                        <span>Store credit for faster processing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-[#247e9d]" />
                        <span>Bank transfer for large amounts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CreditCard className="h-4 w-4 text-[#247e9d]" />
                        <span>PayPal refund (if originally paid via PayPal)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg mb-3">Processing Times</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Credit/Debit Cards</span>
                        <span className="font-medium">3-5 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PayPal</span>
                        <span className="font-medium">1-2 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Bank Transfer</span>
                        <span className="font-medium">2-3 business days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Store Credit</span>
                        <span className="font-medium">Instant</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Digital Wallets</span>
                        <span className="font-medium">1-3 business days</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#247e9d]/5 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-3">Refund Amounts</h4>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Product price:</span>
                      <span className="font-medium">Full refund</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Original shipping (if item defective):</span>
                      <span className="font-medium">Full refund</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Original shipping (if returning for other reasons):</span>
                      <span className="font-medium">Not refunded</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Return shipping (defective items):</span>
                      <span className="font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Return shipping (other reasons):</span>
                      <span className="font-medium">Customer pays</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Return Scenarios */}
          <Card>
            <CardHeader>
              <CardTitle>Special Return Scenarios</CardTitle>
              <CardDescription>Handling different types of return situations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-[#247e9d]" />
                      Defective Items
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Report within 7 days of delivery</li>
                      <li>• Provide photos of the defect</li>
                      <li>• Free return shipping provided</li>
                      <li>• Full refund including original shipping</li>
                      <li>• Replacement available if in stock</li>
                    </ul>
                  </div>
                  
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                      <Package className="h-5 w-5 text-[#247e9d]" />
                      Wrong Item Received
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Contact us immediately</li>
                      <li>• Keep original packaging</li>
                      <li>• Free return shipping label provided</li>
                      <li>• Expedited replacement shipping</li>
                      <li>• Full refund if correct item unavailable</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#247e9d]" />
                      Late Delivery Returns
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Items delivered significantly late</li>
                      <li>• Extended return window applies</li>
                      <li>• Possible compensation for inconvenience</li>
                      <li>• Free return shipping</li>
                      <li>• Priority refund processing</li>
                    </ul>
                  </div>
                  
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2 flex items-center gap-2">
                      <RotateCcw className="h-5 w-5 text-[#247e9d]" />
                      Change of Mind
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 30-day return window applies</li>
                      <li>• Item must be in original condition</li>
                      <li>• Customer pays return shipping</li>
                      <li>• Original shipping not refunded</li>
                      <li>• Restocking fee may apply to some items</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* B2B Returns */}
          <Card>
            <CardHeader>
              <CardTitle>B2B Return Policy</CardTitle>
              <CardDescription>Special considerations for business customers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-[#247e9d]/5 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-3">Business Return Terms</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Extended 60-day return window</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Bulk return processing available</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Custom return agreements for large orders</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Dedicated B2B return support team</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Freight return arrangements</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Direct manufacturer coordination</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Credit terms for approved accounts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>Return merchandise authorization (RMA)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Returns */}
          <Card className="bg-gradient-to-r from-[#247e9d] to-[#247e9d]/80 text-white">
            <CardHeader>
              <CardTitle className="text-center">Need Help with Your Return?</CardTitle>
              <CardDescription className="text-center text-white/80">
                Our customer service team is here to make returns easy
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Email Support</h4>
                  <p className="text-white/80">returns@fyaril.com</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone Support</h4>
                  <p className="text-white/80">+31 20 123 4567</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Live Chat</h4>
                  <p className="text-white/80">Available 9 AM - 6 PM CET</p>
                </div>
              </div>
              <Button className="bg-white text-[#247e9d] hover:bg-gray-100">
                Start Return Request
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Important Return Notes */}
          <Alert className="bg-[#247e9d]/10 border-[#247e9d]">
            <AlertCircle className="h-4 w-4 text-[#247e9d]" />
            <AlertTitle>Important Return Guidelines</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>• Always check the specific return policy for each seller, as some may have different terms</p>
              <p>• Keep your original receipt and order confirmation for faster processing</p>
              <p>• International returns may take longer due to customs processing</p>
              <p>• For high-value items (€500+), signature confirmation is required for returns</p>
              <p>• Seasonal items may have shorter return windows during peak periods</p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </MainLayout>
  );
};

export default Returns;
