import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    id: "dandori",
    title: "Dandori",
    description:
      "AI-powered project management tool with real-time updates and AI-driven task estimation.",
    badge: "Fullstack",
  },
  {
    id: "daichou",
    title: "Daichou",
    description:
      "Distributed banking backend processing transactions between accounts via event-driven microservices.",
    badge: "Backend / Java",
  },
  {
    id: "hibana",
    title: "Hibana",
    description:
      "High-throughput IoT telemetry backend ingesting thousands of device pings per second using CQRS.",
    badge: "System / .NET",
  },
  {
    id: "timbanganten",
    title: "Timbanganten",
    description:
      "Secure administrative platform digitizing cemetery records for the Timbanganten Historical Foundation with sub-second PostgreSQL-backed search.",
    badge: "Fullstack",
  },
  {
    id: "kuasarrag",
    title: "KuasarRAG",
    description:
      "RAG pipeline boosting LLM accuracy with ChromaDB vector storage; 30% retrieval efficiency gain via advanced chunking and ranking.",
    badge: "AI / Python",
  },
  {
    id: "mtix",
    title: "MTix",
    description:
      "End-to-end museum ticketing system with JWT auth, real-time availability, automated e-ticket generation, and a full admin dashboard.",
    badge: "Fullstack",
  },
  {
    id: "stackreviewer",
    title: "StackReviewer",
    description:
      "Minecraft educational server integration using Svelte and PyTorch to analyze player engagement patterns and automate moderation.",
    badge: "AI / Svelte",
  },
  {
    id: "softtest",
    title: "SoftTest",
    description:
      "Automated black-box REST API security scanner detecting injection flaws and broken access control, with detailed audit reports.",
    badge: "Security / Python",
  },
  {
    id: "gapred",
    title: "GapRed",
    description:
      "Published PyPI ML library streamlining data preprocessing and feature engineering workflows for rapid model prototyping.",
    badge: "ML / Python",
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

export default function ProjectShowcase() {
  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 mb-3">
          Portfolio Projects
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed">
          A selection of projects built across web, systems, and AI domains.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="w-full pt-0 bg-[#0f0f0f] border-zinc-700 overflow-hidden"
          >
            <ProjectPlaceholder />
            <CardHeader>
              <CardAction>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                >
                  {project.badge}
                </Badge>
              </CardAction>
              <CardTitle className="text-zinc-100">{project.title}</CardTitle>
              <CardDescription className="text-zinc-400">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
                View Project
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
