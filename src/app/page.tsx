import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Slow-Roasted Goodness",
    description:
      "Hand popped in small batches for a feather-light crunch that honors 700 years of Mithila tradition.",
    icon: (
      <svg
        className="h-12 w-12 text-[--color-accent]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 6C21.507 6 13 14.507 13 25c0 7.993 4.637 13.089 9.258 17.968C26.093 49.116 32 55 32 58c0-3 5.907-8.884 9.742-15.032C46.363 38.089 51 32.993 51 25 51 14.507 42.493 6 32 6Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 32c3.866 0 7-3.134 7-7"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Clean, Ethical Sourcing",
    description:
      "Lotus seeds sourced from certified wetlands in North Bihar, supporting more than 200 women-led farming collectives.",
    icon: (
      <svg
        className="h-12 w-12 text-[--color-accent]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 54c12.15 0 22-8.059 22-18 0-5.657-3.43-10.87-9-14.187 0-7.003-5.82-12.66-13-12.66s-13 5.657-13 12.66C14.432 25.13 11 30.343 11 36c0 9.941 9.85 18 21 18Z"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 37c2.5-4.167 6.9-7 11-7 4.1 0 8.5 2.833 11 7"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Protein-Rich Snack",
    description:
      "12g plant protein, low calories, and anti-oxidant rich — perfect for mindful snacking, gifting, or festive rituals.",
    icon: (
      <svg
        className="h-12 w-12 text-[--color-accent]"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 34c0-10.493 7.507-19 18-19s18 8.507 18 19-7.507 19-18 19"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 34c0 10.493 7.507 19 18 19M20 34H8m12 19c-5.523 0-10-8.507-10-19M20 15c-5.523 0-10 8.507-10 19"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const flavorProfiles = [
  {
    name: "Classical Mithila Masala",
    notes: "Panch phoran spices, smoked red chili, roasted cumin",
    badge: "Best Seller",
  },
  {
    name: "Honey Jaggery Caramel",
    notes: "Forest honey, Madhubani jaggery shards, vanilla bean",
    badge: "Limited Harvest",
  },
  {
    name: "Tulsi Gulkand Crunch",
    notes: "Stone-crushed rose preserve, holy basil, pistachio slivers",
    badge: "Festival Favorite",
  },
];

const processSteps = [
  {
    title: "Sun-Cured",
    detail: "Seeds are cured for 48 hours under Mithila sunlight for optimal bloom.",
  },
  {
    title: "Hand Popped",
    detail:
      "Artisans pop each seed in iron kadais to retain airy texture and earthy aroma.",
  },
  {
    title: "Small Batch Spicing",
    detail:
      "Heritage spice blends ground with stone sil-batta keep flavors vibrant and fresh.",
  },
];

const testimonials = [
  {
    quote:
      "A sublime balance of crunch and comfort. Tastes exactly like the makhana my grandmother carried from Darbhanga.",
    name: "Ananya S.",
    title: "Chef & Culinary Storyteller",
  },
  {
    quote:
      "Finally found a clean-label snack that feels indulgent yet keeps my energy steady through long rehearsal days.",
    name: "Karan R.",
    title: "Classical Dancer",
  },
];

const faqs = [
  {
    q: "What sets Mithila Makhana apart?",
    a: "Our seeds are harvested from Maithil wetlands, manually sorted for size, and roasted without oil to preserve micronutrients.",
  },
  {
    q: "How should I store the makhana?",
    a: "Keep the resealable pouch in a cool, dry place. Once opened, consume within 20 days for peak crunch.",
  },
  {
    q: "Is this safe for gluten-free diets?",
    a: "Yes. Our facility is gluten-free, and every batch is tested for allergens before packaging.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="grain" aria-hidden="true" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-28 px-6 pb-24 pt-16 sm:px-10 lg:px-20">
        <section className="relative grid gap-12 rounded-4xl bg-[--color-panel]/80 px-6 py-14 shadow-xl ring-1 ring-black/5 backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-20">
          <div className="absolute -top-24 -left-24 h-56 w-56 rounded-full bg-[--color-accent-soft] blur-3xl" />
          <div className="absolute -bottom-16 -right-20 h-64 w-64 rounded-full bg-[#f8e4c4] blur-3xl" />
          <div className="relative z-10 flex flex-col gap-7">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-medium text-[--color-accent] shadow-sm ring-1 ring-[--color-accent]/20">
              <span className="h-2 w-2 rounded-full bg-[--color-accent]" />
              Maithil Heritage Snack
            </span>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[--color-text-primary] sm:text-5xl lg:text-6xl">
              Discover the soul of Mithila in every handful of artisan makhana
            </h1>
            <p className="max-w-xl text-lg text-[--color-text-muted] lg:text-xl">
              Sustainably gathered from the wetlands of North Bihar, slow-roasted
              by women-led cooperatives, and infused with heirloom spices that
              enliven mindful snacking rituals.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-[--color-accent] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[--color-accent]/30 transition hover:-translate-y-0.5 hover:bg-[#8f4e18]"
              >
                Shop Mithila Makhana
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center justify-center rounded-full border border-[--color-accent]/40 bg-white/70 px-6 py-3 text-base font-semibold text-[--color-accent] transition hover:border-[--color-accent] hover:bg-white"
              >
                Meet the Farmers
              </Link>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-6 text-sm text-[--color-text-muted] sm:grid-cols-3 lg:max-w-lg">
              <div>
                <dt className="font-semibold text-[--color-text-primary]">
                  48h sun-curing
                </dt>
                <dd>Retains airy texture & natural sweetness</dd>
              </div>
              <div>
                <dt className="font-semibold text-[--color-text-primary]">
                  12g plant protein
                </dt>
                <dd>Fuel for yogic mornings & late-night cravings</dd>
              </div>
              <div>
                <dt className="font-semibold text-[--color-text-primary]">
                  0 refined sugar
                </dt>
                <dd>Sweetness from jaggery, not lab-made syrups</dd>
              </div>
            </dl>
          </div>
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl bg-white/80 p-6 ring-1 ring-black/10 backdrop-blur">
              <div className="absolute -top-10 right-6 rounded-2xl bg-[--color-accent] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                Fresh Batch
              </div>
              <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#f3d4a0] via-[#ffe8bf] to-[#f7d5a1] p-6 shadow-inner">
                <Image
                  src="/makhana-pack.svg"
                  alt="Mithila Makhana packaging"
                  width={420}
                  height={420}
                  className="w-full"
                  priority
                />
              </div>
              <div className="flex w-full items-center justify-between text-sm text-[--color-text-muted]">
                <span className="font-semibold text-[--color-text-primary]">
                  ₹420 / 200g
                </span>
                <span>Complimentary Madhubani postcard</span>
              </div>
              <Link
                href="#shop"
                className="w-full rounded-full bg-[--color-accent] px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-[--color-accent]/40 transition hover:-translate-y-0.5 hover:bg-[#8f4e18]"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </section>

        <section
          id="story"
          className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-7">
            <h2 className="font-serif text-3xl font-semibold text-[--color-text-primary] sm:text-4xl">
              Rooted in the paddies of Darbhanga, nurtured by women cooperatives
            </h2>
            <p className="text-lg text-[--color-text-muted]">
              Every Mithila Makhana pouch traces back to the shimmering ponds of
              North Bihar. We collaborate with 200+ Maithil women who preserve
              the ancestral craft of lotus farming, ensuring fair wages and
              regenerative water harvesting practices.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="flex flex-col gap-3 rounded-2xl bg-white/70 p-5 shadow-sm shadow-[--color-accent-soft]/40 ring-1 ring-[--color-accent-soft]/50 backdrop-blur"
                >
                  {feature.icon}
                  <h3 className="text-base font-semibold text-[--color-text-primary]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[--color-text-muted]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative h-full rounded-3xl">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f9ddb3] via-[#f8c78d] to-[#f2a869] opacity-70 blur-2xl" />
            <div className="relative rounded-3xl bg-white/80 p-6 shadow-xl ring-1 ring-black/10 backdrop-blur">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[--color-accent]">
                From Pond to Pouch
              </h3>
              <ul className="mt-6 space-y-4 text-[--color-text-muted]">
                {processSteps.map((step) => (
                  <li
                    key={step.title}
                    className="rounded-xl bg-[--color-panel] px-4 py-5 text-sm shadow-sm shadow-[--color-accent-soft]/40"
                  >
                    <h4 className="text-base font-semibold text-[--color-text-primary]">
                      {step.title}
                    </h4>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-[--color-text-muted]">
                Certified Gi Tag · Sustainably harvested
              </p>
            </div>
          </div>
        </section>

        <section id="shop" className="space-y-12">
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[--color-accent]">
              Flavor Atlas
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[--color-text-primary] sm:text-4xl">
              Choose your ritual — sweet serenity or spice-laden crunch
            </h2>
            <p className="max-w-2xl text-lg text-[--color-text-muted]">
              Every blend begins with single-origin makhana popped within 12
              hours of harvest. Seasoned gently to keep the seed luminous, never
              greasy.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {flavorProfiles.map((flavor) => (
              <article
                key={flavor.name}
                className="flex flex-col gap-4 rounded-3xl bg-white/80 p-7 shadow-lg shadow-[--color-accent-soft]/50 ring-1 ring-[--color-accent-soft]/60 backdrop-blur"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[--color-accent]">
                  <span>{flavor.badge}</span>
                  <span>200g pouch</span>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[--color-text-primary]">
                  {flavor.name}
                </h3>
                <p className="text-sm text-[--color-text-muted]">{flavor.notes}</p>
                <button className="mt-auto inline-flex items-center justify-center rounded-full bg-[--color-accent] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-[--color-accent]/40 transition hover:-translate-y-0.5 hover:bg-[#8f4e18]">
                  Reserve Batch
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-4xl bg-white/80 px-6 py-14 shadow-xl shadow-[--color-accent-soft]/60 ring-1 ring-[--color-accent-soft] backdrop-blur md:grid-cols-[0.9fr_1.1fr] md:px-14 md:py-16">
          <div className="space-y-5">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[--color-accent]">
              Voices of Mithila
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[--color-text-primary] sm:text-4xl">
              Loved by nutritionists, dancers, and grandmothers alike
            </h2>
            <p className="text-lg text-[--color-text-muted]">
              Taste travels farther when stories do. Our community shares why
              Mithila Makhana anchors their wellness rituals and festive spreads.
            </p>
          </div>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-dashed border-[--color-accent-soft] bg-[--color-panel]/80 p-6 shadow-sm shadow-[--color-accent-soft]/50"
              >
                <blockquote className="text-lg font-medium text-[--color-text-primary]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-[--color-text-muted]">
                  <span className="font-semibold text-[--color-text-primary]">
                    {testimonial.name}
                  </span>{" "}
                  · {testimonial.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-[--color-accent]">
              Questions
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[--color-text-primary] sm:text-4xl">
              Everything you wanted to know about lotus seed wisdom
            </h2>
            <p className="text-lg text-[--color-text-muted]">
              From sourcing to storage, we keep transparency on the table. If you
              need more, our care team would love to help.
            </p>
            <Link
              href="mailto:care@mithilamakhanas.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--color-accent] underline decoration-[--color-accent-soft] decoration-2 underline-offset-4 transition hover:text-[#8f4e18]"
            >
              care@mithilamakhanas.com
            </Link>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl bg-white/80 p-5 shadow-sm shadow-[--color-accent-soft]/40 ring-1 ring-[--color-accent-soft]/60 backdrop-blur"
                open
              >
                <summary className="cursor-pointer text-base font-semibold text-[--color-text-primary]">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-[--color-text-muted] group-open:animate-fade-in">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden rounded-4xl bg-[--color-accent] px-8 py-14 text-white shadow-2xl">
          <div className="absolute -right-16 bottom-[-40px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-14 top-[-60px] h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
                Bring home a piece of Mithila today
              </h2>
              <p className="max-w-xl text-lg text-white/80">
                Join thousands rediscovering the poetry of lotus seeds, roasted
                to perfection and packaged with postcards inspired by Madhubani
                art.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[--color-accent] shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
              >
                Shop Now
              </Link>
              <Link
                href="https://maps.app.goo.gl/"
                className="inline-flex items-center justify-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Find a Stockist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 pb-12 text-sm text-[--color-text-muted] sm:px-10 lg:px-20">
        <span>© {new Date().getFullYear()} Mithila Makhana Collective</span>
        <div className="flex items-center gap-6">
          <Link href="mailto:wholesale@mithilamakhanas.com">Wholesale</Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener">
            Instagram
          </Link>
          <Link href="https://vercel.com" target="_blank" rel="noopener">
            Crafted on Vercel
          </Link>
        </div>
      </footer>
    </div>
  );
}
