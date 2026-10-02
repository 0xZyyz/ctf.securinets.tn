import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Clock, Globe, MapPin, ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";

const ctftimeLink = "https://ctftime.org/event/3364";

const QUALS = { from: new Date(2026, 9, 17), to: new Date(2026, 9, 18) };
const FINALS = new Date(2026, 11, 12);

type Focus = "quals" | "finals";

const Schedule = () => {
  const [month, setMonth] = useState<Date>(QUALS.from);
  const [selected, setSelected] = useState<{ from: Date; to?: Date }>(QUALS);
  const [flash, setFlash] = useState<Focus | null>(null);
  const qualsRef = useRef<HTMLElement>(null);
  const finalsRef = useRef<HTMLElement>(null);

  const focus = (which: Focus) => {
    const date = which === "quals" ? QUALS.from : FINALS;
    setMonth(date);
    setSelected(which === "quals" ? QUALS : { from: date });
    setFlash(which);
    const node = which === "quals" ? qualsRef.current : finalsRef.current;
    node?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  useEffect(() => {
    if (!flash) return;
    const t = setTimeout(() => setFlash(null), 1150);
    return () => clearTimeout(t);
  }, [flash]);

  return (
    <div className="section">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-display font-semibold">Schedule &amp; Important Dates</h1>
      </div>

      <div className="grid gap-x-12 gap-y-12 lg:grid-cols-[1fr_340px]">
        {/* Timeline */}
        <div className="relative border-l border-border pl-7 space-y-12">
          {/* Qualifiers */}
          <Reveal>
            <article ref={qualsRef} className={`group relative -m-3 p-3 transition-colors ${flash === "quals" ? "flash-hl" : ""}`}>
              <span aria-hidden className="absolute -left-[33px] top-3 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4">
                <span className="flex w-24 shrink-0 flex-col font-display leading-none tracking-tight sm:w-28 md:w-32">
                  <span className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary md:text-xs">Oct 2026</span>
                  <span className="text-3xl font-bold md:text-5xl">17<span className="text-primary align-middle text-xl md:text-3xl">–</span>18</span>
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    Qualifiers
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground">Sat, Oct 17 → Sun, Oct 18, 2026</p>
                </div>
                <Badge variant="outline" className="justify-self-end bg-primary/10 text-primary border-primary/30">Online</Badge>
              </div>
              <div className="mt-3 flex flex-col items-start gap-1.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Starts 09:00 UTC</span>
                <span className="flex items-center gap-1.5"><Globe className="h-3.5 w-3.5" /> Online</span>
              </div>
            </article>
          </Reveal>

          {/* Finals */}
          <Reveal delay={120}>
            <article ref={finalsRef} className={`group relative -m-3 p-3 transition-colors ${flash === "finals" ? "flash-hl" : ""}`}>
              <span aria-hidden className="absolute -left-[33px] top-3 h-2 w-2 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
              <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-4">
                <span className="flex w-24 shrink-0 flex-col font-display leading-none tracking-tight sm:w-28 md:w-32">
                  <span className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary md:text-xs">Dec 2026</span>
                  <span className="text-3xl font-bold md:text-5xl">12</span>
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-primary">
                    Finals
                  </h2>
                  <p className="text-xs md:text-sm text-muted-foreground">Sat, Dec 12, 2026</p>
                </div>
                <Badge variant="outline" className="justify-self-end bg-primary/10 text-primary border-primary/30">Onsite</Badge>
              </div>
              <div className="mt-3 flex flex-col items-start gap-1.5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> 09:00 → 17:00 UTC</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> INSAT University, Tunis, Tunisia</span>
              </div>
            </article>
          </Reveal>
          {/* CTFtime */}
          <Reveal delay={200}>
            <div className="flex flex-col items-center gap-3 pt-2 text-center">
              <p className="text-sm text-muted-foreground">Never miss the start: full standings will live on CTFtime.</p>
              <Button variant="outline" asChild>
                <a href={ctftimeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <img src="https://ctftime.org/favicon.png" alt="" className="h-4 w-4" loading="lazy" decoding="async" />
                  View on CTFtime <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Side column */}
        <div className="space-y-10">
          <Reveal delay={100}>
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight">Event Calendar</h2>
                <span className="text-sm text-muted-foreground">2026</span>
              </div>
              <Calendar
                mode="range"
                month={month}
                onMonthChange={setMonth}
                selected={selected}
                onSelect={(range) => range && setSelected(range)}
                modifiers={{ finals: FINALS }}
                modifiersClassNames={{ finals: "font-semibold text-primary underline decoration-primary/50 underline-offset-4" }}
                classNames={{ day_today: "" }}
                className="mt-4 rounded-md border"
              />
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                <button
                  type="button"
                  onClick={() => focus("quals")}
                  className="flex items-center gap-1.5 rounded-md px-1.5 py-1 -mx-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="h-2.5 w-2.5 rounded-sm bg-primary" /> Quals · Oct 17–18
                </button>
                <button
                  type="button"
                  onClick={() => focus("finals")}
                  className="flex items-center gap-1.5 rounded-md px-1.5 py-1 -mx-1.5 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span className="h-2.5 w-2.5 rounded-sm ring-1 ring-primary/70" /> Finals · Dec 12
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Location */}
      <section id="location" className="section-tight pt-14">
        <Reveal>
          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight">Location</h2>
              <MapPin className="h-5 w-5 shrink-0 text-muted-foreground/50" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">Qualifiers online. Finals on Dec 12, 2026 at INSAT University, Tunis, Tunisia.</p>
            <div className="mt-4 rounded-lg overflow-hidden border border-border">
              <iframe
                title="INSAT on Google Maps"
                src="https://www.google.com/maps?q=INSAT%20Tunis&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex gap-3">
              <Button variant="secondary" asChild>
                <a href="https://www.google.com/maps/search/?api=1&query=INSAT+Tunis" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
};

export default Schedule;
