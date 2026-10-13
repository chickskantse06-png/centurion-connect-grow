import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  MapPin,
  Star,
  Users,
  Handshake,
  TrendingUp,
  CalendarCheck,
  ArrowRight,
  Quote,
} from "lucide-react";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Centurion Business Forum | Business Networking in Centurion" },
      {
        name: "description",
        content:
          "Centurion Business Forum connects local business owners and professionals in Centurion. Grow your network, win referrals and increase sales. Visit us at 245 End St, Clubview or call 012 664 6559.",
      },
      { property: "og:title", content: "Centurion Business Forum | Business Networking in Centurion" },
      {
        property: "og:description",
        content:
          "Connect with Centurion's business community. Networking, referrals and growth for local businesses. Rated 4.5 on Google.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  {
    icon: Users,
    title: "Grow Your Network",
    text: "Meet decision-makers, owners and professionals from across Centurion at regular forum gatherings.",
  },
  {
    icon: Handshake,
    title: "Win Quality Referrals",
    text: "Members actively refer business to one another — trusted introductions that turn into real sales.",
  },
  {
    icon: TrendingUp,
    title: "Increase Your Sales",
    text: "Visibility in the local business community puts your company first when opportunities arise.",
  },
  {
    icon: CalendarCheck,
    title: "Regular Events",
    text: "Structured meetings and events keep you connected, informed and top of mind all year round.",
  },
];

const testimonials = [
  {
    name: "Local Business Owner",
    text: "The forum opened doors I couldn't open alone. The referrals alone paid for my membership many times over.",
  },
  {
    name: "Member, Professional Services",
    text: "A genuine community of serious business people. Every meeting leaves me with new contacts and new ideas.",
  },
  {
    name: "Centurion Entrepreneur",
    text: "Well organised, welcoming and focused on real business growth. Highly recommended for any local business.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-bold text-primary-foreground">
              CBF
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Centurion Business Forum
            </span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#benefits" className="transition-colors hover:text-foreground">Benefits</a>
            <a href="#reviews" className="transition-colors hover:text-foreground">Reviews</a>
            <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
          </nav>
          <a
            href="tel:0126646559"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            012 664 6559
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Business professionals networking at a Centurion Business Forum event"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-1.5 text-sm text-primary-foreground">
              <Star className="h-4 w-4 fill-accent text-accent" />
              Rated 4.5 on Google
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl">
              Where Centurion's businesses connect and grow
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 md:text-xl">
              Join a community of local business owners and professionals who
              share referrals, build partnerships and win more business — together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:0126646559"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                Call 012 664 6559
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Visit Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About the Forum
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Centurion's home for ambitious businesses
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Centurion Business Forum is a corporate forum based in Clubview,
              Centurion, bringing together business owners, managers and
              professionals from across the region. We exist to help local
              businesses grow through connection — because the right
              introduction at the right time changes everything.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Whether you're an established company or a growing start-up, the
              forum gives you a platform to be seen, be trusted and be referred.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-primary">4.5</p>
              <div className="mt-1 flex justify-center gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
                <Star className="h-4 w-4 text-accent" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">Google rating</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-primary">100+</p>
              <p className="mt-2 text-sm text-muted-foreground">Local businesses connected</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-primary">Regular</p>
              <p className="mt-2 text-sm text-muted-foreground">Networking events</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="text-4xl font-bold text-primary">0014</p>
              <p className="mt-2 text-sm text-muted-foreground">Proudly Centurion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why Join
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Membership that pays for itself
            </h2>
            <p className="mt-4 text-muted-foreground">
              Everything we do is aimed at one outcome: more business for our members.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            What our members say
          </h2>
          <div className="mt-4 inline-flex items-center gap-2">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
              <Star className="h-5 w-5 text-accent" />
            </div>
            <span className="font-semibold">4.5</span>
            <span className="text-muted-foreground">· 4 Google reviews</span>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-border bg-card p-6"
            >
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-4 leading-relaxed text-muted-foreground">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to grow your business?
              </h2>
              <p className="mt-4 text-primary-foreground/85">
                Call us today or visit our office in Clubview, Centurion. We'd
                love to show you what the forum can do for your business.
              </p>
              <a
                href="tel:0126646559"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:scale-105"
              >
                <Phone className="h-5 w-5" />
                012 664 6559
              </a>
            </div>
            <div className="rounded-xl bg-primary-foreground/10 p-8">
              <h3 className="text-lg font-semibold">Visit us</h3>
              <div className="mt-4 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p>
                  245 End St, Clubview,
                  <br />
                  Centurion, 0014
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:0126646559" className="hover:underline">
                  012 664 6559
                </a>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=245+End+St,+Clubview,+Centurion,+0014"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 px-4 py-2 text-sm font-medium transition-colors hover:bg-primary-foreground/10"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 Centurion Business Forum. All rights reserved.</p>
          <p>245 End St, Clubview, Centurion, 0014 · 012 664 6559</p>
        </div>
      </footer>
    </div>
  );
}
