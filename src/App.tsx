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
            <Route path="/" element={<Index />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services/menuiserie" element={<Menuiserie />} />
            <Route path="/services/peinture" element={<Peinture />} />
            <Route path="/services/recouvrement" element={<Recouvrement />} />
            <Route path="/services/faux-murs" element={<FauxMurs />} />
            <Route path="/services/jardin" element={<Jardin />} />
            <Route path="/services/sanitaires" element={<Sanitaires />} />
            <Route path="/services/toiture" element={<Toiture />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
