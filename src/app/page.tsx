import Hero from "./components/home/Hero";
import WhatWeOffer from "./components/home/WhatWeOffer";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 py-10">
      <Hero />
      <WhatWeOffer />
    </main>
  );
}
