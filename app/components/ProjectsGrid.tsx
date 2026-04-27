import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "dandori",
    title: "Dandori",
    description: "AI-powered project management with real-time updates and AI-driven task estimation.",
    badge: "Fullstack",
  },
  {
    id: "daichou",
    title: "Daichou",
    description: "Distributed banking backend processing transactions via event-driven microservices.",
    badge: "Backend / Java",
  },
  {
    id: "hibana",
    title: "Hibana",
    description: "High-throughput IoT telemetry backend ingesting thousands of device pings per second using CQRS.",
    badge: "System / .NET",
  },
  {
    id: "timbanganten",
    title: "Timbanganten",
    description: "Secure platform digitizing cemetery records for the Timbanganten Historical Foundation with sub-second PostgreSQL search.",
    badge: "Fullstack",
  },
  {
    id: "kuasarrag",
    title: "KuasarRAG",
    description: "RAG pipeline boosting LLM accuracy with ChromaDB vector storage and 30% retrieval efficiency gain.",
    badge: "AI / Python",
  },
  {
    id: "mtix",
    title: "MTix",
    description: "End-to-end museum ticketing system with JWT auth, real-time availability, and automated e-ticket generation.",
    badge: "Fullstack",
  },
  {
    id: "stackreviewer",
    title: "StackReviewer",
    description: "Minecraft educational server integration using Svelte and PyTorch to analyze player engagement patterns.",
    badge: "AI / Svelte",
  },
  {
    id: "softtest",
    title: "SoftTest",
    description: "Automated black-box REST API security scanner detecting injection flaws and broken access control.",
    badge: "Security / Python",
  },
  {
    id: "gapred",
    title: "GapRed",
    description: "Published PyPI ML library streamlining data preprocessing and feature engineering for rapid model prototyping.",
    badge: "ML / Python",
  },
  {
    id: "bookcabin-flight",
    title: "BookCabin Flight Aggregator",
    description: "Flight search and aggregation backend normalizing multi-airline API responses (Garuda, Lion Air, Batik Air, AirAsia) with parallel queries, retry/backoff, caching, best-value ranking, and timezone-aware filtering.",
    badge: "Backend / Node.js",
  },
];

function ProjectPlaceholder() {
  return (
    <div
      className="aspect-video w-full"
      style={{
        background:
          "repeating-linear-gradient(45deg, #1a1a1a 0px, #1a1a1a 12px, #222222 12px, #222222 24px)",
      }}
    />
  );
}

export default function ProjectsGrid() {
  return (
    <div className="max-w-7xl mx-auto px-12 py-24">
      <header className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 mb-3">
          Portfolio Projects
        </h2>
        <p className="text-zinc-500 text-sm leading-relaxed">
          A selection of projects built across web, systems, and AI domains.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0f0f0f] border border-zinc-700 rounded-xl overflow-hidden hover:border-zinc-500 transition-colors duration-200"
          >
            <ProjectPlaceholder />
            <div className="p-4 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-zinc-100 font-semibold text-sm">{project.title}</h3>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 text-xs shrink-0"
                >
                  {project.badge}
                </Badge>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
