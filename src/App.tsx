
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import WhatWeBuildPage from "./pages/WhatWeBuild";
import Gallery from "./pages/Gallery";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";
import CustomInteriorStyles from "./pages/CustomInteriorStyles";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/what-we-build" element={<WhatWeBuildPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/custom-interior-styles" element={<CustomInteriorStyles />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
