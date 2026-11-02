import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CalendarHeart, Menu, ShoppingBag } from "lucide-react";
import { nav } from "@/config/siteConfig";
import { useScrolled } from "@/hooks/useScroll";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/utils/cn";
import { Logo } from "@/components/Logo";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { MobileMenu } from "@/components/MobileMenu";
import { SmartAnchor } from "@/components/SmartAnchor";
import type { NavLink as NavLinkType } from "@/config/siteConfig";

function DesktopNavItem({ item }: { item: NavLinkType }) {
  const classes =
    "nav-underline text-[15px] font-bold tracking-tight text-ink transition-colors hover:text-teal";
  if (item.anchor) {
    return (
      <SmartAnchor to={item.to} className={cn(classes, "cursor-pointer")}>
        {item.label}
      </SmartAnchor>
    );
  }
  return (
    <NavLink
      to={item.to}
      className={({ isActive }) => cn(classes, isActive && "active")}
    >
      {item.label}
    </NavLink>
  );
}

function CartButton({ onClick }: { onClick: () => void }) {
  const { count } = useCart();
  return (
    <button
      onClick={onClick}
      aria-label={`Open cart, ${count} item${count === 1 ? "" : "s"}`}
      className="shadow-hard-sm relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink transition-all hover:-translate-y-0.5 hover:bg-sunshine"
    >
      <ShoppingBag className="h-5 w-5" strokeWidth={2.3} />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-ink bg-coral px-1 text-[10px] font-black text-ink">
          {count}
        </span>
      )}
    </button>
  );
}

export function Header() {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart } = useCart();
  const location = useLocation();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        {/* Collapsing announcement strip */}
        <div
          className={cn(
            "overflow-hidden transition-[max-height] duration-500",
            scrolled ? "max-h-0" : "max-h-12",
          )}
        >
          <AnnouncementBar />
        </div>

        <div
          className={cn(
            "bg-cream transition-all duration-300",
            scrolled
              ? "border-b-2 border-ink/10 shadow-[0_6px_24px_-12px_rgba(37,52,46,0.35)]"
              : "border-b-2 border-transparent",
          )}
        >
          {/* ------------------------- Desktop ------------------------- */}
          <div
            className={cn(
              "mx-auto hidden w-full max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-8 transition-all duration-300 lg:grid",
              scrolled ? "h-16" : "h-[5.25rem]",
            )}
          >
            {/* LEFT */}
            <nav
              className="flex items-center justify-end gap-9 pr-10"
              aria-label="Primary"
            >
              {nav.left.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
            </nav>

            {/* CENTRE — mathematically centred by the 1fr/auto/1fr grid */}
            <div className="flex justify-center">
              <Logo compact={scrolled} />
            </div>

            {/* RIGHT */}
            <nav
              className="flex items-center justify-start gap-9 pl-10"
              aria-label="Secondary"
            >
              {nav.right.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
              ))}
              <NavLink
                to="/stay"
                className="shadow-hard inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sunshine px-5 py-2.5 text-[15px] font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-coral"
              >
                <CalendarHeart className="h-4.5 w-4.5" strokeWidth={2.4} />
                Book Your Stay
              </NavLink>
              <CartButton onClick={openCart} />
            </nav>
          </div>

          {/* ------------------------- Mobile -------------------------- */}
          <div className="relative flex h-16 items-center justify-between px-4 lg:hidden">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="shadow-hard-sm flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-cream text-ink transition-colors hover:bg-turquoise"
            >
              <Menu className="h-5 w-5" strokeWidth={2.4} />
            </button>

            {/* Logo pinned to the exact horizontal centre */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo compact />
            </div>

            <div className="flex items-center gap-2.5">
              <NavLink
                to="/stay"
                aria-label="Book your stay"
                className="shadow-hard-sm flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-ink"
              >
                <CalendarHeart className="h-5 w-5" strokeWidth={2.3} />
              </NavLink>
              <CartButton onClick={openCart} />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
