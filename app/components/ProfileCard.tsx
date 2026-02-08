"use client";
import React from "react";

interface NftCardProps {
  imageUrl: string;
  title: string;
  highestBid: string;
  price: string;
  timeLeft?: string;
}

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.8 4.6C19.8 3.6 18.4 3 17 3s-2.8.6-3.8 1.6L12 5.7l-1.2-1.1C9.8 3.6 8.4 3 7 3S4.2 3.6 3.2 4.6C1.1 6.7 1.1 10.1 3.2 12.2L12 21l8.8-8.8c2.1-2.1 2.1-5.5 0-7.6Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const EthIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 1.3 5.3 12.7 12 16V1.3Z" opacity=".6" />
    <path d="M12 1.3 18.7 12.7 12 16V1.3Z" opacity=".8" />
    <path d="M5.3 14 12 17.3 18.7 14 12 22.7 5.3 14Z" />
  </svg>
);

const NftCard: React.FC<NftCardProps> = ({
  imageUrl,
  title,
  highestBid,
  price,
  timeLeft,
}) => (
  <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-black border shadow-lg p-2 font-space-grotesk">
    <div className="relative">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-2xl aspect-square object-cover w-full"
      />

      {timeLeft && (
        <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <ClockIcon className="w-4 h-4 text-cyan-300" />
          {timeLeft}
        </div>
      )}

      <button className="absolute top-3 right-3 bg-black/70 p-2 rounded-full text-white hover:text-red-500">
        <HeartIcon className="w-5 h-5" />
      </button>
    </div>

    <div className="p-3">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg truncate">{title}</h3>
        <EthIcon className="w-5 h-5 text-gray-500" />
      </div>

      <p className="text-sm text-gray-500 mt-1">Highest Bid {highestBid}</p>

      <div className="flex justify-between mt-3">
        <span className="text-sm font-bold text-gray-600">Price</span>
        <span className="text-lg font-bold text-cyan-500">{price}</span>
      </div>
    </div>
  </div>
);

export default function SingleNftCard() {
  return (
    <div className="lex items-center justify-center p-6">
      <NftCard
        imageUrl="me.jpg"
        title="Ethereal Dreams"
        highestBid="1/1"
        price="0.047 ETH"
        timeLeft="08:10:00"
      />
    </div>
  );
}
