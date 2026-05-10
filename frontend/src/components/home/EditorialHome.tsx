"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

const destinations = [
  { name: 'Kyoto', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop' },
  { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Rome', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2670&auto=format&fit=crop' },
  { name: 'Cairo', image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=2670&auto=format&fit=crop' }
];

export default function EditorialHome() {
  const [destIndex, setDestIndex] = useState(0);
  const [typedName, setTypedName] = useState(destinations[0].name);

  useEffect(() => {
    const currentDest = destinations[destIndex];
    let txtIndex = currentDest.name.length;
    let isDeleting = true;

    setTypedName(currentDest.name);

    const typeWriter = () => {
      if (isDeleting) {
        setTypedName(currentDest.name.substring(0, txtIndex - 1));
        txtIndex -= 1;
      } else {
        setTypedName(currentDest.name.substring(0, txtIndex + 1));
        txtIndex += 1;
      }

      let typeSpeed = isDeleting ? 100 : 150;

      if (!isDeleting && txtIndex === currentDest.name.length) {
        typeSpeed = 2500;
        isDeleting = true;
      } else if (isDeleting && txtIndex === 0) {
        isDeleting = false;
        setDestIndex((current) => (current + 1) % destinations.length);
        typeSpeed = 1200;
      }

      timeoutId = window.setTimeout(typeWriter, typeSpeed);
    };

    let timeoutId = window.setTimeout(typeWriter, 2500);
    return () => window.clearTimeout(timeoutId);
  }, [destIndex]);

  return (
    <main className="w-full px-4 py-12 md:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 flex items-end justify-between border-b border-black pb-6">
          <h2 className="font-serif text-4xl md:text-5xl">Active Journey</h2>
          <p className="font-sans text-xs uppercase tracking-widest text-gray-400">Vol. 01</p>
        </div>

        <div className="mb-24 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="mb-6 font-sans text-xs uppercase tracking-widest text-gray-500">Current Draft</p>
            <h1 className="mb-6 font-serif text-7xl leading-none md:text-8xl">
              The <span className="text-black">{typedName}</span><span className="animate-pulse text-accent">|</span>
              <br />
              <i className="text-gray-400">Chronicles.</i>
            </h1>
            <p className="mb-8 max-w-sm font-sans text-sm leading-relaxed text-gray-600">
              A seven day exploration through the ancient capital. From the bamboo groves of Arashiyama to the quiet contemplation of temple gardens.
            </p>

            <div className="grid grid-cols-2 gap-8 border-t border-black pt-6 font-sans text-xs uppercase tracking-widest">
              <div><span className="mb-1 block text-gray-400">Dates</span>12—19 Oct</div>
              <div><span className="mb-1 block text-gray-400">Pace</span>Leisurely</div>
              <div><span className="mb-1 block text-gray-400">Budget</span>$2,400 <span className="lowercase normal-case">est.</span></div>
              <div>
                <Link href="/trips/new" className="block w-full border border-black bg-black px-4 py-3 text-center text-white transition hover:border-accent hover:bg-accent">
                  Edit Trip
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative lg:col-span-7">
            <img
              src={destinations[destIndex].image}
              alt={destinations[destIndex].name}
              className="h-[520px] w-full object-cover transition duration-1000 grayscale md:h-[600px] group-hover:grayscale-0"
            />
            <div className="absolute -left-2 bottom-8 hidden max-w-xs bg-white p-6 shadow-2xl transition-transform md:-left-12 md:block group-hover:translate-x-4">
              <p className="mb-4 border-b border-gray-200 pb-2 text-xs uppercase tracking-widest">Daily Agenda</p>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex justify-between"><span>01. Arrival &amp; Check-in</span> <span className="text-gray-400">—</span></li>
                <li className="flex justify-between"><span>02. The Golden Pavilion</span> <span className="text-gray-400">Act</span></li>
                <li className="flex justify-between text-gray-400"><span>03. Free Afternoon</span> <span>—</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 pb-24">
          <div className="mb-12 flex items-center justify-between">
            <h3 className="font-serif text-3xl">Upcoming &amp; Past</h3>
            <Link href="/trips" className="font-sans text-xs uppercase tracking-widest transition hover:italic hover:text-accent">View All</Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group cursor-pointer">
              <div className="mb-4 h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop" alt="Parisian Winter" className="h-full w-full object-cover grayscale opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-gray-500 transition group-hover:text-accent">Nov 22 — Paris, FR</p>
              <h4 className="font-serif text-2xl transition group-hover:italic group-hover:text-accent">Parisian Winter</h4>
            </div>

            <div className="group cursor-pointer">
              <div className="mb-4 h-64 overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1513635269975-59693e0cd100?q=80&w=2070&auto=format&fit=crop" alt="Nordic Serenity" className="h-full w-full object-cover grayscale opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
              </div>
              <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-gray-500 transition group-hover:text-accent">Dec 05 — Reykjavík, IS</p>
              <h4 className="font-serif text-2xl transition group-hover:italic group-hover:text-accent">Nordic Serenity</h4>
            </div>

            <div className="group cursor-pointer">
              <div className="mb-4 flex h-64 items-center justify-center overflow-hidden border border-dashed border-gray-400 bg-gray-200 transition group-hover:border-accent group-hover:bg-accent/5">
                <span className="font-serif text-4xl text-gray-400 transition group-hover:text-accent">+</span>
              </div>
              <p className="mb-2 font-sans text-[10px] uppercase tracking-widest text-gray-500 transition group-hover:text-accent">Blank Canvas</p>
              <h4 className="font-serif text-2xl transition group-hover:italic group-hover:text-accent">Start New Draft</h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 flex flex-col justify-between md:col-span-1">
            <h3 className="font-serif text-3xl">Your<br />Footprint.</h3>
            <p className="mt-4 font-sans text-[10px] uppercase tracking-widest text-gray-500">Since 2024</p>
          </div>
          <div className="md:border-l border-gray-300 md:pl-6 flex flex-col justify-center">
            <span className="font-serif text-6xl md:text-7xl">12</span>
            <span className="mt-2 font-sans text-[10px] uppercase tracking-widest text-gray-500">Countries</span>
          </div>
          <div className="border-l border-gray-300 pl-6 flex flex-col justify-center">
            <span className="font-serif text-6xl md:text-7xl">48</span>
            <span className="mt-2 font-sans text-[10px] uppercase tracking-widest text-gray-500">Cities</span>
          </div>
          <div className="border-l border-gray-300 pl-6 flex flex-col justify-center">
            <span className="font-serif text-6xl md:text-7xl">14k</span>
            <span className="mt-2 font-sans text-[10px] uppercase tracking-widest text-gray-500">Miles Traveled</span>
          </div>
        </div>

        <div className="pt-12 pb-24">
          <div className="mb-12 flex items-center justify-between">
            <h3 className="font-serif text-3xl">Curated Experiences</h3>
            <Link href="/search" className="font-sans text-[10px] uppercase tracking-widest text-gray-500 transition hover:italic hover:text-accent">Explore All</Link>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="group relative h-[400px] cursor-pointer overflow-hidden bg-gray-200 md:h-[600px]">
              <img src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&w=2000&auto=format&fit=crop" alt="Featured architecture tour" className="h-full w-full object-cover grayscale opacity-90 transition duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100" />
              <div className="absolute bottom-8 left-8 z-10 text-white drop-shadow-md">
                <p className="mb-2 font-sans text-[10px] uppercase tracking-[0.2em] drop-shadow-lg transition group-hover:text-accent/80">Featured</p>
                <h4 className="font-serif text-5xl leading-none drop-shadow-2xl transition duration-700 group-hover:text-white md:text-6xl">
                  The<br />Architecture<br />Tour.
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-10 md:pl-8">
              <p className="border-l border-black pl-6 font-sans text-sm leading-relaxed text-gray-600">
                Immerse yourself in our hand-picked selections. Discover hidden gems, architectural wonders, and culinary masterpieces across the globe. Each collection is thoughtfully curated to provide an unforgettable narrative.
              </p>

              <div className="group flex cursor-pointer items-center gap-6 transition hover:opacity-75">
                <img src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop" alt="New York Noir" className="h-24 w-24 object-cover grayscale transition duration-700 group-hover:grayscale-0" />
                <div>
                  <h5 className="font-serif text-2xl transition group-hover:italic group-hover:text-accent">New York Noir</h5>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-widest text-gray-500">4 Days / Urban</p>
                </div>
              </div>

              <div className="group flex cursor-pointer items-center gap-6 transition hover:opacity-75">
                <img src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop" alt="Venetian Canals" className="h-24 w-24 object-cover grayscale transition duration-700 group-hover:grayscale-0" />
                <div>
                  <h5 className="font-serif text-2xl transition group-hover:italic group-hover:text-accent">Venetian Canals</h5>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-widest text-gray-500">3 Days / Romance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}