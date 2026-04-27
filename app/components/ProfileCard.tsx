"use client";
import React from "react";
import Image from "next/image";
interface CourseCardProps {
  badgeText: string;
  badgeColor?: string;
  imageUrl: string;
  title: string;
  description: string;
  difficulty: string;
  duration: string;
}
const CourseCard: React.FC<CourseCardProps> = ({
  badgeText,
  badgeColor = "#1a1a1a",
  imageUrl,
  title,
  description,
  difficulty,
  duration,
}) => (
  <div className="w-full max-w-md bg-[#0f0f0f] rounded-xl border border-zinc-700 transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] shadow-[0_0_15px_rgba(255,255,255,0.05)] overflow-hidden">
    <div className="w-full h-80 relative">
      <Image
        src={imageUrl}
        alt={title}
        width={320}
        height={320}
        className="w-full h-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
    </div>
    <div style={{ backgroundColor: badgeColor }} className="p-8">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="mt-4 text-base text-zinc-400 leading-relaxed">
        {description}
      </p>
    </div>
    <div className="px-8 py-5 bg-[#0f0f0f] border-t border-zinc-700">
      <div className="flex items-center justify-between text-sm text-zinc-400">
        <span className="font-semibold text-zinc-300">{difficulty}</span>
        <span className="font-semibold text-zinc-300">{duration}</span>
      </div>
    </div>
  </div>
);
export default function SingleCourseCard() {
  return (
    <CourseCard
      badgeText="Free course"
      badgeColor="#1a1a1a"
      imageUrl="/me.jpg"
      title="Radhofan Azizi Ramdhani"
      description="Hi My Name is Radhofan! I'd like to build Fullstack Applications and AI/ML Solutions."
      difficulty="Fullstack Developer"
      duration="AI/ML Engineer"
    />
  );
}
