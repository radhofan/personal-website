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
import projectsData from "@/data/projects.json";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  githubUrl: string;
}

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
  const featuredProjects: ProjectItem[] = projectsData.featured;

  return (
    <div className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-100 mb-3">
          Featured Projects
        </h1>
        <p className="text-zinc-500 text-sm leading-relaxed">
          A selection of highlighted projects built across web, systems, and AI domains.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {featuredProjects.map((project) => (
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
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
                  View on GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
