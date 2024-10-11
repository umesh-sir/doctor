// Marquee.tsx
"use client"
import React from 'react';

const Marquee: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block text-xl font-bold animate-marquee">
        {text}
      </div>
    </div>
  );
};

export default Marquee;
