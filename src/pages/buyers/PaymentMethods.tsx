
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CreditCard, Shield, CheckCircle, AlertCircle, Banknote, Smartphone, Globe } from 'lucide-react';

const PaymentMethods = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Methods</h1>
          <p className="text-lg text-gray-600">Secure and convenient payment options for your Fyaril purchases</p>
        </div>

        <div className="space-y-8">
          {/* Security Notice */}
          <Alert className="bg-green-50 border-green-200">
            <Shield className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Secure Payments Guaranteed</AlertTitle>
            <AlertDescription className="text-green-700">
              All payments on Fyaril are processed through encrypted, PCI-compliant payment gateways. Your financial information is never stored on our servers.
            </AlertDescription>
          </Alert>

          {/* Accepted Payment Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Accepted Payment Methods</CardTitle>
              <CardDescription>Choose from multiple secure payment options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <CreditCard className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Credit & Debit Cards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Visa, Mastercard, American Express
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Maestro and other local cards
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        3D Secure authentication
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Instant processing
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Banknote className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Bank Transfers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        SEPA transfers (EU)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        International wire transfers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Lower fees for large orders
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        1-3 business days processing
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Smartphone className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Digital Wallets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        PayPal
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Apple Pay
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Google Pay
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Quick checkout process
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Globe className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Local Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        SOFORT (Germany)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        iDEAL (Netherlands)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Bancontact (Belgium)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Country-specific options
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <CreditCard className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Buy Now, Pay Later</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Klarna
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Afterpay
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Split payments available
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        No interest if paid on time
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Shield className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Escrow Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Payment held securely
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Released after delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        For high-value orders
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Maximum buyer protection
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Payment Process */}
          <Card>
            <CardHeader>
              <CardTitle>How Payment Works</CardTitle>
              <CardDescription>Understanding the payment process for different order types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-lg text-[#247e9d]">B2C Orders (Individual Purchases)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-sm">Add items to cart and proceed to checkout</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-sm">Select preferred payment method</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-sm">Complete payment instantly</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-sm">Receive order confirmation</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-lg text-[#247e9d]">B2B Orders (Business Purchases)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-sm">Receive proforma invoice from seller</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-sm">Review payment terms and conditions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-sm">Choose payment method (often bank transfer)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-sm">Payment processed and order confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Currency and Fees */}
          <Card>
            <CardHeader>
              <CardTitle>Currency & Fees</CardTitle>
              <CardDescription>Understanding pricing and transaction fees</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">Supported Currencies</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>EUR (Euro) - Primary currency</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>USD (US Dollar)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>GBP (British Pound)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>CHF (Swiss Franc)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Local currencies for specific regions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3">Transaction Fees</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Credit/Debit Cards: 2.9% + €0.30</li>
                    <li>• PayPal: 3.4% + €0.35</li>
                    <li>• Bank Transfer: €1.50 - €5.00</li>
                    <li>• Digital Wallets: 2.5% - 3.0%</li>
                    <li>• Buy Now Pay Later: No additional fees</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3">
                    * Fees may vary by region and payment method
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Security */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Security Features</CardTitle>
              <CardDescription>How we protect your financial information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#247e9d]" />
                    <span className="font-medium">SSL Encryption</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-8">All payment data is encrypted using 256-bit SSL technology</p>
                  
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#247e9d]" />
                    <span className="font-medium">PCI DSS Compliance</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-8">Our payment processors are certified PCI DSS Level 1</p>
                  
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#247e9d]" />
                    <span className="font-medium">3D Secure Authentication</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-8">Additional layer of security for card payments</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#247e9d]" />
                    <span className="font-medium">Fraud Detection</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-8">Advanced algorithms detect and prevent fraudulent transactions</p>
                  
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#247e9d]" />
                    <span className="font-medium">Buyer Protection</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-8">Money-back guarantee for eligible purchases</p>
                  
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-[#247e9d]" />
                    <span className="font-medium">No Data Storage</span>
                  </div>
                  <p className="text-sm text-gray-600 pl-8">We never store your payment card details</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Alert className="bg-[#247e9d]/10 border-[#247e9d]">
            <AlertCircle className="h-4 w-4 text-[#247e9d]" />
            <AlertTitle>Important Payment Notes</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>• Always verify the payment amount and recipient before completing transactions</p>
              <p>• Keep payment receipts for your records and potential refund claims</p>
              <p>• Contact our support team immediately if you notice any unauthorized charges</p>
              <p>• Payment methods may vary by seller location and order type</p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentMethods;
