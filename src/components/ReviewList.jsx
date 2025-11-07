import { useMemo } from "react";
import { Star, Building2 } from "lucide-react";

const sample = [
  {
    company: "TechNova",
    rating: 5,
    text: "HR attento e trasparente. Processi chiari, feedback costruttivi.",
    relationship: "ex-dipendente",
  },
  {
    company: "GreenLogix",
    rating: 3,
    text: "Benefit ok ma iter di selezione lento. Molto focus su cultura aziendale.",
    relationship: "candidato",
  },
  {
    company: "DataForge",
    rating: 4,
    text: "Manager aperti al dialogo. Buona work-life balance.",
    relationship: "dipendente",
  },
];

export default function ReviewList() {
  const grouped = useMemo(() => {
    const map = new Map();
    for (const r of sample) {
      const key = r.company;
      const arr = map.get(key) || [];
      arr.push(r);
      map.set(key, arr);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <section id="explore" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Ultime recensioni</h3>
          <p className="text-sm text-slate-600">Demo dati locali, backend in arrivo</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {grouped.map(([company, reviews]) => (
            <div key={company} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 grid place-items-center text-indigo-700">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">{company}</h4>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.round(
                        reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
                      ) ? "fill-amber-400" : "text-amber-300"}`} />
                    ))}
                    <span className="text-xs text-slate-500 ml-2">
                      {(
                        reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
                      ).toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {reviews.map((r, idx) => (
                  <div key={idx} className="p-3 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-slate-500">{r.relationship}</span>
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-slate-700">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
