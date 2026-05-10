import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black bg-paper/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 font-sans text-[10px] uppercase tracking-[0.2em] md:px-12">
        <div className="flex items-center gap-8 md:gap-16">
          <Link href="/" className="text-xs font-bold tracking-[0.3em] transition hover:text-accent">
            Traveloop.
          </Link>
          <div className="hidden gap-8 text-gray-500 md:flex">
            <Link href="/dashboard" className="border-b border-transparent pb-1 text-black transition hover:border-accent hover:text-accent">
              Overview
            </Link>
            <Link href="/trips" className="border-b border-transparent pb-1 transition hover:border-accent hover:text-accent">
              Itineraries
            </Link>
            <Link href="/search" className="border-b border-transparent pb-1 transition hover:border-accent hover:text-accent">
              Destinations
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/trips/new" className="hidden transition hover:text-accent sm:block">
            Create +
          </Link>
          <div className="hidden h-3 w-px bg-gray-300 sm:block" />
          <button className="group flex items-center gap-3">
            <span className="hidden transition group-hover:text-accent sm:block">J. Doe</span>
            <img src="https://i.pravatar.cc/150?u=traveloop" alt="Profile" className="h-7 w-7 rounded-full border border-black object-cover grayscale transition duration-300 group-hover:border-accent group-hover:grayscale-0" />
          </button>
        </div>
      </nav>
    </header>
  );
}
