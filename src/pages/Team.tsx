import { useState } from "react";
import team1 from "@/assets/bahae.webp";
import team2 from "@/assets/jihed.webp";
import team3 from "@/assets/salah.webp";
import team5 from "@/assets/kefi.webp";
import team6 from "@/assets/abid.webp";
import team11 from "@/assets/ayham.webp";
import team12 from "@/assets/bouchrit.webp";
import team7 from "@/assets/rahmouni.webp";
import team8 from "@/assets/gharbi.webp";
import team9 from "@/assets/limam.webp";
import team10 from "@/assets/charfeddine.webp";
import team13 from "@/assets/malek-tabbabi.webp";
import team14 from "@/assets/ouachani.webp";
import team15 from "@/assets/graba.webp";
import team16 from "@/assets/adem-marzouki.jpg";

import Reveal from "@/components/Reveal";
import { Globe, Github, Linkedin, Youtube } from "lucide-react";
import { XIcon, DiscordIcon } from "@/components/icons";

const MEMBERS = [
  {
    photo: team1,
    name: "Bahae Bahrini",
    role: "Binary Exploitation",
    discord: "buddurid",
    links: [
      { href: "https://blog.buddurid.tech", label: "blog", icon: Globe },
      { href: "https://github.com/buddurid", label: "GitHub", icon: Github },
      { href: "https://www.linkedin.com/in/bahae-bahrini/", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team3,
    name: "Salah Chafai",
    role: "Binary Exploitation",
    discord: "X-0R",
    links: [
      { href: "https://x-0r.com/", label: "blog", icon: Globe },
      { href: "https://www.linkedin.com/in/salah-chafai-733a47280/", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team2,
    name: "Jihed Kdiss",
    role: "Mobile",
    discord: "ji0",
    links: [
      { href: "https://jihedkdiss.tn/", label: "website", icon: Globe },
      { href: "https://x.com/0xjio_", label: "Twitter/X", icon: XIcon },
      { href: "https://github.com/jihedkdiss", label: "GitHub", icon: Github },
      { href: "https://linkedin.com/in/jihedkdiss", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team14,
    name: "Mohamed Ali Ouachani",
    role: "Mobile",
    discord: "Ir0nbyte",
    links: [
      { href: "https://www.youtube.com/@ir0nbyte", label: "YouTube", icon: Youtube },
      { href: "https://www.linkedin.com/in/med-ali-wachani/", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team5,
    name: "Adem Kefi",
    role: "Reverse Engineering",
    discord: "Blackkader",
    links: [
      { href: "https://www.linkedin.com/in/kefi-adem-62019a241/", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team8,
    name: "Mohamed Gharbi",
    role: "Reverse Engineering",
    discord: "OTC",
    links: [
      { href: "https://www.linkedin.com/in/mohamed-gharbi-a4196b325", label: "LinkedIn", icon: Linkedin },
      { href: "https://github.com/hamagharbi", label: "GitHub", icon: Github },
    ],
  },
  {
    photo: team16,
    name: "Adem Marzouki",
    role: "Reverse Engineering",
    discord: "AD3M",
    links: [
      { href: "https://ad3m.tech", label: "blog", icon: Globe },
      { href: "https://www.linkedin.com/in/-0xad3m-/", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team6,
    name: "Youssef Abid",
    role: "Web Exploitation",
    discord: "99lives",
    links: [{ href: "https://www.linkedin.com/in/youssef-abid-55a250295/", label: "LinkedIn", icon: Linkedin }],
  },
  {
    photo: team11,
    name: "Ayham Naily",
    role: "Web Exploitation",
    discord: "d3dn0v4",
    links: [
      { href: "https://d3dn0v4.github.io", label: "blog", icon: Globe },
      { href: "https://www.linkedin.com/in/ayham-naili", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team15,
    name: "Hedi Graba",
    role: "Web Exploitation",
    discord: "Ghr4b",
    links: [],
  },
  {
    photo: team9,
    name: "Ahmed Limam",
    role: "OSINT",
    discord: "kaizo",
    links: [{ href: "https://www.linkedin.com/in/ahmed-limam-a58561301/", label: "LinkedIn", icon: Linkedin }],
  },
  {
    photo: team10,
    name: "Youssef Charfeddine",
    role: "Digital Forensics",
    discord: "sibouzitoun",
    links: [
      { href: "https://portefolio-v2.vercel.app/", label: "website", icon: Globe },
      { href: "https://github.com/youssefnoob003", label: "GitHub", icon: Github },
      { href: "https://www.linkedin.com/in/youssef-charfeddine/", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team7,
    name: "Mohamed Aziz Rahmouni",
    role: "Digital Forensics",
    discord: "Zyyz",
    links: [
      { href: "https://0xzyyz.github.io", label: "blog", icon: Globe },
      { href: "https://www.linkedin.com/in/azizrahmouni/", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: team12,
    name: "Ahmed Bouchrit",
    role: "Hardware",
    discord: "Musashi",
    links: [],
  },
  {
    photo: team13,
    name: "Malek Tabbabi",
    role: "Cryptography",
    discord: "Bitraven",
    links: [
      { href: "https://cs.bit-raven.com", label: "blog", icon: Globe },
      { href: "https://www.linkedin.com/in/malek-tababi-5a9511318", label: "LinkedIn", icon: Linkedin },
    ],
  },
  {
    photo: null,
    name: "Yassine Belarbi",
    role: "Cryptography",
    discord: "SSonede",
    links: [],
  },
];

const DiscordHandle = ({ handle, name }: { handle: string; name: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(handle);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy ${name}'s Discord handle`}
      className="mt-1.5 inline-flex items-center gap-1.5 rounded-md bg-[#5865F2] px-2.5 py-1 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-px hover:bg-[#4752C4] active:translate-y-0"
    >
      <DiscordIcon className="h-3.5 w-3.5" />
      {copied ? "copied!" : handle}
    </button>
  );
};

const Team = () => {
  return (
    <div className="section">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-display font-semibold">Technical Team</h1>
        <p className="text-muted-foreground mt-2">The challenge authors for this edition.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
        {MEMBERS.map((member, i) => (
          <Reveal key={member.name} delay={(i % 4) * 90} className="h-full">
            <div className="group flex h-full flex-col">
              <div className="overflow-hidden rounded-lg border border-border">
                <div className="aspect-square overflow-hidden bg-muted">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]" loading="lazy" />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-muted transition-colors duration-500 group-hover:bg-primary/10">
                      <span className="font-display text-4xl font-semibold text-muted-foreground/60">
                        {member.name.split(" ").map((w) => w[0]).join("")}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-3 flex flex-1 flex-col border-t border-border pt-3">
                <p className="font-display text-lg font-semibold leading-tight transition-colors duration-300 group-hover:text-primary">{member.name}</p>
                <span className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{member.role}</span>
                <div className="mt-auto flex items-center justify-between gap-2 pt-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    {member.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${member.name} ${link.label}`}
                        className="story-link transition-colors hover:text-primary"
                      >
                        <link.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                  <DiscordHandle handle={member.discord} name={member.name} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Team;
