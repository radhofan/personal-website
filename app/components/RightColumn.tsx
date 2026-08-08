"use client";
import { useRef, useState, useEffect } from "react";
import Title from "./Title";
import TechMarqueen from "./TechMarqueen";
import ExperienceTimeline from "./ExperienceTimeline";

type InternalKey = "skills" | "experience";
type SectionKey = InternalKey | "projects";

const sections: { key: SectionKey; label: string }[] = [
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
];

export default function RightColumn() {
  const scrollRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<SectionKey>("skills");
  const [exactHeight, setExactHeight] = useState<number | null>(null);

  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const internalRefs: Record<InternalKey, React.RefObject<HTMLDivElement | null>> = {
    skills: skillsRef,
    experience: experienceRef,
  };

  // Precisely observe the LeftColumn inner container and lock RightColumn height to it
  useEffect(() => {
    const leftSection = document.querySelector<HTMLElement>("section");
    if (!leftSection) return;

    const leftInnerDiv = leftSection.firstElementChild as HTMLElement | null;
    if (!leftInnerDiv) return;

    const updateHeight = () => {
      const h = leftInnerDiv.offsetHeight;
      if (h > 0) {
        setExactHeight(h);
      }
    };

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(leftInnerDiv);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Active detection for internal sections (right column scroll)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerTop = container.getBoundingClientRect().top;
      const offset = (headerRef.current?.offsetHeight ?? 0) + 60;

      const ordered: { key: InternalKey; ref: React.RefObject<HTMLDivElement | null> }[] = [
        { key: "experience", ref: experienceRef },
        { key: "skills", ref: skillsRef },
      ];

      const found = ordered.find(({ ref }) => {
        const el = ref.current;
        if (!el) return false;
        return el.getBoundingClientRect().top - containerTop <= offset;
      });

      if (found) setActive(found.key);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Active detection for projects section (page scroll)
  useEffect(() => {
    const handleWindowScroll = () => {
      const el = document.getElementById("projects-grid");
      if (!el) return;
      if (el.getBoundingClientRect().top < window.innerHeight * 0.6) {
        setActive("projects");
      } else {
        setActive((prev) => (prev === "projects" ? "skills" : prev));
      }
    };

    window.addEventListener("scroll", handleWindowScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  const scrollToSection = (key: SectionKey) => {
    if (key === "projects") {
      document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const container = scrollRef.current;
    const el = internalRefs[key].current;
    if (!container || !el) return;
    const containerTop = container.getBoundingClientRect().top;
    const elTop = el.getBoundingClientRect().top - containerTop + container.scrollTop;
    const offset = headerRef.current?.offsetHeight ?? 0;
    container.scrollTo({ top: elTop - offset, behavior: "smooth" });
  };

  return (
    <section
      ref={scrollRef}
      className="w-full lg:w-1/2 overflow-y-auto shrink-0 border-b border-transparent"
      style={{
        height: exactHeight ? `${exactHeight}px` : "840px",
        maxHeight: exactHeight ? `${exactHeight}px` : "840px",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      } as React.CSSProperties}
    >
      {/* Sticky title + nav */}
      <div ref={headerRef} className="sticky top-0 z-10 bg-[#151312] px-12 pt-24 pb-0">
        <Title />
        <nav className="flex gap-8 border-b border-zinc-800">
          {sections.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`pb-3 text-sm font-medium tracking-wide transition-colors border-b-2 -mb-px ${
                active === key
                  ? "text-zinc-100 border-zinc-100"
                  : "text-zinc-500 border-transparent hover:text-zinc-300"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Skills + Experience only */}
      <div className="px-12 pb-16">
        <div ref={skillsRef} className="pt-16">
          <TechMarqueen />
        </div>
        <div ref={experienceRef} className="pt-24">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
