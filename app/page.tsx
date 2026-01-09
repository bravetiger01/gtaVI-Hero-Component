// app/page.tsx
"use client";

import HeroScroll from "@/components/HeroScroll";

export default function Page() {
  return (
    <main>
      <HeroScroll
        heroImage="/gta-hero.jpg"
        bigText="VI"
        smallText="VI"
        mainTitle="GRAND THEFT AUTO"
        releaseLabel="COMING"
        releaseDate="NOVEMBER 19, 2026"
      />

    </main>
  );
}
