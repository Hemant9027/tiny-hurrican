import { Anchor } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/Button";
import { Sticker } from "@/components/ui/decor";

export default function NotFound() {
  useSEO({
    title: "Lost at Sea (404)",
    description: "This page drifted off with the tide. Head back to shore.",
    path: "/404",
  });

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-turquoise px-6 pt-28 pb-20">
      <div
        className="texture-dots pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
      />
      <div className="relative text-center">
        <Sticker color="bg-coral">404 — Lost at sea</Sticker>
        <h1 className="font-display mt-6 text-6xl font-black tracking-tight text-ink text-balance sm:text-7xl">
          This Page Swam <em className="text-teal">Off</em>.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg font-medium text-ink/70">
          The tide took this one. Happens to the best of flip-flops. Let's get
          you back to shore.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3.5">
          <Button to="/" variant="teal" size="lg">
            <Anchor className="h-5 w-5" strokeWidth={2.4} />
            Back to Shore
          </Button>
          <Button to="/stay" variant="outline" size="lg">
            See the Cottages
          </Button>
        </div>
      </div>
    </section>
  );
}
