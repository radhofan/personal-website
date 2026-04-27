import Image from "next/image";
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

export default function ProjectShowcase() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="relative mx-auto w-full max-w-3xl pt-0 bg-[#0f0f0f] border-zinc-700 overflow-hidden">
        <div className="absolute inset-0 z-30 aspect-video bg-black/50" />
        <Image
          src="https://avatar.vercel.sh/kanban"
          alt="AI Collaborative Kanban"
          width={384}
          height={216}
          className="relative z-20 aspect-video w-full object-cover brightness-50 grayscale rounded-t-xl"
        />
        <CardHeader>
          <CardAction>
            <Badge
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            >
              Fullstack
            </Badge>
          </CardAction>
          <CardTitle className="text-zinc-100">Dandori</CardTitle>
          <CardDescription className="text-zinc-400">
            A high-performance project management tool that features real-time updates and AI-driven task estimation.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
            View Project
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-3xl pt-0 bg-[#0f0f0f] border-zinc-700 overflow-hidden">
        <div className="absolute inset-0 z-30 aspect-video bg-black/50" />
        <Image
          src="https://avatar.vercel.sh/fintech"
          alt="Fintech Ledger"
          width={384}
          height={216}
          className="relative z-20 aspect-video w-full object-cover brightness-50 grayscale rounded-xl"
        />
        <CardHeader>
          <CardAction>
            <Badge
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            >
              Backend / Java
            </Badge>
          </CardAction>
          <CardTitle className="text-zinc-100">Daichou</CardTitle>
          <CardDescription className="text-zinc-400">
            A distributed banking backend that processes transactions between accounts using a microservices architecture.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
            View Project
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full max-w-3xl pt-0 bg-[#0f0f0f] border-zinc-700 overflow-hidden">
        <div className="absolute inset-0 z-30 aspect-video bg-black/50" />
        <Image
          src="https://avatar.vercel.sh/iot"
          alt="IoT Telemetry Hub"
          width={384}
          height={216}
          className="relative z-20 aspect-video w-full object-cover brightness-50 grayscale rounded-xl"
        />
        <CardHeader>
          <CardAction>
            <Badge
              variant="secondary"
              className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
            >
              System / .NET
            </Badge>
          </CardAction>
          <CardTitle className="text-zinc-100">Hibana</CardTitle>
          <CardDescription className="text-zinc-400">
            A backend system capable of ingesting thousands of &quot;pings&quot; per second from simulated IoT devices using CQRS.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full bg-zinc-100 text-zinc-900 hover:bg-zinc-200">
            View Project
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
