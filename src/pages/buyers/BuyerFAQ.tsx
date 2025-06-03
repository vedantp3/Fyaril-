
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { HelpCircle, Search, ShoppingCart, CreditCard, Truck, RotateCcw, Shield, Info } from 'lucide-react';

const BuyerFAQ = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Buyer FAQ</h1>
          <p className="text-lg text-gray-600">Frequently asked questions for buyers on Fyaril marketplace</p>
        </div>

        <div className="space-y-8">
          {/* Getting Started FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-6 w-6 text-[#247e9d]" />
                Getting Started
              </CardTitle>
              <CardDescription>Basic questions about using Fyaril as a buyer</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="account-creation">
                  <AccordionTrigger>How do I create a buyer account?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>Creating a buyer account on Fyaril is free and easy:</p>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Visit www.fyaril.com</li>
                        <li>Click on "ACCOUNTS" in the top navigation</li>
                        <li>Select "Register" and choose "Buyer Account"</li>
                        <li>Fill in your personal or business information</li>
                        <li>Verify your email address</li>
                        <li>Complete your profile to access all features</li>
                      </ol>
                      <p className="text-sm text-gray-600 mt-2">
                        Business accounts get access to B2B pricing and bulk order features.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-verification">
                  <AccordionTrigger>Do I need to verify my account?</AccordionTrigger>
                  <AccordionContent>
                    <p>Email verification is required for all accounts. For business accounts accessing B2B features, additional verification may include:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4 mt-2">
                      <li>Business registration documents</li>
                      <li>Tax identification number</li>
                      <li>Bank account verification</li>
                      <li>Business address confirmation</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      Verification typically takes 1-2 business days and unlocks premium features.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="difference-b2b-b2c">
                  <AccordionTrigger>What's the difference between B2B and B2C shopping?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div>
                        <strong className="text-[#247e9d]">B2C (Business to Consumer):</strong>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                          <li>Individual purchases for personal use</li>
                          <li>Fixed pricing with immediate checkout</li>
                          <li>Standard consumer protection</li>
                          <li>Retail quantities</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-[#247e9d]">B2B (Business to Business):</strong>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                          <li>Bulk purchases for business use</li>
                          <li>Custom quotations and negotiable pricing</li>
                          <li>Extended payment terms</li>
                          <li>Wholesale quantities and volume discounts</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="finding-products">
                  <AccordionTrigger>How do I find the products I need?</AccordionTrigger>
                  <AccordionContent>
                    <p>Fyaril offers multiple ways to discover products:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4 mt-2">
                      <li><strong>Search Bar:</strong> Use keywords, product names, or specifications</li>
                      <li><strong>Categories:</strong> Browse organized product categories</li>
                      <li><strong>Filters:</strong> Narrow results by price, location, ratings, etc.</li>
                      <li><strong>Seller Profiles:</strong> Browse products from specific suppliers</li>
                      <li><strong>Recommendations:</strong> AI-powered product suggestions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Ordering FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-[#247e9d]" />
                Ordering Process
              </CardTitle>
              <CardDescription>Questions about placing and managing orders</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="placing-order">
                  <AccordionTrigger>How do I place an order?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>For B2C Orders:</strong></p>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Add items to your cart</li>
                        <li>Review cart and proceed to checkout</li>
                        <li>Enter shipping information</li>
                        <li>Select payment method</li>
                        <li>Review and confirm order</li>
                      </ol>
                      
                      <p><strong>For B2B Orders:</strong></p>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Submit inquiry with specifications</li>
                        <li>Receive quotation from seller</li>
                        <li>Negotiate terms if needed</li>
                        <li>Confirm order and payment terms</li>
                        <li>Complete payment via agreed method</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="bulk-orders">
                  <AccordionTrigger>How do bulk orders work?</AccordionTrigger>
                  <AccordionContent>
                    <p>Bulk orders follow a quotation-based process:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 ml-4 mt-2">
                      <li>Click "Request Quote" or "Bulk Inquiry" on product pages</li>
                      <li>Specify quantity, delivery requirements, and special needs</li>
                      <li>Receive detailed quotation within 24-48 hours</li>
                      <li>Review pricing, terms, and delivery schedule</li>
                      <li>Negotiate if needed through our messaging system</li>
                      <li>Confirm order with digital agreement</li>
                      <li>Complete payment as per agreed terms</li>
                    </ol>
                    <p className="text-sm text-gray-600 mt-2">
                      Bulk orders often qualify for volume discounts and custom delivery arrangements.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="order-modifications">
                  <AccordionTrigger>Can I modify or cancel my order?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p><strong>Order Modifications:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Contact seller immediately after placing order</li>
                        <li>Modifications possible before order processing begins</li>
                        <li>Changes may affect pricing and delivery time</li>
                      </ul>
                      
                      <p><strong>Order Cancellation:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Free cancellation within 2 hours for most orders</li>
                        <li>Contact customer support for cancellation requests</li>
                        <li>Cancellation fees may apply for custom or started orders</li>
                        <li>Full refund for successfully cancelled orders</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="order-tracking">
                  <AccordionTrigger>How do I track my order?</AccordionTrigger>
                  <AccordionContent>
                    <p>Track your orders through multiple channels:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4 mt-2">
                      <li><strong>My Account:</strong> Log in and view "My Orders" section</li>
                      <li><strong>Email Updates:</strong> Automatic notifications for order status changes</li>
                      <li><strong>SMS Alerts:</strong> Optional text notifications for key milestones</li>
                      <li><strong>Tracking Number:</strong> Direct carrier tracking via provided link</li>
                      <li><strong>Seller Updates:</strong> Direct communication for custom orders</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      You'll receive tracking information once your order is shipped.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Payment FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-[#247e9d]" />
                Payments & Pricing
              </CardTitle>
              <CardDescription>Questions about payment methods and pricing</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="payment-methods">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Credit & Debit Cards:</strong> Visa, Mastercard, American Express, Maestro</p>
                      <p><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay</p>
                      <p><strong>Bank Transfers:</strong> SEPA (EU), International wire transfers</p>
                      <p><strong>Buy Now, Pay Later:</strong> Klarna, Afterpay</p>
                      <p><strong>Local Methods:</strong> SOFORT, iDEAL, Bancontact (region-specific)</p>
                      <p><strong>Business:</strong> Purchase orders, invoicing, credit terms</p>
                      
                      <p className="text-sm text-gray-600 mt-3">
                        Payment options may vary by seller and order amount. All transactions are secured with SSL encryption.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="payment-security">
                  <AccordionTrigger>Is my payment information secure?</AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, we use industry-leading security measures:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4 mt-2">
                      <li><strong>SSL Encryption:</strong> 256-bit encryption for all transactions</li>
                      <li><strong>PCI DSS Compliance:</strong> Level 1 certified payment processing</li>
                      <li><strong>3D Secure:</strong> Additional authentication for card payments</li>
                      <li><strong>No Data Storage:</strong> We never store your payment card details</li>
                      <li><strong>Fraud Detection:</strong> Advanced algorithms prevent unauthorized transactions</li>
                      <li><strong>Secure Gateways:</strong> Trusted payment processors handle all transactions</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pricing-currency">
                  <AccordionTrigger>What currencies do you support?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p><strong>Primary Currency:</strong> EUR (Euro)</p>
                      <p><strong>Supported Currencies:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>USD (US Dollar)</li>
                        <li>GBP (British Pound)</li>
                        <li>CHF (Swiss Franc)</li>
                        <li>NOK (Norwegian Krone)</li>
                        <li>SEK (Swedish Krona)</li>
                        <li>DKK (Danish Krone)</li>
                        <li>PLN (Polish Złoty)</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        Exchange rates are updated daily. Some sellers may only accept specific currencies.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="transaction-fees">
                  <AccordionTrigger>Are there any transaction fees?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>For Buyers:</strong> No additional fees on top of product prices</p>
                      <p><strong>Payment Processing:</strong> Included in seller's pricing</p>
                      <p><strong>Currency Conversion:</strong> Bank rates may apply for international cards</p>
                      <p><strong>Special Services:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Express shipping: Additional costs clearly displayed</li>
                        <li>Extended warranty: Optional add-on pricing</li>
                        <li>Installation services: Quoted separately</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        All costs are transparently displayed before checkout.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Shipping FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-6 w-6 text-[#247e9d]" />
                Shipping & Delivery
              </CardTitle>
              <CardDescription>Questions about shipping options and delivery</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="shipping-options">
                  <AccordionTrigger>What shipping options are available?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <div>
                        <p><strong>Standard Delivery (5-7 days):</strong> €5.99 - €12.99</p>
                        <p className="text-sm text-gray-600">Most economical option with basic tracking</p>
                      </div>
                      <div>
                        <p><strong>Express Delivery (2-3 days):</strong> €15.99 - €25.99</p>
                        <p className="text-sm text-gray-600">Priority handling with real-time tracking</p>
                      </div>
                      <div>
                        <p><strong>Premium Delivery (Next day):</strong> €29.99 - €49.99</p>
                        <p className="text-sm text-gray-600">White glove service with scheduled delivery</p>
                      </div>
                      <div>
                        <p><strong>Bulk/Freight:</strong> Quote on request</p>
                        <p className="text-sm text-gray-600">For large orders and custom arrangements</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delivery-areas">
                  <AccordionTrigger>Where do you deliver?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p><strong>European Union:</strong> All 27 member countries</p>
                      <p><strong>Europe:</strong> UK, Switzerland, Norway, Iceland</p>
                      <p><strong>International:</strong> 50+ countries worldwide</p>
                      
                      <p className="text-sm text-gray-600 mt-3">
                        Delivery times vary by destination. Some sellers may have geographic restrictions. 
                        International orders may be subject to customs duties and taxes.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="free-shipping">
                  <AccordionTrigger>When is shipping free?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p><strong>Free Shipping Thresholds:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>EU Countries: €75+ orders</li>
                        <li>Germany & Netherlands: €50+ orders</li>
                        <li>B2B Bulk Orders: €500+ orders</li>
                        <li>Premium Members: €25+ orders</li>
                        <li>International: €150+ orders</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        Free shipping applies to standard delivery. Express and premium options have additional costs.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="delivery-issues">
                  <AccordionTrigger>What if my delivery is delayed or lost?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>For Delayed Deliveries:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Check tracking information for updates</li>
                        <li>Contact carrier directly for immediate status</li>
                        <li>Report delays beyond estimated delivery date</li>
                        <li>Compensation may be available for significant delays</li>
                      </ul>
                      
                      <p><strong>For Lost Packages:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Report missing packages within 7 days</li>
                        <li>We'll investigate with the carrier</li>
                        <li>Full refund or replacement provided</li>
                        <li>Insurance coverage for high-value items</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Returns FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="h-6 w-6 text-[#247e9d]" />
                Returns & Refunds
              </CardTitle>
              <CardDescription>Questions about our return policy and refund process</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="return-policy">
                  <AccordionTrigger>What is your return policy?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Return Window:</strong> 30 days for most items (60 days for B2B)</p>
                      <p><strong>Condition Requirements:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Items must be unused and in original packaging</li>
                        <li>All accessories and documentation included</li>
                        <li>Original tags and labels attached (if applicable)</li>
                      </ul>
                      
                      <p><strong>Return Shipping:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Free for defective or incorrect items</li>
                        <li>Customer pays for "change of mind" returns</li>
                        <li>Prepaid return labels provided</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="return-process">
                  <AccordionTrigger>How do I return an item?</AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                      <li>Log into your account and go to "My Orders"</li>
                      <li>Select the item you want to return</li>
                      <li>Choose your return reason</li>
                      <li>Print the prepaid return label</li>
                      <li>Package the item securely</li>
                      <li>Drop off at designated carrier location</li>
                      <li>Receive email confirmation when return is processed</li>
                    </ol>
                    <p className="text-sm text-gray-600 mt-2">
                      Returns are typically processed within 3-5 business days of receipt.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="refund-processing">
                  <AccordionTrigger>How long do refunds take?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p><strong>Processing Time:</strong> 3-5 business days after we receive your return</p>
                      <p><strong>Refund Method:</strong> Original payment method</p>
                      <p><strong>Timeframes by Payment Type:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Credit/Debit Cards: 3-5 business days</li>
                        <li>PayPal: 1-2 business days</li>
                        <li>Bank Transfer: 2-3 business days</li>
                        <li>Store Credit: Instant</li>
                      </ul>
                      <p className="text-sm text-gray-600 mt-2">
                        You'll receive email confirmation when your refund is processed.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="non-returnable">
                  <AccordionTrigger>What items cannot be returned?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      <li>Personalized or custom-made products</li>
                      <li>Perishable goods (food, flowers, plants)</li>
                      <li>Hygiene products (cosmetics, underwear, swimwear)</li>
                      <li>Digital downloads and software</li>
                      <li>Items damaged by misuse or normal wear</li>
                      <li>Gift cards and vouchers</li>
                      <li>Products mixed with other items</li>
                      <li>Items without original packaging</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-2">
                      Some categories may have specific return restrictions. Check product pages for details.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Account & Support FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-[#247e9d]" />
                Account & Support
              </CardTitle>
              <CardDescription>Questions about account management and getting help</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="account-security">
                  <AccordionTrigger>How do I keep my account secure?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Password Security:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Use a strong, unique password</li>
                        <li>Enable two-factor authentication (2FA)</li>
                        <li>Never share your login credentials</li>
                        <li>Log out from shared devices</li>
                      </ul>
                      
                      <p><strong>Account Monitoring:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Review order history regularly</li>
                        <li>Check for unauthorized transactions</li>
                        <li>Update contact information when needed</li>
                        <li>Report suspicious activity immediately</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="customer-support">
                  <AccordionTrigger>How can I contact customer support?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p><strong>Contact Methods:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li><strong>Live Chat:</strong> Available 9 AM - 6 PM CET (fastest response)</li>
                        <li><strong>Email:</strong> support@fyaril.com (24-48 hour response)</li>
                        <li><strong>Phone:</strong> +31 20 123 4567 (business hours)</li>
                        <li><strong>Help Center:</strong> Self-service knowledge base</li>
                      </ul>
                      
                      <p><strong>Specialized Support:</strong></p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>B2B Support: b2b@fyaril.com</li>
                        <li>Returns: returns@fyaril.com</li>
                        <li>Technical Issues: tech@fyaril.com</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="account-deletion">
                  <AccordionTrigger>Can I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>Yes, you can delete your account at any time:</p>
                      <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li>Complete or cancel any pending orders</li>
                        <li>Contact customer support to initiate deletion</li>
                        <li>Provide verification for security purposes</li>
                        <li>Your account will be permanently deleted within 30 days</li>
                      </ol>
                      
                      <p className="text-sm text-gray-600 mt-3">
                        <strong>Note:</strong> Some data may be retained for legal and compliance purposes as outlined in our Privacy Policy.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="data-privacy">
                  <AccordionTrigger>How is my personal data protected?</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p>We are committed to protecting your privacy:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-4">
                        <li><strong>GDPR Compliance:</strong> Full compliance with EU data protection regulations</li>
                        <li><strong>Data Encryption:</strong> All personal data is encrypted in transit and at rest</li>
                        <li><strong>Limited Access:</strong> Only authorized personnel can access your information</li>
                        <li><strong>No Selling:</strong> We never sell your personal data to third parties</li>
                        <li><strong>Transparent Policies:</strong> Clear privacy policy explaining data usage</li>
                        <li><strong>Your Rights:</strong> Access, correct, or delete your data anytime</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Still Need Help */}
          <Alert className="bg-[#247e9d]/10 border-[#247e9d]">
            <Info className="h-4 w-4 text-[#247e9d]" />
            <AlertTitle>Still Have Questions?</AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-4">
                If you couldn't find the answer to your question, our customer support team is ready to help you.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium">Contact us via:</span>
                <span className="text-sm">Live Chat • Email: support@fyaril.com • Phone: +31 20 123 4567</span>
              </div>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </MainLayout>
  );
};

export default BuyerFAQ;
