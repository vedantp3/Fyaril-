
import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Handshake, Code, TrendingUp, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';

const partnersPages = {
  'programs': {
    title: 'Partnership Programs',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Partnership Programs</h2>
        <p className="text-gray-700">Join our ecosystem of partners and unlock new revenue opportunities while expanding Fyaril's reach across Europe.</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <div className="bg-fyaril-blue text-white p-3 rounded-full w-fit mb-4">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Reseller Program</h3>
            <p className="text-gray-600 mb-4">Become an authorized reseller and earn commissions on every sale.</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• 10-25% commission rates</li>
              <li>• Marketing support materials</li>
              <li>• Dedicated account manager</li>
              <li>• Monthly performance bonuses</li>
            </ul>
            <Button className="w-full mt-4 bg-fyaril-blue hover:bg-fyaril-blue/80">Join Reseller Program</Button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <div className="bg-fyaril-blue text-white p-3 rounded-full w-fit mb-4">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Technology Partners</h3>
            <p className="text-gray-600 mb-4">Integrate with our platform and offer value-added services.</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• API access and documentation</li>
              <li>• Technical support team</li>
              <li>• Co-marketing opportunities</li>
              <li>• Revenue sharing models</li>
            </ul>
            <Button className="w-full mt-4 bg-fyaril-blue hover:bg-fyaril-blue/80">Become Tech Partner</Button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <div className="bg-fyaril-blue text-white p-3 rounded-full w-fit mb-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Strategic Alliances</h3>
            <p className="text-gray-600 mb-4">Form strategic partnerships for mutual growth and market expansion.</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Joint venture opportunities</li>
              <li>• Market development funds</li>
              <li>• Exclusive territory rights</li>
              <li>• Brand partnership benefits</li>
            </ul>
            <Button className="w-full mt-4 bg-fyaril-blue hover:bg-fyaril-blue/80">Explore Alliance</Button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Partner Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">Financial Incentives</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Competitive commission structures</li>
                <li>Performance-based bonuses</li>
                <li>Quarterly incentive programs</li>
                <li>Revenue sharing opportunities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3">Business Support</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Dedicated partner manager</li>
                <li>Training and certification programs</li>
                <li>Marketing co-op funding</li>
                <li>Technical integration support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'affiliate': {
    title: 'Affiliate Marketing',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Affiliate Marketing</h2>
        <p className="text-gray-700">Earn money by promoting Fyaril products through our comprehensive affiliate marketing program.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">How Affiliate Marketing Works</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-medium">Sign Up as Affiliate</h4>
                <p className="text-gray-600">Join our affiliate program and get approved to start promoting</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-medium">Get Your Unique Links</h4>
                <p className="text-gray-600">Receive personalized affiliate links and marketing materials</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-medium">Promote Products</h4>
                <p className="text-gray-600">Share links on your website, social media, or marketing channels</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-medium">Earn Commissions</h4>
                <p className="text-gray-600">Get paid for every successful sale generated through your links</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Commission Structure</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-fyaril-teal/10">
                  <th className="border border-fyaril-teal/20 p-3 text-left">Product Category</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Commission Rate</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Cookie Duration</th>
                  <th className="border border-fyaril-teal/20 p-3 text-center">Average Order Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Fashion & Accessories</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">8%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">30 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€85</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Electronics</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">5%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">30 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€150</td>
                </tr>
                <tr>
                  <td className="border border-fyaril-teal/20 p-3">Home & Garden</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">10%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">30 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€65</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-fyaril-teal/20 p-3">Food & Beverages</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">12%</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">30 days</td>
                  <td className="border border-fyaril-teal/20 p-3 text-center">€45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Marketing Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">Creative Assets</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>High-quality product images</li>
                <li>Banner ads in multiple sizes</li>
                <li>Video content and demos</li>
                <li>Social media templates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-lg mb-3">Performance Tools</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Real-time analytics dashboard</li>
                <li>Link performance tracking</li>
                <li>Conversion optimization tips</li>
                <li>Monthly performance reports</li>
              </ul>
            </div>
          </div>
        </div>
        
        <Alert className="bg-green-50 border-green-300">
          <DollarSign className="h-4 w-4 text-green-500" />
          <AlertTitle className="text-green-800">Start Earning Today</AlertTitle>
          <AlertDescription className="text-green-700">
            Join thousands of affiliates already earning with Fyaril. No setup fees, no hidden costs.
          </AlertDescription>
          <Button className="mt-3 bg-green-600 hover:bg-green-700">Join Affiliate Program</Button>
        </Alert>
      </div>
    )
  },
  'api': {
    title: 'Integration APIs',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Integration APIs</h2>
        <p className="text-gray-700">Integrate with Fyaril's powerful APIs to build custom solutions and enhance your business applications.</p>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Available APIs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">Product Catalog API</h4>
              <p className="text-gray-600 mb-3">Access our complete product database with real-time inventory and pricing.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Product search and filtering</li>
                <li>• Real-time inventory levels</li>
                <li>• Pricing and promotion data</li>
                <li>• Product images and descriptions</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">Order Management API</h4>
              <p className="text-gray-600 mb-3">Create, manage, and track orders programmatically.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Order creation and validation</li>
                <li>• Order status tracking</li>
                <li>• Shipping and delivery updates</li>
                <li>• Return and refund processing</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">Payment Processing API</h4>
              <p className="text-gray-600 mb-3">Secure payment processing with multiple payment methods.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Credit card processing</li>
                <li>• Digital wallet integration</li>
                <li>• Subscription billing</li>
                <li>• Fraud detection</li>
              </ul>
            </div>
            
            <div className="border border-fyaril-teal/30 rounded-lg p-4">
              <h4 className="font-medium text-lg mb-3 text-fyaril-blue">Analytics API</h4>
              <p className="text-gray-600 mb-3">Access detailed analytics and reporting data.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sales performance metrics</li>
                <li>• Customer behavior data</li>
                <li>• Traffic and conversion analytics</li>
                <li>• Custom reporting</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Getting Started</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h4 className="font-medium">Register for API Access</h4>
                <p className="text-gray-600">Complete the developer registration form and agreement</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h4 className="font-medium">Get API Credentials</h4>
                <p className="text-gray-600">Receive your API keys and access credentials</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h4 className="font-medium">Start Integration</h4>
                <p className="text-gray-600">Use our documentation and SDKs to begin development</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-fyaril-blue text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h4 className="font-medium">Go Live</h4>
                <p className="text-gray-600">Deploy your integration and start processing transactions</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
          <h3 className="text-xl font-semibold mb-4">Developer Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Documentation</h4>
              <p className="text-gray-600 text-sm">Comprehensive API documentation with examples and use cases.</p>
            </div>
            
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">SDKs & Libraries</h4>
              <p className="text-gray-600 text-sm">Ready-to-use SDKs for popular programming languages.</p>
            </div>
            
            <div className="bg-fyaril-teal/10 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">Developer Support</h4>
              <p className="text-gray-600 text-sm">Dedicated technical support team for integration assistance.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  'faq': {
    title: 'Partners FAQ',
    content: (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Partners FAQ</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">How do I become a Fyaril partner?</h3>
            <p className="text-gray-700">Start by filling out our partner application form on our website. Our partnership team will review your application and contact you within 3-5 business days to discuss next steps and program details.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">What are the requirements to join the partner program?</h3>
            <p className="text-gray-700">Requirements vary by program type. Generally, we look for established businesses with relevant experience, a strong market presence, and alignment with our values. Specific requirements include business registration, financial stability, and compliance with local regulations.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">How are commissions calculated and paid?</h3>
            <p className="text-gray-700">Commissions are calculated based on net sales and paid monthly. We provide detailed reporting through your partner dashboard. Payments are made via bank transfer within 30 days of month-end, provided minimum thresholds are met.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">Can I access Fyaril's APIs for my business?</h3>
            <p className="text-gray-700">Yes, technology partners and qualified resellers can access our APIs. API access requires separate approval and agreement to our developer terms. Contact our partnership team to discuss your specific integration needs and requirements.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
            <h3 className="text-xl font-semibold text-fyaril-blue mb-2">What marketing support do you provide to partners?</h3>
            <p className="text-gray-700">We provide comprehensive marketing support including co-branded materials, product catalogs, training sessions, and co-marketing opportunities. Partners also get access to our marketing asset library and can participate in trade shows and events.</p>
          </div>
        </div>
      </div>
    )
  }
};

const PartnersDetail = () => {
  const { slug } = useParams();
  
  // If no slug, show the main Partners landing content
  if (!slug) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-fyaril-blue">For Partners</h1>
            <div className="h-1 w-20 bg-fyaril-teal mt-2"></div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-gray-700">Join our partner ecosystem and unlock new revenue streams while expanding your business reach.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
                <h3 className="text-xl font-semibold mb-4">Partnership Opportunities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reseller and distributor programs</li>
                  <li>• Technology integration partnerships</li>
                  <li>• Affiliate marketing opportunities</li>
                  <li>• Strategic business alliances</li>
                  <li>• API and development partnerships</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-fyaril-teal/20">
                <h3 className="text-xl font-semibold mb-4">Partner Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Competitive commission structures</li>
                  <li>• Dedicated partner support</li>
                  <li>• Marketing and sales resources</li>
                  <li>• Training and certification programs</li>
                  <li>• Co-marketing opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
  
  const pageData = partnersPages[slug as keyof typeof partnersPages];
  
  if (!pageData) {
    return (
      <MainLayout>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
          <p>The requested Partners help page does not exist.</p>
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

export default PartnersDetail;
