
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Headphones,
  FileText,
  Globe,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-fyaril-blue py-16 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contact & Support
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Get the help you need, when you need it. Our dedicated support team is here to assist you.
            </p>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {/* Live Chat */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-fyaril-blue/10 rounded-full mx-auto flex items-center justify-center mb-6">
                  <MessageCircle className="text-fyaril-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Live Chat</h3>
                <p className="text-gray-600 mb-6">
                  Get instant help with our live chat support. Available 24/7 for urgent issues.
                </p>
                <Button className="bg-fyaril-blue hover:bg-fyaril-blue/80 w-full">
                  Start Chat
                </Button>
                <p className="text-sm text-gray-500 mt-2">Response time: &lt; 2 minutes</p>
              </div>

              {/* Email Support */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-fyaril-blue/10 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Mail className="text-fyaril-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Support</h3>
                <p className="text-gray-600 mb-6">
                  Send us a detailed message and we'll get back to you as soon as possible.
                </p>
                <Button className="bg-fyaril-blue hover:bg-fyaril-blue/80 w-full">
                  Send Email
                </Button>
                <p className="text-sm text-gray-500 mt-2">Response time: 4-8 hours</p>
              </div>

              {/* Phone Support */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-fyaril-blue/10 rounded-full mx-auto flex items-center justify-center mb-6">
                  <Phone className="text-fyaril-blue" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
                <p className="text-gray-600 mb-6">
                  Speak directly with our support team for complex issues or urgent matters.
                </p>
                <Button className="bg-fyaril-blue hover:bg-fyaril-blue/80 w-full">
                  Call Now
                </Button>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri: 9 AM - 6 PM IST</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Details */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-fyaril-blue/10 p-3 rounded-full">
                      <Phone className="text-fyaril-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone Numbers</h4>
                      <p className="text-gray-600">India: +91 1800-123-4567 (Toll Free)</p>
                      <p className="text-gray-600">International: +91 80-1234-5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-fyaril-blue/10 p-3 rounded-full">
                      <Mail className="text-fyaril-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Addresses</h4>
                      <p className="text-gray-600">General Support: support@fyaril.com</p>
                      <p className="text-gray-600">Seller Support: sellers@fyaril.com</p>
                      <p className="text-gray-600">Business Inquiries: business@fyaril.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-fyaril-blue/10 p-3 rounded-full">
                      <MapPin className="text-fyaril-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Office Address</h4>
                      <p className="text-gray-600">
                        Fyaril Technologies Pvt. Ltd.<br />
                        Level 8, Building 23<br />
                        Tech Business Park<br />
                        Bangalore, Karnataka 560001<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-fyaril-blue/10 p-3 rounded-full">
                      <Clock className="text-fyaril-blue" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Support Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM IST</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                      <p className="text-sm text-fyaril-blue mt-2">Live chat available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Support Categories */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-semibold mb-6">Support Categories</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-fyaril-blue/5 rounded-lg">
                    <Headphones className="text-fyaril-blue" size={24} />
                    <div>
                      <h4 className="font-semibold">Technical Support</h4>
                      <p className="text-gray-600 text-sm">Website issues, app problems, payment troubles</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-fyaril-blue/5 rounded-lg">
                    <FileText className="text-fyaril-blue" size={24} />
                    <div>
                      <h4 className="font-semibold">Order Support</h4>
                      <p className="text-gray-600 text-sm">Order tracking, returns, refunds, delivery issues</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-fyaril-blue/5 rounded-lg">
                    <Globe className="text-fyaril-blue" size={24} />
                    <div>
                      <h4 className="font-semibold">Seller Support</h4>
                      <p className="text-gray-600 text-sm">Account setup, listing help, payment withdrawals</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-fyaril-blue/5 rounded-lg">
                    <AlertCircle className="text-fyaril-blue" size={24} />
                    <div>
                      <h4 className="font-semibold">Account Issues</h4>
                      <p className="text-gray-600 text-sm">Login problems, password reset, account verification</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Priority Support</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Need faster response times? Upgrade to our priority support for business accounts.
                  </p>
                  <Button variant="outline" className="border-fyaril-blue text-fyaril-blue hover:bg-fyaril-blue hover:text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="space-y-6">
                <div className="border-l-4 border-fyaril-blue pl-6">
                  <h3 className="font-semibold text-lg mb-2">How long does it take to get a response?</h3>
                  <p className="text-gray-600">
                    Live chat responses are typically within 2 minutes. Email support responses are within 4-8 hours during business days.
                  </p>
                </div>
                
                <div className="border-l-4 border-fyaril-blue pl-6">
                  <h3 className="font-semibold text-lg mb-2">Can I track my support ticket?</h3>
                  <p className="text-gray-600">
                    Yes, you'll receive a ticket number for email and phone support requests that you can use to track progress.
                  </p>
                </div>
                
                <div className="border-l-4 border-fyaril-blue pl-6">
                  <h3 className="font-semibold text-lg mb-2">Do you offer support in other languages?</h3>
                  <p className="text-gray-600">
                    We primarily offer support in English and Hindi. For other languages, we can arrange translation services for complex issues.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-fyaril-blue pl-6">
                  <h3 className="font-semibold text-lg mb-2">What information should I include in my support request?</h3>
                  <p className="text-gray-600">
                    Include your account email, order number (if applicable), detailed description of the issue, and any error messages you've encountered.
                  </p>
                </div>
                
                <div className="border-l-4 border-fyaril-blue pl-6">
                  <h3 className="font-semibold text-lg mb-2">Is there a support fee?</h3>
                  <p className="text-gray-600">
                    Basic support is free for all Fyaril users. Premium support with faster response times is available for business accounts.
                  </p>
                </div>
                
                <div className="border-l-4 border-fyaril-blue pl-6">
                  <h3 className="font-semibold text-lg mb-2">Can I schedule a call with support?</h3>
                  <p className="text-gray-600">
                    Yes, for complex issues or business accounts, you can schedule a callback at a convenient time through your account dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 px-6 bg-fyaril-blue">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Emergency Support</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              For urgent issues that affect your business operations or security concerns, contact our emergency support line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-fyaril-blue hover:bg-gray-100">
                Emergency Hotline: +91 80-1234-9999
              </Button>
              <Button variant="outline" className="border-white text-fyaril-blue hover:bg-white hover:text-fyaril-blue">
                Report Security Issue
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-5">Available 24/7 for critical issues only</p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Contact;
