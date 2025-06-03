
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Truck, Package, Clock, MapPin, Shield, CheckCircle, Info, Globe } from 'lucide-react';

const Shipping = () => {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Shipping Information</h1>
          <p className="text-lg text-gray-600">Everything you need to know about delivery options and shipping policies</p>
        </div>

        <div className="space-y-8">
          {/* Shipping Coverage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-6 w-6 text-[#247e9d]" />
                Shipping Coverage
              </CardTitle>
              <CardDescription>We deliver to customers across Europe and beyond</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-[#247e9d]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#247e9d] mb-2">27+</div>
                  <div className="text-sm text-gray-600">EU Countries</div>
                </div>
                <div className="text-center p-4 bg-[#247e9d]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#247e9d] mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries Worldwide</div>
                </div>
                <div className="text-center p-4 bg-[#247e9d]/5 rounded-lg">
                  <div className="text-2xl font-bold text-[#247e9d] mb-2">95%</div>
                  <div className="text-sm text-gray-600">On-time Delivery</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Options */}
          <Card>
            <CardHeader>
              <CardTitle>Available Shipping Options</CardTitle>
              <CardDescription>Choose the delivery method that best suits your needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Truck className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Standard Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        5-7 business days
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Most economical option
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Basic tracking included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Suitable for non-urgent items
                      </li>
                    </ul>
                    <div className="mt-4 text-center">
                      <span className="text-lg font-bold text-[#247e9d]">€5.99 - €12.99</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Package className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Express Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        2-3 business days
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Priority handling
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Real-time tracking
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Signature required
                      </li>
                    </ul>
                    <div className="mt-4 text-center">
                      <span className="text-lg font-bold text-[#247e9d]">€15.99 - €25.99</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Shield className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Premium Delivery</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        Next business day
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        White glove service
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Insurance included
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Scheduled delivery slot
                      </li>
                    </ul>
                    <div className="mt-4 text-center">
                      <span className="text-lg font-bold text-[#247e9d]">€29.99 - €49.99</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Truck className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Bulk/Freight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        7-14 business days
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        For large orders
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Pallet delivery available
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Custom arrangements
                      </li>
                    </ul>
                    <div className="mt-4 text-center">
                      <span className="text-lg font-bold text-[#247e9d]">Quote on request</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <MapPin className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">Click & Collect</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        Same day pickup
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        No shipping fees
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Convenient locations
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Flexible pickup hours
                      </li>
                    </ul>
                    <div className="mt-4 text-center">
                      <span className="text-lg font-bold text-[#247e9d]">FREE</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#247e9d]/20">
                  <CardHeader className="text-center">
                    <Globe className="h-12 w-12 text-[#247e9d] mx-auto mb-2" />
                    <CardTitle className="text-lg">International</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-green-600" />
                        7-21 business days
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Customs handling
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Duty and tax assistance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Door-to-door service
                      </li>
                    </ul>
                    <div className="mt-4 text-center">
                      <span className="text-lg font-bold text-[#247e9d]">€25.99+</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Timeframes */}
          <Card>
            <CardHeader>
              <CardTitle>Delivery Timeframes by Region</CardTitle>
              <CardDescription>Estimated delivery times for different geographical areas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3 text-[#247e9d]">European Union</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Germany, Netherlands, Belgium</span>
                      <span className="font-medium">1-3 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>France, Austria, Luxembourg</span>
                      <span className="font-medium">2-4 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Italy, Spain, Poland</span>
                      <span className="font-medium">3-5 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Scandinavia, Czech Republic</span>
                      <span className="font-medium">3-6 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Portugal, Greece, Eastern EU</span>
                      <span className="font-medium">4-7 days</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium text-lg mb-3 text-[#247e9d]">International</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>United Kingdom</span>
                      <span className="font-medium">3-7 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Switzerland, Norway</span>
                      <span className="font-medium">4-8 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>North America</span>
                      <span className="font-medium">7-14 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Asia Pacific</span>
                      <span className="font-medium">10-21 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rest of World</span>
                      <span className="font-medium">14-28 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Costs */}
          <Card>
            <CardHeader>
              <CardTitle>Shipping Cost Calculator</CardTitle>
              <CardDescription>How shipping costs are calculated</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Package className="h-8 w-8 text-[#247e9d] mx-auto mb-2" />
                    <h4 className="font-medium">Weight & Dimensions</h4>
                    <p className="text-sm text-gray-600">Based on package size and weight</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <MapPin className="h-8 w-8 text-[#247e9d] mx-auto mb-2" />
                    <h4 className="font-medium">Destination</h4>
                    <p className="text-sm text-gray-600">Delivery location and zone</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="h-8 w-8 text-[#247e9d] mx-auto mb-2" />
                    <h4 className="font-medium">Delivery Speed</h4>
                    <p className="text-sm text-gray-600">Standard vs express options</p>
                  </div>
                </div>

                <div className="bg-[#247e9d]/5 p-4 rounded-lg">
                  <h4 className="font-medium text-lg mb-3">Free Shipping Thresholds</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>EU Countries:</span>
                        <span className="font-medium">€75+ orders</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Germany, Netherlands:</span>
                        <span className="font-medium">€50+ orders</span>
                      </div>
                      <div className="flex justify-between">
                        <span>B2B Bulk Orders:</span>
                        <span className="font-medium">€500+ orders</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>International:</span>
                        <span className="font-medium">€150+ orders</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span>Premium Members:</span>
                        <span className="font-medium">€25+ orders</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Special Promotions:</span>
                        <span className="font-medium">Varies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Tracking */}
          <Card>
            <CardHeader>
              <CardTitle>Order Tracking</CardTitle>
              <CardDescription>Stay updated on your delivery status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-lg mb-3">Tracking Features</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Real-time tracking updates
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        SMS and email notifications
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Delivery time estimates
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        Photo confirmation of delivery
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        GPS tracking for express orders
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-lg mb-3">How to Track</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-sm">Receive tracking number via email</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-sm">Visit our tracking page or carrier website</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                        <span className="text-sm">Enter tracking number to see status</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-[#247e9d] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</div>
                        <span className="text-sm">Receive delivery confirmation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Delivery Services */}
          <Card>
            <CardHeader>
              <CardTitle>Special Delivery Services</CardTitle>
              <CardDescription>Additional services for specific requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">White Glove Delivery</h4>
                    <p className="text-sm text-gray-600 mb-2">Premium service for high-value or fragile items</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Inside delivery and unpacking</li>
                      <li>• Assembly service available</li>
                      <li>• Appointment scheduling</li>
                      <li>• Extra handling care</li>
                    </ul>
                  </div>
                  
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">Temperature Controlled</h4>
                    <p className="text-sm text-gray-600 mb-2">For products requiring specific temperature</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Refrigerated transport</li>
                      <li>• Temperature monitoring</li>
                      <li>• Insulated packaging</li>
                      <li>• Chain of custody documentation</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">Hazardous Materials</h4>
                    <p className="text-sm text-gray-600 mb-2">Specialized handling for regulated products</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Certified dangerous goods transport</li>
                      <li>• Special packaging requirements</li>
                      <li>• Documentation compliance</li>
                      <li>• Limited quantity exceptions</li>
                    </ul>
                  </div>
                  
                  <div className="border border-[#247e9d]/20 p-4 rounded-lg">
                    <h4 className="font-medium text-lg mb-2">Oversized/Heavy Items</h4>
                    <p className="text-sm text-gray-600 mb-2">For large or heavy products</p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Freight and crane services</li>
                      <li>• Custom crating available</li>
                      <li>• Delivery appointment required</li>
                      <li>• Additional handling fees apply</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Shipping Notes */}
          <Alert className="bg-[#247e9d]/10 border-[#247e9d]">
            <Info className="h-4 w-4 text-[#247e9d]" />
            <AlertTitle>Important Shipping Information</AlertTitle>
            <AlertDescription className="mt-2 space-y-2">
              <p>• Delivery times are estimates and may vary due to customs, weather, or carrier delays</p>
              <p>• International orders may be subject to customs duties and taxes</p>
              <p>• Ensure someone is available to receive packages requiring signature</p>
              <p>• Address accuracy is crucial - incorrect addresses may result in additional fees</p>
              <p>• Contact customer support if your package doesn't arrive within the estimated timeframe</p>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </MainLayout>
  );
};

export default Shipping;
