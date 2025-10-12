// src/components/CategoryFilter.jsx

"use client";

import { useState } from 'react';

export default function CategoryFilter({ onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ['Pre-Events', 'Main Events', 'E-Games'];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const activeButtonClass = "text-white border-2 border-[var(--neon)] bg-[var(--neon)]/10 shadow-[0_0_20px_var(--neon),inset_0_0_20px_rgba(0,255,240,0.3)]";

  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`neon-box px-6 py-2 transition-all duration-300 ${
            selectedCategory === category ? activeButtonClass : "text-white/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
