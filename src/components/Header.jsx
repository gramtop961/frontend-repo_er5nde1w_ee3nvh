import { Shield, Lock, Star } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 grid place-items-center text-white">
            <Shield className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">TrustHR</h1>
            <p className="text-xs text-slate-500 -mt-0.5">Recensioni anonime, verifiche reali</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2 text-slate-600"><Lock className="h-4 w-4" /> Privacy by design</div>
          <div className="flex items-center gap-2 text-slate-600"><Star className="h-4 w-4" /> Feedback onesto</div>
        </div>
      </div>
    </header>
  );
}
