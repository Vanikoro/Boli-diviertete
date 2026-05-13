export function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:rotate-12 transition-transform duration-300"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="8" className="text-boli-blue" />
        <circle cx="50" cy="50" r="15" fill="currentColor" className="text-boli-blue" />
        <path d="M20 20L40 40" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-slate-900" />
      </svg>
      <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
        Boli-<span className="text-boli-blue">Diviértete</span>
      </span>
    </div>
  );
}