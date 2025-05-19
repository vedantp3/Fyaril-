
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SellerHelp from "./pages/SellerHelp";
import SellerDetail from "./pages/SellerDetail";

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
          
          {/* B2B routes - these will need corresponding components */}
          <Route path="/b2b" element={<NotFound />} />
          <Route path="/b2b/:slug" element={<NotFound />} />
          
          {/* B2C routes - these will need corresponding components */}
          <Route path="/b2c" element={<NotFound />} />
          <Route path="/b2c/:slug" element={<NotFound />} />
          
          {/* Partner routes - these will need corresponding components */}
          <Route path="/partners" element={<NotFound />} />
          <Route path="/partners/:slug" element={<NotFound />} />
          
          {/* General routes */}
          <Route path="/faq" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
