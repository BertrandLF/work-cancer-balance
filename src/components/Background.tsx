export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 dark:from-gray-950 dark:via-rose-950/20 dark:to-gray-950" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/40 dark:bg-rose-900/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/40 dark:bg-orange-900/20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-200/30 dark:bg-teal-900/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
