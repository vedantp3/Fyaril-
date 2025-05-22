
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HelpCategoryHeader from '@/components/help/HelpCategoryHeader';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeneralFAQ = () => {
  const faqItems = [
    {
      question: "I want to sell my products in Europe. How can I sell on Fyaril?",
      answer: "As a first step, apply to become a seller. This will help us create a seller account for you. We will share login details to your registered email address if your credentials are valid. For next steps, you can follow instructions in your account."
    },
    {
      question: "How can selling on Fyaril help my Business?",
      answer: "In 2021, 3 out of 4 Europeans bought something on an e-commerce site. Seller on Fyaril can sell to 748 million European population which includes 5.5 million Indian and south Asian origin consumers. Fyaril opens up global opportunities, particularly entire European region as an additional market for your existing business with minimal effort from you."
    },
    {
      question: "Do I need European bank account or VAT number to sell on Fyaril?",
      answer: "No! It is not necessary to have a bank account or VAT number in Europe. You can become a supplier on Fyaril's Global marketplace with your Indian GST / PAN numbers. When you are ready for international expansion, we will help you to create a setup in Europe. However, if you already have EU VAT number, you can be a seller on Fyaril as a European vendor with your European credentials. You just need to receive order – pack goods – handover package to the delivery partner."
    },
    {
      question: "We are already selling on an e-commerce marketplaces in India. Can I still sell on Fyaril?",
      answer: "Yes! In fact, you are a step closer to selling globally on Fyaril. Just apply for a vendor account, upload digital inventory through vendor panel and start receiving orders from Europe."
    },
    {
      question: "I own a brand and sell my products on e-commerce marketplaces in India and/or abroad. Can I sell on Fyaril?",
      answer: "Yes! In fact, Fyaril is created with a vision to take trusted Indian brands Global. You can start by signing up as B2C vendor and as your sales grow, you will be able to store goods in Europe for quick fulfilment. Fyaril is a fantastic platform to learn about new geography, customer preferences and grow in a risk & investment free manner. Just apply for a vendor account, Complete KYC for a brand. You will receive Top Brand badge which will be displayed on your every product page."
    },
    {
      question: "What role does Fyaril play in B2B model?",
      answer: "Fyaril allows you to manage everything in one place, from customer requirement to order fulfillment. With the platform that's accessible and available to your audience/customers, Fyaril B2B ecommerce is a great chance to cross-sell and up-sell to existing buyers. With options for automated sales processes between businesses, suppliers and distributors, our ecommerce platform can help streamline your B2B operations and improve the customer experience."
    },
    {
      question: "Why is so much documentation required for KYC?",
      answer: "We have to follow compliances for export in India and abroad. Also we need to check all the details if its available with the vendor to ensure smooth flow for business."
    },
    {
      question: "Does Fyaril market products under Vendors Brand or it sells under the name of FYARIL?",
      answer: "We cater to all kind of product module like white label, private label, wholesale and branded products. So the brand name and packing all depends on the kind of product usually we do not change Vendor name or branding. Marketing and sale is done with Vendor name /brand. We do add our Merchandising along with it."
    },
    {
      question: "Once vendors take subscription plans how fast will they start receiving orders?",
      answer: "This depends on the plan the vendor has subscribed for as the activity is planned according to it. Though we don't commit any time line for orders but it all depends on factors such as type of product, Targeted regions, demand for the product etc."
    },
    {
      question: "In case if the product is returned (internationally) who will bear the shipping cost?",
      answer: "Fyaril does not allow returns on B2B orders unless there is a manufacturing defect. Fyaril coordinates discussions between buyer and seller in case of an issue in delivery."
    },
    {
      question: "Returns: What happens if a customer returns an item?",
      answer: "Our goal is to minimise returns and maximise profits for you. To achieve, we discourage returning goods to India as this may not be cost effective solution unless value of shipment is large enough to justify administration needed. To ease life of vendor on returns, we offer return credits to each vendor depending on the credit rating or 10% of monthly sales whichever is lower after first 6 months on the platform. Once you have reached return rate beyond credit limit then, some correction in sales approach may be needed. This means, we will have review returned products along with the vendor to find ways to reduce return rate, customers with highest return rate will be restricted and Fyaril will offer free storage of returned goods for 30 - 60 days in Europe. You only pay for repackaging if needed. You will have opportunity to sell your goods during this time. After free storage period is over, you will a choice either to start paying for the storage or decide to recycle the item or import back to India. For defective items received by the customers, Fyaril will charge a fee to recycle the item. Sellers should upload terms and conditions for their store on Fyaril seller profile. During the checkout process customers explicitly need to agree to seller's terms and conditions. Sellers can mention store's return policy in terms and conditions."
    },
    {
      question: "What about fluctuation in currency? How can I benefit from higher exchange rate?",
      answer: "Fyaril uses live exchange rates from recognized exchanges. Customer always pays in local currency and you will be paid in Indian rupees if vendor currency is Indian rupees. We will always be transparent about exchange rates on the days of applicable transactions. You can select currency of your vendor store while signing up."
    },
    {
      question: "I have European VAT number, Can I sell goods on Fyaril?",
      answer: "Yes, apply for a vendor account, upload your digital inventory and sell on Fyaril. If you already have your goods stored in Europe, we pick goods from your warehouse and deliver them to the customer. If you do not have goods stored in Europe, we can help you to ship them in Europe."
    },
    {
      question: "I'm not aware of compliances, regulations required to sell in Europe. Can I still sell in Europe?",
      answer: "Yes, we are making it easy for vendors to be compliant. In simple way, for your products, we will help you to understand European compliance requirements and regulations. From time to time, Fyaril plans to offer free training, webinar for guidance to sellers to understand European market and learn. Once you are compliant to sell in Europe, you can keep yourself informed, maintain compliance to be able to continue to sell on Fyaril."
    },
    {
      question: "What plans are available for vendors to sell on Fyaril platform?",
      answer: "Please refer to Seller Plans."
    },
    {
      question: "What are the payment terms - How do I get paid for the goods sold?",
      answer: "We initiate payments every week. Depending on your plan and eligibility of the order, payout will happen automatically. To enable smooth payouts, please complete KYC (verified badge) and update your bank account details in your Fyaril Vendor panel."
    },
    {
      question: "Who pays payment gateway commission?",
      answer: "Fyaril offers range of payment options to the customers so that they can use their most trusted payment solution. Each payment gateway has their own commission structure. Typically, this is paid by the customer. In some cases, Fyaril pays the payment gateway fees. We are always transparent about payment processing charges that you customer needs to pay."
    },
    {
      question: "Do I need to pay any transaction fee?",
      answer: "Depending on the product you are selling and your vendor plan, we charge from 5 to 20% transaction commission per order value."
    },
    {
      question: "I have no idea about European customer choices? How can I maximise sales?",
      answer: "From time to time, Fyaril plans to offer free training, webinar for guidance to sellers to understand European market and learn. The more you learn the more you earn!"
    },
    {
      question: "How can I promote my products?",
      answer: "You will have plenty of options to choose from to promote your products. Through your Fyaril vendor panel you can opt for various campaigns on Fyaril platform to highlight your products. Fyaril conducts social media, print media, event sponsorship, marketing campaigns to be able to take your products deep and wide to the customers. Through your vendor panel, you will have opportunity to participate in paid and free promotional activities."
    },
    {
      question: "What about shipping?",
      answer: "Fyaril uses various service providers to ensure your products are delivered to the customers on time. Depending on your plan, you can use either Fyaril's fulfilment for shipping or your own carrier. Most important aspect of shipping is that goods need to be delivered to the customer on time."
    },
    {
      question: "How is customs handling managed?",
      answer: "In India as well as in Europe, Fyaril uses industry's best customs agents who are experts in their profession. As a B2C vendor, do not need to manage this. If there is a query or request for more information about your products from customs, we will reach out to you. If your vendor plan is B2C - Exporter, then you are responsible for complete fulfilment of the order including export clearance. Fyaril will take care of import and delivery of the goods to the customer in destination country."
    },
    {
      question: "What warehousing options are available?",
      answer: "We are partnering with various 3rd party logistics companies across Europe to provide you warehouses at the best locations, costs and provide best quality service. At present, you can store goods in Sweden, Spain, Germany and UK. To use warehouses in Europe, you need to have Fyaril's B2B vendor plans. We may consider providing warehousing services for specialised and niche products even if you do not meet criteria criteria for B2B plans, please write to us on sellers@fyaril.com."
    },
    {
      question: "Is the Fyaril platform purely to connect seller with buyer? Will you be charging any commission for processing orders and facilitating payments between sellers & buyers?",
      answer: "Fyaril is an international platform which expects the vendor to upload their price without taxes and commission depending on destination country. When customer places order they see their landed cost which includes Fyaril fulfillment charges+ commission and taxes and duties for their respective country / location. Sellers are required to upload prices without considering taxes (not even GST for india). For shipment- We expect seller should consider that they are responsible for shipping within india. For international orders they are expected to ship the product to Fyaril Pune or Mumbai warehouse. This Shipping cost (within India) should be included to vendor price. For international shipping vendor can choose express shipping (Shiprocket) in this case the product are picked directly from vendor warehouse. This shipping cost is paid by the customer. In other cases vendor is expected to ship it to Fyaril warehouse (in case of International shipping)"
    },
    {
      question: "We work only 5 days a week. We are not available on weekends and public holidays. How can we update the terms and conditions?",
      answer: "This would not be an issue. You can update your terms and condition on your vendor panel. We allow vendors to have specific terms and conditions for buyers and it doesn't require any special agreement for the same."
    },
    {
      question: "We do not entertain international returns as packaging of our products is difficult and if not done correctly - products can break, tear and damage extensively. Can this to be entailed in our agreement accordingly?",
      answer: "This can be mentioned in your terms and conditions so that the customer can choose to buy accordingly. Here you can also mention that product is not returnable."
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto">
        <HelpCategoryHeader 
          title="Frequently Asked Questions" 
          description="Find answers to commonly asked questions about selling on Fyaril."
          userType="general"
        />
        
        <div className="max-w-4xl mx-auto mt-8">
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-fyaril-blue shrink-0 mt-0.5" />
                    <span className="text-lg font-medium">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0">
                  <div className="ml-8 text-gray-700">
                    <p>{item.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">If you couldn't find the answer to your question, our support team is ready to help you.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center gap-2 bg-fyaril-blue hover:bg-fyaril-blue/90">
                <Mail size={18} />
                <span>Contact Support</span>
              </Button>
              <Link to="/sellers">
                <Button variant="outline" className="flex items-center gap-2 border-fyaril-blue text-fyaril-blue hover:bg-fyaril-blue hover:text-white">
                  <ArrowLeft size={18} />
                  <span>Back to Help Center</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GeneralFAQ;
