
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SellerHelp from "./pages/SellerHelp";
import SellerDetail from "./pages/SellerDetail";
import GeneralFAQ from "./pages/GeneralFAQ";
import BuyersHelp from "./pages/BuyersHelp";
import GettingStarted from "./pages/buyers/GettingStarted";
import HowToOrder from "./pages/buyers/HowToOrder";
import PaymentMethods from "./pages/buyers/PaymentMethods";
import Shipping from "./pages/buyers/Shipping";
import Returns from "./pages/buyers/Returns";
import BuyerFAQ from "./pages/buyers/BuyerFAQ";
import B2BDetail from "./pages/B2BDetail";
import B2CDetail from "./pages/B2CDetail";
import PartnersDetail from "./pages/PartnersDetail";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Buyer routes */}
          <Route path="/buyers" element={<BuyersHelp />} />
          
          {/* Seller routes */}
          <Route path="/sellers" element={<SellerHelp />} />
          <Route path="/sellers/:slug" element={<SellerDetail />} />
          
          {/* B2B routes */}
          <Route path="/b2b" element={<B2BDetail />} />
          <Route path="/b2b/:slug" element={<B2BDetail />} />
          
          {/* B2C routes */}
          <Route path="/b2c" element={<B2CDetail />} />
          <Route path="/b2c/:slug" element={<B2CDetail />} />
          
          {/* Partners routes */}
          <Route path="/partners" element={<PartnersDetail />} />
          <Route path="/partners/:slug" element={<PartnersDetail />} />
          
          {/* General routes */}
          <Route path="/faq" element={<GeneralFAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<NotFound />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
