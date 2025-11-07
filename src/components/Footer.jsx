export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TrustHR — Privacy by Design</p>
          <div className="flex gap-6">
            <a className="hover:text-slate-900" href="#">Linee guida</a>
            <a className="hover:text-slate-900" href="#">Come verifichiamo</a>
            <a className="hover:text-slate-900" href="#">Contatti</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
