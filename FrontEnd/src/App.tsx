import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import WhatWeBuildPage from "./pages/WhatWeBuild";
import Gallery from "./pages/Gallery";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";
import CustomInteriorStyles from "./pages/CustomInteriorStyles";
import About from "./pages/About";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

// This new component contains the global shortcut logic
const AppContent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for the Shift + Alt + A combination
      if (event.shiftKey && event.altKey && event.key.toLowerCase() === 'a') {
        event.preventDefault(); // Prevent any default browser action
        console.log('Global admin shortcut triggered!');

        // Navigate to the admin page if not already there
        if (location.pathname !== '/admin') {
          navigate('/admin');
        }
      }
    };

    // Add the event listener to the entire document
    document.addEventListener('keydown', handleKeyDown);

    // Important: Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, location]); // Dependencies for the effect

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/what-we-build" element={<WhatWeBuildPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-interior-styles" element={<CustomInteriorStyles />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;