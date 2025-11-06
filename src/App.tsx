import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ServiceAreas from "./pages/ServiceAreas";
import EmergencyLocksmith from "./pages/services/EmergencyLocksmith";
import ResidentialLocksmith from "./pages/services/ResidentialLocksmith";
import CommercialLocksmith from "./pages/services/CommercialLocksmith";
import LockRekey from "./pages/services/LockRekey";
import SmartLocks from "./pages/services/SmartLocks";
import DowntownDallas from "./pages/locations/DowntownDallas";
import Uptown from "./pages/locations/Uptown";
import NorthDallas from "./pages/locations/NorthDallas";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/emergency-locksmith-dallas" element={<EmergencyLocksmith />} />
          <Route path="/residential-locksmith-dallas" element={<ResidentialLocksmith />} />
          <Route path="/commercial-locksmith-dallas" element={<CommercialLocksmith />} />
          <Route path="/lock-rekey-dallas" element={<LockRekey />} />
          <Route path="/smart-lock-installation-dallas" element={<SmartLocks />} />
          <Route path="/locksmith-downtown-dallas" element={<DowntownDallas />} />
          <Route path="/locksmith-uptown-dallas" element={<Uptown />} />
          <Route path="/locksmith-north-dallas" element={<NorthDallas />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
