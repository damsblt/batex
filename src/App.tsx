import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Menuiserie from "./pages/services/Menuiserie";
import Peinture from "./pages/services/Peinture";
import Recouvrement from "./pages/services/Recouvrement";
import FauxMurs from "./pages/services/FauxMurs";
import Jardin from "./pages/services/Jardin";
import Sanitaires from "./pages/services/Sanitaires";
import Toiture from "./pages/services/Toiture";
import Galerie from "./pages/Galerie";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { withSEO } from "./components/withSEO";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="min-h-screen bg-neutral-50">
          <Navigation />
          <Routes>
            <Route path="/" element={withSEO(Index)()} />
            <Route path="/a-propos" element={withSEO(About)()} />
            <Route path="/services/menuiserie" element={withSEO(Menuiserie)()} />
            <Route path="/services/peinture" element={withSEO(Peinture)()} />
            <Route path="/services/recouvrement" element={withSEO(Recouvrement)()} />
            <Route path="/services/faux-murs" element={withSEO(FauxMurs)()} />
            <Route path="/services/jardin" element={withSEO(Jardin)()} />
            <Route path="/services/sanitaires" element={withSEO(Sanitaires)()} />
            <Route path="/services/toiture" element={withSEO(Toiture)()} />
            <Route path="/galerie" element={withSEO(Galerie)()} />
            <Route path="/contact" element={withSEO(Contact)()} />
            <Route path="*" element={withSEO(NotFound)()} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
