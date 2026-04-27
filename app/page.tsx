import Particles from "@/components/Particles";
import ProfileCard from "./components/ProfileCard";
import RightColumn from "./components/RightColumn";

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

      {/* Right column — sticky header + scrollable sections */}
      <RightColumn />
    </div>
  );
}
