import { useEffect, useState } from "react";
import { Star, Building2 } from "lucide-react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function ReviewList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/api/reviews`);
        if (!res.ok) throw new Error("Errore caricamento");
        const data = await res.json();
        setItems(data);
      } catch (e) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="explore" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Ultime recensioni</h3>
          <p className="text-sm text-slate-600">Contenuti moderati per la privacy</p>
        </div>
        {loading ? (
          <div className="text-slate-600">Caricamento…</div>
        ) : items.length === 0 ? (
          <div className="text-slate-600">Nessuna recensione approvata ancora.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {items.map((r) => (
              <div key={r.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 grid place-items-center text-indigo-700">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{r.company}</h4>
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < r.rating ? "fill-amber-400" : "text-amber-300"}`} />
                      ))}
                      <span className="text-xs text-slate-500 ml-2">{r.rating}.0</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-500">{r.relationship}</span>
                  </div>
                  <p className="text-sm text-slate-700">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
