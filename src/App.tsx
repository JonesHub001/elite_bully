
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import AvailableDogs from "./pages/AvailableDogs";
import Females from "./pages/Females";
import UpcomingBreeds from "./pages/UpcomingBreeds";
import Shop from "./pages/Shop";
import ReservationForm from "./pages/ReservationForm";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/available-dogs" element={<AvailableDogs />} />
            <Route path="/females" element={<Females />} />
            <Route path="/upcoming-breeds" element={<UpcomingBreeds />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/reserve" element={<ReservationForm />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
