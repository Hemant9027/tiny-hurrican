import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { formatPrice, type Product } from "@/data/products";
import { Sticker } from "@/components/ui/decor";
import { Reveal } from "@/components/ui/Reveal";

export function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/shop/${product.slug}`}
        className="group block"
        aria-label={`View ${product.name}`}
      >
        <div className="group-hover:shadow-hard-lg relative overflow-hidden rounded-xl border-2 border-ink bg-white shadow-hard transition-all duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <Sticker color="bg-coral" rotate="-rotate-6" className="!text-[9px]">
                {product.badge}
              </Sticker>
            </div>
          )}
          <div className="aspect-square overflow-hidden">
            <img
              src={product.image.src}
              alt={product.image.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
            />
          </div>
          <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-full border-2 border-ink bg-sunshine text-ink opacity-0 transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2.5} />
          </span>
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-teal">
              {product.category}
            </p>
            <h3 className="font-display mt-1 text-xl font-bold">
              {product.name}
            </h3>
            <div className="mt-2 flex gap-1.5">
              {product.colors.map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="h-3.5 w-3.5 rounded-full border-2 border-ink/60"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>
          <p className="font-display text-lg font-black">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </Reveal>
  );
}
