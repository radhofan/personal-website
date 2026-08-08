"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import projectsData from "@/data/projects.json";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  githubUrl: string;
}

function BigProjectPlaceholder() {
  return (
    <div
      className="w-full h-48 sm:h-56 md:h-64 relative overflow-hidden flex items-center justify-center"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, #1e1e24 0%, #0f0f0f 100%), repeating-linear-gradient(45deg, #18181b 0px, #18181b 14px, #202023 14px, #202023 28px)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-80" />
      <div className="relative z-10 flex flex-col items-center gap-2 text-zinc-600 group-hover:text-zinc-300 transition-colors">
        <ExternalLink className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-[10px] uppercase tracking-widest font-mono">View GitHub Repository</span>
      </div>
    </div>
  );
}

function SmallProjectPlaceholder() {
  return (
    <div
      className="aspect-video w-full relative overflow-hidden"
      style={{
        background:
          "repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 12px, #222222 12px, #222222 24px)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
    </div>
  );
}

export default function ProjectsGrid() {
  const allFeaturedProjects: ProjectItem[] = projectsData.featured;
  const otherProjects: ProjectItem[] = projectsData.other;

  // Extract unique badges dynamically
  const uniqueBadges = Array.from(new Set(allFeaturedProjects.map((p) => p.badge)));
  const badgeOptions = ["All", ...uniqueBadges];

  const [selectedBadge, setSelectedBadge] = useState<string>("All");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter featured projects by selected badge
  const featuredProjects = selectedBadge === "All"
    ? allFeaturedProjects
    : allFeaturedProjects.filter((p) => p.badge === selectedBadge);

  const total = featuredProjects.length;

  const handleSelectBadge = (badge: string) => {
    setSelectedBadge(badge);
    setCurrentIndex(0);
    setDropdownOpen(false);
  };

  const prevSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const nextSlide = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 py-24 flex flex-col gap-24 overflow-hidden">
      {/* Featured Projects Section */}
      <section className="flex flex-col gap-10">
        <header className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
              Featured Projects in:
            </h2>

            {/* Bubble Dropdown */}
            <div ref={dropdownRef} className="relative inline-block text-left">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                className="inline-flex items-center gap-2 bg-zinc-800/90 border border-zinc-700 hover:border-zinc-500 text-zinc-100 text-lg sm:text-2xl font-bold px-5 py-1.5 rounded-full cursor-pointer transition-all shadow-md group/bubble hover:bg-zinc-800"
              >
                <span className="text-white font-semibold">{selectedBadge}</span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 group-hover/bubble:text-white transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Popover Bubble Menu */}
              {dropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-3 z-50 min-w-[220px] p-2 bg-[#121212]/95 border border-zinc-700/80 rounded-2xl shadow-2xl backdrop-blur-xl flex flex-col gap-1 text-sm animate-in fade-in zoom-in-95 duration-150">
                  {badgeOptions.map((badge) => {
                    const count = badge === "All"
                      ? allFeaturedProjects.length
                      : allFeaturedProjects.filter((p) => p.badge === badge).length;
                    const isSelected = selectedBadge === badge;

                    return (
                      <button
                        key={badge}
                        onClick={() => handleSelectBadge(badge)}
                        className={`w-full px-4 py-2.5 rounded-xl text-left font-medium transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? "bg-zinc-800 text-white font-semibold shadow-inner"
                            : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
                        }`}
                      >
                        <span>{badge}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-900 border border-zinc-700/60 text-zinc-400">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Highlight portfolio projects showcasing advanced system design, AI pipelines, and fullstack engineering.
          </p>
        </header>

        {/* Animated 3D Stacked Carousel */}
        <div className="relative max-w-5xl mx-auto w-full flex items-center justify-center min-h-[460px] md:min-h-[500px] py-4">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="absolute left-2 sm:left-4 lg:left-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:scale-110 transition-all shadow-2xl cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Stack Container */}
          <div className="relative w-full max-w-xl lg:max-w-2xl h-[420px] sm:h-[460px] flex items-center justify-center">
            {featuredProjects.map((project, index) => {
              let diff = index - currentIndex;

              if (total > 1) {
                if (diff < -Math.floor(total / 2)) diff += total;
                if (diff > Math.floor(total / 2)) diff -= total;
              }

              const isCenter = diff === 0;
              const isLeft = total > 2 ? diff === -1 : false;
              const isRight = total > 2 ? diff === 1 : (total === 2 && !isCenter);

              let x = "0%";
              let scale = 1;
              let opacity = 1;
              let rotate = 0;
              let zIndex = 20;

              if (total === 1) {
                x = "0%";
                scale = 1;
                opacity = 1;
                rotate = 0;
                zIndex = 20;
              } else if (total === 2) {
                if (isCenter) {
                  x = "0%";
                  scale = 1;
                  opacity = 1;
                  rotate = 0;
                  zIndex = 20;
                } else {
                  x = "65%";
                  scale = 0.85;
                  opacity = 0.45;
                  rotate = 3;
                  zIndex = 10;
                }
              } else {
                if (isLeft) {
                  x = "-65%";
                  scale = 0.85;
                  opacity = 0.45;
                  rotate = -3;
                  zIndex = 10;
                } else if (isRight) {
                  x = "65%";
                  scale = 0.85;
                  opacity = 0.45;
                  rotate = 3;
                  zIndex = 10;
                } else if (!isCenter) {
                  x = diff < 0 ? "-120%" : "120%";
                  scale = 0.7;
                  opacity = 0;
                  rotate = diff < 0 ? -8 : 8;
                  zIndex = 0;
                }
              }

              return (
                <motion.div
                  key={project.id}
                  initial={false}
                  animate={{ x, scale, opacity, rotate, zIndex }}
                  transition={{ type: "spring", stiffness: 260, damping: 26 }}
                  className={`absolute w-full top-0 ${
                    !isCenter ? "cursor-pointer hover:opacity-75" : ""
                  }`}
                  onClick={() => {
                    if (!isCenter) nextSlide();
                  }}
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!isCenter) e.preventDefault();
                    }}
                    className={`block bg-[#0f0f0f] border ${
                      isCenter ? "border-zinc-600 shadow-2xl hover:border-zinc-400" : "border-zinc-800 shadow-lg"
                    } rounded-2xl overflow-hidden transition-colors duration-300 group`}
                  >
                    <BigProjectPlaceholder />
                    <div className="p-5 sm:p-7 flex flex-col gap-3 sm:gap-4">
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-200 text-xs px-2.5 py-0.5 shrink-0 border border-zinc-700/60"
                        >
                          {project.badge}
                        </Badge>
                      </div>
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                        {project.description}
                      </p>
                      {isCenter && (
                        <div className="pt-1 flex items-center justify-between">
                          <span className="inline-flex items-center gap-2 bg-zinc-100 group-hover:bg-white text-zinc-900 font-semibold px-4 py-2 rounded-lg text-xs sm:text-sm transition-all shadow-sm">
                            View Project on GitHub
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-xs text-zinc-500 font-mono">
                            {index + 1} of {total}
                          </span>
                        </div>
                      )}
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="absolute right-2 sm:right-4 lg:right-0 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:scale-110 transition-all shadow-2xl cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-2">
          {featuredProjects.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-zinc-100"
                  : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Other Projects Section */}
      <section className="flex flex-col gap-8 pt-8 border-t border-zinc-800/60">
        <header>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-2">
            Other Projects
          </h2>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Additional open-source tools, developer utilities, security scanners, and academic applications.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {otherProjects.map((project) => (
            <a
              key={project.id}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0f0f0f] border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-500 transition-all duration-300 group flex flex-col justify-between hover:shadow-lg hover:shadow-zinc-950/50"
            >
              <div>
                <div className="relative">
                  <SmallProjectPlaceholder />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-zinc-900/90 border border-zinc-700 p-1.5 rounded-md text-zinc-200">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-zinc-100 font-semibold text-sm group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-zinc-800 text-zinc-300 text-xs shrink-0 border border-zinc-700/50"
                    >
                      {project.badge}
                    </Badge>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-0 flex items-center gap-1.5 text-xs font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
                <span>View on GitHub</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
