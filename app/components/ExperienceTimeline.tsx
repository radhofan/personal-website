"use client";

import React, { memo, useCallback, useState } from "react";

// Helper components with refined icons
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Code = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);

const Briefcase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
);

const Users = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const GraduationCap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);

// Shadcn-style Badge component
const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
}) => {
  const variants = {
    default:
      "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
    outline:
      "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// --- TYPES ---
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface TimelineItemData {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  icon: IconType;
  responsibilities: string[];
  skills: string[];
}

type ExpandMode = "multi" | "single";

interface ProfessionalTimelineProps {
  data: TimelineItemData[];
  defaultExpandedIds?: string[];
  expandMode?: ExpandMode;
}

// --- MOCK DATA ---
const timelineData: TimelineItemData[] = [
  {
    id: "zeta-solutions",
    title: "Software Engineer Intern",
    company: "Zeta Solutions",
    location: "Bandung, Indonesia",
    type: "Internship",
    duration: "Aug 2025 — Feb 2026",
    icon: Code,
    responsibilities: [
      "Architected a real-time order management and high-concurrency chat system for 30+ internal users; migrated 10,000+ legacy records from fragmented Excel and paper systems into a unified PostgreSQL database.",
      "Refactored a production POS system by optimizing SQL transaction logic and database indexing; eliminated race conditions during concurrent checkout sessions to ensure 100% data consistency.",
      "Architected the end-to-end development of the company’s flagship platform and official website using Next.js and Supabase; prioritized performance-first engineering for high Lighthouse scores."
    ],
    skills: ["Next.js", "Supabase", "PostgreSQL", "SQL", "Lighthouse"]
  },
  {
    id: "pln",
    title: "Software Engineer Intern",
    company: "Indonesian State Electricity Company (PLN)",
    location: "Jakarta, Indonesia",
    type: "Internship",
    duration: "June 2025 — Aug 2025",
    icon: Briefcase,
    responsibilities: [
      "Architected an internal Unit Price Contract (UPC) management system to digitize and streamline procurement workflows for large-scale departmental operations.",
      "Engineered a secure full-stack architecture using Next.js; implemented a robust security layer featuring JWT-based authentication and custom middleware for RBAC.",
      "Demonstrated high technical autonomy by owning the end-to-end development lifecycle, from database schema design to frontend implementation."
    ],
    skills: ["Next.js", "JWT", "RBAC", "PostgreSQL", "Full-stack"]
  },
  {
    id: "uchicago",
    title: "Research Trainee (UChicago–Indonesia Program)",
    company: "University of Chicago",
    location: "Remote, USA",
    type: "Research",
    duration: "Jan 2025 — July 2025",
    icon: Code,
    responsibilities: [
      "Selected as one of the top 50 computer science students in Indonesia for an intensive research training program focusing on cloud systems and experimental reproducibility.",
      "Accelerated the validation of computer science papers by reproducing complex experiments on the Chameleon Trovi cloud platform, achieving high-fidelity results.",
      "Modernized and debugged legacy research codebases by resolving non-deterministic artifacts and optimizing scripts for cloud-native environments.",
      "Developed a deep technical understanding of distributed systems and cloud infrastructure through rigorous auditing of experimental artifacts."
    ],
    skills: ["Cloud Systems", "Distributed Systems", "Cloud-native", "Research"]
  },
  {
    id: "lg-cns",
    title: "Software Developer Trainee",
    company: "LG CNS Enterprise Software Residency",
    location: "Bandung, Indonesia",
    type: "Residency",
    duration: "June 2024 — Aug 2024",
    icon: Code,
    responsibilities: [
      "Selected as one of 30 top-tier students for a high-intensity software engineering residency focusing on enterprise-grade development lifecycles.",
      "Delivered 30+ full-stack modules within 12 weeks, simulating rapid-deployment scenarios and managing high context-switching between technical requirements.",
      "Engineered robust applications across ecosystems including .NET and Java, implementing complex database logic with OracleDB and MS SQL.",
      "Refined professional coding standards by managing 10,000+ lines of code, focusing on modular architecture and scalability."
    ],
    skills: [".NET", "Java", "OracleDB", "MS SQL", "Enterprise Software"]
  },
  {
    id: "telkom-lab",
    title: "Head Assistant Coordinator of Computing Laboratory",
    company: "Telkom University",
    location: "Bandung, Indonesia",
    type: "Leadership",
    duration: "Feb 2025 — Feb 2026",
    icon: Users,
    responsibilities: [
      "Spearheaded the organizational restructuring of the laboratory, managing over 50 student assistants and streamlining recruitment processes.",
      "Elevated educational standards by coordinating advanced workshops with industry alumni and mentoring students in competitive programming.",
      "Supervised the delivery of collaborative software projects, guiding student teams through scoping, modular design, and version control practices.",
      "Cultivated a culture of accountability and professional growth by implementing a solutions-oriented feedback loop."
    ],
    skills: ["Leadership", "Management", "Software Design", "Mentoring"]
  }
];

// --- COMPONENTS ---
interface TimelineItemContentProps {
  item: TimelineItemData;
}

const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: TimelineItemContentProps) {
  return (
    <div className="mt-5 space-y-5 animate-in slide-in-from-top-1 duration-200">
      {/* Responsibilities */}
      <div className="space-y-3">
        {item.responsibilities.map((responsibility, idx) => (
          <div
            key={`${item.id}-resp-${idx}`}
            className="flex items-start gap-3 group"
          >
            <div className="w-1.5 h-1.5 bg-zinc-600 rounded-full mt-2 shrink-0 group-hover:bg-zinc-400 transition-colors duration-200" />
            <p className="text-sm text-zinc-400 leading-relaxed">
              {responsibility}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-700">
        {item.skills.map((skill, skillIdx) => (
          <Badge
            key={`${item.id}-skill-${skillIdx}`}
            variant="secondary"
            className="bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

interface TimelineItemProps {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
  index: number;
}

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
}: TimelineItemProps) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <div className="relative group">
      {/* Connecting line with gradient - now always visible */}
      <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-zinc-700 via-zinc-600 to-zinc-700" />

      {/* Timeline node */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-[#0f0f0f] border-2 border-zinc-600 rounded-full flex items-center justify-center transform transition-all duration-200 z-10">
        <div className="w-2 h-2 bg-zinc-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Main content card */}
      <div className="ml-12 mb-6">
        <div
          className={`
          bg-[#0f0f0f] 
          rounded-lg border border-zinc-700 
          transition-all duration-200
          ${expanded ? "shadow-lg shadow-black/20" : "shadow-none hover:shadow-lg hover:shadow-black/20"}
        `}
        >
          {/* Header */}
          <button
            id={headerId}
            className="w-full text-left p-6 group/button cursor-pointer hover:bg-zinc-800/50 transition-colors duration-200 rounded-t-lg"
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-zinc-800 rounded-md shrink-0">
                    <Icon className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400 font-medium">
                      {item.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 ml-11">
                  <Badge
                    variant="outline"
                    className="text-xs text-zinc-400 border-zinc-700"
                  >
                    {item.type}
                  </Badge>
                  <span className="text-xs text-zinc-500">{item.duration}</span>
                  <span className="text-xs text-zinc-600">•</span>
                  <span className="text-xs text-zinc-500">{item.location}</span>
                </div>
              </div>

              <div
                className={`
                text-zinc-500 
                transition-transform duration-200
                ${expanded ? "rotate-180" : ""}
              `}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expandable content */}
          {expanded && (
            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className="px-6 pb-6 border-t border-zinc-700"
            >
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
TimelineItem.displayName = "TimelineItem";

// --- MAIN TIMELINE ---
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: ProfessionalTimelineProps) {
  const initial = defaultExpandedIds ?? data.map((item) => item.id);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [expandMode],
  );

  return (
    <div className="relative">
      {data.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
          index={index}
        />
      ))}
    </div>
  );
}

// --- APP ENTRY POINT ---
export default function TimelinePage2() {
  return (
    <div className="transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-100 mb-3">
            Professional Experience
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed">
            A comprehensive overview of my career journey and professional
            achievements.
          </p>
        </header>

        <ProfessionalTimeline data={timelineData} expandMode="multi" />
      </div>
    </div>
  );
}
