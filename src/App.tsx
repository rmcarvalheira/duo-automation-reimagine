
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Solutions from "./pages/Solutions";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import VideoUploadPage from "./pages/VideoUploadPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <LanguageProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background font-sans antialiased">
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produtos/:productId" element={<ProductDetail />} />
              <Route path="/solucoes" element={<Solutions />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/clientes" element={<Clients />} />
              <Route path="/upload-video" element={<VideoUploadPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
