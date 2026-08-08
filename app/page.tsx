import Particles from "@/components/Particles";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import ProjectsGrid from "./components/ProjectsGrid";

export default function Home() {
  return (
    <div className="bg-[#151312] min-h-screen text-zinc-100">
      {/* Particles — fixed so they cover the full viewport at all scroll positions */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={1000}
          particleSpread={20}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Split layout — top fold, aligned at top */}
      <div className="flex w-full relative z-10">
        <div className="flex w-full max-w-7xl mx-auto items-start">
          <LeftColumn />
          <RightColumn />
        </div>
      </div>

      {/* Projects grid — below the fold */}
      <section id="projects-grid" className="relative z-10">
        <ProjectsGrid />
      </section>
    </div>
  );
}
