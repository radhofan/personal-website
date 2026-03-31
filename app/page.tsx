import TechMarqueen from "./components/TechMarqueen";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Particles from "@/components/Particles";
import ProfileCard from "./components/ProfileCard";
import Title from "./components/Title";
import ProjectShowcase from "./components/ProjectShowcase";

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-[#151312]">
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
      {/* Left static column */}
      <section className="hidden lg:flex w-1/2 items-center justify-center ml-[10vw]">
        <div className="relative h-[80%] w-[80%]">
          <ProfileCard />
        </div>
      </section>

      {/* Right scrollable column */}
      <section
        className="w-full lg:w-1/2 overflow-y-auto mr-[20vw]"
        style={{
          overflowY: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="min-h-screen px-12 py-24">
          {/* placeholder content */}
          {/* <h1 className="text-4xl font-semibold text-zinc-100">Tanren Works</h1>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Scrollable content lives here. This will later be split into
            sections/components.
          </p> */}

          <div className="mt-32 space-y-24">
            <Title />
            <TechMarqueen />
            <ExperienceTimeline />
            <ProjectShowcase />
          </div>
        </div>
      </section>
    </div>
  );
}
