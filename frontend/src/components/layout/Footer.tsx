export default function Footer() {
  return (
    <footer className="border-t border-black bg-black px-4 py-16 text-white md:px-12">
      <div className="mx-auto mb-16 grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="font-serif text-5xl mb-6 md:text-7xl">Traveloop.</h2>
          <p className="font-sans max-w-xs text-xs uppercase tracking-widest leading-relaxed text-gray-400">
            Elevating the art of travel planning. Curate, organize, and execute your itineraries with editorial precision.
          </p>
        </div>
        <div className="flex flex-col gap-2 font-sans text-xs uppercase tracking-widest leading-loose">
          <span className="mb-2 text-gray-500">Platform</span>
          <a href="/dashboard" className="hover:text-gray-300">
            Dashboard
          </a>
          <a href="/trips" className="hover:text-gray-300">
            Itineraries
          </a>
          <a href="/search" className="hover:text-gray-300">
            Destinations
          </a>
          <a href="/trips/new" className="hover:text-gray-300">
            Expenses
          </a>
        </div>
        <div className="flex flex-col gap-2 font-sans text-xs uppercase tracking-widest leading-loose">
          <span className="mb-2 text-gray-500">Account</span>
          <a href="/profile" className="hover:text-gray-300">
            Profile
          </a>
          <a href="#" className="hover:text-gray-300">
            Settings
          </a>
          <a href="#" className="hover:text-gray-300">
            Sign Out
          </a>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-white/20 pt-8 font-sans text-[10px] uppercase tracking-widest text-gray-500 md:flex-row">
        <p>&copy; 2026 Traveloop. Odoo Hackathon.</p>
        <div className="mt-4 flex gap-6 md:mt-0">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
