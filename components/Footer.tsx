export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>© 2026 Niko Zen · duendeintemporal</p>
        <p className="text-center sm:text-right">
          Disponible para <span className="text-sky-400">Barcelona</span> · Híbrido o Remoto
        </p>
      </div>
    </footer>
  )
}