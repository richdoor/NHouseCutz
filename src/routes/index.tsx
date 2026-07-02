import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Star, Clock, Instagram, ChevronDown, Sparkles, Award, Users, Scissors, ImageIcon } from "lucide-react";
import logoAsset from "@/assets/logo.png";
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpeg";
import g6 from "../assets/g6.jpeg";
import g7 from "../assets/g7.jpeg";


export const Route = createFileRoute("/")({
  component: Index,
});

const BOOKSY = "https://booksy.com/en-us/501170_n-house-cutz_barber-shop_29251_las-vegas";
const PHONE_HREF = "tel:+17025550000";
const ADDRESS = "705 Rancho Dr #705, Las Vegas, NV 89106";
const MAPS = "https://maps.google.com/?q=705+Rancho+Dr+705+Las+Vegas+NV+89106";

const services = [
  { name: "Clean Fade + Mustache / Beard", price: "$65", time: "35 min", desc: "The signature. A precision fade, hot-towel line up and full beard sculpt.", tag: "Popular" },
  { name: "Haircut + Design + Beard", price: "$70", time: "30 min", desc: "Custom razor design, sharp fade and beard detail. Statement work.", tag: "Signature" },
  { name: "Line Up", price: "$25", time: "30 min", desc: "Crisp edges. Straight razor detailing on hairline, temples and neck.", tag: null },
  { name: "Kid Cut", price: "$45", time: "30 min", desc: "Fresh cuts for young kings — no fuss, all style.", tag: null },
  { name: "Kid Cut + Design", price: "$50", time: "30 min", desc: "Kid cut with a custom razor design of their choice.", tag: null },
  { name: "Women's Haircut + Design", price: "Ask", time: "45 min", desc: "Tapered cuts and razor artistry for women who want it sharp.", tag: null },
];

const faqs = [
  { q: "Do I need an appointment or can I walk in?", a: "Appointments are strongly recommended — we book up fast. Grab a slot through our Booksy page and skip the wait." },
  { q: "Where are you located?", a: "705 Rancho Dr #705, Las Vegas, NV 89106 — just north of downtown, easy parking out front." },
  { q: "What forms of payment do you accept?", a: "Cash, all major cards, Apple Pay and Cash App. Tips appreciated in any form." },
  { q: "Do you cut kids and women too?", a: "Absolutely. We do kid cuts, kid designs, women's tapers and razor designs — everyone gets the chair treatment." },
  { q: "How early should I arrive?", a: "Roll in 5 minutes before your booking. If you're running late, shoot us a call so we can hold the chair." },
  { q: "Can I request a specific design or reference photo?", a: "Please do. Bring a photo or DM us on Instagram beforehand — the more detail, the better the cut." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <LogoHero />
      <Booking />
      <Services />
      <WhyUs />
      <Gallery />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="display text-xl font-bold tracking-widest text-foreground">
          N HOUSE <span className="text-primary">CUTZ</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-widest text-foreground md:flex">
          <a href="#services" className="transition hover:text-primary">Services</a>
          <a href="#why" className="transition hover:text-primary">Why Us</a>
          <a href="#gallery" className="transition hover:text-accent">Gallery</a>
          <a href="#faq" className="transition hover:text-primary">FAQ</a>
        </nav>
        <a
          href={BOOKSY}
          target="_blank"
          rel="noreferrer"
          className="rounded-sm bg-primary px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground transition hover:brightness-110"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}

function LogoHero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 pt-10 pb-6 text-center sm:pt-16">
      <img
        src={logoAsset}
        alt="N House Cutz — Las Vegas barbershop logo"
        width={800}
        height={450}
        className="mx-auto h-auto w-full max-w-2xl"
      />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.4em] text-accent">
        Est. Las Vegas · 705 Rancho Dr
      </p>
      <h1 className="mt-4 display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-6xl">
        SHARP CUTS. <span className="text-primary">CLEAN LINES.</span> 
      </h1>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="flex text-primary">
            {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <span className="font-bold text-foreground">4.8</span>
          <span className="text-muted-foreground">· 133 reviews</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4 text-accent" /> 705 Rancho Dr, Las Vegas
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].name, notes: "" });
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="book" className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
      <div className="relative rounded-md border-2 border-foreground bg-card p-8 shadow-[var(--shadow-deep)]">
        <div className="absolute -top-3 left-8 rounded-sm bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground">
          Book an Appointment
        </div>
        <h2 className="display text-3xl tracking-wide text-foreground sm:text-4xl">
          Reserve <span className="text-primary">your chair</span>
        </h2>

        {sent ? (
          <div className="mt-6 rounded-sm border border-primary/40 bg-primary/5 p-6 text-center">
            <Sparkles className="mx-auto h-6 w-6 text-primary" />
            <p className="mt-2 display text-xl tracking-wider text-foreground">Request received.</p>
            <p className="mt-1 text-sm text-muted-foreground">We'll be in touch shortly.</p>
          </div>
        ) : (
            
            <button type="submit" className="sm:col-span-2 mt-2 w-full rounded-sm bg-primary py-3 text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground transition hover:brightness-110">
              <a href={BOOKSY} className="pointer-curson">Request booking on Booksy</a>
            </button>
        )}
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block border-b-2 border-border pb-1 transition focus-within:border-accent">
      <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-accent">{label}</span>
      {children}
    </label>
  );
}

function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <SectionHeader eyebrow="The Menu" title={<>Services & <span className="text-primary">Pricing</span></>} sub="" />

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border-2 border-foreground bg-foreground sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="group relative flex flex-col justify-between bg-background p-8 transition hover:bg-secondary/50">
              {s.tag && (
                <span className="absolute right-4 top-4 rounded-sm bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                  {s.tag}
                </span>
              )}
              <div>
                <h3 className="display text-2xl leading-tight tracking-wide text-foreground">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              <div className="mt-8 flex items-end justify-between border-t border-border pt-5">
                <span className="display text-3xl text-primary">{s.price}</span>
                <span className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {s.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Full menu on <a href={BOOKSY} target="_blank" rel="noreferrer" className="font-semibold text-accent underline underline-offset-4">Booksy</a>.
        </p>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { icon: Award, title: "Master Craft", copy: "Years of chair time behind every cut. We treat fades like fine art — measured, blended, obsessed over." },
    { icon: Sparkles, title: "Custom Designs", copy: "Razor artistry is our love language. Bring a reference or freestyle it — no design is off the table." },
    { icon: Users, title: "Everyone Welcome", copy: "Men, women, kids. First-timers or regulars. The chair doesn't discriminate — clean cuts for all." },
    { icon: Scissors, title: "Straight-Razor Detail", copy: "Every service includes razor line-work. That’s the N House standard." },
  ];
  return (
    <section id="why" className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
      <img
        src={logoAsset}
        alt="N House Barbershop"
        className="aspect-[5/5] w-full rounded-xl object-cover"
      />

        <div>
          <SectionHeader align="left" eyebrow="Why N House" title={<>Barbers who <span className="text-accent">obsess</span> over the details.</>} sub="Our barbers combine professionality and style to give every customer the best cut possible." />

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {points.map(({ icon: Icon, title, copy }) => (
              <div key={title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 display text-xl tracking-wider text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoPlaceholder({ aspect = "aspect-square", label = "Photo" }: { aspect?: string; label?: string }) {
  return (
    <div className={`relative w-full ${aspect} overflow-hidden rounded-md border-2 border-dashed border-border bg-secondary/60`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        <ImageIcon className="h-8 w-8" />
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">{label}</span>
      </div>
    </div>
  );
}

function Gallery() {
  const imgList = [
    { img: g1 },
    { img: g2 },
    { img: g3 },
    { img: g4 },
    { img: g5 },
    { img: g6 },
  ];
  return (
    <section id="gallery" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <SectionHeader eyebrow="The Portfolio" title={<>Work from the <span className="text-accent">chair</span></>} sub="A running scrapbook of fades, beards and designs." />

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
          {imgList.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={item.img}
                alt={`Gallery ${index + 1}`}
                className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="https://www.instagram.com/nhousecutz/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.3em] text-primary">
            <Instagram className="h-4 w-4" /> More on Instagram
            <span className="h-px w-8 bg-primary transition-all group-hover:w-14" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionHeader align="left" eyebrow="Questions" title={<>Good to <span className="text-primary">know</span></>} sub="Short answers to what folks ask most before they sit in the chair." />
          <a href={PHONE_HREF} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <Phone className="h-4 w-4" /> Still have a question? Call us.
          </a>
        </div>

        <div className="divide-y-2 divide-border border-y-2 border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full flex-col items-start gap-3 py-6 text-left"
              >
                <div className="flex w-full items-center justify-between gap-6">
                  <span className="display text-xl tracking-wide text-foreground sm:text-2xl">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${isOpen ? "rotate-180" : ""}`} />
                </div>
                {isOpen && <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="border-t border-border bg-secondary/40 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Your chair is waiting</span>
        <h2 className="mt-6 display text-5xl leading-[0.95] tracking-tight text-foreground sm:text-7xl">
          Walk in a regular. <span className="text-primary">Walk out sharp.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Reserve your slot online in under a minute — or swing by the shop on Rancho Drive.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={BOOKSY} target="_blank" rel="noreferrer" className="rounded-sm bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-primary-foreground shadow-[var(--shadow-gold)] transition hover:brightness-110">
            Book on Booksy
          </a>
          <a href={MAPS} target="_blank" rel="noreferrer" className="rounded-sm border-2 border-foreground px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-foreground transition hover:bg-foreground hover:text-background">
            Get Directions
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {ADDRESS}</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Open 7 days · By appointment</span>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub, align = "center" }: { eyebrow: string; title: React.ReactNode; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <div className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-accent ${align === "center" ? "justify-center" : ""}`}>
        <span className="inline-block h-0.5 w-10 bg-accent" /> {eyebrow}
      </div>
      <h2 className="mt-5 display text-4xl leading-[0.95] tracking-tight text-foreground sm:text-5xl">{title}</h2>
      {sub && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="barber-stripe h-1.5 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <div className="display text-xl font-bold tracking-widest text-foreground">
            N HOUSE <span className="text-primary">CUTZ</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">A master barbershop in the heart of Las Vegas. Sharp cuts, clean lines.</p>
        </div>
        <div className="text-sm">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Visit</h4>
          <p className="mt-4 text-muted-foreground">705 Rancho Dr #705<br />Las Vegas, NV 89106</p>
          <a href={MAPS} target="_blank" rel="noreferrer" className="mt-2 inline-block font-semibold text-primary underline underline-offset-4">Directions →</a>
        </div>
        <div className="text-sm">
          <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Reserve</h4>
          <a href={BOOKSY} target="_blank" rel="noreferrer" className="mt-4 block text-muted-foreground hover:text-primary">Book on Booksy</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-2 block text-muted-foreground hover:text-primary">Instagram</a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} N House Cutz · Las Vegas, NV
      </div>
    </footer>
  );
}
