
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HelpCategoryHeader from '@/components/help/HelpCategoryHeader';
import HelpCard from '@/components/help/HelpCard';
import { 
  Store, 
  Wallet, 
  User, 
  Award, 
  Image as ImageIcon,
  Package, 
  Megaphone, 
  Truck, 
  Clock,
  BadgeHelp, 
  MessageCircle
} from 'lucide-react';

const SellerHelp = () => {
  const helpCards = [
    { 
      title: "Start Selling with Fyaril", 
      icon: Store,
      path: "/sellers/start-selling"
    },
    { 
      title: "Seller Plans", 
      icon: Award,
      path: "/sellers/plans"
    },
    { 
      title: "Register as a Vendor", 
      icon: User,
      path: "/sellers/register"
    },
    { 
      title: "Complete Seller KYC", 
      icon: BadgeHelp,
      path: "/sellers/kyc"
    },
    { 
      title: "Edit My Vendor Profile", 
      icon: User,
      path: "/sellers/edit-profile"
    },
    { 
      title: "Complete Seller Profile", 
      icon: User,
      path: "/sellers/complete-profile"
    },
    { 
      title: "Vendor Badges", 
      icon: Award,
      path: "/sellers/badges"
    },
    { 
      title: "Product Listing", 
      icon: Package,
      path: "/sellers/product-listing"
    },
    { 
      title: "Image Guidelines", 
      icon: ImageIcon,
      path: "/sellers/image-guidelines"
    },
    { 
      title: "Product Bundles", 
      icon: Package,
      path: "/sellers/product-bundles"
    },
    { 
      title: "How to add Promotions", 
      icon: Megaphone,
      path: "/sellers/promotions"
    },
    { 
      title: "Order Processing & Shipping", 
      icon: Truck,
      path: "/sellers/order-processing"
    },
    { 
      title: "Payment Withdrawal", 
      icon: Wallet,
      path: "/sellers/payment"
    },
    { 
      title: "Contact Fyaril Administrator", 
      icon: MessageCircle,
      path: "/sellers/contact-admin"
    },
    { 
      title: "Packaging & Labeling Guidelines", 
      icon: Package,
      path: "/sellers/packaging"
    },
    { 
      title: "Seller General FAQ", 
      icon: BadgeHelp,
      path: "/sellers/faq"
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto">
        <HelpCategoryHeader 
          title="For Sellers" 
          description="Welcome to the Fyaril Seller Help Center. Find everything you need to know about selling on Fyaril."
          userType="sellers"
        />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-fyaril-teal/5 to-white/0 rounded-3xl -z-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {helpCards.map((card, index) => (
              <div 
                key={card.title} 
                className={`animate-slide-up animate-float`} 
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animationDuration: `${6 + (index % 3)}s`
                }}
              >
                <HelpCard
                  title={card.title}
                  icon={card.icon}
                  path={card.path}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SellerHelp;
