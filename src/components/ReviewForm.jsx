import { useState } from "react";
import { UploadCloud, Building2, ShieldCheck } from "lucide-react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function ReviewForm() {
  const [company, setCompany] = useState("");
  const [relationship, setRelationship] = useState("dipendente");
  const [rating, setRating] = useState(4);
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setFileName(f.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      let proof_id = null;
      if (file) {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch(`${API}/api/proof`, { method: "POST", body: fd });
        if (!res.ok) throw new Error("Upload fallito");
        const data = await res.json();
        proof_id = data.id;
      }

      const form = new FormData();
      form.append("company", company);
      form.append("relationship", relationship);
      form.append("rating", String(rating));
      form.append("text", text);
      if (proof_id) form.append("proof_id", proof_id);

      const res2 = await fetch(`${API}/api/reviews`, { method: "POST", body: form });
      if (!res2.ok) throw new Error("Invio recensione fallito");
      setMessage("Recensione inviata. In attesa di moderazione.");
      setCompany("");
      setRating(4);
      setText("");
      setFileName("");
      setFile(null);
    } catch (err) {
      setMessage(err.message || "Errore");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="submit" className="py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <ShieldCheck className="h-5 w-5 text-indigo-600 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold">Invia una recensione</h3>
              <p className="text-sm text-slate-600">L'identità resta privata. Carica una prova di appartenenza (email aziendale, badge offuscato, busta paga con dati sensibili coperti).</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-700">Azienda</label>
              <div className="mt-2 relative">
                <Building2 className="h-4 w-4 absolute left-3 top-3 text-slate-400" />
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  placeholder="Nome azienda"
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Relazione</label>
                <select
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="dipendente">Dipendente</option>
                  <option value="ex-dipendente">Ex-dipendente</option>
                  <option value="candidato">Candidato</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Valutazione</label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="mt-2 w-full"
                />
                <div className="text-sm text-slate-600 mt-1">{rating} / 5</div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Prova appartenenza</label>
                <label className="mt-2 flex items-center justify-center gap-2 w-full h-[42px] rounded-lg border border-dashed border-slate-300 text-slate-600 cursor-pointer hover:bg-slate-50">
                  <UploadCloud className="h-4 w-4" />
                  <span className="text-sm">Carica file</span>
                  <input type="file" className="hidden" onChange={handleFile} />
                </label>
                {fileName && <div className="text-xs text-slate-500 mt-1">Selezionato: {fileName}</div>}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">La tua esperienza</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={5}
                placeholder="Scrivi in modo costruttivo. Evita dettagli identificativi."
                className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">Caricando un documento accetti che verrà usato solo per verificare la tua appartenenza e non sarà mai pubblicato.</p>
              <button disabled={loading} type="submit" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 font-medium disabled:opacity-60">
                {loading ? "Invio..." : "Invia recensione"}
              </button>
            </div>
            {message && <div className="text-sm text-slate-700">{message}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
