import { useLocation, useNavigate } from "react-router-dom";
import { useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Anchor navigation ("/#experiences") that works from any route:
 * scrolls directly when already home, otherwise routes home first and
 * Home performs the scroll from location.state.
 */
export function SmartAnchor({
  to,
  className,
  children,
  onDone,
  ariaLabel,
}: {
  to: string; // e.g. "/#experiences"
  className?: string;
  children: ReactNode;
  onDone?: () => void;
  ariaLabel?: string;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const reduce = useReducedMotion();
  const id = to.split("#")[1];

  const handle = () => {
    onDone?.();
    if (location.pathname === "/") {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  return (
    <button type="button" onClick={handle} className={className} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
