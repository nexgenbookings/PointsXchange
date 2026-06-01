import { getTestimonials } from "@/lib/data";
import { Star } from "lucide-react";
export async function TestimonialsSection() {
  const testimonials = await getTestimonials();
  if (!testimonials.length) return null;

  return (
    <section className="border-t border-white/8 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">What sellers say</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">Real results, real people.</h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex flex-col rounded-2xl border border-white/8 bg-[#111] p-6"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${i < t.rating ? "fill-primary text-primary" : "fill-white/10 text-white/10"}`}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 flex-1 text-sm leading-7 text-[#A0A0A0]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3 border-t border-white/8 pt-4">
                <div className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  {t.role && <p className="text-xs text-[#A0A0A0]">{t.role}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
