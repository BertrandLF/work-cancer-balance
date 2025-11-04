export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Cool blue-green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 dark:from-slate-950 dark:via-blue-950/30 dark:to-slate-950" />

      {/* Decorative shapes - much clearer with reduced blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/60 dark:bg-blue-800/40 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/60 dark:bg-emerald-800/40 rounded-full blur-xl transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-300/50 dark:bg-cyan-800/40 rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
