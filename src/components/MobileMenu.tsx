import { useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Mail, X } from "lucide-react";
import { nav, site } from "@/config/siteConfig";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { easeOut } from "@/components/ui/Reveal";

/** Full-height slide-in navigation for small screens. */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const navigate = useNavigate();
  const location = useLocation();

  // Lock body scroll while open + close on Escape
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const go = (to: string, anchor?: boolean) => {
    onClose();
    if (anchor) {
      const id = to.split("#")[1];
      if (location.pathname === "/") {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
      return;
    }
    navigate(to);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 left-0 z-[70] flex w-[88vw] max-w-sm flex-col overflow-y-auto border-r-4 border-ink bg-teal text-cream"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={
              reduce
                ? { duration: 0.01 }
                : { type: "spring", stiffness: 300, damping: 32 }
            }
          >
            <div className="flex items-center justify-between px-6 py-5">
              <Logo tone="cream" compact />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cream bg-coral text-ink shadow-hard-cream transition-transform hover:rotate-90"
              >
                <X className="h-5 w-5" strokeWidth={2.6} />
              </button>
            </div>

            <nav className="mt-4 flex flex-col px-6" aria-label="Mobile">
              {nav.mobile.map((item, i) => (
                <motion.button
                  key={item.label + item.to}
                  onClick={() => go(item.to, item.anchor)}
                  initial={reduce ? false : { opacity: 0, x: -26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 + i * 0.05,
                    duration: 0.5,
                    ease: easeOut,
                  }}
                  className="group flex items-center justify-between border-b-2 border-cream/15 py-4 text-left"
                >
                  <span className="font-display text-3xl font-black tracking-tight transition-colors group-hover:text-sunshine">
                    {item.label}
                  </span>
                  <ArrowUpRight className="h-6 w-6 text-sunshine transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto space-y-3 px-6 pb-8 pt-10">
              <Button to="/stay" variant="sunshine" className="w-full">
                Book Your Stay
              </Button>
              <Button
                href={site.barWhatsApp.href}
                external
                variant="outlineLight"
                className="w-full"
              >
                Reserve a Beach Bar Table
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 flex items-center gap-2 text-sm font-semibold text-cream/75"
              >
                <Mail className="h-4 w-4" /> {site.email}
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
