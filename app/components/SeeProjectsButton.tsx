"use client";

export default function SeeProjectsButton() {
  const handleClick = () => {
    document.getElementById("projects-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className="group flex items-center gap-3 bg-white text-black font-semibold px-10 py-5 rounded-full text-base hover:bg-zinc-100 transition-all duration-300"
    >
      See My Projects
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:translate-x-1 transition-transform duration-300"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </button>
  );
}
