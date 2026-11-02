import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CartProvider } from "@/hooks/useCart";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import Home from "@/pages/Home";
import Cottages from "@/pages/Cottages";
import CottageDetail from "@/pages/CottageDetail";
import BeachBar from "@/pages/BeachBar";
import MenuPage from "@/pages/MenuPage";
import Reservations from "@/pages/Reservations";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import CartPage from "@/pages/CartPage";
import Checkout from "@/pages/Checkout";
import About from "@/pages/About";
import GalleryPage from "@/pages/GalleryPage";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

/** Reset scroll on navigation, unless we're headed to a home anchor. */
function ScrollManager() {
  const { pathname, state } = useLocation();
  useEffect(() => {
    if ((state as { scrollTo?: string } | null)?.scrollTo) return;
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, state]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollManager />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stay" element={<Cottages />} />
              <Route path="/stay/:slug" element={<CottageDetail />} />
              <Route path="/beach-bar" element={<BeachBar />} />
              <Route path="/beach-bar/menu" element={<MenuPage />} />
              <Route path="/beach-bar/reservations" element={<Reservations />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:slug" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
