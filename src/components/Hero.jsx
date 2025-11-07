import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12 grid md:grid-cols-2 gap-10 relative">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-xs font-medium">
            <ShieldCheck className="h-4 w-4" /> Verifica appartenenza
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Recensioni su HR e management, in completa privacy
          </h2>
          <p className="text-slate-600 text-lg">
            Condividi esperienze autentiche su aziende e team HR. L'identità è protetta, ma verifichiamo la tua reale appartenenza o ex-appartenenza all'azienda.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#submit" className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition font-medium">
              Inizia una recensione
            </a>
            <a href="#explore" className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition font-medium">
              Esplora recensioni
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1" />
              <div>
                <p className="font-medium">Anonimato garantito</p>
                <p className="text-sm text-slate-600">Nessun dato personale pubblicato o condiviso.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lock className="h-5 w-5 text-indigo-600 mt-1" />
              <div>
                <p className="font-medium">Prove di appartenenza</p>
                <p className="text-sm text-slate-600">Email aziendale o documenti offuscati per verifica.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-slate-200 p-4">
            <div className="h-full w-full rounded-xl bg-white shadow-sm border border-slate-200 p-4">
              <div className="h-8 w-40 bg-slate-100 rounded mb-4" />
              <div className="space-y-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="p-3 border border-slate-200 rounded-lg">
                    <div className="h-3 w-24 bg-slate-100 rounded mb-2" />
                    <div className="h-3 w-full bg-slate-100 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
