
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Seller routes */}
          <Route path="/sellers" element={<SellerHelp />} />
          <Route path="/sellers/:slug" element={<SellerDetail />} />
          
          {/* General routes */}
          <Route path="/faq" element={<GeneralFAQ />} />
          <Route path="/about" element={<NotFound />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
